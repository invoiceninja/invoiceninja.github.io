---
title: "Client Portal"
sidebar_position: 7
---
# Client Portal

![Client portal homescreen](/assets/images/client_portal/client_portal_homescreen_invoices.png "Client portal homescreen")

- The client portal is an online self-serve dashboard for your client to see their invoices, make payments, download statements, manage subscriptions, payment methods, and more.
- When you send a client an invoice or quote, the email contains a link to view the invoice online in the client portal.
  - The invoice link will open in the client portal. From there the client has access to the other self-serve features of the portal.
- Client portal access is available for all your clients. You can optionally allow anyone to register as a new client under Settings>Client Portal>Registration.
- Only the enabled modules in Invoice Ninja will show in the client portal. For example, if you turn off Quotes, that option won't be visible to clients anymore. See: [Enabled Modules](/en/user-guide/basic-settings/#enabled-modules)

## Tabs in the Client Portal

### Invoices

All of the client's past, sent and unpaid invoices are shown under Invoices.

_Note that draft invoices won't show up in the client portal._ If you sent the client an invoice manually and want it to show up in the Client Portal, you need to select one of these actions from _your Invoice>More Actions_:

- Email Invoice: emailing the invoice will automatically mark it as sent and it will be visible in the client portal.
- Mark Sent: it will be changed to Sent status, and viewable in the client portal as an unpaid invoice.
- Mark Paid: it will be marked as paid and visible in the invoices history in the client portal.

### Recurring Invoices

![Recurring Invoices](/assets/images/client_portal/client_portal_recurring_invoices.png "Recurring invoices")

The client can see any recurring invoices that are enabled including the frequency, start date, next send date, cycles remaining, amount. They can click View to see any invoices created from a recurring invoice.

### Payments

![Payments](/assets/images/client_portal/client_portal_payments.png "Payments")

Here, the client can see all recorded payments (payments history), and view invoices attached to each payment.

### Quotes

![Quotes](/assets/images/client_portal/client_portal_quotes.png "Quotes")

The client can view their quotes and approve any pending quotes with a click.

Once the client approves a quote, it gets automatically converted into an invoice, and the client is taken to the invoice payment screen to pay for it.

### Credits

The credits section is where the client can view any credits that were applied to their account (for example, refunded invoices).

![Credits](/assets/images/client_portal/client_portal_credits.png "Credits")

### Payment Methods

The client can view their saved payment methods (Ex. credit cards) and add payment methods to their account (only if your payment gateway supports this).

![Payment methods](/assets/images/client_portal/client_portal_payment_methods.png "Payment methods")

Upon clicking _View_ on a payment method, the client has the ability to remove it or change which one is the default payment method (if multiple payment methods are saved).

![View payment method](/assets/images/client_portal/client_portal_view_payment_method.png "View payment method")

#### How are credit card details stored?

The payment card details are not stored on Invoice Ninja. Payment card details are captured by the payment gateway which returns a token that Invoice Ninja uses to charge the payment method in the future. You can read about payment tokenization [here](https://stripe.com/resources/more/payment-tokenization-101)

#### How can I enter a credit card on file for my client manually?

If you have credit card details you want to attach to the client's account yourself, you can enter the Client Portal, and go to _Payment Methods>Add Payment Method_

### Documents

The documents section is where the client can view any of the documents that have been made visible to them. For example, documents related to a project that you have uploaded to an invoice, quote, etc.

![Documents](/assets/images/client_portal/client_portal_documents.png)

### Statement

The statement feature is very useful for the client, they are able to generate a statement for all their payments/invoices for a selected date range and download it as PDF.

![Statement](/assets/images/client_portal/client_portal_statement.png "Statement")

### Subscriptions

The client is able to view their subscriptions that they signed up for via a Payment Link, and see options enabled for that subscription (such as Request cancellation, or Manage Plan)

![Subscriptions](/assets/images/client_portal/client_portal_subscriptions.png "Subscriptions")

![View subscription](/assets/images/client_portal/client_portal_view_subscription.png "View subscription")

### Pre-Payment

The client can make a pre-payment online (without paying for a specific invoice) here, if enabled under _Settings>Online Payments>Client Initiated Payments_.

_Settings>Online Payments>Client Initiated Payments_Minimum Payment Amount_ is where you can set a minimum amount the client can pre-pay via the portal

If the client selects _Enable Recurring_ they can choose the number of times the payment will reoccur (or indefinitely), and the frequency (daily, weekly, every two weeks...)

![Pre-Payment](/assets/images/client_portal/client_portal_prepayment.png "Pre-Payment")

#### What happens to the pre-payment after the client pays? Where is it stored?

Pre-payments made by clients will show up in the Payments section of the Invoice Ninja dashboard. You can select _More Actions>Apply Payment_ and select invoice(s) to apply the payment to.

![Apply payment](/assets/images/payments/unapplied_payment.png "Apply payment")
