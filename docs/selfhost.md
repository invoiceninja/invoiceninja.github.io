[[toc]]

# Installation

## Server Requirements

<p>Invoice Ninja has a few system requirements. Built on top of <a href="www.laravel.com/docs/">Laravel</a> it requires a PHP and MySQL server at a minimum with the following version and extensions installed</p> 

* PHP >= 7.3.x
* bcmath extension
* ctype extension
* fileinfo extension
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

### Method 1: Download pre built zip.

<p>A prebuilt zip can be downloaded from our GitHub release page <a href="https://github.com/invoiceninja/invoiceninja/releases">here</a>. You will  need to download the package which is appended with <b>-release</b>, download the file named invoiceninja.zip.</p>

<p>Unzip this file into the virtual host directory you have created.<p>

::: warning
Ensure the file permission have been set to the web server user. For example in Ubuntu this is www-data if you have configured a virtual host with a root directory of `/var/www/html` you would set the ownership like this.
:::

```bash
sudo chown -R www-data:www-data /var/www/html.
```

<p>Web server configuration, a sample NGINX configuration is provided below, it assumes you have PHP 7.4 installed with the PHP FPM extension installed</p>

```bash
server {

listen 80;
server_name invoiceninja.test;
root /var/www/invoiceninja/public;
index index.php index.html index.htm;
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

<p>Create a database on your MySQL compatible server and add a user that has full access to the database, database configuration is out of the scope of this article, more information can be found <a href="https://dev.mysql.com/doc/refman/8.0/en/creating-database.html">here</a></p>

<p>Invoice Ninja currently relies on Headless Chrome to generate PDFs, you will need to install this by running the follow command from the project directory</p>

```bash
npm install
```

<p>Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record</p>

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

<p>Navigate your browser to your installation domain name address with /setup appended ie, <b>www.invoiceninja.test:8000</b> from this page you will configure your database, mailserver and the primary account user, when completed, click Submit and the app will setup your application and redirect you to the login page</p>

### Method 2: Installation from git

<p>For power users installing the app from Github can be done with the following steps</p>

```bash
git clone https://github.com/invoiceninja/invoiceninja.git

git checkout v2

composer update

cp .env.example .env

npm i

php artisan optimize
```

<p>Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record</p>

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

<p>Configure your virtual host, create a database and point your browser to http://your.domain.com/setup and follow the bouncing ball!</p>