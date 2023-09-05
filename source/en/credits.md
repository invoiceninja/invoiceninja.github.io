---
extends: _layouts.user_guide 
section: content
locale: en
---

# Credits

A credit note is a document sent to the client, notifying that a credit has been provided to their account.
Credit notes are used to issue redeemable credits for a specific *Product* or for a flat rate.
Credits can be applied to invoices as a payment.

Note that choosing the right Payment Settings is vital to make credits intuitive and useful to your customers, see https://invoiceninja.github.io/en/basic-settings/#payment_settings.

## Viewing a Credit

Simply select a credit from the list to see its details.
In the mobile layout you will be taken directly to the credit view.
When you select a credit from the list in a desktop layout the credit preview will appear on the left hand side.

You can *Edit* the credit from anywhere in the credit view via a button in the top right of the viewing panel.
Ther are two buttons at the bottom of the view panel: *View PDF* in order to load a PDF of the credit directly from the admin portal, or *Email Credit* to email the client contacts a link to view the PDF for their available credit from the client portal.

The Kebab menu in the uppermost right corner of the credit view presents many functions to work with or manipulate the credit, which can vary based on the state of the credit.  You can change the status of the credit's lifecycle manually, clone the credit, *Enter a Payment* against an invoice with the selected credit, and more.	

### Overview

General information about the credit can be found in the overview panel.
The full amount of the credit, credit remaining, which client it is assigned to, the date of the credit, and the line items describing what the credit is for.

### Contacts

Here you see the contacts from your client that are marked as included in the credit.
Included contacts will get a copy of the emails sent, and will be able to view the credit from the client portal when they sign in.

Also available are links to the client portal for each respective contact included.

### Documents

Upload pictures or documents to your credit, to include for your client.  Uploaded files can be viewed and accessed by the client through the client portal.

### History

The *History* panel presents a chronological overview of transactions related to the credit, and shows you any changes made to the credit total amount, and by which users.

### Activity

The *Activity* panel presents a chronological overview of any actions performed against the credit, including when it was created, edited, deleted, etc, and which user performed the action.

## Creating or Editing a Credit

There are several fields available when filling a credit, and the view when creating or editing a credit is broken down a little differently depending on whether you are viewing things with the mobile layout, or desktop layout.  In the desktop layout, all of the panels described below are presented at the same time on one big screen and laid out a little differently.

<video width="100%" controls>
  <source src="/assets/videos/credits/create_credit.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

You can also create a credit directly from a invoice. For instance if you need to create a credit for an entire invoice, instead of retyping the entire document you can clone the invoice to a credit an example is included in the video below:

<video width="100%" controls>
  <source src="/assets/videos/credits/create_credit_from_invoice.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

### Details

The *Details* panel includes the most basic information about the credit:

* **Client** - You must select a client from the list to assign the credit to.
* **Credit Date** - Automatically generated with today's date, is simply the date of the credit.
* **Valid Until** - Optionally, you may specify an end date that the credit is valid until, to limit how long you will honor it.
* **PO Number** - Optionally, typically for when you client has a product order number to provide for you, for their own recordkeeping purposes.
* **Design** - Choose a template design from one of the premade templates, or one of your own custom designs.  This option is found under the *Settings* tab in the desktop credit view.
* **Tax** - Available tax rate fields and options are configured under *Settings* > *Tax Settings*.  Here you can manually specify the tax rate(s) applied to your credit, or remove it altogether.  If you are manually creating flat rate credit for someone, you may want to consider changing the tax rate to nothing, a blank selection.
* **Exchange Rate** - Optionally, for when your client record has another currency than your own as their default, you will be able to manually specify the exchange rate to automatically calculate what they will owe in their own default currency.  This option is found under the *Settings* tab in the desktop credit view.

### Contacts

*Contacts* has it's own panel in the mobile view, while in desktop view this is shown directly under the *Client* field after you have selected a client.  

This section simply presents a list of contacts available from a client record, and allows you to check or uncheck any contacts, to include or exclude them from the credit.  Included contacts will be able to access the credit from the client portal, and will receive emails about the credit when they are sent.

### Items

Here you see a list of the line items included on the credit.  You can add a *Product* to the credit for your client, or a simple line item for a flat rate credit.  When you simply want to give a flat rate credit for whatever reason, just leave the *Product* field empty, and only add a line item *Description* and *Unit Cost*.  Each item on the list will have these fields available:

* **Product** - The name of the product / line item being applied.  When you want to apply a flat rate to a credit, without creating a new product, simply leave the product field empty.
* **Description** - A description of the line item.  Descriptions can include HTML code, or Markdown code formatting (When enabled under *Settings* > *Account Management*).
* **Unit Cost** - The cost of a single product for the line item.
* **Quantity** - The number of products, expenses, or billable hours for a task, to be multiplied by the unit cost of that line item.

### Notes

All under one panel in the mobile layout, these options each have their own tabs at the bottom of the credit screen when in desktop layout:

* **Credit Terms** - Describe any terms or conditions for your client, as they relate to the credit.
* **Credit Footer** - Any text notes to be included at the bottom of the credit.  A good spot for disclaimers.
* **Public Notes** - Any text notes to add detail or context to the credit for you and your client.  A good spot to describe the applicable service their credit is intended to be applied to, for example.
* **Private Notes** - Private text notes, not printed on the credit PDF or viewable by the client.  These notes can only be seen by users of the admin portal.

## Lifecycle of a credit

### Draft

The Draft status is the first status in the lifecycle of a credit. In this status, changes can be made to the credit and the credit is hidden completely from the client. Draft credits are inactive until either emailed to the client or marked as sent.

<x-warning>
Once a draft credit has been emailed/marked as sent its status cannot be changed back to draft.
</x-warning>

### Sent

A credit is marked as sent when it has been emailed to the client or marked as *Sent* in the admin panel.  

**Note** - A credit cannot be applied to an invoice, and does not actually get linked to the client until after it is marked as *Sent*.

### Partial

A credit is marked with *Partial* when some of the credit has been applied to an invoice, but some still remains.  A credit marked *Partial* will show the remaining credit balance available in the overview panel.

**Note** - There is no way to refund a credit payment that has been applied to an invoice.  The only way to "return" a credit that has been applied, is to *Reverse* an invoice.  If a payment and a credit are applied to an invoice, and you want to refund the amount paid, you should refund the payment first, then reverse the invoice after.  When you reverse an invoice, the remaining balance paid whether through a credit, or a payment, is converted into a *new* credit.  

### Applied

When a credit is marked *Applied* the full balance of the credit has been consumed and applied to one or more invoices on the client's account.

### Deleted

What happens when a credit is deleted?

* Credit status set to deleted
* The credit number is appended with <b>_deleted</b> in order to allow reuse of credit numbers.
* If the credit was previously marked *Partial* the remaining credit balance will no longer be available to the customer, but it will not affect any existing payments that were already applied to the client's invoices.

### Archived

Archiving a credit simply removes the credit from the credit list view. Archiving a credit keeps your list views clean and tidy.

<x-warning>
When a credit is archived no further modifications can be made to the credit. To modify the credit you will need to Restore the credit first.
</x-warning>

### Restored

Restoring a credit from the archived or deleted state will set the credit back to its previous state prior to archiving.

<x-next url=/en/expenses>Expenses</x-next>
