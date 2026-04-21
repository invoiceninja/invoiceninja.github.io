---
title: "Expenses"
sidebar_position: 10
---
An **Expense** is any cost your business has incurred — a software subscription, a taxi fare, materials for a job, a monthly phone bill. Tracking them inside Invoice Ninja keeps your profit and loss picture honest, gives you a home for receipts at tax time, and lets you pass costs back to clients when the work calls for it.

<video width="100%" controls>
  <source src="/assets/videos/expenses/create_expense.mp4" type="video/mp4" />
</video>

## Why Track Expenses Here

You can think of the expenses module as three things wearing one hat. It's a bookkeeping ledger of what you've spent, a billing pipeline for costs you intend to recover from a client, and a document archive for the receipts and invoices your accountant will ask for later. Keeping everything in one place means your [Reports](/docs/user-guide/reports) — especially Profit and Loss — reflect the full picture without you having to reconcile two systems.

Most day-to-day expenses are straightforward: you paid something, you log it, you move on. The parts that trip people up are the billable-to-client workflow and the tax options, so those get a proper explanation below.

## Creating an Expense

Open the **Expenses** module from the left-hand navigation and click **+ Expense**, or clone an existing one from the **More Actions** menu for a faster start on recurring costs. The landing view lists every expense with status filters along the top and a search box that matches expense numbers, vendors, and amounts.

At a minimum, an expense needs an amount — but an amount alone tells you nothing useful three months from now. Attaching a **Vendor** (who you paid), a **Category** (what kind of cost it was), and optionally a **Client** or **Project** (who it was for) turns a line in a ledger into something your reports can actually group and total.

## The Details Panel

The core fields live under **Details**:

