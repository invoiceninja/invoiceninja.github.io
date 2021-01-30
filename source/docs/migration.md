---
extends: _layouts.docs
section: content
---

# Migrating to V5

## Preparing V4.

The first step needed to prepare to migrate your data across to your new V5 installation is to update your V4 installation to the latest version available. This is a critical step and you will see problems migrating your data if you do not update to the latest V4.

## Installing V5.

Installing V5 is covered in detail [here](/docs/self-host) with resources to cover your needs for Docker / Shared Hosting or Ubuntu/Centos installations.

An important detail with your V5 installation is that your initial user login is identical to your V4 installation.

The migration relies heavily on the Laravel queue system, so you will need to ensure that you have configured the cron scheduler which boots the laravel queue for you. If you do not configure the cron scheduler, the migration will not work and you will end up with a blank company with no content. 

## Starting the migration

Navigate to Settings > Account Management and scroll down until you see the Start Migration button.

![alt text](/assets/images/migration/migration_step_1.png "Start Migration")

After click, you'll get another screen, simply select the Self-host radio button and continue

![alt text](/assets/images/migration/migration_step_2.png "Select Self Hosted")

The next screen asks for the full qualified domain name of your V5 installation, enter this including the http:// or https:// in your URL, ie

http:://ninja.test

![alt text](/assets/images/migration/migration_step_3.png "Enter URL")

The next screen requires you to enter your login credentials, remembering that these should be identical between your V4 and V5 installation. You'll also notice an additional field ```API_SECRET``` this can be ignore if you do not have a value set for this in your ```.env``` file.

![alt text](/assets/images/migration/migration_step_4.png "Authenticate")

If you experience an error at this point, most likely either your credentials are wrong, or the URL you have entered is not correct.

If you successfully authenticate you'll see the next screen which allows you to select the companies you wish to migrate.

Important points at this stage:

* Force migration will overwrite an existing company that has already been migrated to V5, this is destructive and cannot be undone.
* Just selecting the checkbox next to the company name will attempt a migration if the company has never been migrated to the V5 installation.

![alt text](/assets/images/migration/migration_step_5.png "Select Company")
