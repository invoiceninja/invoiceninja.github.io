---
extends: _layouts.user_guide
section: content
locale: en
---

# Frequently Asked Questions

Here you will find answers to many frequently asked questions about Invoice Ninja.

### What is the Client Portal?

- When you send a client an invoice, the email contains a link to view the invoice online in the client portal.
- The client portal is an online self-serve dashboard for your client to see their invoices, make payments, download statements, manage subscriptions, payment methods, and more.
- Client portal access is available for all your clients. You can optionally allow anyone to register as a new client under Settings>Client Portal>Registration.
- If you enable "Client Initiated Payments" under Settings>Online Payments, you can even allow your clients to make a payment online without you having to send an invoice (you can also set the "Minimum Payment Amount" for client-initiated payments)
- Only the enabled modules in Invoice Ninja will show in the client portal. For example, if you turn off Quotes, that option won't be visible to clients anymore. See: [Enabled Modules](/en/basic-settings/#enabled-modules)
- You can see how the client portal looks for your clients by clicking the “Client Portal” option:

![Edit Client portal dropdown hilighted](/assets/images/clients/editclient_clientportalhilighted.png "Edit Client portal dropdown hilighted")

![Client portal](/assets/images/clients/client_portal.png "Client portal")

### What is a subdomain?

- The subdomain is used in the client portal to personalize links to match your brand. Ex., https://your-brand.invoicing.co
- Under Settings>Client Portal, you can setup your subdomain.
- Links generated in the system (invoices, quotes, etc.) that are sent to your clients will use the subdomain you have configured.
- If you have multiple companies, you can set a different subdomain for each company. Ex., companya.invoicing.co, companyb.invoicing.co… that way, each company has its own branding and custom link.

![Client portal settings](/assets/images/settings/client_portal_settings.png "Client portal settings")

### How can I accept payments online? What is a payment gateway (AKA, merchant processor)?

- Accepting online payments has never been easier. Invoice Ninja integrates with all the major online payment gateways to let you accept payments in 135+ currencies: [Payment Gateway Integrations](https://invoiceninja.com/payments/)
- In order to accept payments online, you need to integrate your Invoice Ninja account with a "payment gateway."
- Please see: [Setting Up Payment Gateways](/en/gateways/)

### What is the Payments module?

- Invoice Ninja includes functionality to let you record every payment that you receive on your invoices. This makes it easy to report on invoices, accept partial payments, etc.
- The Payments module records all the INCOMING payments to the system.
- Each payment is linked to an invoice.
- You can apply multiple payments per invoice. Ex., deposits or partial payments.
- The payments module lets you record the amount received, payment date, payment type (the method of payment), a transaction reference, and you can record some notes.
- You also have the option to convert currency when recording the payment. You can select the currency to convert from, and an exchange rate. The exchange rates are updated daily.

For more information, see [Payments](/en/payments/)
