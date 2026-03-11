---
title: "Self Host Installation"
sidebar_position: 3
---

Invoice Ninja adapts to however you want to host it. You can use whatever fits
your access level. Start with the option that is easiest today and switch later
when your needs change.

<span id="choose-your-install-path"></span>

<div class="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 install-path-grid">

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-3">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Secure &amp; fast maintenance</p>
    <h3 class="text-2xl font-semibold">CLI</h3>
    <p>Install, configure, update, back up, monitor, and receive notifications for your self-hosted Invoice Ninja, from a single CLI. Requires SSH access.<br><br>Focus on saving time,
    less stress, certainty, and convenience.</p>
    <div class="card-cta">
        <a class="card-btn card-btn-primary"
           href="https://github.com/DrDBanner/inmanage" target="_blank" rel="noopener noreferrer">
           CLI repo
           <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
         <a class="card-btn card-btn-outline"
           href="https://github.com/DrDBanner/inmanage/blob/main/docs/index.md" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
           Documentation
        </a>
    </div>
</div>

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-3">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Docker or Podman</p>
    <h3 class="text-2xl font-semibold">Docker images</h3>
    <p>Official containers for Octane and Debian builds. Perfect for reproducible
    environments and quick pilots.</p>
    <div class="space-y-2 text-sm text-slate-600">
        <div><span class="font-semibold text-slate-900">Octane image:</span> <a class="font-medium text-slate-900 hover:text-slate-700 focus-visible:underline" href="https://hub.docker.com/r/invoiceninja/invoiceninja-octane" target="_blank" rel="noopener noreferrer">Docker Hub</a>.</div>
        <div><span class="font-semibold text-slate-900">Debian image:</span> <a class="font-medium text-slate-900 hover:text-slate-700 focus-visible:underline" href="https://hub.docker.com/r/invoiceninja/invoiceninja-debian" target="_blank" rel="noopener noreferrer">Docker Hub</a>.</div>
    </div>
    <div class="card-cta">
        <a class="card-btn card-btn-outline"
           href="https://www.youtube.com/watch?v=xo6a3KtLC2g" target="_blank" rel="noopener noreferrer">
           <img src="/assets/images/icons/MediaPlay.svg" alt="" aria-hidden="true">
           Watch demo
        </a>
        <a class="card-btn card-btn-primary"
           href="https://github.com/invoiceninja/dockerfiles" target="_blank" rel="noopener noreferrer">
           Docker repo
           <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
    </div>
</div>

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-3">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Running web stack</p>
    <h3 class="text-2xl font-semibold">Server manual install</h3>
    <p>Install from the tarball or git, tweak nginx/Apache
    yourself, and own every line. Works great on bare metal or cloud VMs. You
    can still adopt the CLI later to automate updates and backups.</p>
    <div class="card-cta">
        <a class="card-btn card-btn-outline" href="#manual">
            Manual guide
            <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
    </div>
</div>

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-4">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Cloudron server</p>
    <h3 class="text-2xl font-semibold">Cloudron marketplace</h3>
    <p>Deploy Invoice Ninja as an app and let Cloudron handle SSL, backups, and
    log rotation.</p>
    <div class="card-cta">
        <a class="card-btn card-btn-primary"
           href="https://www.cloudron.io/store/com.invoiceninja.cloudronapp2.html" target="_blank" rel="noopener noreferrer">
           Install via Cloudron
           <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
    </div>
</div>

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-4">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Softaculous access</p>
    <h3 class="text-2xl font-semibold">Softaculous one-click</h3>
    <p>Hosting panels that include Softaculous (cPanel, DirectAdmin, etc.) can
    install Invoice Ninja with a few clicks.</p>
    <div class="card-cta">
        <a class="card-btn card-btn-primary"
           href="https://www.softaculous.com/apps/ecommerce/Invoice_Ninja" target="_blank" rel="noopener noreferrer">
           View Softaculous listing
           <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
    </div>
