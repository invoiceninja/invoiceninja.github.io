---
extends: _layouts.docs 
section: content
---

# Introduction

- [Introduction](#introduction)
    * [App basics](#app-basics)
    * [Debugging problems](#debugging-problems)

## App basics

The app interface is divided into three parts: the sidebar navigation menu, the list (or table) and the preview. The
layout can be customized to fit your needs using a combination of the icons at the bottom of the screen, and the option
on Settings > Device Settings.

![Client list](https://via.placeholder.com/614x350)

By default, all supported modules are enabled, if you know you won't be using some features you can disable them on
Settings > Account Management > Enabled Modules.

In many cases in the app a single tap will take one action, while a long tap will provide a shortcut to a common
secondary action. For example tapping on the 'Clients' option in the sidebar will load the clients view, whereas long
tapping it will instead create a new client. This pattern is used throughout the app.

## Debugging problems

If you run into any problems you can contact us directly in the app using the support icon in the bottom left corner of
the screen. If you're using the web app you can add `?clear=true` to the URL to clear the browser's local cache. If
you're using the mobile app it may help to uninstall the app and then re-install the app.

<x-next url=/docs/clients>Clients</x-next>