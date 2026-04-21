---
title: "Quickbooks"
sidebar_position: 28
---

# Quickbooks

## What It Does

The QuickBooks Online integration keeps Invoice Ninja and your QuickBooks Online company in sync, so the records you create in one place show up in the other without copy-pasting. It covers the four things most businesses care about: [clients](/docs/user-guide/clients) (Customers in QuickBooks), [products](/docs/user-guide/products) (Items in QuickBooks), [invoices](/docs/user-guide/invoices), and [payments](/docs/user-guide/payments). Each of those can be configured independently, so you can push invoices across while leaving products alone, for example.

## When It's Worth Setting Up

If you're a freelancer doing your own books in QuickBooks, or a small business or agency where an accountant lives in QuickBooks while the billing team lives in Invoice Ninja, this saves you the monthly ritual of re-entering invoices and payments by hand. It's most useful once you've already got your [invoicing](/docs/user-guide/invoices) flow working in Invoice Ninja and just need the accounting side to stay up to date for tax time and [reporting](/docs/user-guide/reports).

If QuickBooks isn't part of your workflow, you can skip this entirely — Invoice Ninja handles invoicing, payments, and reporting on its own.

## Sync Directions

Each of the four entity types can be set to one of four modes.

**None** means no sync happens for that entity. This is the default, and it's fine to leave entities you don't care about turned off.

**Push** sends changes from Invoice Ninja to QuickBooks as they happen — create or edit a client and the matching Customer is created or updated; save or send an invoice and the matching Invoice appears in QuickBooks; record a payment and QuickBooks gets the payment too. Pushes happen automatically in real time; you don't need to trigger them.

**Pull** goes the other way: changes in QuickBooks flow back into Invoice Ninja via webhook, and you can also fire off a manual bulk import from the QuickBooks settings page.

**Bidirectional** combines both, so changes in either system are reflected in the other.

:::warning
As at version 5.12.4 only **None** and **Push** are active. **Pull** does not yet pull from QuickBooks, and **Bidirectional** behaves as Push-only. Mentions of pull and webhook behaviour below describe the intended design for when those modes are enabled.
:::

## Pushing from Invoice Ninja to QuickBooks

With Push (or Bidirectional) turned on, the following actions trigger a sync automatically:

| Action in Invoice Ninja | Result in QuickBooks |
|---|---|
| Create a client | Customer is created |
| Edit a client (name, address, etc.) | Customer is updated |
| Create or edit a product | Item is created or updated |
| Save or send an invoice | Invoice is created or updated |
| Record a payment | Payment is created or updated |

A couple of things worth knowing. When you push an invoice, its client has to exist in QuickBooks first — if it doesn't, Invoice Ninja will create it on the fly as part of the invoice push, regardless of whether client Push is enabled. Any line-item products that don't exist in QuickBooks yet are also created automatically during the invoice push.

Not every field change triggers a push. Client balance updates (for example, when a payment is applied) are ignored; only meaningful edits like name, address, or contact info sync across. Product updates — price changes, description edits — are not currently pushed either; only newly created products are.

The first time you push a record, the integration checks QuickBooks for a matching record before creating a duplicate. Clients are matched by display name, products by item name (skipping Category and Group types). If a match exists, Invoice Ninja links to it rather than creating a second copy.

## Pulling from QuickBooks to Invoice Ninja

When pull is enabled, there are two ways data comes back.

**Manual sync** is what you'll reach for when you first connect — trigger it from the QuickBooks settings page and Invoice Ninja fetches every client, product, invoice, or payment you've selected and imports them. Manual sync ignores your sync direction setting because you're explicitly asking for the data, so it will run even on entities set to Push only. New records are created, and records already linked to QuickBooks are updated with the latest data.

**Webhook sync** is the ongoing version: when something changes in QuickBooks, a webhook fires and Invoice Ninja updates its copy. Webhooks respect your sync direction — if an entity is Push-only, the incoming webhook is ignored. Only records that are newer in QuickBooks than in Invoice Ninja are updated, so older data can't overwrite a more recent change. Voided invoices and payments in QuickBooks are deleted on the Invoice Ninja side. Webhook coverage currently includes products, invoices, and payments; client webhooks aren't implemented yet.

### How Matching Works

The biggest risk with any accounting sync is ending up with duplicates. Invoice Ninja tries hard to avoid them.

