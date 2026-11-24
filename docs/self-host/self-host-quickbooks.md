---
title: "Connect QuickBooks on a self-hosted Invoice Ninja"
sidebar_label: "Self Host QuickBooks"
sidebar_position: 9
description: "Register an Intuit app, add QuickBooks keys to .env, and connect QuickBooks Online on a self-hosted Invoice Ninja."
---

# Connect QuickBooks on a self-hosted Invoice Ninja

The [QuickBooks Online integration](/docs/user-guide/quickbooks) is available on self-hosted installs. The hosted platform's Intuit keys cannot be shared, so you register your own app with Intuit and add its keys to your `.env` file. After that, connecting works the same way as on the hosted platform. Your `APP_URL` must be the public URL of the install.

## What do I need before I connect? {#overview}

You need:

- A public HTTPS URL for your Invoice Ninja install (`APP_URL`). Intuit requires HTTPS on a public domain for production keys.
- Command-line or file access so you can edit `.env` and clear the config cache.
- A running [queue worker and cron](/docs/self-host/self-host-installation#after-installation), because imports and pushes run as background jobs.

## How do I create an Intuit app? {#create-an-intuit-app}

1. Sign in at [developer.intuit.com](https://developer.intuit.com) and create a new app for **QuickBooks Online and Payments**, with the **Accounting** scope (`com.intuit.quickbooks.accounting`).
2. In the app's **Keys & credentials** (OAuth) settings, add this Redirect URI, replacing the domain with your own:

   ```text
   https://your-invoiceninja-domain.com/quickbooks/authorized
   ```

3. Copy the **Client ID** and **Client Secret**.

:::info
The redirect path is `/quickbooks/authorized`, with no `/api/v1` prefix. It must match `QUICKBOOKS_REDIRECT_URI` in your `.env` exactly, including `https` and with no trailing slash unless you also added one in Intuit. Intuit requires HTTPS on a public domain for production keys.
:::

Use the **Production** keys to connect a real QuickBooks company. Development keys only connect to Intuit sandbox companies.

## How do I configure the .env keys? {#configure-your-env}

Add the following to your `.env` file:

```bash
QUICKBOOKS_CLIENT_ID=your_client_id
QUICKBOOKS_CLIENT_SECRET=your_client_secret
QUICKBOOKS_REDIRECT_URI=https://your-invoiceninja-domain.com/quickbooks/authorized
QUICKBOOKS_ENV=production
```

:::warning
`QUICKBOOKS_ENV` defaults to `sandbox`. If you leave it unset, production keys will fail because the app is talking to the QuickBooks sandbox.
:::

Also check that `APP_URL` (and `REACT_URL`, if you set it) points at your install. After you connect, Intuit sends you back to `REACT_URL` if it is set, otherwise to `APP_URL`.

Then clear the cached config so the new values are picked up:

```bash
php artisan optimize:clear
```

If you run Invoice Ninja in Docker, restart the containers instead.

## How do I connect QuickBooks? {#connect-quickbooks}

In Invoice Ninja, go to **Settings > Account Management**, open the **Integrations** tab, and click **QuickBooks** (route `#/settings/account_management/integrations`). Click **Connect**. Sign in to Intuit, choose the company to link, and you are redirected back to Invoice Ninja. From there, follow the [QuickBooks user guide](/docs/user-guide/quickbooks) to import your data and choose sync options.

Imports and pushes run as background jobs, so your [queue worker and cron](/docs/self-host/self-host-installation#after-installation) need to be running. Only admin users can start an import.

## What if something goes wrong? {#troubleshooting}

### Connect returns a 403 / unauthorized error {#connect-returns-a-403--unauthorized-error}

The connect request is rejected unless `QUICKBOOKS_CLIENT_ID` and `QUICKBOOKS_CLIENT_SECRET` are set and visible to the app. Check those keys in `.env`, then run `php artisan optimize:clear` again (or restart Docker containers).

### Intuit says the redirect URI is invalid {#intuit-says-the-redirect-uri-is-invalid}

The Redirect URI in your Intuit app does not exactly match `QUICKBOOKS_REDIRECT_URI`. Check for `http` vs `https`, `www`, and trailing slashes. The path must be `/quickbooks/authorized`.

### The connection fails after signing in to Intuit {#the-connection-fails-after-signing-in-to-intuit}

Complete the Intuit sign-in within about three minutes of clicking **Connect**. The app stores the handshake state in cache for 190 seconds. If that expires, start again. Your application cache must also be working (`CACHE_DRIVER`), because that state is held there while you sign in.

### It connects, but nothing syncs {#it-connects-but-nothing-syncs}

Make sure your queue worker is running and cron is calling `php artisan schedule:run` every minute. Only admin users can start an import. See [Cron not running / Queue not running](/docs/self-host/self-host-troubleshooting#cron-not-running--queue-not-running) if jobs sit unprocessed.

## Related

- [QuickBooks user guide](/docs/user-guide/quickbooks)
- [Env Variables](/docs/self-host/env-variables)
- [After installation](/docs/self-host/self-host-installation#after-installation)
- [Troubleshoot a self-hosted Invoice Ninja](/docs/self-host/self-host-troubleshooting)
