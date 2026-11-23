---
title: "Expenses: Record Costs, Bill Them Back and Keep Receipts"
sidebar_label: "Expenses"
sidebar_position: 10
description: "How to record expenses in Invoice Ninja: linking a vendor, client and category, marking an expense billable, recording that you paid the vendor, tax and currency, receipts, and what each expense status means."
---
# Expenses: record costs, bill them back and keep receipts

An expense is any cost your business has incurred: a software subscription, a taxi fare, materials for a job, a monthly phone bill. Tracking them in Invoice Ninja keeps your profit and loss honest, gives receipts a home at tax time, and lets you pass costs back to a client when the work calls for it.

<video width="100%" controls>
  <source src="/assets/videos/expenses/create_expense.mp4" type="video/mp4" />
</video>

## Where do I see all my expenses?

Click **Expenses** in the left menu. The list shows **Category**, **Status**, **Number**, **Client**, **Vendor**, **Date**, **Amount**, **Public Notes** and **Project**. From here you can:

- Search with the **Filter** box
- Show archived or deleted expenses with the **Lifecycle** filter
- Narrow the list with the **Status** filter: **Logged**, **Pending**, **Invoiced**, **Paid**, **Unpaid** or **Uncategorized**
- Narrow by **Expense Categories**
- Choose what to show with **Columns**
- Import expenses from a file with **Import**
- Create an expense with **Enter Expense**

