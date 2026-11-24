---
title: "Install a self-hosted Invoice Ninja"
sidebar_label: "Self Host Installation"
sidebar_position: 3
description: "Install self-hosted Invoice Ninja with INmanage, Docker, a release tarball or shared hosting, then set up cron, queues, mail, webhooks and exchange rates."
---

# Install a self-hosted Invoice Ninja

Invoice Ninja is source-available under the Elastic License (ELv2). Pick the install path that matches the access you have today. You can move to another method later if your needs change.

## Choose your install path {#choose-your-install-path}

<div class="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2 install-path-grid">

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-3">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Secure and fast maintenance</p>
    <h3 class="text-2xl font-semibold">CLI</h3>
    <p>Install, configure, update, back up, monitor and receive notifications for your self-hosted Invoice Ninja from a single CLI. Requires SSH access.<br><br>Focus on saving time, less stress, certainty and convenience.</p>
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
    <p>Official containers for Debian (the default, recommended path) and Octane. Good for reproducible environments and quick pilots.</p>
    <div class="space-y-2 text-sm text-slate-600">
        <div><span class="font-semibold text-slate-900">Debian image:</span> <a class="font-medium text-slate-900 hover:text-slate-700 focus-visible:underline" href="https://hub.docker.com/r/invoiceninja/invoiceninja-debian" target="_blank" rel="noopener noreferrer">Docker Hub</a>.</div>
        <div><span class="font-semibold text-slate-900">Octane image:</span> <a class="font-medium text-slate-900 hover:text-slate-700 focus-visible:underline" href="https://hub.docker.com/r/invoiceninja/invoiceninja-octane" target="_blank" rel="noopener noreferrer">Docker Hub</a>.</div>
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
    <p>Install from the tarball or git, tweak nginx or Apache yourself, and own every line. Works well on bare metal or cloud VMs. You can still adopt the CLI later to automate updates and backups.</p>
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
    <p>Deploy Invoice Ninja as an app and let Cloudron handle SSL, backups and log rotation.</p>
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
    <p>Hosting panels that include Softaculous (cPanel, DirectAdmin and others) can install Invoice Ninja with a few clicks.</p>
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
    <p>Elestio provisions a VM, installs Invoice Ninja, and keeps monitoring and backups running for you. In the Elestio catalog, choose Invoice Ninja.</p>
    <div class="card-cta">
        <a class="card-btn card-btn-primary"
           href="https://elest.io" target="_blank" rel="noopener noreferrer">
           Deploy on Elestio
           <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
    </div>
</div>

<div class="card-panel rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex h-full flex-col gap-4">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">YunoHost server</p>
    <h3 class="text-2xl font-semibold">YunoHost package</h3>
    <p>If you already run YunoHost, add Invoice Ninja as an app and inherit its user and domain management features.</p>
    <div class="card-cta">
        <a class="card-btn card-btn-primary"
           href="https://apps.yunohost.org/app/invoiceninja5" target="_blank" rel="noopener noreferrer">
           Install via YunoHost
           <img src="/assets/images/icons/ArrowRight.svg" alt="" aria-hidden="true">
        </a>
    </div>
</div>
</div>

