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

### Download pre build zip method

<p>A prebuilt zip can be downloaded from our GitHub release page [here](https://github.com/invoiceninja/invoiceninja/releases)</a>. You will 
need to download the package which is appended with <b>-release<b>, the release should have 3 files, download the file named invoiceninja.zip.</p>

<p>Unzip this file into the virtual host directory you have created, and ensure the file permission have been changed to the web server user in Ubuntu, this is www-data<p>

<p>For example if you have configured a virtual host with a root directory of `/var/www/html` you would set the ownership like this</p>

```bash
sudo chown -R www-data:www-data /var/www/html.
```