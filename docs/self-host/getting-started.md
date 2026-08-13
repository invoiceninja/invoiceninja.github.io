---
title: "Getting Started"
sidebar_position: 1
---
## Overview

Invoice Ninja is an invoicing application which makes sending invoices and receiving payments simple and easy. Our latest version is a clean slate rewrite of our popular invoicing application which builds on the existing feature set and adds a wide range of features and enhancements the community has asked for.

## Architecture

The app is divided into three main parts: the backend/API and the two admin portals.

### Backend - API

#### Lead developer: [David Bomba](https://twitter.com/deadbeefx0)

- Framework: [Laravel](https://laravel.com)
- Code: [GitHub](https://github.com/invoiceninja/invoiceninja/tree/v5-stable)
- API: [Docs](https://api-docs.invoicing.co/)

### Admin Portal - Desktop & Mobile

#### Lead developer: [Hillel Coren](https://twitter.com/hillelcoren)

- Framework: [Flutter](https://flutter.dev)
- Code: [GitHub](https://github.com/invoiceninja/admin-portal)
- Demo: [demo.invoiceninja.com](https://demo.invoiceninja.com)

### Admin Portal - Web

#### Lead developer: [Benjamin Beganović](https://twitter.com/beganovichhh)

- Framework: [React](https://reactjs.org)
- Code: [GitHub](https://github.com/invoiceninja/ui)
- Demo: [react.invoicing.co/demo](https://react.invoicing.co/demo)

## Performance

For large accounts or accounts with many users we recommend using the web app. The desktop/mobile apps load all company data when first logging in, this makes it very fast to navigate but can cause problem with larger accounts. The web app loads data on demand so can better handle large accounts.

## App Basics

The main interface is divided into three parts: the sidebar navigation menu, the list (or table) and the preview. The
layout can be customized to fit your needs using a combination of the icons at the bottom of the screen, and the options in Settings > Device Settings.

In many cases in the app a single tap will take one action, while a long tap will provide a shortcut to a common
secondary action. For example tapping on the 'Clients' option in the sidebar will load the clients view, whereas long
tapping it will instead create a new client. This pattern is used throughout the app.

Two other examples are you can long press an invoice on the dashboard to navigate directly to the edit screen and long pressing the edit button on the tables will start multi-select and select the record.

Some fields (such as date and time) support shorthand input and provide a preview of the selected value. For example, you can select enter April 4th in the date field by typing `404` and `1.5` in a time field will be converted to one and a half hours.

The app version (ie. `v5.1.56-A47`) is comprised of two parts: the API version and the Admin Portal version. In this cases the API version is `5.1.56` and the AP version is `47`. The `A` denotes the platform, in this case Android.

:::info
Tip: You can directly navigate to the relevant section of the docs using the question mark icon in the lower left corner of the app.
:::

## Debugging problems

If you run into any problems you can contact us directly in the app using the email envelope icon in the bottom left corner of the screen. If you're using the web app you can hit /update?secret=`YOUR-SECRET-HERE` to perform different back-end optimizations. If you're using the mobile app it may help to uninstall the app and then re-install the app.

Your `UPDATE_SECRET` is part of the .env file (if it's not there you can add: `UPDATE_SECRET=YOUR-SECRET-HERE`)
