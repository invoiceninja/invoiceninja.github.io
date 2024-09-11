---
extends: _layouts.user_guide
section: content
locale: en
---

# e-invoices

## Intro

e-invoicing is rapidly being adopted in many jurisdictions. Invoice Ninja has supported UBL format invoices for some time, and now we also support a range of e-invoice formats including direct delivery of e-invoices over the PEPPOL network.

## e-invoice standards

The list of supported einvoice formats are as follows:

    - Facturae (Spain)
    - FatturaPA (Italy)
    - FACT1 (Romania)
    - Zugferd - XRechung (Germany)
    - EN16931 (Generic)
    - PEPPOL (Universal - Cross industry / border format)

## How does it work?

All of the supported e-invoice standards can be downloaded directly after creating a standard invoice in Invoice Ninja. In some jurisdictions you are able to forward the e-invoice directly to your customer, however in some regions (ie, Italy) the invoice is sent through the government and then forwarded onto the customer. This introduces a number of complexities including both parties being registered with the government body (SDI for Italy). If you are in one of these jurisdictions, you will need to start the process (if you have not already) in acquiring a government routing ID.

Invoice Ninja will be rolling out a PEPPOL access point which will be available for both self hosted and hosted users to route their e-invoices through the PEPPOL network. 

## How do I get started?

### All users
Each particular jurisdiction has a specific set of fields which MUST be populated in order for an e-invoice to be validated. For example, in Germany a Payment Means field is required within the e-invoice. What is this? This is the sending parties paymnet details, ie IBAN + financial account meta data such as bank, FIB etc. Without this data the e-invoice cannot be generated or sent.  As you onboard through the application you will have the opportunity to validate your data to ensure delivery of your e-invoices.

### Hosted users
We will be sending out notifications to our hosted users for the steps required for onboarding in their particular region. 

### Self hosted users
Self Hosted users will be proxying their e-invoices through our hosted platform. What does this mean? In order to send your e-invoices you'll need to register your service with Invoice Ninja and we will create your legal entity id for you. Your system will then route e-invoices through our system as required. For security and data privacy, the service will only ever proxy the data that is sent, we will never store the data that is sent.

## How do I prepare my Invoice Ninja installation to support e-invoicing?
There are a few important considerations with e-invoicing.

1. All taxes must be applied at the line level. Total taxes are not supported with e-invoicing
2. If you do not charge VAT/TAX on your invoices, you still need to apply a tax code/reason ie. Cross Border exemption, seller with no VAT number etc
3. After an invoice has been "sent" it can never be modified, instead if there are changes that need to be applied you must create a new Invoice/Credit with the changes

## Can I receive e-invoices?
Yes, in an upcoming version we will also support the delivery of e-invoicing via the peppol network directly into your company.  

(Self hosted users will receive these via WebHook)

## Getting started checklist

### Hosted Users
 - Register with your government body if e-invoices are to be routed via government portal.
 - Enable e-invoicing (Settings > E Invoice - select e invoice type => PEPPOL)
 - Enable e-invoicing (Settings > E Invoice - select e invoice type => PEPPOL)
 - Ensure your company details pass validation (Settings > E-Invoicing - Validation)
 - Generate and send e-invoices!

### Self Hosted Users
 - Register with your government body if e-invoices are to be routed via government portal.
 - Register your entity with Invoice Ninja.
 - Ensure your company details pass validation (Settings > E-Invoicing - Validation)
 - Enable e-invoicing (Settings > E Invoice - select e invoice type => PEPPOL)
 - Generate and send e-invoices!

<x-next url=/en/invoices>Invoices</x-next>
