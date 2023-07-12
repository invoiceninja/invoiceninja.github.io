---
extends: _layouts.self_host
section: content
locale: en
---

# Env Variables

```
APP_NAME="Invoice Ninja"
```
Your application name - used in client portal title banner

```
APP_ENV=local
```
Your application environment variable - options include local / development / production

```
APP_KEY=
```
Your application encryption key - used for encryption / decryption of some datapoints within the application. Backup this key in a secure location. Without it your application could be rendered in an invalid state

```
APP_DEBUG=true
```
Boolean option which puts the app in debug mode for additional logging. Keep it set to FALSE unless you need to do some debugging

```
APP_URL=http://ninja.test:8000
```
Your full app URL include HTTP/HTTPS prefix.

```
DB_HOST=localhost
DB_DATABASE=db-ninja-01
DB_USERNAME=ninja
DB_PASSWORD=ninja
DB_PORT=3306
```
Database definitions.

```
LOG_CHANNEL=stack
```
Where we send logs to.

```
REQUIRE_HTTPS=false
```
If you require HTTPS to be forced everywhere in your app, set this to TRUE.

```
BROADCAST_DRIVER=pusher
```
Default laravel env var - not used in Invoice Ninja

```
CACHE_DRIVER=redis
```
Cache driver, options include file / redis / database

```
QUEUE_CONNECTION=database
```
Queue Connection - by default set to sync, if you want your app to perform faster you'll want to change this to database or redis. Note, you'll need to configure your queue workers.

```
SESSION_DRIVER=redis
```
Where your session info lives, options include redis / database / file

```
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```
Your redis configuration - if you are using Redis

```
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

```
POSTMARK_SECRET=
```
Your postmark API key if you wish to use Postmark

```
API_SECRET=password
```
As an additional layer of security for self hosters, this prevents randoms from registering / probing your API

```
ERROR_EMAIL=error@gmail.com
```
System error emails are sent to this email address

```
AWS_ACCESS_KEY_ID=s3_compatible_key
AWS_SECRET_ACCESS_KEY=a_long_and_glorious_key
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=bucket_name
AWS_URL=https://endpoint.com
AWS_ENDPOINT=https://endpoint.com/
```
If using S3 compatible storage, this is where you want to configure it.

```
FILESYSTEM_DRIVER=public
```
Defines where to store your files, options include local / public

```
OPENEXCHANGE_APP_ID=key_r_us
```
Used to pull in exchange rate data

```
EXPANDED_LOGGING=true
```
Pushes additional logging to storage/logs/invoiceninja.log

```
LOG_PDF_HTML=true
```
Used when debugging PDF output, this will dump the full HTML of the PDF object being rendered.

```
UPDATE_SECRET=secret
```
Used as pseudo protection of the /update?secret= route to allow only people with this secret to access this url for updating the app

```
PHANTOMJS_KEY='a-demo-key-with-low-quota-per-ip-address'
PHANTOMJS_SECRET=password
```
Phantom Cloud JS configuration API key and password used to secure the phantom route

```
#options - snappdf / phantom / hosted_ninja
PDF_GENERATOR=snappdf
```
Configures the PDF engine to be used. SnapPDF is the recommended way to generate PDFs however does require direct access to the server to install some required packages.

```
TRUSTED_PROXIES=*
```
If your server sit behind a proxy, you may need to enable trusted_proxies else you will get SSL errors

```
IS_DOCKER=FALSE
```
If you are running a docker setup, you may want to set this to true as there are some docker specific tweaks that are required.

```
LOCAL_DOWNLOAD=FALSE
```
This var circumvents our base64 encoding of the company logo, this may help if the logo is failing to show on the PDF.

```
NINJA_ENVIRONMENT=selfhost
```
This is the default environment setting.

```
WEBCRON_SECRET=secret
```
If using the webcron feature, you'll want to set a password here to prevent unauthorized people accessing this URL                          