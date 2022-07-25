---
extends: _layouts.docs 
section: content
---

# Installation

## Server Requirements

<p>Invoice Ninja has a few system requirements. Built on top of <a href="https://www.laravel.com/docs/">Laravel</a> it requires a PHP and MySQL server at a minimum with the following version and extensions installed.</p>

<x-warning>
You need to setup this version completely from scratch. Do not attempt to overwrite your old version of Invoice Ninja (4.x.x) with this version as the two codebases are completely different.
</x-warning>

* PHP >= 8.1.x
* bcmath extension
* ctype extension
* fileinfo extension
* gd extension
* json extension
* mbstring extension
* openssl extension
* PDO extension
* tokenizer extension
* xml extension
* curl extension
* zip extension
* gmp extension
* mysqli extension
* MySQL / MariaDB Server

On ubuntu this should be as simple as running:

```bash
sudo apt install php8.1-bcmath php8.1-gmp php8.1-fileinfo php8.1-gd php8.1-json php8.1-mbstring php8.1-pdo php8.1-xml php8.1-curl php8.1-zip php8.1-gmp php8.1-mysqlnd
```

## Installing Invoice Ninja

### Installing on CentOS 8 / Ubuntu 20.04 (Recommended)

Technically computers has a very helpful step by step guide on how to install Invoice Ninja v5 from scratch onto CentOS, you can access the guide [here](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-centos-8/4293). If Ubuntu is more your flavour you can follow his awesome guide [here](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-ubuntu-20-04/4588)

### Installing on Arch

