---
extends: _layouts.user_guide
section: content
locale: en
---
# E Invoicing

## Introduction
e-invoicing is rapidly being adopted in many jurisdictions. Invoice Ninja has supported UBL format invoices for some time and now we also support a range of e-invoice formats including direct delivery of e-invoices over the PEPPOL network.

All of the supported e-invoice standards can be downloaded directly after creating a standard invoice in Invoice Ninja. In some jurisdictions you are able to forward the e-invoice directly to your customer, however in some regions (ie, Italy) the invoice is sent through the government and then forwarded onto the customer. This introduces a number of complexities including both parties being registered with the government body (SDI for Italy). If you are in one of these jurisdictions, you will need to start the process (if you have not already) in acquiring a government routing ID.

## e-invoice standards
The list of supported e-invoice formats include:

- [PEPPOL (Universal - Cross industry / border)](#peppol)
- [ZUGFeRD - XRechung (Germany)](#zugferd)
- [Facturae (Spain)](#facturae)
- [Verifactu (Spain)](#verifactu)
- [FatturaPA (Italy)](#fatturapa)
- [FACT1 (Romania)](#fact1)
- [EN16931 (Generic)](#en16931)

## PEPPOL 

Invoice Ninja has now rolled out a PEPPOL access point which will be available for both self hosted and hosted users to route their e-invoices through the PEPPOL network. 

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
4. To create a credit note for PEPPOL you need to use a negative invoice. This will generate the correct document type for PEPPOL.

## Can I receive e-invoices?
Yes!  (Self hosted users will receive these via a cron which will poll Invoice Ninja Servers every 4 hours.)

## Getting started checklist

### Supported Countries:

The list below are the currently supported PEPPOL countries

 - Austria
 - Belgium
 - Denmark
 - Germany
 - Iceland
 - Ireland
 - Luxembourg
 - Netherlands
 - Norway
 - Sweden

If your country is not listed, most likely it means they do not support the standard PEPPOL format and are what is known as a CTC (Continuous Transaction Controls) where they have custom requirements for their e-invoicing. CTC countries are not currently supported, and it is important to note that in 2030 all EU countries will be required to use the standard PEPPOL network implementation.

### Hosted Users
 - Register with your government body if e-invoices are to be routed via government portal.
 - Enable e-invoicing (Settings > E Invoice - select e invoice type => PEPPOL)
 - Ensure your company details pass validation (Settings > E-Invoicing - Validation)
 - Generate and send e-invoices!

### Self Hosted Users
 - Register with your government body if e-invoices are to be routed via government portal.
 - Register your entity with Invoice Ninja.
 - Ensure your company details pass validation (Settings > E-Invoicing - Validation)
 - Enable e-invoicing (Settings > E Invoice - select e invoice type => PEPPOL)
 - Generate and send e-invoices!

## Code lists / values

<a id="payment-means-codelist"></a>
<details>
<summary>Payment Means Codelist</summary>

1 - Instrument not defined<br>
2 - Automated clearing house credit<br>
3 - Automated clearing house debit <br>
4 - ACH demand debit reversal <br>
5 - ACH demand credit reversal <br>
6 - ACH demand credit <br>
7 - ACH demand debit <br>
8 - Hold <br>
9 - National or regional clearing <br>
10 - In cash <br>
11 - ACH savings credit reversal <br>
12 - ACH savings debit reversal <br>
13 - ACH savings credit <br>
14 - ACH savings debit <br>
15 - Bookentry credit <br>
16 - Bookentry debit <br>
17 - ACH demand cash concentration/disbursement (CCD) credit <br>
18 - ACH demand cash concentration/disbursement (CCD) debit <br>
19 - ACH demand corporate trade payment (CTP) credit <br>
20 - Cheque <br>
21 - Banker\'s draft <br>
22 - Certified banker\'s draft <br>
23 - Bank cheque (issued by a banking or similar establishment) <br>
24 - Bill of exchange awaiting acceptance <br>
25 - Certified cheque <br>
26 - Local cheque <br>
27 - ACH demand corporate trade payment (CTP) debit <br>
28 - ACH demand corporate trade exchange (CTX) credit <br>
29 - ACH demand corporate trade exchange (CTX) debit <br>
30 - Credit transfer <br>
31 - Debit transfer <br>
32 - ACH demand cash concentration/disbursement plus (CCD+) credit <br>
33 - ACH demand cash concentration/disbursement plus (CCD+) debit <br>
34 - ACH prearranged payment and deposit (PPD) <br>
35 - ACH savings cash concentration/disbursement (CCD) credit <br>
36 - ACH savings cash concentration/disbursement (CCD) debit <br>
37 - ACH savings corporate trade payment (CTP) credit <br>
38 - ACH savings corporate trade payment (CTP) debit <br>
39 - ACH savings corporate trade exchange (CTX) credit <br>
40 - ACH savings corporate trade exchange (CTX) debit <br>
41 - ACH savings cash concentration/disbursement plus (CCD+) credit <br>
42 - Payment to bank account <br>
43 - ACH savings cash concentration/disbursement plus (CCD+) debit <br>
44 - Accepted bill of exchange <br>
45 - Referenced home-banking credit transfer <br>
46 - Interbank debit transfer <br>
47 - Home-banking debit transfer <br>
48 - Bank card <br>
49 - Direct debit <br>
50 - Payment by postgiro <br>
51 - FR, norme 6 97-Telereglement CFONB (French Organisation for Banking Standards)  - Option A <br>
52 - Urgent commercial payment <br>
53 - Urgent Treasury Payment <br>
60 - Promissory note <br>
61 - Promissory note signed by the debtor <br>
62 - Promissory note signed by the debtor and endorsed by a bank <br>
63 - Promissory note signed by the debtor and endorsed by a third party <br>
64 - Promissory note signed by a bank <br>
65 - Promissory note signed by a bank and endorsed by another bank <br>
66 - Promissory note signed by a third party <br>
67 - Promissory note signed by a third party and endorsed by a bank <br>
70 - Bill drawn by the creditor on the debtor <br>
74 - Bill drawn by the creditor on a bank <br>
75 - Bill drawn by the creditor, endorsed by another bank <br>
76 - Bill drawn by the creditor on a bank and endorsed by a third party <br>
77 - Bill drawn by the creditor on a third party <br>
78 - Bill drawn by creditor on third party, accepted and endorsed by bank <br>
91 - Not transferable banker\'s draft <br>
92 - Not transferable local cheque <br>
93 - Reference giro <br>
94 - Urgent giro <br>
95 - Free format giro <br>
96 - Requested method for payment was not used <br>
97 - Clearing between partners <br>
ZZZ - Mutually defined <br>

</details>

## Jurisdiction specific requirements

### AT - Austria

#### CustomerAssignedAccountID - Mandatory for GOV clients
If you are sending an e-invoice to a government body, then you must include in the object

AccountingSupplierParty > CustomerAssignedAccountID

This is the ID of the department within the government that the e-invoice will be routed to

### BE - Belgium
No additional requirements, when your legal entity id is created this is automatically sync'd with HERMES

### CH - Switzerland

#### Payment Means - Mandatory
The payment means contains information on how the seller wishes to be paid. Use the [Payment Means](#payment-means-codelist) you must have at least ONE payment means that is a Credit Transfer type

```php
   <cac:PaymentMeans>
      <cbc:PaymentMeansCode>30</cbc:PaymentMeansCode> <!-- code from payment means code list Credit Transfer-->
      <cac:PayeeFinancialAccount>
         <cbc:ID>DE89370400440532013000</cbc:ID> <!-- IBAN CODE -->
         <cac:FinancialInstitutionBranch>
            <cbc:ID>DEUTDEMMXXX</cbc:ID> <!-- BIC CODE -->
         </cac:FinancialInstitutionBranch>
      </cac:PayeeFinancialAccount>
   </cac:PaymentMeans>
```

### DE - Germany

#### Payment Means - Mandatory
The payment means contains information on how the seller wishes to be paid. Use the [Payment Means](#payment-means-codelist) list to determine the correct code required. For example, to display your bank account details the following would be required

```php
   <cac:PaymentMeans>
      <cbc:PaymentMeansCode>30</cbc:PaymentMeansCode> <!-- code from payment means code list Credit Transfer-->
      <cac:PayeeFinancialAccount>
         <cbc:ID>DE89370400440532013000</cbc:ID> <!-- IBAN CODE -->
         <cac:FinancialInstitutionBranch>
            <cbc:ID>DEUTDEMMXXX</cbc:ID> <!-- BIC CODE -->
         </cac:FinancialInstitutionBranch>
      </cac:PayeeFinancialAccount>
   </cac:PaymentMeans>
```

### ES - Spain

*** Government registration required ***

#### Payment Means - Mandatory
The payment means contains information on how the seller wishes to be paid. Use the [Payment Means](#payment-means-codelist) you must have at least ONE payment means that is a Credit Transfer type

```php
   <cac:PaymentMeans>
      <cbc:PaymentMeansCode>30</cbc:PaymentMeansCode> <!-- code from payment means code list Credit Transfer-->
      <cac:PayeeFinancialAccount>
         <cbc:ID>DE89370400440532013000</cbc:ID> <!-- IBAN CODE -->
         <cac:FinancialInstitutionBranch>
            <cbc:ID>DEUTDEMMXXX</cbc:ID> <!-- BIC CODE -->
         </cac:FinancialInstitutionBranch>
      </cac:PayeeFinancialAccount>
   </cac:PaymentMeans>
```

#### Due Date - Mandatory
The invoice MUST have a due date set.

#### Government bound e-invoices
If sending to a Spanish government body the property

AccountingCustomerParty > PublicIdentifiers

Must be set

### FI - Finland
No special requirements

### FR - France
The SIRET / 0009 identifier of the final recipient is to be included in the invoice.accountingCustomerParty.publicIdentifiers array.

### IT - Italy
No special requirements

### NL - Netherlands
When sending to government bodies the following property must be configured

accountingSupplierParty > party > contact >email 

### PL -Poland

*** Government registration required ***

### RO -Romania

*** Government registration required ***

#### Special codes for county
The county field for a Romania address must use the ISO3166-2:RO codes, e.g. "RO-AB, RO-AR". Don’t omit the country prefix!

#### Special codes for city
The city field for county RO-B must be SECTOR1 - SECTOR6.

### SE - Sweden
Receiver needs to be registered with Svefaktura to receive the e-invoice

## ZUGFeRD

<img class="" src="/assets/images/einvoices/zugferd.png" alt="CBA PowerBoard"/>

Enabling ZUGFeRD is as simple as enabling e-invoicing in Settings > E-Invoice, selecting the appropriate X format you wish to generate and save! As the ZUGFeRD is very comprehensive, you can also embed the einvoice within the PDF document itself, simply toggle on the Merge E-Invoice and PDF switch and then save.

** NOTE **

The ZUGFeRD standard does not accept negative valued invoices. Historically some users may have used a negative invoice to indicate a Credit Note, this is no longer possible. Instead a dedicated Credit Note should be generated with matching POSTIVE values which reflect the credit you wish to assign.

## Facturae

Spanish e-invoice documents are supported and generate valid documents. these can be uploaded into the FACe system.

## Verifactu (alpha)

Support for Verifactu is nearing. The invoicing flow within Invoice Ninja will remain unchanged however there are several important points to note:

1. Power of Attorney.

In order for Invoice Ninja to submit invoices to AEAT on your behalf, AEAT requires you to provide permission. This can be done directly from the AEAT website and searching for Invoice Ninja in the list of registered providers.

2. Document submission process.

- After an invoice has been submitted, it cannot be modified and the document itself will move into a "locked state"
- It is possible to cancel a submitted document by either using the Cancel or Delete option on the invoice.
- If you need to create a rectification invoice (Credit Note), you will need to use the Rectify menu option, this will generate a negative invoice linked to the existing invoice.
- Rectification invoices can be cancelled, this will remove the credit note linked to the invoice.

**NOTE**

Once an invoice has had a rectification invoice (credit note) applied to it, it cannot be delete unless all of the credit notes attached to it have also been cancelled/deleted.

3. Verifactu tab:

On the edit invoice page, after saving an invoice you will now see a Verifactu tab, inside here will be additional information about the invoice validation.

4. Mandatory information.

For invoices to Spanish users. You MUST have entered a NIF for the client this is a requirement from AEAT. The only exception would be if no NIF is available to use the clients Passport Number in the Client's ID Number field. AEAT requires the census data on the recipient. Sending will fail if you attempt to send an invoice to a client without these details.

## FatturaPA

Italian e-invoices can be generated, however as there is no connection in the SDI as yet. This format is not currently production ready.

## FACT1

Romanian e-invoices can be generated, however as there is no delivery connection as yet. This format is not currently production ready.

## EN16931

Standard EN16931 documents can be generated and downloaded as needed.

<x-next url=/en/esignatures>E Signatures</x-next>
