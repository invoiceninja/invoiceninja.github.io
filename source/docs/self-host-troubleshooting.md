---
extends: _layouts.docs
section: content
---

# Troubleshooting

## Currency Conversion

<p>Invoice Ninja supports <a href="https://openexchangerates.org/">Open Exchange</a> for currency conversion.
Open Exchange currently provides a free tier which is suitable for daily updates of the exchange rates.
Simply insert a Open Exchange API key into your .env file to enable exchange rate updates:</p>

```bash
OPENEXCHANGE_APP_ID=your_open_exchange_api_key_here
```

Make sure to update your cache afterwards:

```bash
php artisan optimize
```

## Phantom JS

<p>Using Phantom JS Cloud is the default PDF engine <a href="https://phantomjscloud.com/">PhantomJS Cloud</a> to generate your PDFs. They currently provide 500 free PDFs per day which will suffice for most users. If you see the text "Use headless Chrome to generate PDFs locally" when clicking the green **HEALTH CHECK** button, the instruction below applies here.</p>

<p>Phantom JS can be toggled on and off by setting the PHANTOMJS_PDF_GENERATOR to either TRUE or FALSE. The following .env variables are available for configuring PhantomJS.</p>

```bash
PHANTOMJS_PDF_GENERATION=true
PHANTOMJS_KEY='a-demo-key-with-low-quota-per-ip-address'
PHANTOMJS_SECRET='your-secret-here'
```

<p>Once this has been done you'll need to refresh the config cache:</p>

```bash
php artisan optimize
```

If you experience errors with PDF generation, such as `500 Server error` or `Failed to load PDF document` or a continuous loading bar, try getting a PhantomJS key here:  https://dashboard.phantomjscloud.com/dash.html#/signup, Replace it with the prefilled key `a-demo-key-with-low-quota-per-ip-address` and run `php artisan optimize` again.

<x-warning>
For PhantomJS to work, your Invoice Ninja installation web address must be public; localhost installations or those on private networks won't be able to use PhantomJS Cloud.
</x-warning>

## General Troubleshooting

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

