---
extends: _layouts.docs
section: content
---

# Payments

Payment records are most often generated automatically when payments are processed from the client portal, or when you mark an invoice as paid.  When you mark an invoice as paid, a payment record is created for the full amount due on the invoice, and it is given a *Transaction Record* of "Manual Entry".

Generally a payment record has four statuses available.  "Unapplied" when a payment has not been applied to anything, "Partially Unapplied" when there are credits remaining from that payment still not applied to an invoice, "Paid" when the full payment has been applied to an invoice, and "Refunded" when a payment has been returned to the customer.  **Note** that any amount paid must be applied to something before it can be marked as "Refunded", which can greatly complicate recordkeeping of overpayment refunds.  It would be best to avoid these situations.

Payment records are not a document type that gets printed and issued to the customer, instead an invoice gets marked as "Paid" when there is a payment record associated with it.

## View a Payment

From the payment view panel you will see an overview of the status of the client's payment (or refund if one was provided), which invoice it was applied to and how much was applied, as well as the date of payment, transaction reference, and any private notes attached to the payment record.

You will have a button to *Edit* the payment record in the top right corner of the screen.  You can use the kebab menu button next to that, to archive, or delete the payment record.  

At the bottom of the Payment view panel, you have buttons to *Apply* a payment, or *Refund* a payment.  A single payment can be applied to multiple invoices when entered manually in the admin portal in this way.  Although you can issue partial refunds, remember that only "Applied" payment amounts can be refunded.

## Edit a Payment

These are the fields are available when editing a payment to add detail for your records:

* **Payment Number** - Payment numbers get automatically generated to sort them for your records.  The number generation rules can be viewed or modified under *Settings* > *Generated Numbers*
* **Payment Date** - The date of the payment, which is generally automatically populated with the current date.
* **Payment Type** - A searchable drop down list to select a payment type from, such as cash, cheque, credit card, etc.
* **Transaction Reference** - A transaction reference number for a debit/credit payment may go here, or a simple explanation about the transaction to give some detail about how it was recorded.
* **Private Notes** - Private notes viewable only from the admin portal, for any purpose you might need to add additional details to the payment record for bookkeeping or auditing purposes.
* **Convert Currency** - When enabled, this section allows you to select a currency provided by the client when it doesn't match your own currency.  The exchange rate must be manually specified by you, and it will use that rate to calculate the converted amount automatically for you.

## Enter a Payment

When manually entering a payment, all of the above fields apply, in addition to these below.

* **Client** - You must specify the client the payment is coming from first.
* **Amount** - You must specify the amount of the payment.
* **Invoice** - Select an invoice from a searchable list of available invoices for the client that have balance owing.
* **Applied** - Appearing after selecting an invoice, the amount applied to the invoice, generated automatically.  Any overpayment by the client is applied to their client record for future invoices.
* **Send Email** - Enabled by default, disable to skip sending the client an email notifying them of their payment.

<x-next url=/docs/quotes>Quotes</x-next>
