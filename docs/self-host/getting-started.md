---
title: "Get started with self-hosted Invoice Ninja"
sidebar_label: "Getting Started"
sidebar_position: 1
description: "How self-hosted Invoice Ninja is put together, how the admin app is laid out, and how to run the /update route or find logs when something goes wrong."
---

# Get started with self-hosted Invoice Ninja

Self-hosted Invoice Ninja is a source-available invoicing app (Elastic License, ELv2) for sending invoices and receiving payments. This page explains the parts of the app, how the admin interface is laid out, and what to try first if something goes wrong.

## What is self-hosted Invoice Ninja? {#overview}

The current version is a rewrite of the earlier Invoice Ninja app. It keeps the features people already used and adds a wide range of enhancements the community asked for.

## How is the app put together? {#architecture}

The app is divided into three main parts: the backend API and two admin portals.

### Backend API {#backend---api}

#### Lead developer: [David Bomba](https://twitter.com/deadbeefx0) {#lead-developer-david-bomba}

- Framework: [Laravel](https://laravel.com)
- Code: [GitHub](https://github.com/invoiceninja/invoiceninja/tree/v5-stable) (source-available under the [Elastic License (ELv2)](https://www.elastic.co/licensing/elastic-license))
- API: [Docs](https://api-docs.invoicing.co/)

### Admin portal: desktop and mobile {#admin-portal---desktop--mobile}

#### Lead developer: [Hillel Coren](https://twitter.com/hillelcoren) {#lead-developer-hillel-coren}

- Framework: [Flutter](https://flutter.dev)
- Code: [GitHub](https://github.com/invoiceninja/admin-portal)
- Demo: [demo.invoiceninja.com](https://demo.invoiceninja.com)

### Admin portal: web {#admin-portal---web}

#### Lead developer: [Benjamin Beganović](https://twitter.com/beganovichhh) {#lead-developer-benjamin-beganović}

- Framework: [React](https://reactjs.org)
- Code: [GitHub](https://github.com/invoiceninja/web)
- Demo: [react.invoicing.co/demo](https://react.invoicing.co/demo)

## Which admin app should I use? {#performance}

For large companies, or companies with many users, use the web app. The desktop and mobile apps load all company data when you first sign in. That makes navigation fast, but it can struggle with larger accounts. The web app loads data on demand, so it handles large accounts better.

## How is the admin interface laid out? {#app-basics}

The main interface has three parts: the sidebar navigation menu, the list (or table), and the preview. You can adjust the layout with the icons at the bottom of the screen. Some appearance controls, such as dark mode, sit in the admin sidebar. **Device Settings** is no longer a page in the Settings menu. See [Device Settings](/docs/user-guide/basic-settings#device_settings).

In many places, a single tap takes one action, and a long press is a shortcut to a common second action. For example, tapping **Clients** in the sidebar opens the clients list, and long-pressing it starts a new client. This pattern is used throughout the app.

Two other examples: you can long-press an invoice on the dashboard to go straight to the edit screen, and long-pressing the edit control on a table starts multi-select and selects that record.

Some fields, such as date and time, support shorthand input and show a preview of the value. For example, typing `404` in a date field can enter 4 April, and `1.5` in a time field is converted to one and a half hours.

The app version (for example `v5.1.56-A47`) has two parts: the API version and the admin portal version. In that example the API version is `5.1.56` and the admin portal version is `47`. The `A` is the platform, in this case Android.

:::info
You can open the relevant section of the docs with the question-mark icon in the lower left of the app.
:::

## What should I do if something goes wrong? {#debugging-problems}

If you run into problems, you can contact Invoice Ninja from the app with the envelope icon in the lower left of the screen.

On the web app, you can also run backend maintenance by opening:

```text
https://your-site.example/update?secret=YOUR_UPDATE_SECRET
```

The `secret` query parameter must match the `UPDATE_SECRET` value in your `.env` file. If that key is not in `.env`, add it:

```bash
UPDATE_SECRET=YOUR_UPDATE_SECRET
```

Use a private value, not a placeholder such as `secret`. If the secret does not match, the app redirects to `/`. The route is a GET request to `/update`. If you are already signed in and the request is redirected, try the URL while signed out. After a successful run, the app also redirects to `/`.

If you are using the mobile app, uninstalling and reinstalling it can help.

For detailed error output in the browser, see [How to use debug mode](/docs/self-host/self-host-debug-mode). For other self-host issues, see [Self Host Troubleshooting](/docs/self-host/self-host-troubleshooting) and [How to update](/docs/self-host/self-host-updating).

## Related

- [Self Host Installation](/docs/self-host/self-host-installation)
- [How to update a self-hosted Invoice Ninja](/docs/self-host/self-host-updating)
- [How to use debug mode](/docs/self-host/self-host-debug-mode)
- [Env Variables](/docs/self-host/env-variables)
- [Self Host Troubleshooting](/docs/self-host/self-host-troubleshooting)
