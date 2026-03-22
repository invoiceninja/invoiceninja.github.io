---
title: "Quickbooks"
sidebar_position: 28
---

# Quickbooks

## Overview

The QuickBooks Online integration allows you to keep your Invoice Ninja and QuickBooks Online accounts in sync. You can choose which entities to sync, and in which direction data should flow.

## Supported Entities

The following entities can be synced between Invoice Ninja and QuickBooks Online:

- **Clients** (QuickBooks: Customers)
- **Products** (QuickBooks: Items)
- **Invoices**
- **Payments**

## Sync Directions

Each entity can be configured independently with one of four sync directions:

### Push (Invoice Ninja to QuickBooks)

When set to **Push**, changes you make in Invoice Ninja are automatically sent to QuickBooks. This happens in real time as you create or update records.

- **Clients**: Creating or editing a client in Invoice Ninja will create or update the corresponding Customer in QuickBooks.
- **Products**: Creating or editing a product in Invoice Ninja will create or update the corresponding Item in QuickBooks.
- **Invoices**: Saving or sending an invoice in Invoice Ninja will create or update the corresponding Invoice in QuickBooks. When an invoice is pushed, any products referenced in line items that do not yet exist in QuickBooks will be automatically created.
- **Payments**: Recording or updating a payment in Invoice Ninja will create or update the corresponding Payment in QuickBooks.

Push operations are automatic. You do not need to manually trigger them.

**Important**: When invoice push is enabled, the client associated with the invoice must already exist in QuickBooks. If the client has not been synced to QuickBooks yet, the client will first be created (regardless of whether Client PUSH is enabled) the invoice will then be created in Quickbooks with this newly created Client.

### Pull (QuickBooks to Invoice Ninja) **not yet active**

When set to **Pull**, changes made in QuickBooks are reflected in Invoice Ninja via webhook notifications. You can also trigger a manual sync from the QuickBooks settings page to bulk import records.

**Manual Sync**: You can trigger a sync from the QuickBooks settings page. This fetches all records of the selected entity types from QuickBooks and imports them into Invoice Ninja. The manual sync always imports and updates records regardless of your sync direction setting, because you are explicitly requesting the data to be pulled in.

**Webhook Sync**: When a record is created or updated in QuickBooks, a webhook notification is sent to Invoice Ninja. The webhook sync respects your sync direction settings: if an entity is set to Push only, incoming webhook notifications for that entity are ignored. Webhooks are currently supported for products, invoices, and payments. Client webhooks are not yet implemented.

### Bidirectional **Only push available currently**

When set to **Bidirectional**, both Push and Pull are active. Changes in either system are reflected in the other. This provides full two-way sync.

### None (Disabled)

When set to **None**, no sync occurs for that entity. This is the default for all entities.

## Manual Sync (Import from QuickBooks)

When you trigger a manual sync from the QuickBooks settings page, Invoice Ninja fetches all records from QuickBooks and processes them:

- **New records** that do not exist in Invoice Ninja are always created.
- **Existing records** that are already linked to a QuickBooks record are updated with the latest data from QuickBooks.
- The manual sync always imports and updates records regardless of your sync direction setting.

### Client Matching

When importing clients from QuickBooks, Invoice Ninja uses a three-step matching process to avoid creating duplicates:

1. **QuickBooks ID**: If a client has been previously synced and has a stored QuickBooks ID, it is matched immediately.
2. **Client Name**: If no QuickBooks ID match is found, Invoice Ninja searches for an existing client with the exact same name. If found, the client is linked to the QuickBooks record and updated.
3. **Contact Email**: If no name match is found, Invoice Ninja searches for an existing client that has a contact with the same email address. If found, the client is linked to the QuickBooks record and updated.
4. If none of the above produce a match, a new client is created.

Once a client is matched by name or email, the QuickBooks ID link is stored permanently. Future syncs will match by QuickBooks ID directly.

### Product Matching

When importing products from QuickBooks, Invoice Ninja uses a two-step matching process:

1. **QuickBooks ID**: If a product has been previously synced and has a stored QuickBooks ID, it is matched immediately.
2. **Product Key**: If no QuickBooks ID match is found, Invoice Ninja searches for an existing product with the same product key. If found, the product is linked to the QuickBooks record and updated.
3. If no match is found, a new product is created.

QuickBooks Category and Group items are automatically skipped during import. Only Service, Non-Inventory, and Inventory items are imported as products.

### Invoice Matching

Invoices are matched **only by QuickBooks ID**. Invoice Ninja does not attempt to match invoices by number or any other field. If an invoice from QuickBooks has not been previously linked, a new invoice is always created in Invoice Ninja.

QuickBooks allows duplicate invoice numbers, but Invoice Ninja does not. If an imported invoice would create a duplicate number, the number is automatically suffixed with the QuickBooks ID to ensure uniqueness (e.g., `INV-001` becomes `INV-001_42`).

## Automatic Push Behavior

When Push or Bidirectional sync is enabled, the following actions in Invoice Ninja automatically push changes to QuickBooks:

| Action in Invoice Ninja | Result in QuickBooks |
|---|---|
| Create a client | Customer is created |
| Edit a client (name, address, etc.) | Customer is updated |
| Create or edit a product | Item is created or updated |
| Save or send an invoice | Invoice is created or updated |
| Record a payment | Payment is created or updated |

