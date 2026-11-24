---
title: "Update a self-hosted Invoice Ninja"
sidebar_label: "Self Host Updating"
sidebar_position: 5
description: "Update a self-hosted Invoice Ninja install with INmanage, Docker, git, or the in-app updater, including the /update?secret= route and php artisan ninja:post-update."
---

# Update a self-hosted Invoice Ninja

How you update depends on how you installed the app. Use the same method you used to install, then run any follow-up commands for that method.

## How do I update with the INmanage CLI? {#inmanage-cli}

If your Invoice Ninja instance is managed by the [INmanage CLI](/docs/self-host/self-host-installation#choose-your-install-path), updates are a single command:

```bash
inm core update
```

The script creates a pre-update snapshot, applies the latest Invoice Ninja release, checks file integrity, clears caches, and restarts the queue worker. If something goes wrong, roll back with:

```bash
inm core update rollback last
```

Snapshots are timestamped and stored in the INmanage backup directory, so you can audit or restore them later. See the [INmanage repository](https://github.com/DrDBanner/inmanage) for advanced flags and automation.

## How do I update a Docker install? {#docker}

When a new release is tagged, a new image is built. Bring the container down, pull the new image, then bring the container up again:

```bash
docker-compose down
docker-compose pull
docker-compose up
```

If your Docker install uses the Compose plugin (Docker Compose V2), the same steps are `docker compose down`, `docker compose pull` and `docker compose up`.

## How do I update a git install? {#git-users}

If you installed Invoice Ninja with git, pull the changes, install PHP dependencies, then run the post-update command:

```bash
git pull
composer install -o --no-dev
php artisan ninja:post-update
```

`php artisan ninja:post-update` runs database migrations, clears config, view and application caches, and restarts the queue worker.

## How do I update a shared-hosting or ZIP install? {#shared-hosting--zip-builds}

If you installed from the precompiled release archive, you can use the in-app updater (labeled **Update App**). It downloads `invoiceninja.tar` from the [GitHub releases](https://github.com/invoiceninja/invoiceninja/releases) page, extracts it, and overwrites the application files. Before it downloads, it checks that application files are writable (it skips the `.git` and `vendor` directories in that check).

The updater is started from the app. It is not available if auto-update has been turned off with `DISABLE_AUTO_UPDATE=true` in `.env`.

If the in-app update does not run, you can download `invoiceninja.tar` from the releases page and overwrite your installation folder with it. Use that release tarball, not the generic "Source code" zip or tar.gz assets.

After the files are in place, open the update route so the app can finish migrations and clear caches:

```text
https://your-site.example/update?secret=YOUR_UPDATE_SECRET
```

The `secret` query parameter must match `UPDATE_SECRET` in your `.env` file. If the secret does not match, the app redirects to `/`. Use a private value, not a placeholder. If you are already signed in and the request is redirected, try the URL while signed out.

For the git-based flow, `php artisan ninja:post-update` performs the same kind of follow-up work from the command line.

## Related

- [Choose your install path](/docs/self-host/self-host-installation#choose-your-install-path)
- [Get started with self-hosted Invoice Ninja](/docs/self-host/getting-started)
- [Env Variables](/docs/self-host/env-variables)
- [Self Host Troubleshooting](/docs/self-host/self-host-troubleshooting)
