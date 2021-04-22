---
extends: _layouts.docs
section: content
---

# Troubleshooting

## PDFs don't appear to be updating

If you are using Cloudflare, then most likely Cloudflare could be caching your static data. To force cache busting, edit your nginx.conf file and add in the following snippet

```bash
location ~* \.pdf$ {
    add_header Cache-Control no-store;
}
```

## Email not sending

If you are experiencing issues sending emails be sure to double check your .env file contains the correct fields configured. 

```
MAIL_MAILER=smtp
MAIL_HOST=localhost
MAIL_PORT=1025
MAIL_USERNAME='email@gmail.com'
MAIL_PASSWORD='supersecretpassword'
MAIL_ENCRYPTION='tls'
```

<x-warning>If you are using Gmail - ensure you have less secure apps turned on.</x-warning>

The ```MAIL_MAILER``` field defines which email driver you wish to use, this could be postmark, maildriver, smtp - anything that Laravel 8 support natively is supported in this app.

If the mail config is correct, the next place to check would be to check the error logs for any errors that are being thrown, the error log is found in ```storage/logs/laravel.log```

The final source of information in diagnosing mail troubles is to inspect the ```System Logs``` tab in the dashboard of the application, in here we log any messages from the mail server itself which may be instructive as to the cause of your issues.

If you are using the Queue system ie. QUEUE_CONNECTION=database then you may also want to check the ```jobs``` table in the database, there should be _no_ records in that table... If there are records in the table it means that your queue is not running and therefore no mail jobs are being processed.

It's possible the emails are sent but are blocked for DNS, SPF, DKIM or other reasons. In these cases emailing a test invoice to [mail-tester.com](https://mail-tester.com) can help debug certain problems.

## PDF conversion issues.

