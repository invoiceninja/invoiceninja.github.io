---
title: "Troubleshoot a self-hosted Invoice Ninja"
sidebar_label: "Self Host Troubleshooting"
sidebar_position: 4
description: "Fix common self-hosted Invoice Ninja problems: failed updates, cron and queues, mail, PDFs, setup, permissions and password resets."
---

# Troubleshoot a self-hosted Invoice Ninja

Use this page when something goes wrong on a self-hosted Invoice Ninja. Start with the general checks, then jump to the section that matches your error. Invoice Ninja is source-available under the Elastic License (ELv2).

## What should I try first? {#general-troubleshooting-steps}

Before you work through a specific error:

1. Confirm the server meets the [minimum system requirements](/docs/self-host/self-host-installation#server-requirements).
2. Look for errors in `storage/logs`. The default log is `storage/logs/laravel.log`. Some messages also go to `storage/logs/invoiceninja.log`.
3. If you need detailed error output in the browser, see [How to use debug mode](/docs/self-host/self-host-debug-mode).
4. Ask on the [Invoice Ninja forum](https://forum.invoiceninja.com/) if you still need help.

## Incomplete / Unsuccessful in app updates {#incomplete--unsuccessful-in-app-updates}

If an in-app update did not finish, common causes are:

1. **Timeout:** the upgrade ran longer than the server allowed.
2. **System requirements:** when the version changes in a way that may need new PHP extensions or a newer PHP version, check the [release notes](https://github.com/invoiceninja/invoiceninja/releases) and the [server requirements](/docs/self-host/self-host-installation#server-requirements) first. Review the notes on any upgrade.

To recover, you can try the in-app updater again, or follow these steps:

1. Open the [GitHub releases](https://github.com/invoiceninja/invoiceninja/releases) page.
2. Download the `invoiceninja.tar` file for the version you want. Use that release tarball, not the generic "Source code" zip or tar.gz assets.
3. Unpack it and overwrite your existing application files. Keep your `.env` file.
4. Then do either of the following.

From the command line at the project root (as the web user, often `www-data`):

```bash
composer install -o --no-dev
php artisan ninja:post-update
```

`php artisan ninja:post-update` runs database migrations, clears config, view and application caches, and restarts the queue worker. If you prefer the individual commands:

```bash
php artisan migrate
php artisan optimize:clear
```

Or open the update route in a browser:

```text
https://your-site.example/update?secret=YOUR_UPDATE_SECRET
```

The `secret` query parameter must match `UPDATE_SECRET` in your `.env` file. If it does not match, the app redirects to `/`. If you are already signed in and the request is redirected, try the URL while signed out. A successful run also redirects to `/`. The route clears compiled cache files, runs `migrate` and `db:seed`, and clears config, route, view and application caches.

### ERROR: Target class [view] does not exist {#error-target-class-view-does-not-exist}

This error can usually be resolved by deleting the contents of the `bootstrap/cache` folder, or by opening the `/update?secret=` route above.

## Downgrading to a Specific Version {#downgrading-to-a-specific-version}

If you need to move an installation back to a specific version, follow the steps below. Take backups first. Overwriting the application files with an older `invoiceninja.tar` does not roll back database migrations. If the newer version changed the schema, restore the database backup you took before the upgrade.

### Step 1: Backup Your Installation {#step-1-backup-your-installation}

#### 1.1 Backup Your `.env` File {#11-backup-your-env-file}

The `.env` file holds the configuration for your installation, including `APP_KEY`. Copy it somewhere safe. Change into your Invoice Ninja root folder first:

```bash
cd /var/www/invoiceninja
cp .env /home/your-user/invoice-ninja-env-backup-YYYY-MM-DD
```

Replace the home path with a location your user can write to.

#### 1.2 Backup Your Database {#12-backup-your-database}

Use your usual MySQL or MariaDB tool to create a backup, and store it with the date in the filename.

#### 1.3 Backup Your Root Folder {#13-backup-your-root-folder}

For a full recovery, archive the Invoice Ninja root folder:

```bash
tar -pzcf /home/your-user/invoiceninja-YYYY-MM-DD.tar.gz /var/www/invoiceninja
```

### Step 2: Download the Target Version {#step-2-download-the-target-version}

Open the [Invoice Ninja Releases](https://github.com/invoiceninja/invoiceninja/releases) page, find the version you want, and download that version's `invoiceninja.tar` into the root of your Invoice Ninja folder:

```bash
cd /var/www/invoiceninja
wget https://github.com/invoiceninja/invoiceninja/releases/download/v5.XX.XX/invoiceninja.tar
```

Replace `v5.XX.XX` with the tag you need.

### Step 3: Extract the Files {#step-3-extract-the-files}

Extract the archive so it overwrites the existing files. Run the command as the web user (replace `www-data` if your server uses a different user):

```bash
sudo -u www-data tar -xf invoiceninja.tar
```

### Step 4: Clear Caches {#step-4-clear-caches}

Clear caches and rebuild the autoloader, again as the web user:

```bash
sudo -u www-data php artisan cache:clear
sudo -u www-data php artisan view:clear
sudo -u www-data php artisan config:clear
sudo -u www-data php artisan optimize:clear
sudo -u www-data composer dump-autoload
```

If the downgrade also needs database work, restore the database backup from before the upgrade rather than relying on `migrate` to go backwards.

### Step 5: Clean Up {#step-5-clean-up}

Delete the downloaded tarball when you are done:

```bash
cd /var/www/invoiceninja
rm -f invoiceninja.tar
```

### Step 6: Verify the Installation {#step-6-verify-the-installation}

Open the site in a browser and check that it loads. If it does not, you can restore from your backups:

1. Remove the current application folder only if you are sure you have a good archive:

   ```bash
   rm -rf /var/www/invoiceninja
   ```

2. Extract the root folder backup, then restore the database backup:

   ```bash
   tar -zxf /home/your-user/invoiceninja-YYYY-MM-DD.tar.gz -C /
   ```

### Notes {#notes}

- Check that the target version's [system requirements](/docs/self-host/self-host-installation#server-requirements) match your server.
- If you hit permission errors, confirm that the web user (`www-data` or equivalent) owns the installation directory.
- For more help, see the [community forum](https://forum.invoiceninja.com/).

## SQLSTATE[42S22]: Column not found: {#sqlstate42s22-column-not-found}

A "Column not found" message in the logs usually means the database migrations have not been run. You can force them in either of these ways:

1. Open `https://your-site.example/update?secret=YOUR_UPDATE_SECRET` (the secret must match `UPDATE_SECRET` in `.env`).
2. From the project root, as the web user, run:

   ```bash
   php artisan migrate
   ```

## Cron not running / Queue not running {#cron-not-running--queue-not-running}

:::warning
Once the scheduler is working, the app sets the scheduler-running flag every five minutes. Reload the admin app after a few minutes and the red warning triangle should disappear. The `/update?secret=` route still clears caches and runs migrations, but it does not itself flip that flag.
:::

If recurring invoices are not creating, or reminders are not sending, the cron job is often the cause. First confirm that the scheduler cron is set up as described in [Cron configuration](/docs/self-host/self-host-installation#cron-configuration-1).

On shared hosting you usually need an explicit PHP binary and `register_argc_argv=On`:

```bash
* * * * * cd /path/to/root/folder && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

The path to PHP can differ by host, so confirm the correct binary with your provider.

If jobs still sit unprocessed, check the queue. `QUEUE_CONNECTION` defaults to `sync`. For background work, use a driver such as `database` or `redis` and run a worker, as described in [After installation](/docs/self-host/self-host-installation#after-installation). When the driver is `database`, pending rows in the `jobs` table mean the worker is not processing those jobs.

## PDFs don't appear to be updating {#pdfs-dont-appear-to-be-updating}

If you use Cloudflare, it may be caching PDF files. To reduce that caching, add this to your nginx site config:

```nginx
location ~* \.pdf$ {
    add_header Cache-Control no-store;
}
```

On Apache, open `public/.htaccess` and add a PDF rule inside the `mod_headers` block (the current file already sets `X-Robots-Tag`; add the `FilesMatch` block next to it):

```apacheconf
<IfModule mod_headers.c>
    # Blocks Search Engine Indexing
    Header set X-Robots-Tag "noindex, nofollow"

    # Prevents PDF File Caching
    <FilesMatch ".pdf$">
        Header set Cache-Control no-store
    </FilesMatch>
</IfModule>
```

## Email not sending {#email-not-sending}

:::warning
If you send through Gmail SMTP, use an [app password](https://support.google.com/accounts/answer/185833?hl=en). Google no longer offers the older "less secure apps" setting.
:::

:::warning
If you send through Microsoft 365, you may need to [enable SMTP AUTH](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission).
:::

For mail settings in the app and in `.env`, see [How to configure mail](/docs/self-host/self-host-installation#mail-configuration).

If you use Gmail SMTP relay, set `MAIL_EHLO_DOMAIN` to a real hostname for the SMTP handshake (a value such as `127.0.0.1` is not enough), and allow outbound access to Google's SMTP relay hosts. Configure the relay in Google Workspace under Apps > Google Workspace > Gmail > Routing, next to SMTP relay service. A working `.env` example:

```bash
MAIL_EHLO_DOMAIN="server.domain.com"
MAIL_MAILER=smtp
MAIL_HOST=smtp-relay.gmail.com
MAIL_PORT=587
MAIL_USERNAME=xxxx
MAIL_PASSWORD=xxxx
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=xxxx
MAIL_FROM_NAME=xxxx
```

See also this [community forum thread](https://forum.invoiceninja.com/t/emails-not-sending-yet-another-thread-v5-5-55/12401/9) on Gmail relay.

### Mail Mailer configuration {#mail-mailer-configuration}

`MAIL_MAILER` in `.env` chooses the default mail driver when a company's Email Provider is **Default**. Typical values include `smtp`, `postmark`, `mailgun` and `log`.

If the mail settings look correct, check `storage/logs/laravel.log` for errors. Also open **System Logs** under Advanced Settings in the admin app. The app records mail-server messages there that can explain a failure.

If `QUEUE_CONNECTION=database`, check the `jobs` table. Rows sitting there mean the queue worker is not running, so mail jobs are not being processed.

Emails can also leave the server and still be blocked for DNS, SPF, DKIM or related reasons. Sending a test to [mail-tester.com](https://mail-tester.com) can help.

If `storage/logs/invoiceninja.log` shows `stream_socket_enable_crypto(): SSL operation failed` and a certificate-verify error, update the CA certificates on the server (for example with your distribution's package manager). The older `yum update` hint applies only on systems that still use yum.

## GoDaddy email sending woes {#godaddy-email-sending-woes}

GoDaddy does not allow sending through third-party [SMTP](https://www.godaddy.com/help/send-form-mail-using-an-smtp-relay-server-953) servers. They require you to send through their own servers. If you host with GoDaddy, a transactional email service such as Postmark is a practical way around that limit.

## PDF conversion issues. {#pdf-conversion-issues}

The `PDF_GENERATOR` value in `.env` selects the PDF engine. The options are `snappdf`, `phantom`, `hosted_ninja`, `gotenberg` and `simulator`. On a new `.env` from the current example file, the default is `hosted_ninja`. The official Debian and Octane Docker images set `PDF_GENERATOR=snappdf` and point Chrome or Chromium at the binary in the image.

For a server where you have root access, SnapPDF is a strong local option. It drives a headless Chrome or Chromium binary. Set:

```bash
PDF_GENERATOR=snappdf
```

The release tarball does not ship the Chromium binary. From the project root, as the web user, download it:

```bash
vendor/bin/snappdf download
```

:::warning
If PDF generation breaks after an upgrade, download the binary again with the force flag:

```bash
chmod +x vendor/bin/snappdf
sudo -u www-data vendor/bin/snappdf download --force
```
:::

You can test SnapPDF with:

```bash
./vendor/bin/snappdf convert --html "<h1>Hello world</h1>" test.pdf
```

A list of system libraries Chrome needs is in the [SnapPDF documentation](https://github.com/beganovich/snappdf#headless-chrome-doesnt-launch-on-unix).

:::warning
Chrome uses the crashpad handler and expects to write under the web user's home directory, usually `/var/www/.local` and `/var/www/.config`. If those directories are not writable by `www-data`, PDF generation can fail. Grant ownership, for example:

```bash
sudo chown -R www-data:www-data /var/www/.local
sudo chown -R www-data:www-data /var/www/.config
```
:::

On shared hosting you often cannot install those packages, so SnapPDF may not be usable. Use a hosted PDF service instead: [PhantomJS Cloud](https://phantomjscloud.com/) or Invoice Ninja's hosted PDF generator, which you can use at no charge for PDF conversion.

### Phantom JS {#phantom-js}

PhantomJS Cloud generates PDFs on a public URL. The default `PHANTOMJS_KEY` in a new `.env` is a low-quota demo key and may not generate PDFs reliably. Register for a key on the PhantomJS Cloud site and put it in `.env`. Configure the engine with:

```bash
PDF_GENERATOR=phantom
PHANTOMJS_KEY='your-phantomjs-cloud-key'
PHANTOMJS_SECRET='your-secret-here'
```

`PHANTOMJS_SECRET` can be any private value. It is used to bypass the client portal password when the hosted service fetches the HTML. The older `PHANTOMJS_PDF_GENERATION=true` flag is still read, but `PDF_GENERATOR=phantom` is the clearer setting.

If you see a `500` error, "Failed to load PDF document", or a loading bar that never finishes, replace the demo key with your own key from the [PhantomJS Cloud dashboard](https://dashboard.phantomjscloud.com/dash.html#/signup).

:::warning
PhantomJS Cloud must be able to reach your Invoice Ninja URL. Installations on localhost or a private network cannot use it.
:::

### Hosted Invoice Ninja PDF generation {#hosted-invoice-ninja-pdf-generation}

The current example `.env` uses Invoice Ninja's hosted PDF converter:

```bash
PDF_GENERATOR=hosted_ninja
```

This is an offsite converter operated by Invoice Ninja. It works in a similar way to PhantomJS Cloud: your install sends HTML and gets a PDF back. Invoice Ninja does not store the document; the PDF is returned in the response.

## Platform specific issues {#platform-specific-issues}

### General advice {#general-advice}

When you face errors, first set `APP_DEBUG=true` in `.env`, then run `php artisan config:clear` if configuration is cached. See [How to use debug mode](/docs/self-host/self-host-debug-mode). Turn it off again when you are done.

### Process has been signaled with signal "5" {#process-has-been-signaled-with-signal-5}

This message often appears when a queue worker or command runs as a user that cannot execute the SnapPDF or Chrome binary. A common cause is downloading SnapPDF as a regular user, so `www-data` cannot run the binary.

Run command-line tasks as the web user (on Ubuntu this is typically `www-data`), and make sure `/var/www/.local` and `/var/www/.config` are writable by that user, as described in [PDF conversion issues](#pdf-conversion-issues).

### Erroneous data format for unserializing 'Symfony\Component\Routing\CompiledRoute' {#erroneous-data-format-for-unserializing-symfonycomponentroutingcompiledroute}

The most common cause is two PHP versions on the same server. If caches are built with a different CLI version than the web version, you can see this error. Use the same PHP version for the web server and the command line, then clear the caches (or open `/update?secret=`).

### Unable to connect to database after installation {#unable-to-connect-to-database-after-installation}

Restart the queue worker so it reloads the database configuration:

```bash
php artisan queue:restart
```

### Nginx: 413 Request Entity Too Large {#nginx-413--request-entity-too-large}

This error means `client_max_body_size` in nginx is too small. Increase it in the server block, for example:

```nginx
client_max_body_size 100M;
```

Then reload nginx.

### Proxy configuration. {#proxy-configuration}

If you run Invoice Ninja behind a reverse proxy, see this [community forum post](https://forum.invoiceninja.com/t/selfhosting-setup-failing/5651/8) for configuration steps that have helped other self-hosters. You may also need `TRUSTED_PROXIES` in `.env`.

### Problems with migration {#problems-with-migration}

If a migration does not run as expected, work through this list:

- Make sure the installation directories are readable and writable by the web user (for example `www-data`).
- Make sure the scheduler cron is running. If `QUEUE_CONNECTION=database`, the `jobs` table should not keep filling with unprocessed rows.
- Inspect `storage/logs/laravel.log`.
- If you still need more detail, set `EXPANDED_LOGGING=true` in `.env`, try the migration again, and inspect `storage/logs/invoiceninja.log`.

### libatk.so not loading for Google {#libatkso-not-loading-for-google}

The built-in SnapPDF engine needs system libraries for Chrome. See the [SnapPDF library list](https://github.com/beganovich/snappdf#headless-chrome-doesnt-launch-on-unix) for each supported platform.

### WebCron configuration {#webcron-configuration}

If your host cannot run a system cron job, a webcron service can call a URL that runs the scheduler. Invoice Ninja exposes:

```text
https://your-site.example/webcron?secret=YOUR_WEBCRON_SECRET
```

Set the secret in `.env`:

```bash
WEBCRON_SECRET=your-private-value
```

If `WEBCRON_SECRET` is not set, the route returns 403. If the secret does not match, it also returns 403. When the secret matches, the app runs `php artisan schedule:run`.

### Installing in a subdirectory. {#installing-in-a-subdirectory}

Invoice Ninja is meant to be installed at the document root of a domain or subdomain. Subdirectory installs such as `https://example.com/ninja` are not a supported setup. See [server requirements](/docs/self-host/self-host-installation#server-requirements).

Some Apache users have used a rewrite in the root `.htaccess` as an unofficial workaround, changing:

```apacheconf
RewriteRule ^(.*)$ public/$1 [L]
```

to:

```apacheconf
RewriteRule ^(.*)$ subdirectoryname/public/$1 [L]
```

Use a domain or subdomain document root if you can.

### Endless setup loop {#endless-setup-loop}

If the setup checks pass but the wizard keeps returning to the setup screen, the database may not have been migrated (the app leaves setup only after an `accounts` table exists). Check that `.env` is writable and that the database credentials are correct, then inspect `storage/logs/laravel.log`.

From the command line you can run the migrations yourself:

```bash
php artisan migrate --seed
```

:::warning
Do not run `php artisan migrate:fresh --seed` on an install that already has data. That command drops the tables and starts again.
:::

### flock() expects parameter 1 to be resource, bool given {#flock-expects-parameter-1-to-be-resource-bool-given}

This PHP error usually means a permissions problem. The `public/storage` and/or `storage/` directories may not be writable by the web user. On a typical Ubuntu server:

```bash
sudo chown -R www-data:www-data public/storage
sudo chown -R www-data:www-data storage/
sudo find ./ -type d -exec chmod 755 {} \;
```

### Unresponsive UI {#unresponsive-ui}

If the admin interface becomes unresponsive, open the update route so the app can clear caches and run migrations:

```text
https://your-site.example/update?secret=YOUR_UPDATE_SECRET
```

Set `UPDATE_SECRET` in `.env` to a private value so only you can run that route.

### Logo not appearing in the PDF {#logo-not-appearing-in-the-pdf}

Add `LOCAL_DOWNLOAD=true` to `.env`, then clear config cache if needed (`php artisan config:clear`). This tells the app to embed the logo in the PDF from local storage instead of fetching it over the network. Official Docker images already treat logos this way.

### Communication link failure: 1153 Got a packet bigger than 'max_allowed_packet' {#communication-link-failure-1153-got-a-packet-bigger-than-max_allowed_packet}

If you use the database as the queue driver, MySQL may reject a large job payload with:

```text
1153 Got a packet bigger than 'max_allowed_packet'
```

Increase the MySQL `max_allowed_packet` setting. Some installs need a value as high as `1024M`. You may also need to raise `max_connections` if the server reports related errors.

### 500 error when editing PDF templates {#500-error-when-editing-pdf-templates}

There is a [forum report](https://forum.invoiceninja.com/t/500-error-when-editing-pdf-invoice-templates-potential-fix/7067) of a 500 error when editing PDF invoice templates that was resolved by disabling ModSecurity. If you try that, do it only with a change you understand and can reverse.

### 500 error when trying to login or edit company details {#500-error-when-trying-to-login-or-edit-company-details}

To recover from a 500 error on login or when editing company details, use the official release tarball, not the generic "Source code" zip:

1. Download `invoiceninja.tar` from [GitHub releases](https://github.com/invoiceninja/invoiceninja/releases).
2. Extract it over the application files. Do not overwrite your `.env` file.
3. Make sure the web user owns the files, for example `sudo chown -R www-data:www-data /path/to/invoiceninja`.
4. From the project root, run `php artisan migrate` as the web user, or open `https://your-site.example/update?secret=YOUR_UPDATE_SECRET`.
5. If the site still fails, clear `bootstrap/cache` and inspect `storage/logs/laravel.log`.

### Unresolvable dependency resolving [Parameter #0 [ array $options ]] in class App\Utils\CssInlinerPlugin {#unresolvable-dependency-resolving-parameter-0--array-options--in-class-apputilscssinlinerplugin}

This kind of container error appears when the compiled cache is stale and the app cannot boot. Clear the files in `bootstrap/cache`, either by deleting them or by opening `/update?secret=`, which removes those compiled cache files.

### Uncaught ErrorException Collection::offsetExists($key) {#uncaught-errorexception-collectionoffsetexistskey}

This error has been seen on systems that still run Composer 1. Update to Composer 2:

```bash
sudo -H composer self-update
```

Then run `composer install -o --no-dev` in the project root.

### file_exists(): open_basedir restriction in effect {#file_exists-open_basedir-restriction-in-effect}

The app health check expects the PHP `open_basedir` setting to be empty. If you cannot change that setting, these steps may help:

1. Delete `bootstrap/cache/config.php`.
2. Delete the log files in `storage/logs`.

### I've forgotten my password and cannot reset it, HELP! {#ive-forgotten-my-password-and-cannot-reset-it-help}

If you have command-line access, you can set a new password with Artisan tinker. From the project root:

```bash
php artisan tinker
```

Then, in tinker, load the user (replace `1` with that user's `id`) and set a new password:

```php
$user = User::find(1);
$user->password = Hash::make('YourNewPasswordHere');
$user->save();
```

To list users and their ids, you can run `User::all(['id', 'email']);`. Choose a strong password and store it safely.

## Related

- [Install a self-hosted Invoice Ninja](/docs/self-host/self-host-installation)
- [Update a self-hosted Invoice Ninja](/docs/self-host/self-host-updating)
- [Turn debug mode on and off](/docs/self-host/self-host-debug-mode)
- [Env Variables](/docs/self-host/env-variables)
- [Get started with self-hosted Invoice Ninja](/docs/self-host/getting-started)
