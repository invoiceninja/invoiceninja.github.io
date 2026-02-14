---
title: "Quotes"
sidebar_position: 12
---
# Quotes

Quote records are used to provide your clients with accurate previews of what a quote might look like for requested products and/or services. Quotes can be generated as PDFs, viewed in the client portal by the client, and if agreed upon, they can be converted directly into invoices. Unless it is converted to an invoice, quotes have no effect on a client's balance or ledger.

<video width="100%" controls>
  <source src="/assets/videos/quotes/quotes_creation_demo.mp4" type="video/mp4" />
</video>

Viewing, editing, or creating a quote is virtually the same as it is for an invoice.

Quote records support a lot of detail and allow you to bill your clients for _Products_, _Tasks_, or _Expenses_. You can attach documents or pictures to quotes, which the client may view from the client portal. Quote records keep a history of when changes were made to them, and which users performed those changes, in order to increase accountability within your business.

## Viewing a Quote

Simply select a quote number from the list, and you will see the quote details.

![Quotes index](/assets/images/quotes/quotes_index.png)

### Click a quote for overview

On desktop if you click on a quote row (not the quote number), it will open a pull-out on the right with Overview, History, Activity, and Email History options.

![Quote overview](/assets/images/quotes/quote_right_overview_panel.png)

From the overview panel, you will see general information about the quote. The amount of the quote, balance owing, any amount paid, which client it is assigned to, the date of the quote, status...

#### History

The _History_ panel presents a chronological overview of transactions related to the quote, and shows you any changes made to the quote total amount, and by which users.

#### Activity

The _Activity_ panel presents a chronological overview of any actions performed against the quote, including when it was created, edited, converted, approved, etc, and which user performed the action.

#### Email History

This panel presents a log of every time the quote was emailed.

## Creating or Editing a Quote

There are several fields available when filling a quote, and the view when creating or editing a quote is broken down a little differently depending on whether you are viewing things with the mobile layout, or desktop layout. In the desktop layout, all of the panels described below are presented at the same time on one big screen and laid out a little differently.

- **Client** - You must select a client from the list to apply your quote to.
- **Quote Date** - Automatically generated with today's date, is simply the date of the quote.
- **Valid Until** - Optionally, you may specify an end date that the quote is valid until, to limit how long you will honor it.
- **Partial/Deposit** - Optionally, specify a required partial payment or deposit on the quote, with its own due date, separate from, and owed before the quote due date for the quote's full amount.
- **PO #** - Optionally, typically for when you client has a product order number to provide for you, for their own recordkeeping purposes.
- **Quote #** - The quote number is auto generated as per _Settings > Advanced Settings > Generated Numbers_
- **Discount** - Enter a discount amount to apply to the quote, either as a percentage, or a flat rate.

### Quote Options Dropdown

After you Save the draft quote, a dropdown menu arrow will appear. The _Save_ dropdown menu in the top right corner of the quote view presents many functions to work with or manipulate the quote, which can vary based on the state of the quote. You can change the status of the quote's lifecycle manually, clone the quote, view it directly from the client portal, and more.

- View PDF: View the PDF version of the quote
- Print PDF: Brings up the printer dialog to print the quote PDF
- Download PDF: Downloads the quote PDF
- Download E-Quote: Downloads the electronic quote document file (for jurisdictions using E-Invoice)
- Schedule: Schedule the quote to be sent at a later date/time
- Email Quote
- Client Portal: View the quote as the client in the client portal
- Mark Sent: Mark quote as sent (ex. if you sent manually by printing PDF...)
- Approve: Mark the quote as Approved
- Convert to Invoice: Convert the quote to an invoice for the client to pay
- Convert to Project: Convert the quote to a project
- Run template: Brings up the screen to run the quote as a [Template](/en/advanced-topics/templates) by selecting a design (Advanced feature)
- Clone to Quote: Clone the quote
- Clone to Other: Lets you choose whether to clone to an _Invoice_, _Credit_, _Recurring Invoice_, or _Purchase Order_ (the items from the quote will be copied)
- Archive
- Delete