Each row has an **Actions** menu on the right with the same actions as the expense itself (see [What can I do with an expense?](#more_actions_dropdown)).

Click the expense number to open it for editing. Clicking elsewhere on the row opens a side panel with **Overview**, **Documents** and an **Actions** menu.

You can also open the **Expenses** tab on a [vendor](/docs/user-guide/vendors) or a [client](/docs/user-guide/clients) to see only that party's expenses.

## How do I create an expense?

1. Go to **Expenses** and click **Enter Expense**, or create the expense while you are already on a vendor or client.
2. Fill in at least an **Amount** and a **Date**. For reports that actually help later, also pick a **Vendor** (who you paid), a **Category** (what kind of cost it was) and, if it relates to a job, a **Client** or **Project**.
3. Optional: add notes, mark it billable, record that you paid the vendor, set tax or attach a receipt. See the sections below.
4. Click **Save**.

You can also start from an existing expense: open its **Actions** menu and choose **Clone**, or choose **Clone to Recurring** if the cost repeats. See [Recurring Expenses](/docs/user-guide/recurring-expenses).

New expenses follow the defaults under [Expense Settings](/docs/user-guide/basic-settings#expense_settings), including whether **Should be invoiced**, **Mark Paid** and **Add Documents to Invoice** start switched on.

### Which expense details do I fill in?

| Field | What it is for |
|---|---|
| **Vendor** | The business you paid. Optional, but this is what makes spend-per-supplier reports work. See [Vendors](/docs/user-guide/vendors). The dropdown ends with **New Vendor**. |
| **Client** | Who the expense is for. Setting a client does not bill them; it only links the record. If you later invoice the expense, the new invoice is meant for this client. See [Clients](/docs/user-guide/clients). |
| **Project** | Links the cost to a [project](/docs/user-guide/projects), so it rolls up alongside that project's tasks and invoices. |
| **Category** | A bucket such as Travel, Software or Materials. Profit and Loss groups expenses by category, so it is worth setting even for a one-off. Manage the list under **Settings > Expense Settings**. |
| **Assigned User** | The team member the expense is recorded against. Useful for reporting and for limiting who can see the record. |
| **Tags** | Optional. Labels you can use to find or group expenses later. |
| **Amount** | The total you were billed. |
| **Currency** | Defaults to the vendor's currency, or your company currency if no vendor is set. |
| **Date** | The date on the vendor's invoice, not the date you paid it. This is the date your tax-period reports use. |
| **Tax** | Appears only when **Expense Tax Rates** is enabled under **Settings > Tax Settings**. If tax rates are off, the Taxes card says "Item tax rates are disabled" and links to those settings. See [How do taxes work on an expense?](#how-do-taxes-work-on-an-expense). |

On a saved expense you will also see its **Status** and **Number**. Change the numbering pattern under **Settings > Generated Numbers > Expenses**.

### Why do Vendor, Client and Category all appear?

These three fields answer different questions:

- **Vendor** is who you paid.
- **Client** is who the expense relates to, and who you might recharge it to.
- **Category** is what kind of spend it is, for accounting.

A taxi to visit a client might have the taxi company as the vendor, that client, and Travel as the category. Each one drives a different report, and filling all three gives you the most flexibility later.

An amount alone is enough to save the record, but it tells you little three months from now.

### What goes in the notes?

| Field | What it is for | Can the client see it? |
|---|---|---|
| **Public Notes** | Becomes the line-item description when you invoice the expense, so write it as something a client would read, such as "On-site visit, Tuesday". | Yes, once it is on an invoice |
| **Private Notes** | Notes for your team only, such as which job budget to reimburse it from. Never on the PDF or in the client portal. | No |

### How do I make an expense billable to a client?

**Should be invoiced** is the toggle that makes an expense billable ("Enable the expense to be invoiced"). When it is off, the expense is only a cost record: it affects your Profit and Loss and never touches a client invoice. When it is on, the expense moves to **Pending** and two actions appear in the menu.

Nothing is charged to the client until you take the second step. "Should be invoiced" is a flag, not a bill. That lets you capture a cost the moment the receipt arrives, then batch several weeks of costs onto one invoice when you are ready to bill.

| Action | What it does |
|---|---|
| **Invoice Expense** | Opens a new unsaved [invoice](/docs/user-guide/invoices) with this expense already added as a line item (the public notes become the description, with quantity 1 and the expense amount as the unit cost). Pick the client, then save the invoice when you are ready. |
| **Add To Invoice** | Adds the expense as a line item on an existing invoice for that client. Use this when you are collecting small costs against a running job. |

If you turn **Should be invoiced** off, **Invoice Expense** and **Add To Invoice** disappear from the menu.

See [Invoices](/docs/user-guide/invoices#how-do-i-add-line-items) for how that line sits with other items.

### How do I record that I paid the vendor?

**Mark Paid** records that *you* paid the vendor ("Track the expense has been paid"). It has nothing to do with the client paying you.

Turn it on, then fill in **Payment Type**, **Date** and **Transaction Reference**. Keeping this accurate is what makes your cash-flow and Profit and Loss reports match what actually left the account.

If **Mark Paid** is on and **Should be invoiced** is off, the expense status is **Paid**.

### How do I record an expense in another currency?

If you were billed in a currency different from yours, turn on **Convert currency** ("Set an exchange rate when creating an expense"). That reveals **Currency**, **Exchange Rate** and **Converted Amount**, so you can record both the original amount and what it cost in your home currency. The exchange rate fills in with the current market rate; you can change it to match what your card statement actually charged.

:::warning
Reports group expenses by the **expense or vendor currency**, not the converted currency. If you want a single-currency Profit and Loss, record each expense directly in your home currency using the already-converted amount, and leave the foreign-currency detail in the notes or on an attached receipt.
:::

### How do I attach receipts, and put them on the invoice?

Open the **Documents** tab and upload PDFs, photos of paper receipts or the vendor's original invoice.

Turn on **Add Documents to Invoice** if those files should go out with the invoice when you bill the client ("Make the documents visible to client"). That is useful when a client wants proof of pass-through costs before they pay.

## How do taxes work on an expense?

**Expense Tax Rates** must be enabled under **Settings > Tax Settings** before the tax controls appear. Otherwise the Taxes card says "Item tax rates are disabled" and links to those settings. Depending on that setting you can apply one, two or three taxes per expense, enough for a national tax plus a city-level sales tax, for example.

When tax rates are enabled, taxes can be entered two ways:

- **By Rate** applies a percentage you have already set up (the default).
- **By Amount** lets you type a tax name and a flat figure, which is handy for a fixed duty or levy that is not a clean percentage.

The choice that surprises people is inclusive versus exclusive:

- **Exclusive**: tax sits on top of the expense amount. 100 + 10% = 110.
- **Inclusive**: tax is already included in the amount. A 100 inclusive expense at 10% is 90.91 pre-tax plus 9.09 tax.

Pick the one that matches how the vendor's invoice is written. Getting this wrong does not change what you paid, but it does change what lands in the tax column of your reports.

<video width="100%" controls>
  <source src="/assets/videos/expenses/expense_settings_taxes.mp4" type="video/mp4" />
</video>

## What can I do with an expense? {#more_actions_dropdown}

Click the arrow next to **Save** on an expense, or use the row **Actions** menu on the list or in the side panel.

| Action | What it does |
|---|---|
| **Invoice Expense** / **Add To Invoice** | Appear when **Should be invoiced** is on. See [How do I make an expense billable to a client?](#how-do-i-make-an-expense-billable-to-a-client). |
| **Clone** | Copies the expense into a new expense. |
| **Clone to Recurring** | Turns the expense into a [recurring expense](/docs/user-guide/recurring-expenses). Use this for rent, subscriptions and anything else that lands on the same day each cycle. |
| **Archive** / **Delete** | Tidies up or removes the expense. See [What do the expense statuses mean?](#lifecycle_of_an_expense). |
| **Restore** | Brings an archived or deleted expense back. |

**Run Template** only appears once you have created a [template](/docs/advanced-topics/templates).

## What do the expense statuses mean? {#lifecycle_of_an_expense}

The status is set for you as the expense moves along. You do not pick it yourself, but it is what the list filters use.

| Status | What it means |
|---|---|
| **Logged** | Recorded as a cost, without being flagged as billable or marked as paid. |
| **Pending** | **Should be invoiced** is on, and the expense is waiting to be added to an invoice. |
| **Invoiced** | The expense is on a client invoice. This does not mean the client has paid. Whether that invoice is paid or overdue is tracked on the invoice, not on the expense. |
| **Paid** | **Mark Paid** is on and **Should be invoiced** is off: you have recorded that you paid the vendor. |
| **Archived** | Hidden from your normal list. Reports still include it, so archiving is just to keep the active list tidy. You can still edit and save an archived expense without restoring it first. |
| **Deleted** | Hidden and left out of reports, as if it never happened. The record can still be restored. Use delete when an expense was logged in error; use archive when it is real but old. |

The **Status** filter also offers **Unpaid** and **Uncategorized**.

### How do I bring back an archived or deleted expense?

1. On the expense list, open the **Lifecycle** filter, tick **Archived** (or **Deleted**) and click **Apply**.
2. In the expense's row, open the **Actions** menu and choose **Restore**.

The expense goes back to the status it had before (for example, a Pending expense that was archived returns to **Pending**).

## How do I set defaults for new expenses?

For defaults that should apply to every new expense, see [Expense Settings](/docs/user-guide/basic-settings#expense_settings). That page includes **Should be invoiced**, **Mark Paid**, **Convert currency**, **Add Documents to Invoice**, **Notify Vendor When Paid**, tax options (**Enter Taxes**, **By Rate**, **By Amount**, **Inclusive Taxes**) and your category list. Add a category with **New Expense Category**. Categories appear in a table on that page.

If an expense line came from your bank feed, you can match it to a [transaction](/docs/user-guide/transactions) rather than entering it twice. For a cost that repeats, set up a [recurring expense](/docs/user-guide/recurring-expenses) once instead of recreating it by hand each month.

## Can I create expenses by email? (self-hosted only)

On a self-hosted Invoice Ninja, vendors, clients or your own team can forward a receipt to a dedicated mailbox, and an expense record is created automatically. Attachments and the email body are stored on the record. The system tries to extract amount, date and vendor details using OCR. Structured e-invoices in the ZUGFeRD format are parsed directly, without OCR.

These settings live under **Settings > Expense Settings** on a self-hosted installation. They do not appear on the hosted app:

- **Enable Expense Mailbox**: turns email processing on or off.
- **Expense Mailbox E-Mail**: the address that receives forwarded receipts. It must be unique across the whole Invoice Ninja instance.
- **Allow Company Users**: lets your own team submit by email.
- **Allow Vendors**: lets vendors email in directly.
- **Allow Unknown Senders**: accepts mail from addresses not already on file.
- **Allowed Email Addresses**: a comma-separated allowlist of domains.
- **Blocked Email Addresses**: a comma-separated blocklist of domains.

### Which inbound providers can I use?

Set up inbound parsing with **Mailgun** or **Brevo**, or forward mail from your own mailbox to one of those providers. A subdomain such as `invoicing.example.com` pointed at the provider keeps things tidy.

- **Mailgun**: configure MX records for inbound processing, then create a receiving route using **store and notify**. Point the notify endpoint at `/api/v1/mailgun_inbound_webhook`. Configure every Mailgun region you use.
- **Brevo**: follow the [Brevo inbound parse docs](https://developers.brevo.com/docs/inbound-parse-webhooks), set MX records, then register the webhook through the Brevo API against `/api/v1/brevo_inbound_webhook?token=brevo-api-token`.

### How does receipt scanning work?

To extract data from free-form receipts and invoices, Invoice Ninja uses Mindee. Without an API key, only structured formats such as ZUGFeRD are parsed. Mindee's free tier includes 250 pages per account, which is enough for most small self-hosted setups.

Set the key in your `.env`:

```bash
MINDEE_API_KEY=your-api-key
```

Optional limits cap usage and avoid surprise bills. Once a limit is exceeded, Mindee is treated as not configured and ignored:

```bash
MINDEE_MONTHLY_LIMIT
MINDEE_DAILY_LIMIT
MINDEE_ACCOUNT_MONTHLY_LIMIT
MINDEE_ACCOUNT_DAILY_LIMIT
```

### How do I turn inbound email on?

1. Optional: create a Mindee account, generate an API key and set `MINDEE_API_KEY` in your `.env`. Set the limit values if you want a hard ceiling.
2. Create an account at Mailgun or Brevo and follow their inbound-parsing setup. For Brevo, generate a token, set `INBOUND_WEBHOOK_TOKEN` in your `.env`, configure MX records, then register the webhook, appending `?token=` and your token to the URL. Test the webhook against a temporary URL first, so you know mail is flowing before you point it at Invoice Ninja.
3. Optional: if you already use a mailbox at your domain, forward that public address to the provider's inbound address, so you do not have to publish the provider mailbox.
4. In Invoice Ninja, go to **Settings > Expense Settings**, enable the inbound mailbox, paste in the provider's inbound address, and allow the senders you want to accept, typically your vendors, your team and your own email.
5. Send a test email to the inbound address and confirm an expense record appears. If nothing arrives, check the provider dashboard (inbound webhooks can take up to five minutes). If the webhook fired but no record was created, check the application logs.

## Related

- [Vendors](/docs/user-guide/vendors): who you paid
- [Clients](/docs/user-guide/clients): who the expense is for, and who you may bill
- [Recurring Expenses](/docs/user-guide/recurring-expenses): for costs that repeat on a schedule
- [Purchase Orders](/docs/user-guide/purchase-orders): convert a purchase order into an expense
- [Invoices](/docs/user-guide/invoices#how-do-i-add-line-items): adding a billable expense to an invoice
- [Projects](/docs/user-guide/projects): rolling costs up with the work
- [Transactions](/docs/user-guide/transactions): matching a bank withdrawal to an expense
- [Reports](/docs/user-guide/reports): Profit and Loss and spend by vendor, client, project or category
- [Expense Settings](/docs/user-guide/basic-settings#expense_settings): defaults for new expenses
