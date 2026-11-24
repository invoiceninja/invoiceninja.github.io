---
title: "Set environment variables on a self-hosted Invoice Ninja"
sidebar_label: "Env Variables"
sidebar_position: 6
description: "A reference for the .env keys on a self-hosted Invoice Ninja, including defaults and what each setting does."
---

# Set environment variables on a self-hosted Invoice Ninja

Self-hosted Invoice Ninja (source-available under the Elastic License, ELv2) reads most server settings from the `.env` file in the project root. Set `APP_URL` to the full public URL of your install, including `http://` or `https://`. After you change `.env`, run `php artisan config:clear` or `php artisan optimize:clear` so a cached config does not keep the old values. If you run the official Docker images, restart the containers instead.

This page lists the keys you are most likely to set. Boolean values are `true` or `false`. Defaults below are what the app uses when the key is omitted, unless noted.

## How do I set the application basics?

```bash
APP_NAME="Invoice Ninja"
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL=https://your-site.example
REACT_URL=
REQUIRE_HTTPS=true
NINJA_ENVIRONMENT=selfhost
LICENSE_KEY=
```

| Key | Default if omitted | What it does |
|---|---|---|
| `APP_NAME` | `Invoice Ninja` | The application name. Used in the client portal title. |
| `APP_ENV` | `production` (Laravel) | The Laravel environment. Typical values are `production`, `local` and `development`. |
| `APP_KEY` | none | The application encryption key. Back it up in a safe place. If you lose it, encrypted data in the app can become unreadable. Generate one with `php artisan key:generate`. |
| `APP_DEBUG` | `false` | Turns on detailed error output and extra logging. Leave this `false` on a live site. See [Debug Mode](/docs/self-host/self-host-debug-mode). |
| `APP_URL` | `http://localhost` | The full public URL of your install, including `http://` or `https://`. Do not add a trailing slash. |
| `REACT_URL` | the same value as `APP_URL` | The URL the app sends you back to after some OAuth flows, including QuickBooks. Set this if the admin app is served from a different URL. |
| `REQUIRE_HTTPS` | `true` | When `true`, the app expects HTTPS. The example `.env` sets this to `false`; set `true` on a public HTTPS site. |
| `NINJA_ENVIRONMENT` | `selfhost` | Marks this install as self-hosted. Leave this as `selfhost`. |
| `LICENSE_KEY` | unset | Your white label license key. Also used when you proxy e-invoices through Invoice Ninja onto the PEPPOL network. See [White Labeling](/docs/self-host/self-host-white-labeling). |

`SERVER_TIMEZONE` (default `UTC`) sets the app timezone, including the scheduler.

## How do I set the database?

```bash
DB_CONNECTION=mysql
DB_HOST=localhost
DB_DATABASE=ninja
DB_USERNAME=ninja
DB_PASSWORD=ninja
DB_PORT=3306
```

| Key | Default if omitted | What it does |
|---|---|---|
| `DB_CONNECTION` | `mysql` | The database driver. Invoice Ninja is set up for MySQL or MariaDB. |
| `DB_HOST` | | The database host. On the official Docker Compose stack this is `mysql`. |
| `DB_DATABASE` | | The database name. |
| `DB_USERNAME` | | The database user. |
| `DB_PASSWORD` | | The database password. |
| `DB_PORT` | `3306` | The database port. |

## How do I set logs, cache, queue, sessions and Redis?

```bash
LOG_CHANNEL=stack
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
INTERNAL_QUEUE_ENABLED=true
BROADCAST_DRIVER=log
```

