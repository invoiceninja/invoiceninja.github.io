---
extends: _layouts.docs 
section: content
---

# Installation

## Server Requirements

<p>Invoice Ninja has a few system requirements. Built on top of <a href="www.laravel.com/docs/">Laravel</a> it requires a PHP and MySQL server at a minimum with the following version and extensions installed.</p>

<x-warning>
You need to setup this version completely from scratch. Do not attempt to overwrite your old version of Invoice Ninja (4.x.x) with this version as the two codebases are completely different.
</x-warning>

* PHP >= 7.3.x
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

## Installing Invoice Ninja

### Installing on CentOS 8 / Ubuntu 20.04 (Recommended)

<p>Technically computers has a very helpful step by step guide on how to install Invoice Ninja v5 from scratch onto CentOS, you can access the guide <a href="https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-centos-8/4293">here</a>. If Ubuntu is more your flavour you can follow his awesome guide <a href="https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-ubuntu-20-04/4588">here</a></p>

### Download pre built zip. (Advanced)

<iframe width="560" height="315" src="https://www.youtube.com/embed/i04EX7WXTVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>A prebuilt zip can be downloaded from our GitHub release page <a href="https://github.com/invoiceninja/invoiceninja/releases">here</a>. You will  need to download the package which is appended with <b>-release</b>, download the file named invoiceninja.zip.</p>

<p>Unzip this file into the virtual host directory you have created.</p>

<x-warning>
Ensure the file permission have been set to the web server user. For example in Ubuntu this is www-data if you have configured a virtual host with a root directory of `/var/www/html` you would set the ownership like this.
</x-warning>

```bash
sudo chown -R www-data:www-data /var/www/html
```

##### Web server configuration
<p>A sample NGINX configuration is provided below, it assumes you have PHP 7.4 installed with the PHP FPM extension installed</p>

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

if (!-e $request_filename) {
    rewrite ^(.+)$ /index.php?q= last;
}

location ~ \.php$ {
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.4-fpm.sock;
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

<p>Navigate your browser to your installation domain name address with /setup appended i.e. <b>www.invoiceninja.test/setup</b> from this page you will configure your database, mailserver and the primary account user, when completed, click Submit and the app will setup your application and redirect you to the login page</p>

### Installation from git (Advanced)

<p>For power users installing the app from Github can be done with the following steps</p>

```bash
git clone https://github.com/invoiceninja/invoiceninja.git

git checkout v5-stable

composer install --no-dev

cp .env.example .env

php artisan key:generate

php artisan optimize
```

##### Cron configuration
<p>Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record</p>

<x-warning>
Ensure you set the scheduler under the web server user i.e. `sudo -u www-data crontab -e`
</x-warning>

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

<p>Configure your virtual host, create a database and point your browser to http://your.domain.com/setup and follow the bouncing ball!</p>

## Shared Hosting

##### Server Requirements

We have tested Invoice Ninja v5 on shared hosting and can confirm that it does work. There are several checks you will need to do prior to confirming whether your Shared Host has the correctly enabled modules. Invoice Ninja relies on:

* proc_open
* exec
* open_basedir
* fpassthru

Without these modules, you will not be able to run Invoice Ninja. We do include some preflight checks of these modules in the Setup workflow, but it is best to check with your host that they support these modules. Some hosts choose to disable these modules as they classify them as security risks.

##### Database configuration

<p>Create a MySQL compatible database in your shared host control panel along with a database user, record the database name, username and password as you'll need this later. Ensure your database user has full access to the database you've just created.

##### Upload release asset

Download the latest release from our <a href="https://github.com/invoiceninja/invoiceninja/releases">Releases</a> page. Note, you'll want to find the latest release which will contain 3 files, the one you need will be annotated as invoiceninja.zip.

Upload this file to your shared host, typically if your webhost uses the industry standard cPanel, you'll want to upload the **invoiceninja.zip** file to the **public_html** directory. Once the upload has completed, using the file manager unzip the file.

##### Run setup

Navigate to https://your.url.com/setup and fill in the form. The setup process will perform some pre flight checks and then attempt run the setup. If it has been successful you will be navigated to the Admin portal. If the setup fails for some reason, you'll be returned to the Setup screen with an error message, there may be additional errors reported in **storage/logs/laravel.log** that will provide more information where the setup has failed.

##### Add the cron job

Add the Laravel scheduler cron job, be sure to include the full path, for a cPanel host it should look like this:

```bash
* * * * * /opt/alt/php73/usr/bin/php /home/<myuseraccount>/public_html/artisan schedule:run
```

## Installing Invoice Ninja (Docker)

If you prefer to use Docker, we have a dedicated repository with detailed instructions on how to get started <a href="https://github.com/invoiceninja/dockerfiles">HERE</a>
