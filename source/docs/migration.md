---
extends: _layouts.docs
section: content
---

# Migrating to V5

## Preparing V4.

The first step needed to prepare to migrate your data across to your new V5 installation is to update your V4 installation to the [latest version](https://download.invoiceninja.com) available. This is a critical step and you will see problems migrating your data if you do not update to the latest V4.

## Installing V5.

Installing V5 is covered in detail [here](/docs/self-host-installation) with resources to cover your needs for Docker / Shared Hosting or Ubuntu/Centos installations.

An important detail with your V5 installation is that your initial user login is identical to your V4 installation.

The migration relies heavily on the Laravel queue system, so you will need to ensure that you have configured the cron scheduler which boots the laravel queue for you. If you do not configure the cron scheduler, the migration will not work and you will end up with a blank company with no content. 

## Starting the migration

![alt text](/assets/images/migration/migration_step_1.png "Start migration")

Navigate to Settings > Account Management and scroll down until you see the Start Migration button.

![alt text](/assets/images/migration/migration_step_2.png "Select self hosted")

After clicking ```Start migration```, you'll get another screen, simply select the self-host radio button and continue.

![alt text](/assets/images/migration/migration_step_3.png "Enter URL")

The next screen asks for the full qualified domain name of your V5 installation, enter this including the http:// or https:// in your URL, ie

```http:://ninja.test```

![alt text](/assets/images/migration/migration_step_4.png "Authenticate")

The next screen requires you to enter your login credentials, remembering that these should be identical between your V4 and V5 installation. You'll also notice an additional field ```API_SECRET``` this can be ignore if you do not have a value set for this in your ```.env``` file.

If you experience an error at this point, most likely either your credentials are wrong, or the URL you have entered is not correct.

![alt text](/assets/images/migration/migration_step_5.png "Select company")

If you successfully authenticate you'll see the next screen which allows you to select the companies you wish to migrate.

Important points at this stage:

* Force migration will overwrite an existing company that has already been migrated to V5, this is destructive and cannot be undone.
<br>**NOTE:** If the 1st Migration fails and only part of the data got transferred, PURGE and DELETE the Data/Company and retry the process with "Force migration" checked.
* Just selecting the checkbox next to the company name will attempt a migration if the company has never been migrated to the V5 installation. This is a non-destructive migration. ie. it will not overwrite a matching company.

![alt text](/assets/images/migration/migration_step_6.png "Migration started")

## V5 Migration Process

With a little luck, you should have already received an email notification advising the migration has completed!

There are a couple of things you will want to check to ensure the data has come across correctly:

* Ensure your company logo has migrated (Settings > Company Details > Logo)
* Ensure the migrated data passes our data quality check by running

```php
php artisan ninja:check-data
```

A series of checks are run and if you see 0 issues, that means your data has come across correctly.

* You'll also want to inspect the logs located in :

```bash
storage/logs/laravel.log
```

Inside here you will see output such as this:

```bash
[2021-01-30 10:46:04] development.INFO: Importing account  
[2021-01-30 10:46:04] development.INFO: Importing company  
[2021-01-30 10:46:04] development.INFO: Importing users  
[2021-01-30 10:46:04] development.INFO: Importing payment_terms  
[2021-01-30 10:46:04] development.INFO: Importing tax_rates  
[2021-01-30 10:46:04] development.INFO: Importing clients  
[2021-01-30 10:46:04] development.INFO: Importing company_gateways  
[2021-01-30 10:46:04] development.INFO: Importing client_gateway_tokens  
[2021-01-30 10:46:04] development.INFO: Importing vendors  
[2021-01-30 10:46:04] development.INFO: Importing projects  
[2021-01-30 10:46:04] development.INFO: Importing products  
[2021-01-30 10:46:04] development.INFO: Importing credits  
[2021-01-30 10:46:04] development.INFO: Importing invoices  
[2021-01-30 10:46:06] development.INFO: Importing recurring_invoices  
[2021-01-30 10:46:06] development.INFO: Importing quotes  
[2021-01-30 10:46:07] development.INFO: Importing payments  
[2021-01-30 10:46:08] development.INFO: Importing expense_categories  
[2021-01-30 10:46:08] development.INFO: Importing task_statuses  
[2021-01-30 10:46:08] development.INFO: Importing expenses  
[2021-01-30 10:46:08] development.INFO: Importing tasks  
[2021-01-30 10:46:08] development.INFO: Importing documents  
[2021-01-30 10:46:09] development.INFO: Completed🚀🚀🚀🚀🚀 at 2021-01-30 
[2021-01-30 10:46:09] development.INFO: latest version = 5.0.56  
```

This example output would indicate that each entity was successfully brought across, if a problem is detected early the migration will fail early and return an error. A Laravel error will also be thrown indicating the exact issue.

## Troubleshooting

If you are experiencing issues with the migration not running as expected please run through the following checklist:

* Ensure directories are read/writable by the webuser (ie www-data)
* Ensure the cron scheduler is running (and working) - You can verify it is working by inspecting the ```jobs``` table in the database, it should be empty
* Inspect the log file /storage/logs/laravel.log for further information.
* If you are still experiencing issues, turn on advanced logging by adding the following variable to your .env file. EXPANDED_LOGGING=true then optimize with php artisan optimize . Then attempt the migration again and afterwards inspect the log file in storage/logs/invoiceninja.log
* If using `https://` ensure you are using a signed SSL certificate, you may get authentication errors if you attempt to use a self signed certificate. Free ssl's are available from [lets encrypt](https://letsencrypt.org)
* Still having troubles? search the [forum](https://forum.invoiceninja.com) or come and chat with us on [slack](https://invoiceninja.slack.com)

## Migration Failed notifications

The app will do its best to report back a human readable error if the migration fails for some reason.

Some known issues when migrating to our hosted platform include:

```
"This user is unable to be attached to this company. Perhaps they have already registered a user on another account?"
```

If you see this error it indicates that one of your users has already registered their own account on the hosted platform. We do not support cross account users for security purposes. You'll need to change the user's email address in your V4 installation to a different email address for the migration to succeed.