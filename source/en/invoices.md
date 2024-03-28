---
extends: _layouts.user_guide
section: content
locale: en
---

# Invoices

Invoice records support a lot of detail and allow you to bill your clients for _Products_, _Tasks_, or _Expenses_. You can attach documents or pictures to invoices, which the client may view from the client portal. Invoice records keep a history of when changes were made to them, and which users performed those changes, in order to increase accountability within your business.

<video width="100%" controls>
  <source src="/assets/videos/invoices/create_invoice_clip_react.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

## Viewing an Invoice

To view an invoice, you can either view the PDF printout by selecting _More Actions>View PDF_, or you can enter the Edit Invoice screen to see all details and notes about the invoice. You can edit the invoice by clicking _More Actions>Edit_, or just click the invoice number to enter the edit screen.

### Click an invoice for overview

On desktop if you click on an invoice row (not the invoice number), it will open a pull-out on the right with Overview, History, Activity, and Email History options.

![Invoice overview](/assets/images/invoices/invoice_right_overview_panel.png "Invoice overview")

From the overview panel, you will see general information about the invoice. The amount of the invoice, balance owing, any amount paid, which client it is assigned to, the date of the invoice, and any products or tasks included in the invoice.

#### History

The _History_ panel presents a chronological overview of transactions related to the invoice, and shows you any changes made to the invoice total amount, and by which users.

#### Activity

The _Activity_ panel presents a chronological overview of any actions performed against the invoice, including when it was created, edited, paid, refunded, cancelled, etc, and which user performed the action.

#### Email History

This panel presents a log of every time the invoice was emailed.

### Invoice More Actions Dropdown

![Invoice More Actions dropdown](/assets/images/invoices/invoice_more_actions_dropdown.png "Invoice more actions dropdown")

The _More Actions_ dropdown has many frequently used options:

- Edit
- Email Invoice
- View PDF: View the PDF version of the invoice
- Print PDF: Brings up the printer dialog to print the invoice PDF
- Schedule: Schedule the invoice to be sent at a later date/time
- Delivery Note (PDF): Goes to the View PDF screen and checks the 'Delivery Note' toggle to include delivery note
- Download: Downloads the invoice PDF
- Download E-Invoice: Downloads the electronic invoice document file (for jurisdictions using E-Invoice)
- Mark Paid: Mark invoice as fully paid
- Client Portal: View the invoice as the client in the client portal
- Reverse: See [Reversed](#reversed)
- Run Template: Brings up the screen to run the invoice as a [Template](/en/templates) by selecting a design (Advanced feature)
- Clone to Invoice: clone the invoice
- Clone to Other: Lets you choose whether to clone to a _Recurring Invoice_, _Quote_, _Credit_, or _Purchase Order_ (the items from the invoice will be copied)
- Archive
- Delete

## Invoice Edit or Create

Here are some options you will see when creating or editing an invoice.

### Client

You must select a client from the list to apply your invoice to.

### Invoice Details

- **Invoice Date** - Automatically generated with today's date, is simply the date of the invoice.
- **Due Date** - Optionally, you may include a later due date for payment of the invoice. If no due date is specified, the full amount is due immediately.
- **Partial/Deposit** - Optionally, specify a required partial payment or deposit on the invoice, with its own due date, separate from, and owed before the invoice due date for the invoice's full amount.
- **PO Number** - Optionally, typically for when you client has a product order number to provide for you, for their own recordkeeping purposes.
- **Discount** - Enter a discount amount to apply to the invoice, either as a percentage, or a flat rate.

### Contacts

![Client contacts on invoice](/assets/images/clients/client_auto_included_on_invoice_example.png "Client contacts on invoice")

Here you see the contacts from your client that are marked as included in the invoice.

The checkbox next to each client defines whether they will receive the email notification. Contacts with the option _Add to Invoices_ selected in Client Edit, will automatically be checked to receive invoices and quote emails.

Also available are links to the client portal for each respective contact included.

## Items

This is the main part of the invoice. You see a list of the line items included on the invoice. You can add _Products_, _Tasks_, or _Expenses_ to the invoice to bill your client for. Each item on the list will have these fields available:

- **Product** - The name of the product, task, or expense line item being applied.
- **Description** - A description of the line item. Descriptions can include HTML code, or Markdown code formatting (When enabled under _Settings_ > _Account Management_).
- **Unit Cost** - The cost of a single product or expense, or the hourly rate of a task for the line item.
- **Quantity** - The number of products, expenses, or billable hours for a task, to be multiplied by the unit cost of that line item.

### Bottom Tabs

![Bottom Tabs](/assets/images/invoices/invoice_bottom_tabs_react.png "Bottom Tabs")

#### Public Notes

Any text notes to add detail or context to the invoice for you and your client. A good spot for service notes, or a summary of work performed for the client.

#### Private Notes

Private text notes, not printed on the invoice PDF or viewable by the client. These notes can only be seen by users of the admin portal.

#### Terms

Describe any terms or conditions for your client, as they relate to the invoice, and optionally _Save as default terms_.

#### Footer

Any text notes to be included at the bottom of the invoice. A good spot for less important disclaimers. Optionally _Save as default footer_.

#### Documents

Upload pictures or documents to your invoice, to include for your client. Uploaded files can be viewed and accessed by the client through the client portal.

#### Settings

The _Settings_ panel includes some additional options for the invoice:

- **Project** - Optionally link the invoice to a _Project_
- **User** - Optionally change the user who is marked as creator of the invoice.
- **Exchange Rate** - Optionally, for when your client record has another currency than your own as their default, you will be able to manually specify the exchange rate to automatically calculate what they will owe in their own default currency.
- **Vendor** - Optionally assign a _Vendor_ to the invoice
- **Auto Bill Enabled** - When enabled, the client contact(s) will automatically be emailed for payment of their invoice. By default, auto bill actions will be performed on the invoice due date, as specified under _Settings>Payment Settings_.
- **Inclusive Taxes** - When enabled, invoice tax will be marked as inclusive.
- **Design** - Choose a template design from one of the premade templates, or one of your own custom designs. You can customize invoice designs under _Settings>Invoice Design_

## Charging Interest/Late Fees

You can configure late fees for overdue invoices under _Settings>Templates & Reminders_:

![Late fees overdue invoices](/assets/images/settings/late_fees_overdue_invoices.png "Late fees overdue invoices")

## Lifecycle of an invoice

### Draft

The Draft status is the first status in the lifecycle of a invoice. In this status, changes can be made to the invoice and the invoice is hidden completely from the client. A draft invoice does not affect the ledger nor does it change the client balance. Draft invoices are inactive until either emailed to the client, marked as sent, or marked paid.

<x-warning>
Once a draft invoice has been emailed/marked as sent its status cannot be changed back to draft.
</x-warning>

### Sent

A invoice is marked as sent when it has been emailed to the client or marked as _sent_ in the admin panel.

When the invoice status is changed to Sent, the client balance increases by the _invoice balance_ amount.

### Partial

A invoice status of Partial means that a payment has been applied to the invoice but there is still a outstanding balance remaining on the invoice.

### Paid

A invoice status of Paid means that full payment has been applied to the invoice. The _invoice balance_ will be 0.

### Cancelled

A invoice can be cancelled under the following conditions.

- The invoice is marked as Sent, Partial or Paid (ie. some payment amount has been applied or the invoice is active)

When a invoice is cancelled the _invoice balance_ is set to zero and the status updated to **Cancelled**, the _client balance_ is also adjusted down. If payments have been applied to the invoice these will remain linked to the invoice.

### Deleted

A invoice can be marked as deleted if the following conditions have been met:

- The invoice has a status of Sent / Draft / Paid / Partial.

What happens when a invoice is deleted?

If the invoice has a balance remaining, in order to balance the ledger, we perform a **Cancellation** on the invoice first and then perform the deletion.

- Invoice status set to deleted
- The invoice number is appended with **\_deleted** in order to allow reuse of invoice numbers.

<x-warning>
Important! If a invoice has a remaining balance or has had payments applied to it, the invoice is cancelled and then deleted.
</x-warning>

### Reversed

A invoice can be reversed under the following conditions:

- The invoice is marked as Sent, Partial or Paid (ie. some payment amount has been applied to the invoice)

When a invoice is reversed the payment(s) that have been applied to the invoice have a credit generated against them. The ledger is also adjusted as follows:

- The client paid to date amount is reduced by the calculated amount of (invoice balance - invoice amount).
- A credit is generated for the payments applied to the invoice (invoice balance - invoice amount). The original payment record that was linked to the invoice will now be linked to a new credit record.
- Any credit value that was applied as payment to the invoice is then converted into a new credit record.
- The client balance is reduced by the invoice balance.
- The invoice balance is finally set to 0.
- The invoice status is set to Reversed.

When a invoice has been reversed, the previous payments relationships are unlinked and cannot be restored.

### Archived

Archiving a invoice simply removes the invoice from the invoice list view. Archiving a invoice keeps your list views clean and tidy and does not effect the ledger / client balance.

<x-warning>
When a invoice is archived no further modifications can be made to the invoice. To modify the invoice you will need to Restore the invoice first.
</x-warning>

### Restored

Restoring a invoice from the archived or deleted state will set the invoice back to its previous state prior to archiving.

<x-next url=/en/recurring-invoices>Recurring Invoices</x-next>