</div>

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-4">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Elestio server</p>
    <h3 class="text-2xl font-semibold">Elestio managed VM</h3>
    <p>Elestio provisions a VM, installs Invoice Ninja, and keeps monitoring and
    backups running for you.</p>
    <div class="card-cta">
        <a class="card-btn card-btn-primary"
           href="https://elest.io/open-source/invoiceninja" target="_blank" rel="noopener noreferrer">
           Deploy on Elestio
           <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
    </div>
</div>

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-4">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">YunoHost server</p>
    <h3 class="text-2xl font-semibold">YunoHost package</h3>
    <p>If you already run YunoHost, add Invoice Ninja as an app and inherit its
    user and domain management features.</p>
    <div class="card-cta">
        <a class="card-btn card-btn-primary"
           href="https://apps.yunohost.org/app/invoiceninja5" target="_blank" rel="noopener noreferrer">
           Install via YunoHost
           <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
    </div>
</div>
</div>

## Server requirements

- PHP 8.2 with: bcmath, ctype, imagick, soap, gd, mbstring, openssl, tokenizer,
  xml, curl, zip, gmp, iconv, mysqli, intl, FPM (for nginx), and saxon (for
  e-invoice validation).
- MySQL 5.7+ or MariaDB 10.3+, or a compatible managed MySQL tier.
- nginx or Apache with HTTPS enabled.

```bash
sudo apt install php8.2-bcmath php8.2-gmp php8.2-gd php8.2-mbstring \
    php8.2-xml php8.2-curl php8.2-zip php8.2-mysql php8.2-fpm \
    php8.2-imagick php8.2-soap php8.2-common php8.2-intl
```

:::warning
Invoice Ninja v5 is not an in-place upgrade from v4.x—start with a clean install
before migrating data.
:::
:::warning
Install into the document root (domain or subdomain). Subdirectories such as
https://example.com/ninja are not supported.
:::
Shared hosting providers can still run Invoice Ninja, but make sure cron access
is available. Softaculous or the manual tarball method is usually the quickest
way to deploy on shared environments, and you can always migrate out later with
the INmanage CLI once you have full server access.

## Linux server configs

