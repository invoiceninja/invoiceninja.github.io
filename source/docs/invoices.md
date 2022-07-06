---
extends: _layouts.docs
section: content
---

# Invoices

Invoice records support a lot of detail and allow you to bill your clients for *Products*, *Tasks*, or *Expenses*.  You can attach documents or pictures to invoices, which the client may view from the client portal.  Invoice records keep a history of when changes were made to them, and which users performed those changes, in order to increase accountability within your business.

## Viewing an Invoice

Simply select an invoice from the list, and you will see the invoice details, in the mobile layout you will be taken directly to the invoice view, in a desktop layout the view will appear on the righthand side.

From anywhere in the invoice view, you will have the option to *Edit* the invoice from a button in the top right of the viewing panel.  You can use two buttons at the bottom of the view panel: *View PDF* in order to load a PDF of the invoice directly from the admin portal, or *Email Invoice* to email the client contacts a link to view and pay for their invoice from the client portal.

The Kebab menu in the uppermost right corner of the invoice view presents many functions to work with or manipulate the invoice, which can vary based on the state of the invoice.  You can change the status of the invoice's lifecycle manually, clone the invoice, view it directly from the client portal, and more.

### Overview

From the overview panel, you will see general information about the invoice.  The amount of the invoice, balance owing, any amount paid, which client it is assigned to, the date of the invoice, and any products or tasks included in the invoice.

### Contacts

Here you see the contacts from your client that are marked as included in the invoice.  Included contacts will get a copy of the emails sent, and will be able to view the invoice from the client portal when they sign in.

Also available are links to the client portal for each respective contact included.

### Documents

Upload pictures or documents to your invoice, to include for your client.  Uploaded files can be viewed and accessed by the client through the client portal.

### History

The *History* panel presents a chronological overview of transactions related to the invoice, and shows you any changes made to the invoice total amount, and by which users.

### Activity

The *Activity* panel presents a chronological overview of any actions performed against the invoice, including when it was created, edited, paid, refunded, cancelled, etc, and which user performed the action.

## Creating or Editing an Invoice

There are several fields available when filling an invoice, and the view when creating or editing an invoice is broken down a little differently depending on whether you are viewing things with the mobile layout, or desktop layout.  In the desktop layout, all of the panels described below are presented at the same time on one big screen and laid out a little differently.

### Details

The *Details* panel includes the most basic information about the invoice:

* **Client** - You must select a client from the list to apply your invoice to.
* **Invoice Date** - Automatically generated with today's date, is simply the date of the invoice.
* **Due Date** - Optionally, you may include a later due date for payment of the invoice.  If no due date is specified, the full amount is due immediately.
* **Partial/Deposit** - Optionally, specify a required partial payment or deposit on the invoice, with its own due date, separate from, and owed before the invoice due date for the invoice's full amount.
* **PO Number** - Optionally, typically for when you client has a product order number to provide for you, for their own recordkeeping purposes.
* **Discount** - Enter a discount amount to apply to the invoice, either as a percentage, or a flat rate.
* **Design** - Choose a template design from one of the premade templates, or one of your own custom designs.  This option is found under the *Settings* tab in the desktop invoice view.
* **Exchange Rate** - Optionally, for when your client record has another currency than your own as their default, you will be able to manually specify the exchange rate to automatically calculate what they will owe in their own default currency.  This option is found under the *Settings* tab in the desktop invoice view.
* **Auto Bill Enabled** - When enabled, the client contact(s) will automatically be emailed for payment of their invoice.  By default, auto bill actions will be performed on the invoice due date, as specified under *Settings* > *Online Payments*.  This option is found under the *Settings* tab in the desktop invoice view.

### Contacts

*Contacts* has it's own panel in the mobile view, while in desktop view this is shown directly under the *Client* field after you have selected a client.  

This section simply presents a list of contacts available from a client record, and allows you to check or uncheck any contacts, to include or exclude them from the invoice.  Included contacts will be able to access the invoice from the client portal, and will receive emails about the invoice when they are sent.

### Items

Here you see a list of the line items included on the invoice.  You can add *Products*, *Tasks*, or *Expenses* to the invoice to bill your client for.  Each item on the list will have these fields available:

