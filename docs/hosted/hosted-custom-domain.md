---
title: "Point the client portal at your own domain"
sidebar_label: "Hosted Custom Domain"
sidebar_position: 3
description: "Use a custom domain for the Invoice Ninja client portal: create a CNAME to cname.invoicing.co, set Portal Mode to Domain, and request a certificate if needed."
---

# Point the client portal at your own domain

You can send clients to your own domain, such as `portal.your-brand.com`, instead of a standard invoicing.co subdomain. This is documented as an Enterprise plan option.

## How do I configure a custom domain? {#custom-domain-configuration}

A custom client portal domain points the links your clients use (invoices, quotes and the portal login) at a name you control.

For example, if you own `your-brand.com`, you can use a subdomain such as `portal`, `invoices`, `billing` or `client`, so the full name is `portal.your-brand.com`.

:::warning
Do not use your root domain, such as `your-brand.com`. Pointing the root domain at Invoice Ninja can redirect traffic away from your website.
:::

1. Choose the subdomain you want to use, not the root domain.
2. Create a CNAME record that points that name to the Invoice Ninja custom domain host:

    ```bash
    cname.invoicing.co.
    ```

3. Wait until the CNAME resolves correctly.
4. In Invoice Ninja, go to **Settings > Client Portal** (route `#/settings/client_portal`). Open the **Settings** tab.
5. Set **Portal Mode** to **Domain**, then enter the full domain, including `https://`, for example:

    ```bash
    https://portal.your-brand.com
    ```

6. Click **Save**.

**Portal Mode** has two options: **Subdomain** and **Domain**. The help text is "The subdomain is used in the client portal to personalize links to match your brand. ie, https://your-brand.invoicing.co." When **Subdomain** is selected, the tab shows a **Subdomain** field and a read-only **Login URL** (in the form `your-brand.invoicing.co/client/login`, with a copy icon). The full-domain field is the one you use after you switch to **Domain**.

The system then generates an SSL certificate for your domain. If the domain does not resolve with a valid certificate, email [contact@invoiceninja.com](mailto:contact@invoiceninja.com) with the full domain and a short description of the issue.

:::warning
If you are moving a custom domain from v4, consider using a different domain on v5. If you transfer the v4 domain, v4 invoice links will no longer redirect to v5.
:::

To use a branded invoicing.co subdomain instead of your own domain, leave **Portal Mode** set to **Subdomain**. See [What is a subdomain?](/docs/user-guide/faq#what-is-a-subdomain) and [How do I configure the client portal?](/docs/user-guide/advanced-settings#client_portal).

## Related

- [How do I configure the client portal?](/docs/user-guide/advanced-settings#client_portal)
- [What is a subdomain?](/docs/user-guide/faq#what-is-a-subdomain)
- [Client Portal](/docs/user-guide/client-portal)
- [Set up your hosted Invoice Ninja account](/docs/hosted/hosted-quickstart)
