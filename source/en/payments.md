---
extends: _layouts.user_guide
section: content
locale: en
---

# Payments

Payment records are automatically generated when payments are processed from the client portal or when an invoice is marked as paid. When an invoice is marked as paid, a payment record for the full amount is created and labeled as "Manual Entry."

There are four possible statuses for a payment record:

- "Unapplied" for payments that have not been assigned to an invoice
- "Partially Unapplied" for payments with remaining credit
- "Paid" for payments that have been fully applied to an invoice
- "Refunded" for payments that have been returned to the customer. Note that any refunded amount must have been applied to an invoice first.

It is important to note that payment records are not printed or issued to the customer, instead an invoice is marked as "Paid" when there is a payment record associated with it.

## View a Payment

The payment view panel displays an overview of the payment status, the invoice it was applied to, the amount applied, the date of payment, the transaction reference, and any private notes. You can edit the payment record using the "Edit" button in the top right corner and use the Kebab menu to archive or delete it.

At the bottom of the panel, you can apply or refund a payment. Keep in mind that a payment can be applied to multiple invoices when entered manually in the admin portal. Also, partial refunds are allowed, but only "Applied" payment amounts can be refunded."

## Edit a Payment

![Edit payment](/assets/images/payments/edit_payment_react.png "Edit payment")

These are the fields are available when editing a payment to add detail for your records:

- **Payment Number** - Payment numbers get automatically generated to sort them for your records. The number generation rules can be viewed or modified under _Settings_ > _Generated Numbers_
- **Payment Date** - The date of the payment, which is generally automatically populated with the current date.
- **Payment Type** - A searchable drop down list to select a payment method from, such as cash, cheque, credit card, etc.
- **Transaction Reference** - A transaction reference number for a debit/credit payment may go here, or a simple explanation about the transaction to give some detail about how it was recorded.
- **Private Notes** - Private notes viewable only from the admin portal, for any purpose you might need to add additional details to the payment record for bookkeeping or auditing purposes.
- **Convert Currency** - When enabled, this section allows you to select a currency provided by the client when it doesn't match your own currency. The exchange rate must be manually specified by you, and it will use that rate to calculate the converted amount automatically for you.

## Enter a Payment

<div class="video_container">
<iframe class="video" src="https://www.youtube.com/embed/anX9l3MF-Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

When manually entering a payment, all of the above fields apply, in addition to these below.

- **Client** - You must specify the client the payment is coming from first.
- **Amount received** - Enter a value here if the total amount received was MORE than the invoice amount, or when recording a payment with no invoices. Otherwise this field should be left blank.
- **Invoices** - Select an invoice(s) from a searchable list of available invoices for the client that have balance owing.
  - **Amount received** - Specify the amount received for each invoice. This is populated automatically as the total amount due for the invoice.
- **Credits** - Optionally, apply the client's credits to the payment.
- **Send Email** - Enabled by default, disable to skip sending the client an email notifying them of their payment.

## Using credits as part of a payment.

<div class="video_container">
<iframe class="video" src="https://www.youtube.com/embed/74v04u4Ma1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Lifecycle of a Payment

### Unapplied

If a payment is created, assigned to a client, and given a value greater than 0 (zero), but not assigned or linked to an invoice, the payment is marked _Unapplied_.

### Partial

You can apply one payment to multiple invoices. If the payment amount is greater than the invoice balance, the payment will be marked as "Partially Applied" and the remaining balance can be applied to another invoice. You can view the remaining balance of a partial payment by viewing the payment details.

### Completed

_Completed_ Payments are fully applied to one or more invoices, and have no remaining value.

### Refunded

When viewing a payment, you can use the kebab menu in the upper right corner of the view panel to refund it. The payment will be unlinked from any invoices it has been applied to.

### Cancelled & Deleted

What happens when a payment is deleted?

- Payment status set to deleted
- The payment number is appended with <b>\_deleted</b> in order to allow reuse of payment numbers.
- If the payment was previously marked _Partial_ or _Completed_ the remaining payment balance will no longer be available to the customer, and will be unlinked from any invoices it was previously linked to.

### Archived

Archiving a payment simply removes the payment from the payment list view. Archiving a payment keeps your list views clean and tidy.

<x-warning>
When a payment is archived no further modifications can be made to the payment. To modify the payment you will need to *Restore* the payment first.
</x-warning>

### Restored

Restoring a payment from the archived or deleted state will set the payment back to its previous state prior to archiving.

<x-next url=/en/projects>Projects</x-next>
