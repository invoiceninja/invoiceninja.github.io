---
title: "Client Portal"
sidebar_position: 7
---
![Client portal homescreen](/assets/images/client_portal/client_portal_homescreen_invoices.png "Client portal homescreen")

The Client Portal is the customer-facing side of Invoice Ninja — a branded, self-serve dashboard where the people you invoice can view their documents, pay online, download statements, manage saved cards, and keep their own contact details up to date. Every time you email an invoice or quote, the link in that email opens the portal, so most clients end up there without ever needing to be told it exists.

The portal is tied to [Contacts](/docs/user-guide/clients#contacts), not clients. Each contact on a client record gets their own login, which is why a client with separate Accounts Payable and Operations contacts can have both people using the portal independently. Logins are enabled out of the box; you can additionally let anyone self-register as a new client under **Settings > Client Portal > Registration**.

The portal mirrors your Invoice Ninja configuration. Only the modules you have enabled appear to clients — turn off Quotes under [Basic Settings](/docs/user-guide/basic-settings/#enabled-modules) and the Quotes tab disappears from every contact's view.

## Tabs in the Client Portal

### Invoices

The Invoices tab lists every invoice the client can act on or review — anything outstanding, paid, or previously sent. It's almost always the first place a client lands after clicking through from an email.

Draft invoices are deliberately excluded. An invoice only becomes visible in the portal once it has left draft status, which happens whenever you take one of the following actions from **More Actions** on the invoice:

- **Email Invoice** — sends the invoice and marks it as sent in the same step.
- **Mark Sent** — flips the status to sent without emailing, so the invoice appears in the portal as unpaid.
- **Mark Paid** — marks the invoice as paid and files it in the client's portal history.

This is the usual cause of "my client can't see the invoice" — the record is still a draft. See [Invoices](/docs/user-guide/invoices) for the full invoice lifecycle.

### Recurring Invoices

![Recurring Invoices](/assets/images/client_portal/client_portal_recurring_invoices.png "Recurring invoices")

The Recurring Invoices tab gives the client visibility over any active subscription or retainer you've set up for them — frequency, start date, next send date, cycles remaining, and amount. Clicking **View** drills into the individual invoices that recurring template has already produced, which is handy when a client is reconciling a monthly charge. See [Recurring Invoices](/docs/user-guide/recurring-invoices) for how to set one up.

### Payments

![Payments](/assets/images/client_portal/client_portal_payments.png "Payments")

Payments shows the client's payment history — every payment you've recorded against their account, and the invoices each one was applied to. Clients tend to reach for this tab when they need a receipt or are checking whether a transfer has landed.

### Quotes

![Quotes](/assets/images/client_portal/client_portal_quotes.png "Quotes")

Clients use the Quotes tab to review anything you've proposed and approve it with a single click. Approval is what makes the portal do real work for you: once the quote is approved it's automatically converted to an invoice, and the client is taken straight to the payment screen for that new invoice. For the other side of this flow, see [Quotes](/docs/user-guide/quotes).

### Credits

The Credits tab surfaces any credits sitting on the client's account — typically from a refunded invoice or a goodwill adjustment — so the client can see what's available to offset future invoices. See [Credits](/docs/user-guide/credits) for how credits are issued and applied.

![Credits](/assets/images/client_portal/client_portal_credits.png "Credits")

### Payment Methods

The Payment Methods tab is where clients review the cards and bank accounts they've saved for faster checkout, and where they can add new ones. Saving a payment method is only possible when the underlying gateway supports it — if yours doesn't, this tab simply won't offer the option. See [Payment Gateways](/docs/user-guide/gateways) for gateway capabilities.

![Payment methods](/assets/images/client_portal/client_portal_payment_methods.png "Payment methods")

Clicking **View** on a saved method lets the client remove it or, if they have more than one on file, pick which should be used by default.

![View payment method](/assets/images/client_portal/client_portal_view_payment_method.png "View payment method")

#### How are credit card details stored?

Card numbers are never stored by Invoice Ninja. The details are captured directly by the payment gateway, which returns a token that Invoice Ninja uses to charge the card later. This is what keeps your setup out of PCI scope. For a fuller explanation of how tokenisation works, see [Stripe's overview](https://stripe.com/resources/more/payment-tokenization-101).

#### How can I enter a credit card on file for my client manually?

If a client has given you card details over the phone or in person and you'd like to save them for future charges, log into the Client Portal on their behalf and go to **Payment Methods > Add Payment Method**. The card is captured by the gateway in exactly the same way it would be if the client had entered it themselves.

### Documents

The Documents tab is where clients see any files you've chosen to share with them — typically contracts, statements of work, terms of service, or supporting documents attached to an invoice or quote. Only files you've made visible to the client will appear here; internal attachments stay hidden.

![Documents](/assets/images/client_portal/client_portal_documents.png)

### Statement

Statements let the client generate a PDF summary of their invoices and payments for any date range they choose. It's a common request around the end of a financial year or when a client is reconciling their own books, and offering it self-serve saves you running the report yourself.

![Statement](/assets/images/client_portal/client_portal_statement.png "Statement")

### Subscriptions

If the client signed up through a [Payment Link](/docs/user-guide/subscriptions), the Subscriptions tab is where they manage the resulting subscription — requesting cancellation or changing plans, depending on which options you enabled when configuring the subscription.

![Subscriptions](/assets/images/client_portal/client_portal_subscriptions.png "Subscriptions")

![View subscription](/assets/images/client_portal/client_portal_view_subscription.png "View subscription")

### Pre-Payment

Pre-Payment lets a client pay you without attaching the payment to a specific invoice — useful for deposits, retainers, or topping up an account before work begins. The tab only appears if you've enabled it under **Settings > Online Payments > Client Initiated Payments**.

You can set a floor for how much a client is allowed to send under **Settings > Online Payments > Client Initiated Payments > Minimum Payment Amount**. If the client ticks **Enable Recurring**, they can set the payment to repeat a fixed number of times or indefinitely, at the frequency they choose (daily, weekly, fortnightly, and so on) — handy for clients who want to fund a retainer on a schedule without you raising an invoice each time.

![Pre-Payment](/assets/images/client_portal/client_portal_prepayment.png "Pre-Payment")

#### What happens to the pre-payment after the client pays? Where is it stored?

A pre-payment lands in your [Payments](/docs/user-guide/payments) list as an unapplied payment — money received but not yet matched to an invoice. When you're ready to use it, open the payment and choose **More Actions > Apply Payment**, then pick the invoice or invoices to apply it against.

![Apply payment](/assets/images/payments/unapplied_payment.png "Apply payment")
