---
extends: _layouts.docs 
section: content
---

# Updating Invoice Ninja

### Docker

When we tag a new release, a new image is built. All that is required for docker users is to bring down the container, pull in the new image and then bring the container up again, these three commands are all that are needed.

```bash
docker-compose down
docker-compose pull
docker-compose up
```

### Git users

If you have installed Invoice Ninja using just git, then all that is required is to pull in the changes, run the migration, update the config cache and restart the queue. These commands are as follows:

```bash 
git pull
php artisan migrate
php artisan optimize
php artisan queue:restart
```

### Shared hosting / ZIP builds

If you have installed the application using the precompiled .zip file, then the internal self updater should perform all the necessary tasks to bring your app up to the latest version. The only strict requirements are:

* The directory is owned recursively by the web user.
* The scheduler cron is running.

The self updater will pull the latest release from our Github repository, extract and overwrite the system files. Prior to attempting any of this, the system performs a recursive file check to ensure _all_ files are owned by the webuser.

If the update button does not work, you can alternatively download the "Source code" and overwrite the folder of your installation, note that there are 3 files always:  https://github.com/invoiceninja/invoiceninja/releases

```
invoiceninja.zip - 170 MB or 500 MB roughly
Source code (zip) - 15 MB roughly
Source code (tar.gz) - 14 MB roughly
```

_(The 2 "Source code" files are the correct ones, the other is the fully built package which includes the ".env" file, if that file is overwritten, then your configuration is also gone)_

<x-warning>Please ensure to delete the .git folder prior to attempting updates on v5.1.50 and over. The updater will fail silently if any hidden folders are present.</x-warning>

After running the updater you'll want to run the update route

```bash
https://url.com/update?secret=
```

The value of the secret query parameter is found in the .env file under the key ```UPDATE_SECRET``` 