- **Status** — set automatically based on where the expense is in its lifecycle. See [Lifecycle of an Expense](#lifecycle_of_an_expense) below.
- **Expense Number** — auto-generated; leave it alone unless you need to. The numbering pattern lives under **Settings > Generated Numbers**.
- **Vendor** — the business you paid. Vendor is "who the money went to," which is the mirror image of a client. See [Vendors](/docs/user-guide/vendors).
- **Client** — who the expense is ultimately *for*. Setting this doesn't bill them — it just links the record. If you later invoice the expense, the new invoice is pre-filled with this client.
- **Project** — link to a [Project](/docs/user-guide/projects) so the cost rolls up alongside the project's tasks and invoices.
- **Category** — a bucket like "Travel," "Software," or "Materials." Categories are what Profit and Loss groups by, so they're worth setting even for one-off expenses. Manage the list under **Settings > Expense Settings**.
- **User** — attach an admin portal user to the record. Handy for filtering reports by team member and for restricting view/edit access.
- **Tax** — appears only when **Expense Tax Rates** is enabled under **Settings > Tax Settings**. Pick a rate or enter a flat amount, then control how it's applied under the Taxes panel on the right.
- **Amount** — the total you were billed.
- **Currency** — defaults to the vendor's currency, or your company currency if no vendor is set.
- **Date** — the date on the vendor's invoice, not the date you paid it. This matters for tax-period reporting.

### Vendor, Client, Category — Why All Three?

These three fields look similar but answer different questions. **Vendor** is who you paid. **Client** is who the expense relates to (and potentially who you'll recharge it to). **Category** is what kind of spend it is for accounting purposes. A taxi to visit Acme Corp might have vendor "City Cabs," client "Acme Corp," and category "Travel." Each drives a different report, and filling all three gives you the most flexibility later.

## Notes

The **Public Notes** field becomes the line-item description when an expense is invoiced to a client, so write it as something a customer would read — "On-site visit, Tuesday" rather than "trip 3." **Private Notes** are admin-only and are the right place for internal context ("reimburse from job #42 budget").

## Additional Info

This panel is where the expense stops being just a ledger entry and starts doing other work.

### Billable vs Non-Billable

**Should be invoiced** is the toggle that makes an expense billable. When it's off, the expense is purely a cost record — it affects your Profit and Loss but never touches a client invoice. When it's on, the expense enters a **Pending** state and becomes eligible to be pushed onto a new or existing invoice via **Invoice Expense** or **Add to Invoice** on the **More Actions** menu. Until you do that, nothing is charged to the client — "Should be invoiced" is a flag, not a bill.

This two-step design is deliberate. It lets you capture a billable cost the moment the receipt lands in your inbox, then batch several weeks of them onto a single invoice when you're ready to bill the client, rather than firing off an invoice each time.

### Marking the Expense Paid

**Mark Paid** records that *you* paid the vendor — it has nothing to do with the client paying you. Once enabled, you can capture the payment type, date, and a transaction reference. Keeping this accurate is what makes your cash-flow and Profit and Loss reports reflect reality rather than what you intended to pay.

### Converting Currency

If you're billed in a currency different from your own — a US-based subscription for an Australian business, say — enable **Convert currency** to record both the original amount and what it cost you in your home currency. The exchange rate pre-fills with the current market rate but can be adjusted to match what your card statement actually charged.

:::warning
Reports categorise expenses by the **expense/vendor currency**, not the converted currency. If you want a single-currency Profit and Loss, record each expense directly in your home currency using the already-converted amount, and leave the foreign-currency detail in the notes or a document attachment.
:::

### Add Documents to Invoice

When enabled, any receipts or PDFs attached to the expense are bundled with the invoice you generate from it — useful for clients who require proof of pass-through costs before they pay.

## Taxes

**Expense Tax Rates** must be enabled under **Settings > Tax Settings** before any of the tax controls appear (otherwise you'll see "Item tax rates are disabled"). Depending on that setting you can apply one, two, or three taxes per expense — enough to cover, say, GST plus a city-level sales tax.

Taxes can be entered two ways. **By Rate** applies a configured percentage tax (the default). **By Amount** lets you type a tax name and a flat dollar figure, which is handy for a fixed duty or levy that isn't a clean percentage.

The choice that surprises people is **Inclusive vs Exclusive**:

- **Exclusive** — tax sits *on top of* the expense amount. $100 + 10% = $110.
- **Inclusive** — tax is already *baked into* the amount. A $100 inclusive expense at 10% is $90.91 pre-tax plus $9.09 tax.

Which one you pick should match how the vendor's invoice is written. Getting this wrong doesn't change what you paid, but it does change what lands in the tax column of your reports.

<video width="100%" controls>
  <source src="/assets/videos/expenses/expense_settings_taxes.mp4" type="video/mp4" />
</video>

<h2 id="more_actions_dropdown">More Actions</h2>

From the expense table, or the **Save** dropdown on the edit screen, you'll find the usual management actions:

- **Clone** — duplicates the record with today's date. Good for the same lunch spot every Friday.
- **Clone to Recurring** — turns a one-off into a [Recurring Expense](/docs/user-guide/recurring-expenses) template, which is how you should handle subscriptions, rent, and anything else that lands on the same day each month.
- **Archive** — hides the record from default views without touching reports.
- **Delete** — hides it *and* removes it from reports.
- **Restore** — brings an archived or deleted expense back; visible only when one is selected.

When **Should be invoiced** is on, two more options appear:

- **Invoice Expense** — creates a brand-new invoice, pre-populated with the expense as a line item.
- **Add to Invoice** — appends the expense as a line item on an existing invoice for that client, which is the usual flow when you're accumulating small costs against a running job.

See [Invoices](/docs/user-guide/invoices) for what happens to the expense once it's on an invoice.

## Documents

The **Documents** tab is where the receipt lives. Upload PDFs, photos of paper receipts, or the vendor's original invoice. If **Add Documents to Invoice** is enabled on the expense, these files travel with the invoice when you bill the client.

<h2 id="lifecycle_of_an_expense">Lifecycle of an Expense</h2>

Every expense moves through a handful of states automatically — you don't set these yourself, but knowing what they mean helps when you're filtering the list.

### Logged

The default state when an expense is first created, regardless of whether you've paid the vendor yet. "Logged" just means "recorded."

### Pending

Set automatically when **Should be invoiced** is enabled. The expense is now billable and waiting to be attached to an invoice.

### Invoiced

Set automatically the moment the expense is added to a client invoice. Note the subtle point here: "Invoiced" means it's *on* an invoice, not that the client has paid. Whether the invoice itself is paid or overdue is tracked on the invoice, not on the expense. The expense overview panel links straight to the invoice it was added to.

### Archived

Manually hidden from the active list. Reports still include archived expenses, so archiving is cosmetic — useful for clearing out the visual noise of settled records without affecting totals. Restore from the archived filter in the table.

### Deleted

Manually hidden *and* excluded from reports, as if the expense never happened. The underlying record is still recoverable via **Restore** with the Deleted filter applied. Use delete when an expense was logged in error; use archive when it's real but old.

## Tips

A bare-amount expense works, but the real payoff comes from tagging vendor, client, category, and project consistently. **Reports** can then slice expenses by status, client, vendor, project, and category, and your **Profit and Loss** lines up by category automatically.

Shortcuts for finding everything about one party:

- All expenses for a vendor — **Vendor Details > Expenses**
- All expenses for a client — **Client Details > Expenses**

For defaults that should apply to every new expense — default category, default payment type, numbering pattern — see [Expense Settings](/docs/user-guide/basic-settings#expense_settings).

For recurring costs like rent, hosting, and subscriptions, set up a template once via [Recurring Expenses](/docs/user-guide/recurring-expenses) rather than re-creating them by hand each month. And if an expense line came from your bank feed, you can match it directly to a [Transaction](/docs/user-guide/transactions) rather than double-entering it.

## Expense Inbound Email (Self Host Only)

For self-hosted instances, Invoice Ninja can accept expenses by email — vendors, clients, or your own team forward a receipt to a dedicated mailbox, and an expense record is created automatically. Attachments (and the email body) are stored against the record, and the system attempts to extract amount, date, and vendor details using OCR. ZUGFeRD XML invoices are parsed natively without OCR.

The available settings:

- **Enable Expense Mailbox** — turns email processing on or off.
- **Expense Mailbox E-Mail** — the address that receives forwarded receipts.
- **Allow Company Users** — lets your own admin portal users submit via email.
- **Allow Vendors** — lets vendors email in directly.
- **Allow Unknown Senders** — accepts mail from addresses not already on file.
- **Allowed Email Addresses** — a comma-separated allowlist of domains.
- **Blocked Email Addresses** — a comma-separated blocklist of domains.

### Inbound Providers

#### Mailgun

Set up your Mailgun account, configure MX records for inbound processing, then create a receiving route using **store and notify**: go to **Receiving**, click **Create Route**, pick the mailbox configured in Invoice Ninja, and point the notify endpoint at `/api/v1/mailgun_inbound_webhook`. All Mailgun regions you use need to be configured.

#### Brevo

Configure Brevo inbound parsing per the [Brevo docs](https://developers.brevo.com/docs/inbound-parse-webhooks): create an account, set up MX records, then register the webhook via the Brevo API against the endpoint `/api/v1/brevo_inbound_webhook?token=brevo-api-token`.

#### Your Own Mail Server

If you'd rather use your existing mailbox, forward mail to one of the supported providers above, or integrate an inbound provider directly. A subdomain such as `invoicing.example.com` pointed at the provider keeps things tidy.

#### Mindee OCR

To extract data from free-form receipts and invoices, Invoice Ninja uses Mindee. Without an API key, only structured formats like ZUGFeRD are parsed. Mindee's free tier includes 250 pages per account, which is enough for most small self-hosted setups.

Set the key in your `.env`:

```bash
MINDEE_API_KEY=your-api-key
```

Optional throttles let you cap usage and avoid surprise bills — once a limit is exceeded, Mindee is treated as not configured and ignored:

```bash
MINDEE_MONTHLY_LIMIT
MINDEE_DAILY_LIMIT
MINDEE_ACCOUNT_MONTHLY_LIMIT
MINDEE_ACCOUNT_DAILY_LIMIT
```

#### End-to-End Setup Walkthrough

1. **(Optional) Mindee** — create a Mindee account, generate an API key, and set `MINDEE_API_KEY` in your `.env`. Check your free page allowance and configure the limit envs if you want a hard ceiling.
2. **Inbound mail provider** — create an account at Mailgun, Postmark, or Brevo and follow their inbound-parsing setup. For Brevo specifically, generate a token and set `INBOUND_WEBHOOK_TOKEN=XXX` in your `.env`, configure MX records per [Brevo's guide](https://developers.brevo.com/docs/inbound-parse-webhooks), then register the webhook via the [Brevo API](https://developers.brevo.com/reference/getwebhooks-1), appending `?token=XXX` to the URL. It's worth testing the webhook first against a URL from webhook.site to confirm mail is flowing before pointing it at Invoice Ninja.
3. **(Optional) Forward from your existing mailbox** — if you already use Google Workspace or similar, set up a forwarding rule from your public address (e.g. `expenses@your-domain.com`) to the provider's inbound address so you don't have to publish the provider mailbox.
4. **Configure Invoice Ninja** — go to **Settings > Expenses**, enable the inbound mailbox, paste in the provider's inbound address (must be unique across the entire Invoice Ninja instance), and whitelist the senders you want to accept — typically your vendors, your team, and your own personal email.
5. **Test** — send an email to the inbound address and confirm an expense record appears. If nothing arrives, check the provider dashboard (inbound webhooks can take up to five minutes); if the webhook fired but no record was created, check the application logs and open an issue with the details.
