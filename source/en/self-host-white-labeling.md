---
extends: _layouts.self_host
section: content
locale: en
---

# Self Host White Labeling

## Overview

For a nominal annual fee, you are able to white label the client facing pages of the application. This removes all client faces pages (and PDFs) of any Invoice Ninja branding.

<x-info>
    The admin interface and the admin notificaiton emails will still retain the Invoice Ninja branding.
</x-info>

## How to enable

You can use the link on the navigation menu to purchase a white label license. 

There's an option to manually apply the license on Settings > Account Management.

<x-info>
    Note: to support e-invoicing add `LICENSE_KEY="your_white_label_license"` to the [.env file](/en/env-variables).
</x-info>
