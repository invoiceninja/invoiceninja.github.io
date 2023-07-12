---
extends: _layouts.self_host 
section: content
locale: en
---

# Self Host Installation

## Server Requirements

<p>Invoice Ninja has a few system requirements. Built on top of <a href="https://www.laravel.com/docs/">Laravel</a> it requires a PHP and MySQL server at a minimum with the following version and extensions installed.</p>

<x-warning>
You need to setup this version completely from scratch. Do not attempt to overwrite your old version of Invoice Ninja (4.x.x) with this version as the two codebases are completely different.
</x-warning>

* PHP 8.1 with following extensions
    * bcmath
    * ctype
    * fileinfo
    * gd
    * mbstring
    * openssl
    * PDO
    * tokenizer
    * xml
    * curl
    * zip
    * gmp
    * iconv
    * mysqli
    * fpm (if using NGINX)
* MySQL 5.7+ or MariaDB 10.3+
* NGINX or Apache

On ubuntu this should be as simple as running:

```bash
sudo apt install php8.1-bcmath php8.1-gmp php8.1-fileinfo \
    php8.1-gd php8.1-mbstring php8.1-pdo php8.1-xml \
    php8.1-curl php8.1-zip php8.1-gmp php8.1-mysql php8.1-fpm
```

## Installing Invoice Ninja

### Ubuntu 20.04 (Recommended)

Community member TechnicallyComputers has a very helpful step by step guide on how to install Invoice Ninja v5 from scratch onto Ubuntu, you can access the guide [here](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-ubuntu-20-04/4588)

### Installing on CentOS 8

If CentOS is more your Flavour, community member TechnicallyComputers has a very thorough step by step installation guide [here](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-centos-8/4293). 

### Installing on Arch