Prefer to see the entire build spelled out? These community guides take you from
bare metal to a running Invoice Ninja instance. Every path below can later be
handed over to the <a href="#choose-your-install-path">INmanage CLI card</a> for
automated updates and backups once the web server and database are running.

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 install-path-grid">
    <div class="card-panel rounded-xl border border-slate-200 p-5 flex h-full flex-col gap-3 bg-white shadow-sm">
        <h4 class="text-xl font-semibold">Ubuntu 22.04</h4>
        <p class="text-sm text-slate-600">TechnicallyComputers’ step-by-step guide for Invoice Ninja v5.5 on the latest LTS release.</p>
        <div class="card-cta pt-4">
            <a class="card-btn card-btn-primary"
               href="https://forum.invoiceninja.com/t/install-invoice-ninja-v5-5-on-ubuntu-22-04/13272" target="_blank" rel="noopener noreferrer">
               Open guide
               <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
            </a>
        </div>
    </div>
    <div class="card-panel rounded-xl border border-slate-200 p-5 flex h-full flex-col gap-3 bg-white shadow-sm">
        <h4 class="text-xl font-semibold">Ubuntu 20.04</h4>
        <p class="text-sm text-slate-600">Classic LTS instructions with every package and nginx snippet spelled out.</p>
        <div class="card-cta pt-4">
            <a class="card-btn card-btn-primary"
               href="https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-ubuntu-20-04/4588" target="_blank" rel="noopener noreferrer">
               Open guide
               <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
            </a>
        </div>
    </div>
    <div class="card-panel rounded-xl border border-slate-200 p-5 flex h-full flex-col gap-3 bg-white shadow-sm">
        <h4 class="text-xl font-semibold">Debian 12 (Bookworm)</h4>
        <p class="text-sm text-slate-600">Dros’ tutorial plus a management script for updates, backups, and general deployments.</p>
        <div class="card-cta pt-4">
            <a class="card-btn card-btn-primary"
               href="https://github.com/DrDBanner/inmanage/blob/main/docs/tutorials/install_invoiceninja_debian12_bookworm_vm.md" target="_blank" rel="noopener noreferrer">
               Open guide
               <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
            </a>
        </div>
    </div>
    <div class="card-panel rounded-xl border border-slate-200 p-5 flex h-full flex-col gap-3 bg-white shadow-sm">
        <h4 class="text-xl font-semibold">Debian 12 via WSL</h4>
        <p class="text-sm text-slate-600">Install Invoice Ninja on Windows using WSL with the same automation scripts.</p>
        <div class="card-cta pt-4">
            <a class="card-btn card-btn-primary"
               href="https://github.com/DrDBanner/inmanage/blob/main/docs/tutorials/install_invoiceninja_debian12_bookworm_vm.md#21-run-invoice-ninja-on-windows-wsl" target="_blank" rel="noopener noreferrer">
               Open guide
               <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
            </a>
        </div>
    </div>
    <div class="card-panel rounded-xl border border-slate-200 p-5 flex h-full flex-col gap-3 bg-white shadow-sm">
        <h4 class="text-xl font-semibold">CentOS 8</h4>
        <p class="text-sm text-slate-600">TechnicallyComputers’ CentOS tutorial covering packages, nginx, and queues.</p>
        <div class="card-cta pt-4">
            <a class="card-btn card-btn-primary"
               href="https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-centos-8/4293" target="_blank" rel="noopener noreferrer">
               Open guide
               <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
            </a>
        </div>
    </div>
    <div class="card-panel rounded-xl border border-slate-200 p-5 flex h-full flex-col gap-3 bg-white shadow-sm">
        <h4 class="text-xl font-semibold">Enterprise Linux 8</h4>
        <p class="text-sm text-slate-600">Companion guide for Alma, Rocky, and other Enterprise Linux distributions.</p>
        <div class="card-cta pt-4">
            <a class="card-btn card-btn-primary"
               href="https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-enterprise-linux-8/4293" target="_blank" rel="noopener noreferrer">
               Open guide
               <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
            </a>
        </div>
    </div>
    <div class="card-panel rounded-xl border border-slate-200 p-5 flex h-full flex-col gap-3 bg-white shadow-sm">
        <h4 class="text-xl font-semibold">Arch Linux</h4>
        <p class="text-sm text-slate-600">Community-maintained walkthrough covering pacman packages and Arch-specific tweaks.</p>
        <div class="card-cta pt-4">
            <a class="card-btn card-btn-primary"
               href="https://forum.invoiceninja.com/t/howto-install-invoice-ninja-v5-on-arch-linux/6196" target="_blank" rel="noopener noreferrer">
               Open guide
               <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
            </a>
        </div>
    </div>
</div>

## Manual install checklist {#manual}

This path gives you full control over every package. Once the base install is up,
you can still point the INmanage CLI at the same server—it will adopt the
instance and handle future updates and backups for you.

