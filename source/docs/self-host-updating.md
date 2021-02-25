---
extends: _layouts.docs 
section: content
---

# Updating Invoice Ninja

### Docker

When we tag a new release, a new image is built. All that is required for docker users is to bring down the container, pull in the new image and then bring the container up again, these three commands are all that is needed.

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
* Git is available for execution. 
* The scheduler cron is running.