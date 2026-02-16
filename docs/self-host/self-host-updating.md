---
title: "Self Host Updating"
sidebar_position: 5
---
# Self Host Updating

### Docker

When we tag a new release, a new image is built. All that is required for docker users is to bring down the container, pull in the new image and then bring the container up again, these three commands are all that are needed.

```bash
docker-compose down
docker-compose pull
docker-compose up
```

### Git users

If you have installed Invoice Ninja using just git, then all that is required is to pull in the changes and to call the post-update command. These commands are as follows:

```bash 
git pull
composer install -o --no-dev
php artisan ninja:post-update
```

### Shared hosting / ZIP builds

If you have installed the application using the precompiled .zip file, then the internal self updater should perform all the necessary tasks to bring your app up to the latest version. The only strict requirements are:

* The directory is owned recursively by the web user.
* The scheduler cron is running.
* 1024M for the PHP ```memory_limit``` to run the update

The self updater will pull the latest release from our Github repository, extract and overwrite the system files. Prior to attempting any of this, the system performs a recursive file check to ensure _all_ files are owned by the webuser.

If the update button does not work, you can alternatively download the invoiceninja.tar file and overwrite the folder of your installation, note that there are 3 files always:  https://github.com/invoiceninja/invoiceninja/releases

```bash
invoiceninja.tar - 170 MB or 500 MB roughly
Source code (zip) - 15 MB roughly
Source code (tar.gz) - 14 MB roughly
```

:::warning
Please ensure to delete the .git folder prior to attempting updates on v5.1.50 and over. The updater will fail silently if any hidden folders are present.
:::

After running the updater you'll want to run the update route

```bash
https://url.com/update?secret=
```

The value of the secret query parameter is found in the .env file under the key ```UPDATE_SECRET``` 