| Key | Default if omitted | What it does |
|---|---|---|
| `LOG_CHANNEL` | `stack` | Where Laravel writes application logs. The default stack writes to `storage/logs/laravel.log`. |
| `CACHE_DRIVER` | `file` | The cache store. Common options are `file`, `redis` and `database`. |
| `QUEUE_CONNECTION` | `sync` | The queue driver. `sync` runs jobs in the web request. For background email and imports, use `database` or `redis` and run a worker. See [After installation](/docs/self-host/self-host-installation#after-installation). |
| `SESSION_DRIVER` | `file` | Where session data is stored. Options include `file`, `redis` and `database`. |
| `SESSION_LIFETIME` | `120` | Session lifetime in minutes. |
| `REDIS_HOST`, `REDIS_PASSWORD`, `REDIS_PORT` | `127.0.0.1`, `null`, `6379` | Redis connection settings, used when cache, queue or session is set to `redis`. |
| `INTERNAL_QUEUE_ENABLED` | `true` | When `QUEUE_CONNECTION=database`, the install is self-hosted, and the app is not in Docker, the scheduler can start a short-lived `queue:work` process. Set this to `false` if Supervisor already runs the worker. |
| `BROADCAST_DRIVER` | `log` | Laravel's broadcasting driver. You do not need to set up Pusher for ordinary Invoice Ninja use. |

`EXPANDED_LOGGING=true` writes extra detail to `storage/logs/invoiceninja.log`. `ERROR_EMAIL` is the address that receives system error emails.

## How do I set mail and webhooks?

Mail is configured per company in **Settings > Email Settings**. These `MAIL_*` keys apply when a company's Email Provider is **Default**. See [Mail Configuration](/docs/self-host/self-host-installation#mail-configuration).

```bash
MAIL_MAILER=smtp
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="billing@example.com"
MAIL_FROM_NAME="Your Company"
MAIL_EHLO_DOMAIN=
POSTMARK_SECRET=
MAILGUN_WEBHOOK_SIGNING_KEY=
SES_AWS_ACCESS_KEY_ID=
SES_AWS_SECRET_ACCESS_KEY=
SES_REGION=us-east-1
SES_TOPIC_ARN=
```

| Key | Default if omitted | What it does |
|---|---|---|
| `MAIL_MAILER` | `smtp` | The default mail driver, for example `smtp`, `postmark`, `mailgun` or `log`. |
| `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, `MAIL_ENCRYPTION` | port `587`, encryption `tls` | SMTP connection settings. Use port `465` for SSL. |
| `MAIL_FROM_ADDRESS`, `MAIL_FROM_NAME` | | The default From address and name. Set both to avoid RFC 2822 errors. |
| `MAIL_EHLO_DOMAIN` | unset | The hostname sent in the SMTP EHLO handshake. Required for some relays, including Gmail SMTP relay. |
| `POSTMARK_SECRET` | unset | Your Postmark server token. Also matched against the webhook `X-API-SECURITY` header. |
| `MAILGUN_WEBHOOK_SIGNING_KEY` | unset | Your Mailgun HTTP webhook signing key. |
| `SES_AWS_ACCESS_KEY_ID`, `SES_AWS_SECRET_ACCESS_KEY`, `SES_REGION`, `SES_TOPIC_ARN` | region `us-east-1` | Amazon SES credentials and the SNS topic used for delivery, bounce and complaint webhooks. |

See [Mail Webhooks](/docs/self-host/self-host-installation#mail-webhooks-delivery-bounce--complaint-tracking) for the webhook URLs.

## How do I set file storage?

```bash
FILESYSTEM_DISK=public
FILESYSTEM_CLOUD=s3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_URL=
AWS_ENDPOINT=
```

| Key | Default if omitted | What it does |
|---|---|---|
| `FILESYSTEM_DISK` | `public` | The default filesystem disk for stored files. Use this key, not the older `FILESYSTEM_DRIVER` name. |
| `FILESYSTEM_CLOUD` | `s3` | The cloud disk name, used when you store files on S3-compatible storage. |
| `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_DEFAULT_REGION`, `AWS_BUCKET`, `AWS_URL`, `AWS_ENDPOINT` | region `us-east-1` | Credentials and endpoint for S3-compatible storage. |

`ADDITIONAL_UPLOAD_EXTENSIONS` is a comma-separated list of extra upload extensions to allow, for example `ADDITIONAL_UPLOAD_EXTENSIONS=mp3,mp4,mkv`.

## How do I set the PDF engine?

```bash
# options: snappdf / phantom / hosted_ninja / gotenberg / simulator
PDF_GENERATOR=hosted_ninja
PHANTOMJS_KEY=
PHANTOMJS_SECRET=
LOG_PDF_HTML=false
LOCAL_DOWNLOAD=false
PDF_PAGE_NUMBER_X=0
PDF_PAGE_NUMBER_Y=-6
```

| Key | Default if omitted | What it does |
|---|---|---|
| `PDF_GENERATOR` | unset in config (the example `.env` uses `hosted_ninja`) | The PDF engine. Valid values are `snappdf`, `phantom`, `hosted_ninja`, `gotenberg` and `simulator`. Official Docker images use `snappdf`. See [PDF conversion issues](/docs/self-host/self-host-troubleshooting#pdf-conversion-issues). |
| `PHANTOMJS_KEY`, `PHANTOMJS_SECRET` | a low-quota demo key for `PHANTOMJS_KEY` | PhantomJS Cloud API key, and a private secret used when that service fetches HTML. |
| `LOG_PDF_HTML` | `false` | When `true`, dumps the HTML of the PDF being rendered, which helps when debugging PDF output. |
| `LOCAL_DOWNLOAD` | `false` | When `true`, embeds the company logo in the PDF from local storage instead of fetching it over the network. Official Docker images already do this. |
| `PDF_PAGE_NUMBER_X`, `PDF_PAGE_NUMBER_Y` | `0` and `-6` | Override the default x and y coordinates of PDF page numbering, when numbering is enabled. |

## How do I set updates, cron and maintenance?

```bash
UPDATE_SECRET=
WEBCRON_SECRET=
DISABLE_AUTO_UPDATE=false
DELETE_PDF_DAYS=0
DELETE_BACKUP_DAYS=0
NINJA_AUTO_BILL_TIME=06:20
```

| Key | Default if omitted | What it does |
|---|---|---|
| `UPDATE_SECRET` | empty | The secret required by `https://your-site.example/update?secret=...`. If it does not match, the app redirects to `/`. Use a private value. |
| `WEBCRON_SECRET` | unset | The secret required by `https://your-site.example/webcron?secret=...`, which runs the scheduler. See [WebCron configuration](/docs/self-host/self-host-troubleshooting#webcron-configuration). |
| `DISABLE_AUTO_UPDATE` | `false` | When `true`, the in-app updater is turned off. |
| `DELETE_PDF_DAYS` | `0` | If set to a number greater than 0, generated PDFs older than this many days are removed when system maintenance runs. |
| `DELETE_BACKUP_DAYS` | `0` | If set to a number greater than 0, backups older than this many days are removed when system maintenance runs. |
| `NINJA_AUTO_BILL_TIME` | `06:20` | The time (HH:MM, in the app timezone) when auto-billing runs. |

`IS_DOCKER=true` turns on Docker-specific behaviour, such as logo handling and log output. Official images typically set this for you.

`TRUSTED_PROXIES` should be set if the app sits behind a reverse proxy and you see SSL or IP-related errors. `API_SECRET`, if set, is an extra check on some unauthenticated API registration and probe routes.

`OPENEXCHANGE_APP_ID` is your [Open Exchange Rates](https://openexchangerates.org/) key, used to update currency rates. See [Currency conversion](/docs/self-host/self-host-installation#currency-conversion).

## How do I set integration keys?

```bash
QUICKBOOKS_CLIENT_ID=
QUICKBOOKS_CLIENT_SECRET=
QUICKBOOKS_REDIRECT_URI=https://your-site.example/quickbooks/authorized
QUICKBOOKS_ENV=sandbox
NORDIGEN_SECRET_ID=
NORDIGEN_SECRET_KEY=
GOCARDLESS_CLIENT_ID=
GOCARDLESS_CLIENT_SECRET=
ZIP_TAX_KEY=
```

| Key | Default if omitted | What it does |
|---|---|---|
| `QUICKBOOKS_CLIENT_ID`, `QUICKBOOKS_CLIENT_SECRET`, `QUICKBOOKS_REDIRECT_URI`, `QUICKBOOKS_ENV` | `QUICKBOOKS_ENV` defaults to `sandbox` | Your Intuit app credentials for QuickBooks Online. Set `QUICKBOOKS_ENV=production` to connect a real company. See [Self Host QuickBooks](/docs/self-host/self-host-quickbooks). |
| `NORDIGEN_SECRET_ID`, `NORDIGEN_SECRET_KEY` | unset | API id and key from [GoCardless Bank Account Data](https://bankaccountdata.gocardless.com/user-secrets/) for bank transaction imports. |
| `GOCARDLESS_CLIENT_ID`, `GOCARDLESS_CLIENT_SECRET` | unset | OAuth credentials if you connect GoCardless as a payment service from your own app. |
| `ZIP_TAX_KEY` | unset | API key from [Zip-Tax](https://zip-tax.com) for address-based US tax rates. |

## Related

- [Install a self-hosted Invoice Ninja](/docs/self-host/self-host-installation)
- [Self Host QuickBooks](/docs/self-host/self-host-quickbooks)
- [Turn debug mode on and off](/docs/self-host/self-host-debug-mode)
- [Remove Invoice Ninja branding](/docs/self-host/self-host-white-labeling)
- [Troubleshoot a self-hosted Invoice Ninja](/docs/self-host/self-host-troubleshooting)