### Contacts

Here you see the contacts from your client that are marked as included in the quote.

The checkbox next to each client defines whether they will receive the email notification. Contacts with the option _Add to Invoices_ selected in Client Edit, will automatically be checked to receive invoices and quote emails.

Also available are links to the client portal for each respective contact included.

## Items

This is the main part of the quote. You see a list of the line items included on the quote. You can add _Products_, _Tasks_, or _Expenses_ to the quote. Each item on the list will have these fields available:

- **Product** - The name of the product, task, or expense line item being applied.
- **Description** - A description of the line item. Descriptions can include HTML code, or Markdown code formatting (When enabled under _Settings_ > _Account Management_).
- **Unit Cost** - The cost of a single product or expense, or the hourly rate of a task for the line item.
- **Quantity** - The number of products, expenses, or billable hours for a task, to be multiplied by the unit cost of that line item.

### Bottom Tabs

![Bottom Tabs](/assets/images/quotes/quote_bottom_tabs.png "Bottom Tabs")

#### Terms

Describe any terms or conditions for your client, as they relate to the quote, and optionally _Save as default terms_.

#### Footer

Any text notes to be included at the bottom of the quote. A good spot for less important disclaimers. Optionally _Save as default footer_.

#### Public Notes

Any text notes to add detail or context to the quote for you and your client. A good spot for service notes, or a summary of work performed for the client.

#### Private Notes

Private text notes, not printed on the quote PDF or viewable by the client. These notes can only be seen by users of the admin portal.

#### Documents

Upload pictures or documents to your quote, to include for your client. Uploaded files can be viewed and accessed by the client through the client portal.

#### Settings

The _Settings_ panel includes some additional options for the quote:

- **User** - Optionally change the user who is marked as creator of the quote. The User option can be used in the reports for tracking, but can also be used to give a specific user permission to view/edit an individual record.
- **Project** - Optionally link the quote to a _Project_
- **Vendor** - Optionally assign a _Vendor_ to the quote
- **Exchange Rate** - Optionally, for when your client record has another currency than your own as their default, you will be able to manually specify the exchange rate to automatically calculate what they will owe in their own default currency.
- **Design** - Choose a template design from one of the premade templates, or one of your own custom designs. You can customize quote designs under _Settings>Invoice Design_
- **Inclusive Taxes** - When enabled, quote tax will be marked as inclusive.

## Lifecycle of a quote

### Draft

The Draft status is the first status in the lifecycle of a quote. In this status, changes can be made to the quote and the quote is hidden completely from the client. Draft quotes are inactive until either emailed to the client or marked as sent.

:::warning
Once a draft quote has been emailed/marked as sent, its status cannot be changed back to draft.
:::

### Sent

A quote is marked as sent when it has been emailed to the client or manually marked as _sent_ in the admin panel.

### Approved

A quote is marked as approved either by you manually in the admin portal (by selecting the _Approve_ option from the dropdown), or when the client approves it from the Client Portal.

### Converted

A quote is marked as converted once it has been converted into an invoice. This is the last stage of a successfull quotation - the client has decided to proceed with the quoted items and has been invoiced for it.

![Converted to invoice indicator](/assets/images/quotes/quote_converted_to_invoice_indicator.png)

Once the quote is converted into an invoice, there will be a blue invoice icon next to the green _Converted_ label, which links to the invoice that it was converted to.

### Deleted

A quote can be marked as deleted if the following conditions have been met

- The quote has a status of Sent / Draft.

What happens when a quote is deleted?

- Quote status set to deleted
- The quote number is appended with **\_deleted** in order to allow reuse of quote numbers.

### Archived

Archiving a quote simply removes the quote from the quote list view. Archiving a quote keeps your list views clean and tidy.

:::warning
When a quote is archived no further modifications can be made to the quote. To modify the quote you will need to Restore the quote first.
:::

### Restored

Restoring a quote from the archived or deleted state will set the quote back to its previous state prior to archiving.