If Arch Linux is more your flavor, brackenhill-mob from our forum has a very thorough step by step installation guide [here](https://forum.invoiceninja.com/t/howto-install-invoice-ninja-v5-on-arch-linux/6196)

### Installing on Enterprise Linux

Technically computers also has a guide for installation Invoice Ninja on Enterprise Linux [here](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-enterprise-linux-8/4293)

### Download pre built zip. (Advanced)

<iframe width="560" height="315" src="https://www.youtube.com/embed/i04EX7WXTVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>A prebuilt zip can be downloaded from our GitHub release page <a href="https://github.com/invoiceninja/invoiceninja/releases">here</a>. You will need to download the package named <b>invoiceninja.zip</b></p>

<p>Unzip this file into the virtual host directory you have created.</p>

#### File Permissions

<x-warning>
Ensure the file permission have been set to the web server user. For example in Ubuntu this is www-data if you have configured a virtual host with a root directory of `/var/www/html` you would set the ownership like this.
</x-warning>

```bash
sudo chown -R www-data:www-data /var/www/html
sudo find ./ -type d -exec chmod 755 {} \;
```

##### Web server configuration
<p>A sample NGINX configuration is provided below, it assumes you have PHP 8.1 installed with the PHP FPM extension installed</p>

```bash
server {

listen 80;
server_name invoiceninja.test;
root /var/www/invoiceninja/public;
index index.php index.html index.htm;
client_max_body_size 20M;

gzip on;
gzip_types      application/javascript application/x-javascript text/javascript text/plain application/xml application/json;
gzip_proxied    no-cache no-store private expired auth;
gzip_min_length 1000;

location / {
    try_files $uri $uri/ =404;
}

location ~* \.pdf$ {
    add_header Cache-Control no-store;
}

if (!-e $request_filename) {
    rewrite ^(.+)$ /index.php?q= last;
}

location ~ \.php$ {
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php8.1-fpm.sock;
}

location ~ /\.ht {
    deny all;
}

}
```

<x-warning>
Performance hint!

Enable gzip in your webserver configuration, this will dramatically improve the loading time of the application! Please see the above nginx configuration for a sample of how to load the components of the application with gzip.
</x-warning>

##### Database server configuration

<p>Create a database on your MySQL compatible server and add a user that has full access to the database, database configuration is out of the scope of this article, more information can be found <a href="https://dev.mysql.com/doc/refman/8.0/en/creating-database.html">here</a></p>

##### Cron configuration

<x-warning>
Ensure you set the scheduler under the web server user i.e. `sudo -u www-data crontab -e`
</x-warning>

<p>Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record.</p>

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

<p>If you are using shared hosting, then you will need to add an additional parameter to the cron command which looks like this:</p>

```
* * * * * cd /path/to/root/folder && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

### Installation from git (Advanced)

<p>For power users installing the app from Github can be done with the following two steps</p>

```bash
git clone -b v5-stable --single-branch https://github.com/invoiceninja/invoiceninja.git

composer create-project --no-dev
```

### Final setup steps

<p>Once you have configured your virtual host, copy the same .env file </p>


```bash
.env.example

``` 
to 

```bash
.env

``` 
<p>
then create a database and point your browser to http://your.domain.com/setup - the setup process will check a number of system settings such as PDF generation, database and mail settings and also allow you to configure the first account on the system, click Submit and the app will setup your application and redirect you to the login page</p>


#### Cron configuration
<p>Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record</p>

<x-warning>
Ensure you set the scheduler under the web server user i.e. `sudo -u www-data crontab -e`
</x-warning>

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

Some Webservers require the Cronjob to end with `> /dev/null 2>&1` instead of `>> /dev/null 2>&1` for it to work.
Also check if your Webserver Cronjob needs to be set with `/private_html/` instead of `/public_html/` within the path.
And sometimes it's enough to put `php` instead of `/opt/alt/php73/usr/bin/php` in the cronjob scheduler command to execute.

If you still encounter errors, it may be helpful to temporarily remove `>> /dev/null 2>&1` from  the cron, this should output the cron to the `cron.log`

If you are having troubles with your crons, have a look at the troubleshooting section [here](https://invoiceninja.github.io/docs/self-host-troubleshooting/#cron-not-running-queue-not-running)

If you would like to improve the performance of your Invoice Ninja installation, then turning on the queue system will dramatically improve the performance of the application.

If you have root access to your system, then simply follow the Laravel [guide](https://laravel.com/docs/8.x/queues#supervisor-configuration) to configure the supervisor service to start and restart your queue.

You will then need to update the QUEUE_CONNECTION variable in the .env file as follows:

```
QUEUE_CONNECTION=database
```

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

#### Server Requirements

We have tested Invoice Ninja v5 on shared hosting and can confirm that it does work. Softaculous has a one click installer which makes the entire setup process simple, however if you do not have Softaculous available it may still be possible to install Invoice Ninja. There are several checks you will need to do prior to confirming whether your Shared Host has the correctly enabled modules. Invoice Ninja relies on:

* proc_open
* exec
* open_basedir
* fpassthru

Without these modules, you will not be able to run Invoice Ninja. We do include some preflight checks of these modules in the Setup workflow, but it is best to check with your host that they support these modules. Some hosts choose to disable these modules as they classify them as security risks.

#### Database configuration

Create a MySQL compatible database in your shared host control panel along with a database user, record the database name, username and password as you'll need this later. Ensure your database user has full access to the database you've just created.

#### Upload release asset

Download the latest release from our <a href="https://github.com/invoiceninja/invoiceninja/releases">Releases</a> page. Note, you'll want to find the latest release which will contain 3 files, the one you need will be annotated as invoiceninja.zip.

Upload this file to your shared host, typically if your webhost uses the industry standard cPanel, you'll want to upload the **invoiceninja.zip** file to the **public_html** directory. Once the upload has completed, using the file manager unzip the file.

You will also need to copy/rename the .env.example file to .env

#### Run setup

Navigate to https://your.url.com/setup and fill in the form. The setup process will perform some pre flight checks and then attempt run the setup. If it has been successful you will be navigated to the Admin portal. If the setup fails for some reason, you'll be returned to the Setup screen with an error message, there may be additional errors reported in **storage/logs/laravel.log** that will provide more information where the setup has failed.

If you see a **404 webserver error** and use **sub.domain.com** make sure to point the path for the subdomain towards the `/public` folder from the extracted invoiceninja.zip file, for example: ``/domains/domain.com/public_html/invoices2/public/``

##### Add the cron job

Add the Laravel scheduler cron job, be sure to include the full path, for a cPanel host it should look like this:

```
* * * * * cd /path/to/root/folder && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

## Installing Invoice Ninja (Docker)

If you prefer to use Docker, we have a dedicated repository with detailed instructions on how to get started <a href="https://github.com/invoiceninja/dockerfiles">HERE</a>

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

<x-warning>
    NOTE: if you are using SSL encryption the MAIL_PORT is 465. TLS encryption is on port 587.
</x-warning>

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