* **Product** - The name of the product, task, or expense line item being applied.
* **Description** - A description of the line item.  Descriptions can include HTML code, or Markdown code formatting (When enabled under *Settings* > *Account Management*).
* **Unit Cost** - The cost of a single product or expense, or the hourly rate of a task for the line item.
* **Quantity** - The number of products, expenses, or billable hours for a task, to be multiplied by the unit cost of that line item.

### Notes

All under one panel in the mobile layout, these options each have their own tabs at the bottom of the invoice screen when in desktop layout:

* **Invoice Terms** - Describe any terms or conditions for your client, as they relate to the invoice.
* **Invoice Footer** - Any text notes to be included at the bottom of the invoice.  A good spot for less important disclaimers.
* **Public Notes** - Any text notes to add detail or context to the invoice for you and your client.  A good spot for service notes, or a summary of work performed for the client.
* **Private Notes** - Private text notes, not printed on the invoice PDF or viewable by the client.  These notes can only be seen by users of the admin portal.

## Lifecycle of an invoice

### Draft

<p>The Draft status is the first status in the lifecycle of a invoice. In this status, changes can be made to the invoice and the invoice is hidden completely from the client. A draft invoice does not affect the ledger nor does it change the client balance. Draft invoices are inactive until either emailed to the client or marked as sent.</p>

<x-warning>
Once a draft invoice has been emailed/marked as sent its status cannot be changed back to draft.
</x-warning>

### Sent

A invoice is marked as sent when it has been emailed to the client or marked as *sent* in the admin panel.

When the invoice status is changed to Sent, the client balance increases by the *invoice balance* amount.

### Partial

A invoice status of Partial means that a payment has been applied to the invoice but there is still a outstanding balance remaining on the invoice.

### Paid

A invoice status of Paid means that full payment has been applied to the invoice. The *invoice balance* will be 0.

### Cancelled

A invoice can be cancelled under the following conditions.

* The invoice is marked as Sent, Partial or Paid (ie. some payment amount has been applied or the invoice is active)

When a invoice is cancelled the *invoice balance* is set to zero and the status updated to **Cancelled**, the *client balance* is also adjusted down. If payments have been applied to the invoice these will remain linked to the invoice.

### Deleted

A invoice can be marked as deleted if the following conditions have been met

* The invoice has a status of Sent / Draft / Paid / Partial.

What happens when a invoice is deleted?

If the invoice has a balance remaining, in order to balance the ledger, we perform a <b>Cancellation</b> on the invoice first and then perform the deletion.

* Invoice status set to deleted
* The invoice number is appended with <b>_deleted</b> in order to allow reuse of invoice numbers.

<x-warning>
Important! If a invoice has a remaining balance or has had payments applied to it, the invoice is cancelled and then deleted.
</x-warning>

### Reversed

A invoice can be reversed under the following conditions

* The invoice is marked as Sent, Partial or Paid (ie. some payment amount has been applied to the invoice)

When a invoice is reversed the payment/s that have been applied to the invoice have a credit generated against them. The ledger is also adjusted as follows:

* The client paid to date amount is reduced by the calculated amount of (invoice balance - invoice amount).
* A credit is generated for the payments applied to the invoice (invoice balance - invoice amount).  The original payment record that was linked to the invoice will now be linked to a new credit record.
* Any credit value that was applied as payment to the invoice is then converted into a new credit record.
* The client balance is reduced by the invoice balance.
* The invoice balance is finally set to 0.
* The invoice status is set to Reversed.

When a invoice has been reversed, the previous payments relationships are unlinked and cannot be restored.

### Archived

Archiving a invoice simply removes the invoice from the invoice list view. Archiving a invoice keeps your list views clean and tidy and does not effect the ledger / client balance.

<x-warning>
When a invoice is archived no further modifications can be made to the invoice. To modify the invoice you will need to Restore the invoice first.
</x-warning>

### Restored

Restoring a invoice from the archived or deleted state will set the invoice back to its previous state prior to archiving.

<x-next url=/docs/payments>Payments</x-next>