We strongly recommend using the built in [snappdf](https://github.com/beganovich/snappdf) package which is a highly performant PDF generator based on the headless chrome/chromium binary. This package is perfect for users that have root access to their server and are able to install the required dependencies if needed.

Snappdf is also the default PDF engine in our [Docker](https://github.com/invoiceninja/dockerfiles) image, so if you prefer a very simple installation please consider our Docker setup as it is very fast to get going!

If you are on shared hosting, snappdf probably will be impossible for you to use as you do not have access to the subsystem to install the required packages. Instead, you will need to use a hosted PDF service, the two that Invoice Ninja v5 supports is [PhantomJS Cloud](https://phantomjscloud.com/) and our own hosted PDF generator that users with a white label license can use for _free_ to generate _unlimited_ PDFs.

### Phantom JS

Phantom JS Cloud is the default PDF engine [PhantomJS Cloud](https://phantomjscloud.com/) to generate your PDFs, the default API key that comes with a clean installation can generate 100 PDFs per day. If you register for an API key, you will be able to generate 500 PDFs per day, which should suit most users.

Phantom JS can be toggled on and off by setting the PHANTOMJS_PDF_GENERATOR to either TRUE or FALSE. The following .env variables are available for configuring PhantomJS.

```bash
PHANTOMJS_PDF_GENERATION=true
PHANTOMJS_KEY='a-demo-key-with-low-quota-per-ip-address'
PHANTOMJS_SECRET='your-secret-here'
```

<p>Once this has been done you'll need to refresh the config cache:</p>

```bash
php artisan optimize
```

If you experience errors with PDF generation, such as `500 Server error` or `Failed to load PDF document` or a continuous loading bar, try getting a PhantomJS key [here](https://dashboard.phantomjscloud.com/dash.html#/signup), Replace it with the prefilled key `a-demo-key-with-low-quota-per-ip-address` and run `php artisan optimize` again.

<x-warning>
For PhantomJS to work, your Invoice Ninja installation web address must be public; localhost installations or those on private networks won't be able to use PhantomJS Cloud.
</x-warning>

### Hosted Invoice Ninja PDF generation

If you are a white label user, then to enable the Invoice Ninja hosted PDF generator you will need to add a variable to the .env file as follows

```
NINJA_HOSTED_PDF=true
```  

You will also need to turn OFF PhantomJS cloud

```
PHANTOMJS_PDF_GENERATION=false
```

<x-warning>
Don't forget to refresh your cache (not needed for shared hosting!) with php artisan optimize
</x-warning>

## Cron not running / Queue not running

If you are faced with your recurring invoices not firing, or your reminders not sending, then most likely your cron job isn't working. The first thing is to make sure you have your cron jobs configured correctly by following the guide [here](https://invoiceninja.github.io/docs/self-host-installation/#cron-configuration-1) 

If you are using shared hosting, then will need to add an additional parameter to the cron command which looks like this:

```
cd /path/to/root/folder && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

## Platform specific issues

### General advice

When facing errors, first set `APP_DEBUG=true` in `.env` and execute `php artisan optimize` to get more extensive debug information.

### Erroneous data format for unserializing 'Symfony\Component\Routing\CompiledRoute'

<p>The most common cause of this issue is running multiple version of PHP, if the caches are built with a different version of PHP you may see the above error as differing versions of PHP may not be interoperable on the same installation. Ensure you are running the same CLI and Web PHP version to prevent any errors/</p>

### Unable to connect to database after installation

<p>You may need to restart the queue like this</p>

```bash
php artisan queue:restart
```

### Nginx: 413 – Request Entity Too Large

This error indicated that the client_max_body_size parameter in NGINX is too small, you will need to edit your nginx config and increase the size

```bash
client_max_body_size 100M;
```

### Proxy configuration.

For users that rely on configuring a reverse proxy, please consider this post on our forum which details steps which may assist in configuring a reverse proxy.

<a href="https://forum.invoiceninja.com/t/selfhosting-setup-failing/5651/8">Reverse Proxy Invoice Ninja</a>

### Problems with migration

If you are experiencing issues with the migration not running as expected please run through the following checklist:

 * Ensure directories are read/writable by the webuser (ie www-data)
 * Ensure the cron scheduler is running (and working) - You can verify it is working by inspecting the ```jobs``` table in the database, it should be empty
 * Inspect the log file /storage/logs/laravel.log for further information.
 * If you are still experiencing issues, turn on advanced logging by adding the following variable to your .env file. ```EXPANDED_LOGGING=true``` then optimize with ```php artisan optimize``` . Then attempt the migration again and afterwards inspect the log file in storage/logs/invoiceninja.log

### libatk.so not loading for Google

Pdf generation will not working using the inbuilt PDF engine without some subsystem dependencies, please consult this resource for the list of necessary libraries for each supported platform <a href="https://github.com/beganovich/snappdf#headless-chrome-doesnt-launch-on-unix">Snappdf required libraries</a>

### WebCron configuration

Some systems do not allow cron configurations, one work around is to use a web cron service which can hit a defined endpoint which executes the scheduler via a GET HTTP request. Invoice Ninja has implemented a small service to allow a webcron service to hit the end point:

```
https://domain.com/webcron?secret=
```

To configure the service, you need to add a .env variable

```
WEBCRON_SECRET=password
```

Define your own secret password and then re optimize the cache The service will then be activated.

### Installing in a subdirectory.

It is possible to install Invoice Ninja in a subdirectory outside the doc root, to enable this you will need to update the .htaccess file (only if you are using the Apache webserver),

```php
RewriteRule ^(.*)$ public/$1 [L]
```

should be updated to

```php
RewriteRule ^(.*)$ subdirectoryname/public/$1 [L]
```

### Endless setup loop

If you are finding that all your pre setup checks are passing however you keep falling back to the setup screen, this could indicate that you are missing the ```mysql-client``` library which is needed to perform the initial migration. If you are unable to install this for some reason (ie. XAMPP) then you'll need to run the migrations manually by entering the following at the command prompt

```
php artisan migrate:fresh --seed 
```

### flock() expects parameter 1 to be resource, bool given

This error is thrown from deep within PHP and indicates a permissions issue - most likely the public/storage and/or storage/ directory is not writable by the web user, depending on your platform, you'll need to run something like:

```
sudo chown -R www-data:www-data public/storage
```

and/or

```
sudo chown -R www-data:www-data storage/
```

### Unresponsive UI

If for some reason the UI becomes unresponsive, you may need to flush some subsystem configuration and rebuild. It is possible to do this by navigating to the `/update?secret=`  route, ie. https://invoiceninja.test/update?secret= This will perform a number of system clean ups and may resolve issues resulting from an incomplete upgrade. To protect this route, you are advised to add a .env pararameter `UPDATE_SECRET=a_secret_passcode` this will restrict the route to users with the UPDATE_SECRET passcode.