If Arch Linux is more your flavour, community member brackenhill-mob has a very thorough step by step installation guide [here](https://forum.invoiceninja.com/t/howto-install-invoice-ninja-v5-on-arch-linux/6196)

### Installing on Enterprise Linux

TechnicallyComputers also has a guide for installation Invoice Ninja on Enterprise Linux [here](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-enterprise-linux-8/4293)

### Installing using Docker

We have a dedicated repository with detailed instructions on how to get started <a href="https://github.com/invoiceninja/dockerfiles">HERE</a>.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xo6a3KtLC2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<x-warning>
If you make changes to your env file, please remember to reboot the container for the changes to take effect!
</x-warning>

### Download pre built zip. (Advanced)

<iframe width="560" height="315" src="https://www.youtube.com/embed/i04EX7WXTVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>A prebuilt zip can be downloaded from our GitHub release page <a href="https://github.com/invoiceninja/invoiceninja/releases">here</a>. You will need to download the package named <b>invoiceninja.zip</b></p>

<p>Unzip this file into the virtual host directory you have created.</p>

<x-warning>
Please note the release file invoiceninja.tar excludes the .htaccess file, this archive is solely designed for our self host auto updater. Always use the .zip file when installing a fresh installation.
</x-warning>

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

<p>Create a database on your MySQL compatible server and add a user that has full access to the database. Database configuration is out of the scope of this article, more information can be found <a href="https://dev.mysql.com/doc/refman/8.0/en/creating-database.html">here</a></p>

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

If you are having troubles with your crons, have a look at the troubleshooting section [here](https://invoiceninja.github.io/en/self-host-troubleshooting/#cron-not-running-queue-not-running)

If you would like to improve the performance of your Invoice Ninja installation, then turning on the queue system will dramatically improve the performance of the application.

If you have root access to your system, then simply follow the Laravel [guide](https://laravel.com/docs/8.x/queues#supervisor-configuration) to configure the supervisor service to start and restart your queue.

Forum member @link470 also has the following guide to configure the Supervisor process on Ubuntu 22.04 using the following steps:

#### Supervisor for Invoice Ninja Ubuntu 22.04 LTS

```bash
$ sudo apt-get install supervisor
```

Next, create a configuration file for Invoice Ninja by navigating to the Supervisor configuration directory and starting up your text editor of choice with the file name to use. You can set any file name here ending in .conf. I’m using vi.

```bash
$ cd /etc/supervisor/conf.d
$ sudo vi invoiceninja-worker.conf
```

In the new invoiceninja-worker.conf file, enter the following:.

```bash
[program:invoiceninja-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/invoiceninja/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=8
redirect_stderr=true
stdout_logfile=/var/log/invoiceninja-worker.log
stopwaitsecs=3600
```

There’s 4 main things to change, shown in bold above:

program: The program name you’ll use for the worker
command: The path to the artisan file in the root of the Invoice Ninja application directory
user: The user that’ll be running Supervisor. Typically, this is the web server user (the same user that has ownership over the Invoice Ninja files)
stdout_logfile: Optionally, include the path to a log file for the Supervisor worker
Once these changes are made to suit your environment, save the file.

If you chose to set a log file path, ensure the log file is created and that the user account configured has access to it. For this example, the log is stored in /var/log.

```bash
$ cd /var/log
$ sudo touch invoiceninja-worker.log
$ sudo chown www-data:www-data invoiceninja-worker.log
```

Now that Supervisor is set up, we can read the configuration file:

```bash
$ sudo supervisorctl reread
```

This should tell us that the name of our config (invoiceninja-worker) is available. The above command will also need to be re-ran any time that the config file is updated.

Next, add the new config to the process group for Supervisor (this command also needs to be ran any time the configuration is updated)

```bash
$ sudo supervisorctl update
```
Now, start the Supervisor worker

```bash
$ sudo supervisorctl start invoiceninja-worker:*
```

Running the following will show worker processes as RUNNING (on my installation, I see 8 worker processes, numbered 00 through 07)

```bash
$ sudo supervisorctl status
```

Now that the Supervisor is configured, we need to tell Invoice Ninja to actually use it.

Edit the .env file for Invoice Ninja

```bash
$ sudo vi /path/to/invoiceninja/.env
```

Edit the following line to change it from sync to database, and save the file

```bash
QUEUE_CONNECTION=database
```
Finally, now that everything is set up, reload the config for Invoice Ninja and restart the queue. I’m using www-data for this example as the web server user.

```bash
$ cd /path/to/invoiceninja/
$ sudo -u www-data php artisan optimize
$ sudo -u www-data php artisan queue:restart
```

That’s it! You should now have a functioning Supervisor setup for Invoice Ninja.

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

### Individual mail configurations per company

From v5.5.38 we support per company mail configurations.

What does this mean?

For example if you have two Companies, Acme co and Ninja co you can create separate mail server configurations for each company.

To configure this you will need to prefix your .env  with the primary key of the company ie In your database open the companies table, and if the primary ID column is 1 for Acme co this would be the configuration

```
1_MAIL_HOST=
1_MAIL_PORT=
1_MAIL_USERNAME=null
1_MAIL_PASSWORD=null
1_MAIL_ENCRYPTION=null
```

If Ninja Co company id 5

```
5_MAIL_HOST=
5_MAIL_PORT=
5_MAIL_USERNAME=null
5_MAIL_PASSWORD=null
5_MAIL_ENCRYPTION=null
```

## Currency Conversion

<p>Invoice Ninja supports <a href="https://openexchangerates.org/">Open Exchange</a> for currency conversion.
Open Exchange currently provides a free tier which is suitable for daily updates of the exchange rates.
Simply insert a Open Exchange API key into your .env file to enable exchange rate updates:</p>

```bash
OPENEXCHANGE_APP_ID=your_open_exchange_api_key_here
```

Currencies are updated automatically by using the scheduler. In case the currencies are not available within the UI please double check the database table `currencies` and ensure that `exchange_rate` fields contains realistic values.
