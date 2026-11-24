---
title: "Remove Invoice Ninja branding with a white label license"
sidebar_label: "Self Host White Labeling"
sidebar_position: 8
description: "Apply a white label license on self-hosted Invoice Ninja to remove Invoice Ninja branding from client-facing pages, PDFs and emails, and add LICENSE_KEY for e-invoicing."
---

# Remove Invoice Ninja branding with a white label license

A paid white label license removes Invoice Ninja branding from the client-facing parts of a self-hosted install, including the client portal, PDFs and emails that go to your clients.

## What does a white label license do? {#overview}

When the license is active, Invoice Ninja branding is hidden on client-facing pages, invoice PDFs, and emails (including notification emails that use the standard templates). The admin web and mobile apps still show Invoice Ninja branding.

The license is a paid annual license. You apply it on your self-hosted account; it is not a hosted plan change.

## How do I enable a white label license? {#how-to-enable}

1. Purchase a white label license from the link in the admin navigation menu.
2. Apply the license under **Settings > Account Management**.

For e-invoicing, if you proxy e-invoices through Invoice Ninja onto the PEPPOL network, also add your license key to the `.env` file:

```bash
LICENSE_KEY="your_white_label_license"
```

If `LICENSE_KEY` is set, the app uses that value when it talks to the license server. See [Env Variables](/docs/self-host/env-variables) for the full list of `.env` keys.

## Related

- [Env Variables](/docs/self-host/env-variables)
- [How do I manage my account, modules and security?](/docs/user-guide/basic-settings#account_management)
- [Get started with self-hosted Invoice Ninja](/docs/self-host/getting-started)