To use the official Docker images, clone the [dockerfiles](https://github.com/invoiceninja/dockerfiles) repository on the `debian` branch (the default, recommended image) or the `octane` branch (FrankenPHP), then start the stack with Docker Compose:

```bash
git clone https://github.com/invoiceninja/dockerfiles.git -b debian
cd dockerfiles/debian
```

Edit the `.env` file in that folder (set `APP_URL`, generate and set `APP_KEY`, and set `IN_USER_EMAIL` and `IN_PASSWORD` for the first account). The database host in that setup is `mysql`. Then start the containers:

```bash
docker compose up -d
```

The Debian image currently builds on PHP 8.5 and includes the Saxon HE extension. Supervisor inside the app container runs `php artisan schedule:work` and a `queue:work` worker, so you do not add a host cron job for that stack. The sample `.env` uses `QUEUE_CONNECTION=redis`. Keep the `app_storage` and `app_public` volumes mapped so files survive rebuilds, and restart the containers after you change `.env`.

If you use the Compose standalone binary instead of the Compose plugin, the same command is `docker-compose up -d`. For the Octane image, clone `-b octane` and work in the `octane` folder. See the [dockerfiles README](https://github.com/invoiceninja/dockerfiles/blob/debian/README.md) for `APP_KEY` generation and first-account notes.

## What does the server need? {#server-requirements}

A manual or git install needs:

- PHP 8.2 or later (8.3, 8.4 and 8.5 are also supported). The setup wizard checks these extensions: `gd`, `curl`, `zip`, `openssl`, `mbstring`, `xml`, `bcmath` and `iconv`. Composer also requires `dom`, `json`, `libxml` and `simplexml` (these usually arrive with `php-xml`). You also need a MySQL driver such as `pdo_mysql` (the `php-mysql` package).
- Recommended extras: `imagick`, `soap`, `intl`, `gmp`, PHP-FPM (for nginx), and `saxon` if you want XSLT validation for e-invoices.
- MySQL 5.7 or later, or MariaDB 10.3 or later, or a compatible managed MySQL service. The official Debian Docker Compose file uses MySQL 8.
- nginx or Apache with HTTPS enabled.

On Debian or Ubuntu, a PHP 8.2 package set looks like this (change `8.2` if you install a later PHP version):

```bash
sudo apt install php8.2-bcmath php8.2-gmp php8.2-gd php8.2-mbstring \
    php8.2-xml php8.2-curl php8.2-zip php8.2-mysql php8.2-fpm \
    php8.2-imagick php8.2-soap php8.2-common php8.2-intl
```

:::warning
Invoice Ninja v5 is not an in-place upgrade from v4.x. Start with a clean install before migrating data.
:::

:::warning
Install into the document root of a domain or subdomain. Subdirectories such as `https://example.com/ninja` are not supported.
:::

Shared hosting can still run Invoice Ninja if you have cron access. Softaculous or the manual tarball method is usually the quickest path on shared environments. You can migrate later with the INmanage CLI once you have full server access.

## Where can I find Linux install guides? {#linux-server-configs}

These community guides take you from a bare metal or VM install to a running Invoice Ninja instance. After the web server and database are running, you can hand the instance over to the <a href="#choose-your-install-path">INmanage CLI card</a> for automated updates and backups.

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 install-path-grid">
    <div class="card-panel rounded-xl border border-slate-200 p-5 flex h-full flex-col gap-3 bg-white shadow-sm">
        <h4 class="text-xl font-semibold">Ubuntu 22.04</h4>
        <p class="text-sm text-slate-600">TechnicallyComputers' step-by-step guide for Invoice Ninja v5.5 on the latest LTS release.</p>
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
        <p class="text-sm text-slate-600">Dros' tutorial plus a management script for updates, backups and general deployments.</p>
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
        <p class="text-sm text-slate-600">TechnicallyComputers' CentOS tutorial covering packages, nginx and queues.</p>
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
        <p class="text-sm text-slate-600">Companion guide for Alma, Rocky and other Enterprise Linux distributions.</p>
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

## How do I follow the manual install checklist? {#manual}

This path gives you full control over every package. Once the base install is up, you can still point the INmanage CLI at the same server. It will adopt the instance and handle future updates and backups for you.

1. **Download** the latest `invoiceninja.tar` from the [GitHub releases](https://github.com/invoiceninja/invoiceninja/releases) page. Use that release tarball, not the generic "Source code" zip or tar.gz assets.
2. **Unpack** it into your vhost root (for example `/var/www/invoiceninja`).
3. **Set permissions** so the web user owns the files:

   ```bash
   sudo chown -R www-data:www-data /var/www/invoiceninja
   sudo find /var/www/invoiceninja -type d -exec chmod 755 {} \;
   ```

4. **Configure nginx** (sample below) or Apache. The document root must be the `public` directory. Adjust the PHP-FPM socket if you use a PHP version other than 8.2. Enable gzip for quicker page loads.

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

5. **Create the database** and grant a user full access (MySQL's [official guide](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html) can help).
6. **Configure cron** so the Laravel scheduler fires every minute (see [Cron configuration](#cron-configuration-1)).
7. **Run the web installer** at `https://ninja.example.com/setup`, enter your database credentials, then continue with the [after installation](#after-installation) steps.

## What should I do after installation? {#after-installation}

- **Release tarball:** after `/setup`, set up the scheduler cron and a queue worker as described below.
- **Git installs:** clone a release tag (not a work-in-progress branch), copy `.env.example` to `.env`, then run `composer install -o --no-dev` and follow the manual checklist before opening `/setup`. The React admin UI is not included in the git tree, so this path is better for development than for production. For production, use the release tarball or the <a href="#choose-your-install-path">INmanage CLI card</a>.
- **Docker:** the official Debian and Octane Compose stacks already run the scheduler and a queue worker in the app container. Restart the containers after you edit `.env`, and keep the storage volumes mapped so invoices and uploads survive rebuilds.
- **Queues:** on a server where you have root access, run a Laravel queue worker with Supervisor once you have set `QUEUE_CONNECTION` to something other than `sync` (for example `database` or `redis`). Laravel's [Supervisor guide](https://laravel.com/docs/queues#supervisor-configuration) shows a unit file.

Whatever route you picked, INmanage and the Docker stacks make it easier to move between servers later, so start simple and iterate.

### Cron configuration {#cron-configuration-1}

The scheduler must run every minute. Recurring invoices, reminders, exchange-rate updates and (on some setups) queued jobs all depend on it.

```bash
* * * * * cd /var/www/invoiceninja && php artisan schedule:run >> /dev/null 2>&1
```

Shared hosting often requires an explicit PHP binary and `register_argc_argv=On`:

```bash
* * * * * cd /path/to/root && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

### How do I run the queue worker with Supervisor?

The default `QUEUE_CONNECTION` is `sync`, which runs jobs in the web request. For background email and other jobs, use a real queue driver and a worker.

1. Install and configure Supervisor for a worker, then start it:

   ```bash
   sudo supervisorctl start invoiceninja-worker:*
   sudo supervisorctl status
   ```

   A typical status listing shows several worker processes in the RUNNING state.

2. In the Invoice Ninja `.env` file, set a queue driver. For a database-backed queue:

   ```bash
   QUEUE_CONNECTION=database
   ```

3. Reload the app config and restart the queue as the web server user (this example uses `www-data`):

   ```bash
   cd /path/to/invoiceninja/
   sudo -u www-data php artisan optimize
   sudo -u www-data php artisan queue:restart
   ```

If you manage the worker with Supervisor, disable the app's built-in queue starter so the two do not compete:

```bash
INTERNAL_QUEUE_ENABLED=false
```

When `QUEUE_CONNECTION=database`, the install is self-hosted, this value is left at its default of `true`, and the app is not running in Docker, the scheduler also starts `php artisan queue:work database --stop-when-empty` every minute. Turning that off is the right move when Supervisor already runs the worker.

#### Alternative for queues on shared hosting {#alternative-for-queues-on-shared-hosting}

If you cannot run Supervisor, you can start a short-lived worker from cron every five minutes:

```bash
*/5 * * * * cd /path/to/root/folder && /usr/bin/php -d register_argc_argv=On artisan queue:work --stop-when-empty
```

Some hosts need a full path to `artisan` instead:

```bash
*/5 * * * * php /path/to/invoiceninja/artisan queue:work --stop-when-empty
```

This starts a worker, processes jobs that are waiting, then exits. Emails and notifications may wait up to a few minutes before they send. If that delay is acceptable, it is a practical way to run queues on shared hosting.

If `QUEUE_CONNECTION=database` and you leave `INTERNAL_QUEUE_ENABLED` at its default of `true`, the every-minute scheduler cron can also run that short-lived worker for you. The five-minute cron above is still useful if you turn the internal starter off.

## How do I install on shared hosting? {#shared-hosting}

Many tasks are easier with the CLI card above, but if your provider only offers shared hosting, follow the list below.

### Server requirements {#server-requirements-1}

On shared hosting, confirm that:

- The PHP `exec` function is available (not disabled).
- The PHP `open_basedir` setting is empty.

The setup wizard checks loaded PHP extensions, the PHP version and that the `.env` file is writable. The app's health check also reports `exec` and `open_basedir`. If `exec` is disabled or `open_basedir` is set, open a ticket with your provider or consider a Softaculous-capable host (see the Softaculous card above).

### Quick path (Softaculous) {#quick-path-softaculous}

If your control panel includes Softaculous (cPanel, DirectAdmin, Plesk and others):

1. Open the Softaculous marketplace and search for Invoice Ninja.
2. Follow the one-click installer (the same listing as the Softaculous card).
3. After the app is live, add the cron entry Softaculous proposes, or use the snippet in [Cron on shared hosting](#cron-on-shared-hosting).

### Manual path (tarball) {#manual-path-tarball}

1. Create a MySQL-compatible database and a user with full privileges.
2. Download the latest `invoiceninja.tar` from [GitHub releases](https://github.com/invoiceninja/invoiceninja/releases) and upload it to `public_html` (or the document root your panel exposes).
3. Extract the archive and rename `.env.example` to `.env`.
4. Point your subdomain to the `/public` directory. Example: `/domains/domain.com/public_html/invoices/public/`.
5. Visit `https://yourdomain.com/setup`, complete the wizard, and review `storage/logs/laravel.log` if you see errors.

### Cron on shared hosting {#cron-on-shared-hosting}

Add the scheduler cron job in your panel (adjust paths as needed):

```bash
* * * * * cd /path/to/root/folder && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

Queues can be run with a 5-minute worker if Supervisor is not available:

```bash
*/5 * * * * cd /path/to/root && /usr/bin/php -d register_argc_argv=On artisan queue:work --stop-when-empty
```

When you outgrow shared hosting, clone the site to a VPS and hand it over to the INmanage CLI for automated updates and backups.

## How do I configure mail? {#mail-configuration}

Mail is configured in the app under **Settings > Email Settings**, not only in your `.env` file. Each company selects its own **Email Provider**, so two companies on the same install can send through different services. Changes to the in-app provider take effect on the next send. You do not need to restart the server.

### Configure in the application {#configure-in-the-application}

Go to **Settings > Email Settings** and choose an **Email Provider**. The provider you pick determines which credential fields appear:

| Provider | What you enter in the app |
|---|---|
| **Default** | Nothing. The company uses the server `.env` `MAIL_*` settings (see [Default mailer](#default-mailer-env) below). |
| **SMTP** | Host, Port, Encryption (STARTTLS / SSL), Username, Password, Local Domain, Verify Peer. |
| **Postmark** | Your Postmark server API token (the **Secret** field). |
| **Mailgun** | **Secret**, **Domain** and **Endpoint** (`api.mailgun.net` for US, `api.eu.mailgun.net` for EU). |
| **Brevo** | Your Brevo API key (the **Secret** field). |
| **Amazon SES** | Access Key, Secret Key, Region, From Address and Topic ARN. |

On the same screen you also set **From Name**, **From Email**, **Reply-To** and **BCC**. Gmail and Microsoft can also be selected when those connections are set up.

:::tip
When the provider is **SMTP**, use **Send Test Email** to check the configuration before you rely on it. Set a valid **From Email** and **From Name** so you do not see errors such as `Address in mailbox given [ ] does not comply with RFC 2822, 3.6.2.`
:::

### Default mailer (.env) {#default-mailer-env}

When **Email Provider** is **Default**, Invoice Ninja uses the global mailer in your server `.env`. This is the right place for a single SMTP relay shared by every company on the install. Here is a full example using Gmail:

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

You must include `MAIL_FROM_ADDRESS` and `MAIL_FROM_NAME` to prevent the RFC 2822 error noted above. If configuration is cached, run `php artisan config:clear` after you change `.env`.

:::warning
If you are using SSL encryption, `MAIL_PORT` is `465`. TLS encryption is on port `587`.
:::

### Individual mail configurations per company (.env) {#individual-mail-configurations-per-company-env}

In addition to the in-app per-company providers above, an older `.env` override is still supported. Prefix the mail variables with the company's primary key from the `id` column of the `companies` table. If that `id` is `1`, the keys are:

```bash
1_MAIL_HOST=
1_MAIL_PORT=
1_MAIL_USERNAME=null
1_MAIL_PASSWORD=null
1_MAIL_FROM_ADDRESS=
1_MAIL_FROM_NAME=
```

If the company `id` is `5`:

```bash
5_MAIL_HOST=
5_MAIL_PORT=
5_MAIL_USERNAME=null
5_MAIL_PASSWORD=null
```

The app reads `{id}_MAIL_HOST`, `{id}_MAIL_PORT`, `{id}_MAIL_USERNAME`, `{id}_MAIL_PASSWORD`, and optionally `{id}_MAIL_FROM_ADDRESS` and `{id}_MAIL_FROM_NAME`. This override applies when that company's Email Provider is left as **Default**. Configuring a provider in **Settings > Email Settings** is the recommended approach.

## How do I track delivery, bounces and complaints? {#mail-webhooks-delivery-bounce--complaint-tracking}

When you send through Postmark, Mailgun or Amazon SES, those services can call back to your install to report delivery status, bounces and spam complaints. Invoice Ninja uses these to update the email status of each invitation and to flag problem recipients (a bounce or complaint marks the client contact so you stop emailing a dead or hostile address).

Configuration is optional. Outbound mail works without it, but it is recommended so the email activity in your dashboard stays accurate.

:::info
Invoice Ninja tags every outbound message with the company key, so incoming webhook events are routed to the correct company automatically. You only need to point the provider at the endpoint and enable the events below.
:::

### Postmark {#postmark}

1. Add `POSTMARK_SECRET=your_postmark_server_token` to your `.env`. This is the value Invoice Ninja checks against the `X-API-SECURITY` header on incoming webhooks.
2. In the Postmark server, add a webhook pointing at:

   ```text
   https://your-domain.com/api/v1/postmark_webhook
   ```

3. Add a custom HTTP header to the webhook so requests authenticate:

   ```text
   X-API-SECURITY: your_postmark_server_token
   ```

4. Enable the **Delivery**, **Bounce**, **Spam Complaint** and (optionally) **Open** events.

### Mailgun {#mailgun}

1. In the Mailgun dashboard, copy your **HTTP webhook signing key** and add it to your `.env`:

   ```bash
   MAILGUN_WEBHOOK_SIGNING_KEY=your_mailgun_signing_key
   ```

   Invoice Ninja verifies the HMAC-SHA256 signature on every request against this key, so no custom header is required.
2. Add webhooks pointing at:

   ```text
   https://your-domain.com/api/v1/mailgun_webhook
   ```

3. Enable the **Delivered Messages**, **Permanent Failure**, **Spam Complaints** and (optionally) **Opened** events.

### Amazon SES {#amazon-ses}

SES reports events through Amazon SNS.

1. Set the SNS topic ARN in your `.env` (it must match the **Topic ARN** entered in **Settings > Email Settings**):

   ```bash
   SES_TOPIC_ARN=arn:aws:sns:us-east-1:123456789012:your-topic
   ```

2. In SES, create a **configuration set** with an event destination publishing **Bounce**, **Complaint** and **Delivery** events to that SNS topic.
3. Subscribe the SNS topic to an **HTTPS** endpoint:

   ```text
   https://your-domain.com/api/v1/sns_webhook
   ```

   SNS will send a subscription-confirmation request. Invoice Ninja confirms it automatically for the matching topic ARN.

## How do I update exchange rates? {#currency-conversion}

Invoice Ninja can use [Open Exchange Rates](https://openexchangerates.org/) for currency conversion. Open Exchange Rates currently provides a free tier that is suitable for daily updates. Add an API key to your `.env` file:

```bash
OPENEXCHANGE_APP_ID=your_open_exchange_api_key_here
```

The scheduler runs the exchange-rate job every day at 23:30 (the app timezone, which defaults to UTC). If currencies are missing in the UI, check the `currencies` table and make sure the `exchange_rate` fields contain realistic values.

## How do I install Lib Saxon for e-invoice validation? {#lib-saxon}

If you use e-invoicing, you may want to install the Saxon PHP extension. It provides XSLT 2 validation of e-invoice schemas and gives extra confidence that a third-party system will accept your e-invoice.

- On shared hosting, enable the Saxon extension in cPanel if it is available.
- On the official Debian Docker image, Saxon HE is installed with `mlocati/php-extension-installer` (`saxon` in the install list).
- On bare-metal Linux or VMs, you typically install the shared library first, then compile or enable the PHP extension.
- For SaxonC, download the **HE** build from <https://www.saxonica.com/download/c.xml>.

This short video shows the installation steps:

<div class="video-container" style="position: relative; padding-top: 56.25%;">
  <iframe
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    src="https://www.youtube-nocookie.com/embed/s21ewzAeYjc?rel=0&modestbranding=1&start=15&autoplay=0"
    title="Installing the Saxon PHP extension for e-invoice validation"
    loading="lazy"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## Related

- [Get started with self-hosted Invoice Ninja](/docs/self-host/getting-started)
- [Update a self-hosted Invoice Ninja](/docs/self-host/self-host-updating)
- [Env Variables](/docs/self-host/env-variables)
- [Self Host Troubleshooting](/docs/self-host/self-host-troubleshooting)
- [Turn debug mode on and off](/docs/self-host/self-host-debug-mode)