1. **Download** the latest `invoiceninja.tar` from the
   [GitHub releases](https://github.com/invoiceninja/invoiceninja/releases).
2. **Unpack** it into your vhost root (for example `/var/www/invoiceninja`).
3. **Set permissions** so the web user owns the files:

   ```bash
   sudo chown -R www-data:www-data /var/www/invoiceninja
    sudo find /var/www/invoiceninja -type d -exec chmod 755 {} \;
   ```

4. **Configure nginx** (sample below) or Apache. Enable gzip for quicker page
   loads.

   ```nginx
   server {
       listen 80;
       server_name ninja.example.com;
       root /var/www/invoiceninja/public;
       index index.php index.html;
       client_max_body_size 20M;

       location = /index.php {
           include snippets/fastcgi-php.conf;
           fastcgi_pass unix:/run/php/php8.2-fpm.sock;
       }

       location ~ \.php$ { return 403; }

       location / {
           try_files $uri $uri/ /index.php?$query_string;
       }

       location ~ /\.ht { deny all; }
   }
   ```

5. **Create the database** and grant a user full access (MySQL’s
   [official guide](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html)
   can help).
6. **Configure cron** so the Laravel scheduler fires every minute:

   ```bash
   * * * * * cd /var/www/invoiceninja && php artisan schedule:run >> /dev/null 2>&1
   ```

   Shared hosting often requires:

   ```bash
   * * * * * cd /path/to/root && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
   ```

7. **Run the web installer** at `https://ninja.example.com/setup`, enter your
   database credentials, and you’re done.

## After installation

- **Git installs:** `git clone --depth 1 https://github.com/invoiceninja/invoiceninja.git`
  then follow the manual checklist before pointing the browser to `/setup`. Note: The React UI is not included and needs to be wired manually. So, really not the way to go for production. For production and full CLI control consider the <a href="#choose-your-install-path">INmanage CLI card</a>.
- **Docker tips:** restart containers after editing `.env` and keep your volumes
  mapped so invoices survive rebuilds.
- **Queues:** enable the Laravel queue worker (Supervisor) once you have root
  access. Laravel’s
  [guide](https://laravel.com/docs/queues#supervisor-configuration) shows the
  unit file.

Whatever route you picked, the INmanage CLI and Docker stacks make it easy to
move between servers later, so start simple and iterate.

```bash
$ sudo supervisorctl start invoiceninja-worker:*
```

Running the following will show worker processes as RUNNING (on my installation, I see 8 worker processes, numbered 00 through 07)

```bash
$ sudo supervisorctl status
```

Now that the Supervisor is configured, we need to tell Invoice Ninja to actually use it.

Edit the .env file for Invoice Ninja

```bash
$ sudo vi /path/to/invoiceninja/.env
```

Edit the following line to change it from sync to database, and save the file

```bash
QUEUE_CONNECTION=database
```
Finally, now that everything is set up, reload the config for Invoice Ninja and restart the queue. I’m using www-data for this example as the web server user.

```bash
$ cd /path/to/invoiceninja/
$ sudo -u www-data php artisan optimize
$ sudo -u www-data php artisan queue:restart
```

That’s it! You should now have a functioning Supervisor setup for Invoice Ninja.

#### Alternative for queues on shared hosting
If you are on shared hosting, it is possible to get the queues working by defining a new cron with the following configuration:

```
*/5 * * * * cd  /path/to/root/folder && /usr/bin/php -d register_argc_argv=On artisan queue:work --stop-when-empty
```

Some people have different web hosting setups, so this might also work:

```
*/5 * * * * php /home/admin/domains/site.com/private_html/invoices_site/artisan queue:work --stop-when-empty
```

This cron will start a queue worker every 5 minutes and run any jobs that are in the queue and then gracefully terminate itself. This means any emails / notification may be queued for a small period of time prior to executing. If this amount of delay is acceptable, it is a great way to get queue's working on shared hosting.

If you prefer to manage the queues with Supervisor, then you will want to disable the internal Invoice Ninja commands which start the queue, to do this simly set the following .env var

```
INTERNAL_QUEUE_ENABLED=false
```

You will then have full control over the queue.


## Shared Hosting

Keep this section short and pragmatic: many tasks are easier with the CLI card
above, but if your provider only offers shared hosting, follow the list below.

### Server requirements

Invoice Ninja needs the following PHP functions on shared hosting. If any of
them are disabled, open a ticket with your provider or consider switching to a
Softaculous-capable host (see the Softaculous card above).

* proc_open
* exec
* open_basedir
* fpassthru

Without these modules, the installer will fail. The setup wizard performs
checks, but it is faster to confirm with your host before you start.

### Quick path (Softaculous)

If your control panel includes Softaculous (cPanel, DirectAdmin, Plesk, etc.):

1. Open the Softaculous marketplace and search for “Invoice Ninja”.
2. Follow the one-click installer (same metadata as the Softaculous card).
3. After the app is live, add the cron entry Softaculous proposes or use the
   snippet below.

### Manual path (tarball)

1. Create a MySQL-compatible database + user with full privileges.
2. Download the latest `invoiceninja.tar` from
   [GitHub releases](https://github.com/invoiceninja/invoiceninja/releases) and
   upload it to `public_html` (or the document root your panel exposes).
3. Extract the archive and rename `.env.example` to `.env`.
4. Point your subdomain to the `/public` directory. Example:
   `/domains/domain.com/public_html/invoices/public/`.
5. Visit `https://yourdomain.com/setup`, fill in the wizard, review any errors
   in `storage/logs/laravel.log` if needed.

### Cron on shared hosting

Add the scheduler cron job in your panel (adjust paths as needed):

```
* * * * * cd /path/to/root/folder && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

Queues can be run with a 5‑minute worker if Supervisor isn’t available:

```
*/5 * * * * cd /path/to/root && /usr/bin/php -d register_argc_argv=On artisan queue:work --stop-when-empty
```

When you outgrow shared hosting, clone the site to a VPS and hand it over to the
INmanage CLI installer for automated updates and backups.

## Mail Configuration

When configuring your email, please ensure all of the fields are filled in. In particular you _must_ include the MAIL_FROM_ADDRESS and MAIL_FROM_NAME to prevent errors such as 

```bash
Address in mailbox given [ ] does not comply with RFC 2822, 3.6.2.
```

Here is a full example - using Gmail as an example.

```bash
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME="your_email_address@gmail.com"
MAIL_PASSWORD="your_password_dont_forget_the_quotes!"
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="your_email_address@gmail.com"
MAIL_FROM_NAME="Full Name With Double Quotes"

```

:::warning
If you are using SSL encryption the `MAIL_PORT` is `465`. TLS encryption is on port `587`.
:::

### Individual mail configurations per company

From v5.5.38 we support per company mail configurations.

What does this mean?

For example if you have two Companies, Acme co and Ninja co you can create separate mail server configurations for each company.

To configure this you will need to prefix your .env  with the primary key of the company ie In your database open the companies table, and if the primary ID column is 1 for Acme co this would be the configuration

```
1_MAIL_HOST=
1_MAIL_PORT=
1_MAIL_USERNAME=null
1_MAIL_PASSWORD=null
1_MAIL_ENCRYPTION=null
```

If Ninja Co company id 5

```
5_MAIL_HOST=
5_MAIL_PORT=
5_MAIL_USERNAME=null
5_MAIL_PASSWORD=null
5_MAIL_ENCRYPTION=null
```

## Currency Conversion

<p>Invoice Ninja supports <a href="https://openexchangerates.org/">Open Exchange</a> for currency conversion.
Open Exchange currently provides a free tier which is suitable for daily updates of the exchange rates.
Simply insert a Open Exchange API key into your .env file to enable exchange rate updates:</p>

```bash
OPENEXCHANGE_APP_ID=your_open_exchange_api_key_here
```

Currencies are updated automatically by using the scheduler. In case the currencies are not available within the UI please double check the database table `currencies` and ensure that `exchange_rate` fields contains realistic values.

## Lib Saxon

If using e invoicing, you may want to install the saxon extension. The saxon extension provides XSLT2 validation of e invoice schema's and provides additional confidence that your einvoice will be accepted by third party systems.

- On shared hosting, enable the Saxon extension in cPanel if available.
- On the official Debian Docker image, Saxon is installed via `mlocati/php-extension-installer` (`saxon` in the install list).
- On bare‑metal Linux or VM's, you typically install the shared library first, then compile/enable the PHP extension.
- For SaxonC, download the **HE** build from <https://www.saxonica.com/download/c.xml>.

We have a short video showing the installation steps here:


<div class="video-container" style="position: relative; padding-top: 56.25%;">
  <iframe
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    src="https://www.youtube-nocookie.com/embed/s21ewzAeYjc?rel=0&modestbranding=1&start=15&autoplay=0"
    title="Invoice Ninja Tour"
    loading="lazy"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
