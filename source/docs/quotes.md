---
extends: _layouts.user_guide
section: content
---

# Quotes

Quote records are used to provide your clients with accurate previews of what a quote might look like for requested products and/or services.  Quotes can be generated as PDFs, viewed in the client portal by the client, and if agreed upon, they can be converted directly into quotes.  Unless it is converted to an invoice, quotes have no effect on a clients balance or ledger.

Viewing, editing, or creating a quote is virtually the same as it is for a quote.

Quote records support a lot of detail and allow you to bill your clients for *Products*, *Tasks*, or *Expenses*.  You can attach documents or pictures to quotes, which the client may view from the client portal.  Quote records keep a history of when changes were made to them, and which users performed those changes, in order to increase accountability within your business.

## Viewing a Quote

Simply select a quote from the list, and you will see the quote details, in the mobile layout you will be taken directly to the quote view, in a desktop layout the view will appear on the righthand side.

From anywhere in the quote view, you will have the option to *Edit* the quote from a button in the top right of the viewing panel.  You can use two buttons at the bottom of the view panel: *View PDF* in order to load a PDF of the quote directly from the admin portal, or *Email Quote* to email the client contacts a link to view and accept their quote from the client portal.

The Kebab menu in the uppermost right corner of the quote view presents many functions to work with or manipulate the quote, which can vary based on the state of the quote.  You can change the status of the quote's lifecycle manually, clone the quote, view it directly from the client portal, and more.

### Overview

From the overview panel, you will see general information about the quote.  The amount of the quote, quoted balance owing, which client it is assigned to, the date of the quote, and any products or tasks included in the quote.

### Contacts

Here you see the contacts from your client that are marked as included in the quote.  Included contacts will get a copy of the emails sent, and will be able to view the quote from the client portal when they sign in.

Also available are links to the client portal for each respective contact included.

### Documents

Upload pictures or documents to your quote, to include for your client.  Uploaded files can be viewed and accessed by the client through the client portal.

### History

The *History* panel presents a chronological overview of transactions related to the quote, and shows you any changes made to the quote total amount, and by which users.

### Activity

The *Activity* panel presents a chronological overview of any actions performed against the quote, including when it was created, edited, deleted, etc, and which user performed the action.

## Creating or Editing a Quote

There are several fields available when filling a quote, and the view when creating or editing a quote is broken down a little differently depending on whether you are viewing things with the mobile layout, or desktop layout.  In the desktop layout, all of the panels described below are presented at the same time on one big screen and laid out a little differently.

### Details

The *Details* panel includes the most basic information about the quote:

* **Client** - You must select a client from the list to apply your quote to.
* **Quote Date** - Automatically generated with today's date, is simply the date of the quote.
* **Valid Until** - Optionally, you may specify an end date that the quote is valid until, to limit how long you will honor it.
* **Partial/Deposit** - Optionally, specify a required partial payment or deposit on the quote, with its own due date, separate from, and owed before the quote due date for the quote's full amount.
* **PO Number** - Optionally, typically for when you client has a product order number to provide for you, for their own recordkeeping purposes.
* **Discount** - Enter a discount amount to apply to the quote, either as a percentage, or a flat rate.
* **Design** - Choose a template design from one of the premade templates, or one of your own custom designs.  This option is found under the *Settings* tab in the desktop quote view.
* **Exchange Rate** - Optionally, for when your client record has another currency than your own as their default, you will be able to manually specify the exchange rate to automatically calculate what they will owe in their own default currency.  This option is found under the *Settings* tab in the desktop quote view.

### Contacts

*Contacts* has it's own panel in the mobile view, while in desktop view this is shown directly under the *Client* field after you have selected a client.  

This section simply presents a list of contacts available from a client record, and allows you to check or uncheck any contacts, to include or exclude them from the quote.  Included contacts will be able to access the quote from the client portal, and will receive emails about the quote when they are sent.

### Items

Here you see a list of the line items included on the quote.  You can add *Products*, *Tasks*, or *Expenses* to the quote to bill your client for.  Each item on the list will have these fields available:

* **Product** - The name of the product, task, or expense line item being applied.
* **Description** - A description of the line item.  Descriptions can include HTML code, or Markdown code formatting (When enabled under *Settings* > *Account Management*).
* **Unit Cost** - The cost of a single product or expense, or the hourly rate of a task for the line item.
* **Quantity** - The number of products, expenses, or billable hours for a task, to be multiplied by the unit cost of that line item.

### Notes

All under one panel in the mobile layout, these options each have their own tabs at the bottom of the quote screen when in desktop layout:

* **Quote Terms** - Describe any terms or conditions for your client, as they relate to the quote.
* **Quote Footer** - Any text notes to be included at the bottom of the quote.  A good spot for less important disclaimers.
* **Public Notes** - Any text notes to add detail or context to the quote for you and your client.  A good spot for service notes, or a summary of work performed for the client.
* **Private Notes** - Private text notes, not printed on the quote PDF or viewable by the client.  These notes can only be seen by users of the admin portal.

## Lifecycle of a quote

### Draft

The Draft status is the first status in the lifecycle of a quote. In this status, changes can be made to the quote and the quote is hidden completely from the client. Draft quotes are inactive until either emailed to the client or marked as sent.

<x-warning>
Once a draft quote has been emailed/marked as sent its status cannot be changed back to draft.
</x-warning>

### Sent

A quote is marked as sent when it has been emailed to the client or marked as *sent* in the admin panel.

### Deleted

A quote can be marked as deleted if the following conditions have been met

* The quote has a status of Sent / Draft.

What happens when a quote is deleted?

* Quote status set to deleted
* The quote number is appended with **_deleted** in order to allow reuse of quote numbers.

### Archived

Archiving a quote simply removes the quote from the quote list view. Archiving a quote keeps your list views clean and tidy.

<x-warning>
When a quote is archived no further modifications can be made to the quote. To modify the quote you will need to Restore the quote first.
</x-warning>

### Restored

Restoring a quote from the archived or deleted state will set the quote back to its previous state prior to archiving.

<x-next url=/docs/subscriptions>Subscriptions</x-next>