[[toc]]

# Installation

## Server Requirements

<p>Invoice Ninja has a few system requirements. Built on top of <a href="www.laravel.com/docs/">Laravel</a> it requires a PHP and MySQL server at a minimum with the following version and extensions installed.</p>

:::warning
You need to setup this version completely from scratch. Do not attempt to overwrite your old version of Invoice Ninja (4.x.x) with this version as the two codebases are completely different.
::: 

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

### Installing on CentOS 8 / Ubuntu 20.04 (Recommended)

<p>Technically computers has a very helpful step by step guide on how to install Invoice Ninja V5 from scratch onto CentOS, you can access the guide <a href="https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-centos-8/4293">here</a>. If Ubuntu is more your flavour you can follow his awesome guide <a href="https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-ubuntu-20-04/4588">here</a></p>

### Download pre built zip. (Advanced)

<iframe width="560" height="315" src="https://www.youtube.com/embed/i04EX7WXTVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>A prebuilt zip can be downloaded from our GitHub release page <a href="https://github.com/invoiceninja/invoiceninja/releases">here</a>. You will  need to download the package which is appended with <b>-release</b>, download the file named invoiceninja.zip.</p>

<p>Unzip this file into the virtual host directory you have created.<p>

::: warning
Ensure the file permission have been set to the web server user. For example in Ubuntu this is www-data if you have configured a virtual host with a root directory of `/var/www/html` you would set the ownership like this.
:::

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

::: warning
Performance hint!

Enable gzip in your webserver configuration, this will dramatically improve the loading time of the application! Please see the above nginx configuration for a sample of how to load the components of the application with gzip.
:::

##### Database server configuration

<p>Create a database on your MySQL compatible server and add a user that has full access to the database, database configuration is out of the scope of this article, more information can be found <a href="https://dev.mysql.com/doc/refman/8.0/en/creating-database.html">here</a></p>

##### Headless Chrome

<p>Invoice Ninja currently relies on Headless Chrome to generate PDFs, you will need to install this by running the follow command from the project directory</p>

```bash
npm install
```

##### Cron configuration

<p>Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record</p>

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

<p>Navigate your browser to your installation domain name address with /setup appended ie, <b>www.invoiceninja.test/setup</b> from this page you will configure your database, mailserver and the primary account user, when completed, click Submit and the app will setup your application and redirect you to the login page</p>

### Installation from git (Advanced)

<p>For power users installing the app from Github can be done with the following steps</p>

```bash
git clone https://github.com/invoiceninja/invoiceninja.git

git checkout v2

composer update

cp .env.example .env

npm i

php artisan key:generate

php artisan optimize
```

##### Cron configuration
<p>Invoice Ninja relies heavily on the Laravel Scheduler, for this to operate it requires that a cron job to be configured, edit your crontab and enter the following record</p>

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

<p>Configure your virtual host, create a database and point your browser to http://your.domain.com/setup and follow the bouncing ball!</p>

## Installing Invoice Ninja (Docker)
<p>If you prefer to use Docker, we have a dedicated repository with detailed instructions on how to get started <a href="https://github.com/invoiceninja/dockerfiles">HERE</a></p>

## Migrating from V4

<p>Migration of your data from V4 to V5 is done via the Settings panel of V4. Navigate to Settings > Account Management and click on Start Migration</p>

<p>For the migration to be successful you will need to ensure the signup email address is the same between V4 and V5. It is not possible to cross migrate using different email address as part of your credentials</p>

<p>For further help with migrating please chat to us on our <a href="https://forum.invoiceninja.com">Forum</a> or our <a href="https://invoiceninja.slack.com">Slack Channel</a></p>

::: warning
After migration you will want to ensure all of your balances are correct to do this from the command line enter the following command

```bash
php artisan ninja:check-data
```

The command will output errors and identify where balances are not matching.
:::

## Currency Conversion

<p>Invoice Ninja supports <a href="https://openexchangerates.org/">Open Exchange</a> for currency conversion. Open Exchange currently provides a free tier which is suitable for daily updates of the exchange rates. Simply insert a Open Exchange API key into your .env file to enable exchange rate updates</p>

```bash
OPENEXCHANGE_APP_ID=your_open_exchange_api_key_here
```

Make sure to update your cache afterwards

```bash
php artisan optimize
```


## Phantom JS

<p>If it is not possible to install npm/node you can use an <a href="https://phantomjscloud.com/">PhantomJS Cloud</a> to generate your PDFs. They currently provide 500 free PDFs per day, which may suit most users</p>

<p>To override the system generating its own PDFs, you will need to insert the following keys into your .env file</p>

```bash
PHANTOMJS_KEY='a-demo-key-with-low-quota-per-ip-address'
PHANTOMJS_SECRET=your-secret-here
```

<p>Once this has been done you'll need to refresh the config cache</p>

```bash
php artisan optimize
```

:::warning
For PhantomJS to work, your Invoice Ninja installation web address must be public, localhost installations or those on private networks won't be able to use PhantomJS Cloud 
:::

## Trouble shooting

### Erroneous data format for unserializing 'Symfony\Component\Routing\CompiledRoute'

<p>The most common cause of this issue is running multiple version of PHP, if the caches are built with a different version of PHP you may see the above error as differing versions of PHP may not be interoperable on the same installation. Ensure you are running the same CLI and Web PHP version to prevent any errors</p>

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

### PDFs not generating. Timeouts

<p>This may be due to some packages in the underlying subsystem not being installed which causes headless chrome to fail. In the logs you may see an error such as</p>

```
chrome: error while loading shared libraries: libX11-xcb.so.1: cannot open shared object file: No such file or directory
```

<p>To fix this you will need to install packages to support xcb </p>

```bash
sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

::: warning
If you are having troubles installing NPM/NODE you may want to consider using PhantomJS Cloud, instructions to implement this can be found here <a href="https://invoiceninja.github.io/selfhost.html#phantom-js">Phantom JS</a>
:::

### Using multiple versions of NPM / NODE

<p>If you are running mulitple versions of Node/NPM you may want to specify path to the correct version. To enable this you will need to set the environment variables as follows in the .env file</p>

```
NODE_PATH=/usr/bin...path_to_node
NPM_PATH=/usr/bin....path_to_npm
```

::: warning
After updating the .env file you will need to recache the configuration, the simplest way to do this is.
:::

```bash
php artisan optimize
```