---
extends: _layouts.docs 
section: content
---

# Introduction

## App basics

The app version (ie. `v5.1.56-A47`) is comprised of two parts: the API version and the Admin Portal version. In this cases the API version is `5.1.56` and the AP version is `47`. The `A` denotes the platform, in this case Android.

The main interface is divided into three parts: the sidebar navigation menu, the list (or table) and the preview. The
layout can be customized to fit your needs using a combination of the icons at the bottom of the screen, and the option on Settings > Device Settings.

By default, all supported modules are enabled, if you know you won't be using some features you can disable them on
Settings > Account Management > Enabled Modules.

In many cases in the app a single tap will take one action, while a long tap will provide a shortcut to a common
secondary action. For example tapping on the 'Clients' option in the sidebar will load the clients view, whereas long
tapping it will instead create a new client. This pattern is used throughout the app.

## Performance

For optimal performance we recommend using the native [desktop](https://invoiceninja.com/desktop) and [mobile](https://invoiceninja.com/mobile) apps.

There are three main areas to consider: the initial data load, navigating through the app and finally saving changes.

### Loading

In large accounts the initial loads can take a bit of time. One way to optimize this is to load less data, you can select the number of years to load on Settings > User Details.

You can also enable "Persist Data" on Settings > Device Settings to save the data locally however with very large accounts we don't recommend using this option in the web app.

### Navigating

Once the data is loaded navigating through the app should be fast on all platforms however the mobile/desktop apps will always be faster than the web app.

If the performance on the web app isn't fast enough it may help to disable "Persist UI" on Settings > Device Settings. You can also add ?build=html to the URL (ie, https://invoicing.co/?build=html) to use an alternate version of the app which may perform better.

### Saving

Most save requests should process quickly. If you find the app is slow after saving check that "Persist Data" is disabled on Settings > Device Settings.

## Debugging problems

If you run into any problems you can contact us directly in the app using the support icon in the bottom left corner of
the screen. If you're using the web app you can hit /update?secret=`YOUR-SECRET-HERE` to perform different back-end optimizations. If
you're using the mobile app it may help to uninstall the app and then re-install the app.

Your `secret` is part of the .env file.

<x-next url=/docs/clients>Clients</x-next>