**Clients** are matched in three steps: first by stored QuickBooks ID (for anything previously synced), then by exact client name, and finally by any contact email address on the client. Only if all three miss is a new client created. Once a client is matched by name or email, the QuickBooks ID link is stored permanently, so future syncs match by ID directly. See [Clients](/docs/user-guide/clients) for how client records and contacts work on the Invoice Ninja side.

**Products** are matched by stored QuickBooks ID first, then by product key. QuickBooks Category and Group items are skipped on import — only Service, Non-Inventory, and Inventory items are brought in as products.

**Invoices** are matched only by QuickBooks ID. Invoice Ninja never tries to match by invoice number or any other field, so any unlinked invoice imported from QuickBooks will create a new invoice on this side. QuickBooks allows duplicate invoice numbers but Invoice Ninja doesn't, so if an imported number would clash, it gets suffixed with the QuickBooks ID (for example, `INV-001` becomes `INV-001_42`) to keep it unique.

## Automatic Sales Tax (US)

If your QuickBooks account uses Automated Sales Tax (AST), Invoice Ninja defers to QuickBooks for tax calculations. When an invoice is pushed, QuickBooks works out the applicable tax based on the customer's location, returns the details, and Invoice Ninja applies them per line item. Matching tax rates are created in Invoice Ninja on the fly, totals are reconciled between the two systems, and tax-exempt products stay tax-free — only taxable lines receive tax assignments.

Because the response has to come back before the invoice can be finalised, invoice pushes are processed synchronously rather than queued when AST is on. See [Taxes](/docs/user-guide/taxes) for how Invoice Ninja handles tax outside of this integration.

:::warning
When Automatic Taxes are enabled, Invoice Ninja creates the invoice in QuickBooks first (in real time) and uses QuickBooks' response as the source of truth for taxes. You cannot adjust tax calculations on the Invoice Ninja side while AST is enabled.
:::

## Getting Started

To link a QuickBooks company, go to Settings > Account Management > Integrations and click the QuickBooks button to start the OAuth flow.

![QuickBooks OAuth](/assets/images/quickbooks/quickbooks1.png "QuickBooks OAuth")

Once you've authenticated and chosen the company you want to link, you'll be redirected back to Invoice Ninja. The QuickBooks page now shows the extra options below.

![QuickBooks Menu](/assets/images/quickbooks/quickbooks2.png "QuickBooks Menu")

From here you can see the current connection status and work with three sections.

**Connect** — shows the live connection and gives you:

- Disconnect: unlinks QuickBooks from Invoice Ninja.
- Reconnect: appears if your access token has expired.
- Set Default Income Account: used as the default income account for products unless overridden.
- Automatic Taxes: a label indicating whether the linked QuickBooks company has AST enabled.

**Import** — runs a manual sync from QuickBooks into Invoice Ninja. This is what we recommend running right after you connect, so your existing QuickBooks clients and products land in Invoice Ninja without creating duplicates. Matching uses the fields listed above: QuickBooks native ID, client name, and client email for clients; QuickBooks native ID and product name / fully qualified name for products. Anything that doesn't match creates a new record.

**Sync Settings** — where you pick the direction (None, Push, Pull, Bidirectional) for each of the four entity types.

## Connection and Authentication

The integration uses OAuth 2.0 and refreshes tokens automatically. If both your access and refresh tokens expire — which typically happens after 100 days of inactivity — you'll get an email prompting you to reconnect. Reconnecting from the QuickBooks settings page preserves your sync configuration and all existing record links, so you won't lose the mapping you've already built up.

## Error Handling and Gotchas

Failed pushes are logged and appear in your activity log, so you can see what didn't make it across. If QuickBooks rate-limits a request, the integration backs off and retries with increasing delays. Payment voids that fail because the accounting period in QuickBooks is closed will flag the payment with a note explaining why the void didn't go through.

A few things to keep in mind as you set this up:

- Until pull and bidirectional modes are active, treat Invoice Ninja as the source of truth and QuickBooks as the destination.
- Client balance changes and product edits don't push, so don't rely on the sync to carry those through.
- Duplicate-prevention is good but not magical — if your client names or product keys differ slightly between systems, you can still end up with duplicates. Running the manual import first, before turning on Push, is the cleanest way to establish the links.
