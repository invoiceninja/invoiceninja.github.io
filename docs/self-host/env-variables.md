---
title: "Env Variables"
sidebar_position: 6
---
```bash
LICENSE_KEY="your_white_label_license"
```

Your white label license key - required if using e-invoicing where you are proxying your einvoices via Invoice Ninja onto the PEPPOL network.

```bash
APP_NAME="Invoice Ninja"
```

Your application name - used in client portal title banner

```bash
APP_ENV=local
```

Your application environment variable - options include local / development / production

```bash
APP_KEY=
```

Your application encryption key - used for encryption / decryption of some datapoints within the application. Backup this key in a secure location. Without it your application could be rendered in an invalid state

```bash
APP_DEBUG=true
```

Boolean option which puts the app in debug mode for additional logging. Keep it set to FALSE unless you need to do some debugging

```bash
APP_URL=http://ninja.test:8000
```

Your full app URL include HTTP/HTTPS prefix.

```bash
DB_HOST=localhost
DB_DATABASE=db-ninja-01
DB_USERNAME=ninja
DB_PASSWORD=ninja
DB_PORT=3306
```

Database definitions.

```bash
LOG_CHANNEL=stack
```

Where we send logs to.

```bash
REQUIRE_HTTPS=false
```

If you require HTTPS to be forced everywhere in your app, set this to TRUE.

```bash
BROADCAST_DRIVER=pusher
```

Default laravel env var - not used in Invoice Ninja

```bash
CACHE_DRIVER=redis
```

Cache driver, options include file / redis / database

```bash
QUEUE_CONNECTION=database
```

Queue Connection - by default set to sync, if you want your app to perform faster you'll want to change this to database or redis. Note, you'll need to configure your queue workers.

```bash
SESSION_DRIVER=redis
```

Where your session info lives, options include redis / database / file

```bash
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

Your redis configuration - if you are using Redis

```bash
MAIL_MAILER=smtp
MAIL_HOST=localhost
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS='jimmy@gmail.com'
MAIL_FROM_NAME='David Canary'
```

Your mail configuration

```bash
POSTMARK_SECRET=
```

Your postmark API key if you wish to use Postmark

```bash
API_SECRET=password
```

As an additional layer of security for self hosters, this prevents randoms from registering / probing your API

```bash
ERROR_EMAIL=error@gmail.com
```

System error emails are sent to this email address

```bash
AWS_ACCESS_KEY_ID=s3_compatible_key
AWS_SECRET_ACCESS_KEY=a_long_and_glorious_key
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=bucket_name
AWS_URL=https://endpoint.com
AWS_ENDPOINT=https://endpoint.com/
```

If using S3 compatible storage, this is where you want to configure it.

```bash
FILESYSTEM_DRIVER=public
```

Defines where to store your files, options include local / public

```bash
OPENEXCHANGE_APP_ID=key_r_us
```

Used to pull in exchange rate data

```bash
EXPANDED_LOGGING=true
```

Pushes additional logging to storage/logs/invoiceninja.log

```bash
LOG_PDF_HTML=true
```

Used when debugging PDF output, this will dump the full HTML of the PDF object being rendered.

```bash
UPDATE_SECRET=secret
```

Used as pseudo protection of the /update?secret= route to allow only people with this secret to access this url for updating the app

```bash
PHANTOMJS_KEY='a-demo-key-with-low-quota-per-ip-address'
PHANTOMJS_SECRET=password
```

Phantom Cloud JS configuration API key and password used to secure the phantom route

```bash
#options - snappdf / phantom / hosted_ninja
PDF_GENERATOR=snappdf
```

Configures the PDF engine to be used. SnapPDF is the recommended way to generate PDFs however does require direct access to the server to install some required packages.

```bash
PDF_PAGE_NUMBER_X=
PDF_PAGE_NUMBER_Y=
```

Override the default x/y coordinates of page numbering on PDFs. 

```bash
TRUSTED_PROXIES=*
```

If your server sit behind a proxy, you may need to enable trusted_proxies else you will get SSL errors

```bash
IS_DOCKER=FALSE
```

If you are running a docker setup, you may want to set this to true as there are some docker specific tweaks that are required.

```bash
LOCAL_DOWNLOAD=FALSE
```

This var circumvents our base64 encoding of the company logo, this may help if the logo is failing to show on the PDF.

```bash
NINJA_ENVIRONMENT=selfhost
```

This is the default environment setting.

```bash
WEBCRON_SECRET=secret
```

If using the webcron feature, you'll want to set a password here to prevent unauthorized people accessing this URL

```bash
ZIP_TAX_KEY=
```

The API key from [Zip-Tax](https://zip-tax.com) required to support address based tax rates in the US

```bash
NORDIGEN_SECRET_ID=
NORDIGEN_SECRET_KEY=
```

The API id and key from [GoCardless/Nordigen](https://bankaccountdata.gocardless.com/user-secrets/) required for bank transaction imports

```bash
DELETE_BACKUP_DAYS
```

The number of days that backups are stored. Any backups created after this will be purged when system maintenance runs

```bash
ADDITIONAL_UPLOAD_EXTENSIONS
```

Additional upload extensions that are to be allowed, this should be a comma separated string ie `ADDITIONAL_UPLOAD_EXTENSIONS='mp3,mp4,mkv'`

```bash
PDF_PAGE_NUMBER_X=0
PDF_PAGE_NUMBER_Y=-6
```

Controls the x/y coordinates of the PDF page numbering (if enabled)
