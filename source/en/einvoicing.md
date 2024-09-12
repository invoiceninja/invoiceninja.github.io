---
extends: _layouts.user_guide
section: content
locale: en
---

# e-invoices

## Introduction
e-invoicing is rapidly being adopted in many jurisdictions. Invoice Ninja has supported UBL format invoices for some time and now we also support a range of e-invoice formats including direct delivery of e-invoices over the PEPPOL network.

## e-invoice standards
The list of supported e-invoice formats include:

- Facturae (Spain)
- FatturaPA (Italy)
- FACT1 (Romania)
- Zugferd - XRechung (Germany)
- EN16931 (Generic)
- PEPPOL (Universal - Cross industry / border)

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


### DE - Germany

#### Payment Means - Mandatory

The payment means contains information on how the seller wishes to be paid. Use the [Payment Means](#payment-means-codelist) list to deterine the correct code required. For example, to display your bank account details the following would be required

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

<x-next url=/en/invoices>Invoices</x-next>
