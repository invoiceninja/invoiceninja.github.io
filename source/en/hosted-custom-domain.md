---
extends: _layouts.user_guide 
section: content
locale: en
---

# Custom Domain Configuration

If you are an Enterprise customer, you can configure a custom client portal domain which will point your customer facing links to your own domain.

For example, if you have the domain best-brand.com you can configure a subdomain such as portal / invoices / billing / client to end up with a fully qualified domain ie. portal.best-brand.com

<x-warning>
It is important that you do not use you root domain, ie best-brand.com as this may redirect traffic away from your website!
</x-warning>
    
Once you have decided on a name,  you need to create a CNAME pointing your domain name to our Invoice Ninja custom domain record:

```
cname.invoicing.co.
```

Once you can see the record resolving correctly, you then add your domain name to the v5 admin panel in Settings > Client Portal.

Change your portal mode to Domain and then enter the fully qualified domain name ie:

```
https://portal.best-brand.com
```

and finally click save.

<x-warning>
If you are migrating your custom domain from v4, please consider using a different domain on v5. If you transfer your v4 domain, your forwarding will not work, ie, v4 invoice links will no longer resolve a redirect to v5.
</x-warning>


The system will then generate a SSL certificate for your domain. If you do not see your domain resolve with a valid SSL certificate, please send us an email at contact@invoiceninja.com advising us the full domain and the issue.