**Notes**:
- Changes to client balance fields (such as when a payment is applied) do not trigger a push. Only meaningful changes like name, address, or contact information trigger a client sync.
- Product updates (price changes, description edits) are not currently pushed to QuickBooks. Only new product creation triggers a push.
- When pushing an invoice, any line item products that do not yet exist in QuickBooks are automatically created. However, the client must already exist in QuickBooks.

## Webhook Sync (Automatic Pull)

When Pull or Bidirectional sync is enabled, QuickBooks sends webhook notifications to Invoice Ninja whenever records are changed in QuickBooks. Invoice Ninja processes these notifications and updates the corresponding records.

- Only records that are newer in QuickBooks than in Invoice Ninja are updated, preventing older data from overwriting newer changes.
- Voided invoices and payments in QuickBooks will be deleted in Invoice Ninja.
- Webhook sync respects your sync direction settings. If an entity is set to Push only, webhook notifications for that entity are ignored.

**Supported webhook entities**: Products, Invoices, Payments. 

## Automatic Sales Tax (US)

If your QuickBooks account uses Automated Sales Tax (AST), Invoice Ninja will synchronize tax calculations from QuickBooks. When an invoice is pushed to QuickBooks:

1. QuickBooks calculates the applicable taxes based on the customer's location.
2. The tax details are returned to Invoice Ninja and applied to each line item individually.
3. Tax rates are automatically created in Invoice Ninja to match the QuickBooks tax rates.
4. Invoice totals are validated and synchronized to ensure they match between both systems.

Tax-exempt products are handled correctly. Only taxable line items receive tax assignments from QuickBooks. Non-taxable line items have their tax fields cleared.

When automatic taxes are enabled, invoice pushes are processed synchronously (not queued) so that the tax response from QuickBooks can be applied immediately.

## Existing QuickBooks Records

When pushing a record from Invoice Ninja to QuickBooks for the first time, the integration checks whether a matching record already exists in QuickBooks:

- **Clients**: Before creating a new Customer, Invoice Ninja searches QuickBooks for an existing Customer with the same display name. If found, the existing Customer is linked rather than creating a duplicate.
- **Products**: Before creating a new Item, Invoice Ninja searches QuickBooks for an existing Item with the same name (excluding Category and Group types). If found, the existing Item is used.

## Connection and Authentication

The integration uses OAuth 2.0 to connect to QuickBooks Online. Tokens are automatically refreshed as needed. If both the access token and refresh token expire (typically after 100 days of inactivity), you will receive an email notification prompting you to reconnect.

You can reconnect at any time from the QuickBooks settings page without losing your sync configuration or linked records.

## Error Handling

- If a push to QuickBooks fails, the error is logged and visible in your activity log.
- If QuickBooks rate limits are hit, the integration automatically retries with increasing delays.
- Payment voids that fail due to a closed accounting period in QuickBooks will flag the payment and add a note explaining why the void could not be completed.

## Getting Started

To link your Quickbooks company to Invoice Ninja you'll want to navigate to Settings > Account Management | Integrations and click on the Quickbooks button to start the OAuth process.

![QuickBooks OAuth](/assets/images/quickbooks/quickbooks1.png "QuickBooks OAuth")

Once you successfully authenticate, select the company you wish to link and you'll then be redirected back to Invoice Ninja. The QuicksBooks page will then update and appear with some additional options as shown below.

![QuickBooks Menu](/assets/images/quickbooks/quickbooks2.png "QuickBooks Menu")

From here you can see the current status of your QuickBooks Sync connection, with options to:

**Connect**

- Disconnect: Unlink QuickBooks from Invoice Ninja
- Reconnect: If your access token expires, an option to reconnect will appear here
- Set Default Income Account: Will be used as the default income account for products unless overridden
- Automatic Taxes: Label which advises whether the company in QuickBooks is using AST (Automatic Sales Taxes)

:::warning
When Automatic Taxes are enabled, Invoice Ninja will (in real time) create the invoice in Quickbooks first and use the response from QuickBooks as the source of truth for taxes. There is no way to make any changes to the tax calculations when AST is enabled in QuickBooks!
:::


**Import**

The import tab allows you to sync data from QuickBooks to Invoice Ninja. We suggest using this when you connect QuickBooks initially to sync your QuickBooks Clients and Products into Invoice Ninja. As mentioned previously we attempt to match your QuickBooks data with Invoice Ninja data using some key fields:

Clients

- Quickbooks Native ID
- Client Name
- Client Email

Products

- Quickbooks Native ID
- Product Name / Fully Qualified Name

When a match is not found, the system will create a NEW record for the given entity.

**Sync Settings**

The Sync Settings panel allows you to control the direction of data from within the application, there are 4 states for the sync direction:

- None: No data will be sync'd between either system.
- Push: Data is pushed from Invoice Ninja to QuickBooks only.
- Pull: Data is pulled from QuickBooks to Invoice Ninja only. *
- Bidirectional: Data is sync'd between the two systems *

:::warning
As at version 5.12.4 the system only recognises the options None and Push. The system will NOT Pull from Quickbooks, and Bidirectional will only PUSH.
:::