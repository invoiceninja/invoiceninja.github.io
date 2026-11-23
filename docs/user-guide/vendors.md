---
title: "Vendors: Track Who You Buy From"
sidebar_label: "Vendors"
sidebar_position: 25
description: "How to add, find, edit, archive, delete and restore vendors in Invoice Ninja, and link them to expenses and purchase orders."
---
# Vendors: track the people and businesses you pay

A vendor is anyone you buy from, such as your accountant, hosting provider, office supplier or a contractor. Add your vendors in Invoice Ninja when you want to link your spending to the people you pay and see how much you spend with each one.

## What is a vendor in Invoice Ninja?

A vendor is the opposite of a [client](/docs/user-guide/clients). A client is someone you sell to (money coming in). A vendor is someone you buy from (money going out). A vendor can be a person, such as a sole trader or a freelancer you subcontract to, or a company.

## Why should I add vendors?

Vendors connect your spending to real people and businesses:

- Every [expense](/docs/user-guide/expenses) and [recurring expense](/docs/user-guide/recurring-expenses) can be linked to a vendor. This is optional.
- Every [purchase order](/docs/user-guide/purchase-orders) (a formal order you send to a supplier) must be sent to a vendor. This is required.

Once these links are in place, you can answer questions like "How much did we spend with this supplier last quarter?" without digging through receipts.

## How do I add a new vendor?

You can add a vendor in any of these ways:

1. Go to **Vendors** and click **New Vendor** (top right).
2. Click the small **+** next to **Vendors** in the left menu.
3. Click the **+** button in the top bar and choose **Vendor** under **Expense**.
4. Create the vendor while you enter an expense.
5. Connect another tool, such as Zapier, Make or APISync, or build your own connection with the [API Documentation](https://invoiceninja.github.io/docs/api-reference/invoice-ninja-api-reference). (An API lets other software send data into Invoice Ninja automatically.)

Tip: If you leave the vendor name empty, Invoice Ninja uses the first contact's name as the display name.

## Where do I see all my vendors?

Click **Vendors** in the left menu of the admin portal (the screen you and your team use, not the one your clients see). You will see a table of every vendor. From here you can:

- Sort the list by clicking a column header
- Add or remove columns with **Columns**
- Show archived or deleted vendors with the **Lifecycle** filter
- Search with the **Filter** box
- Import vendors from a file with **Import**
- Create a new vendor with **New Vendor**

Each row has an **Actions** menu on the right. Use it to edit, add a comment to, merge, archive or delete a vendor. **Merge** combines two vendor records into one, which is handy when the same supplier was added twice.

![vendors table view](https://invoiceninja.github.io/assets/images/vendors/vendors_table_view.png "vendors table view")

![vendors actions dropdown](https://invoiceninja.github.io/assets/images/vendors/vendors_action_dropdown.png "vendors actions dropdown")

## How do I change the currency a vendor bills me in?

Every vendor uses your company's currency unless you change it.

1. Open the vendor.
2. Click **Edit Vendor**.
3. In **Additional Info**, open the **Settings** tab and pick the **Currency**.
4. Click **Save**.

New purchase orders for this vendor will use that currency.

## Archive or delete: which one should I use?

| Action | What it does | Can I undo it? |
|---|---|---|
| **Archive** | Hides the vendor from your normal lists. Nothing else changes. Purchase orders, expenses and history stay. | Yes, with **Restore** |
| **Delete** | Hides the vendor and removes their expenses and purchase orders from your report totals, as if they never happened. The data is flagged as deleted, not erased. | Yes, with **Restore** |

In short: use **Archive** to tidy your vendor list without changing any totals. Use **Delete** when you want a vendor's activity left out of your reports.

### How do I archive a vendor?

1. Open the vendor.
2. Click the arrow next to **Edit Vendor** and choose **Archive**. You can also do this from the **Actions** menu on the vendor list.

### How do I delete a vendor?

1. Open the vendor.
2. Click the arrow next to **Edit Vendor** and choose **Delete**.

### How do I restore an archived or deleted vendor?

1. On the vendor list, open the **Lifecycle** filter, tick **Archived** (or **Deleted**) and click **Apply**.
2. In the vendor's row, open the **Actions** menu and choose **Restore**.

The vendor comes back to your active list with all data unchanged.

## What can I see on a vendor's page?

Click a vendor's row in the table to open it. At the top you see three panels: **Details** (including the vendor's status), **Address** and **Contacts**. Below them are tabs:

![view vendor page](https://invoiceninja.github.io/assets/images/vendors/view_vendor_page.png "view vendor page")

- **Purchase Orders**: every [purchase order](/docs/user-guide/purchase-orders) sent to this vendor. Since purchase orders always need a vendor, this is the full record of what you formally ordered from them.
- **Expenses**: the [expenses](/docs/user-guide/expenses) linked to this vendor. Linking is optional, but it is what makes spend-per-supplier reporting possible.
- **Recurring Expenses**: the [recurring expenses](/docs/user-guide/recurring-expenses) linked to this vendor. Useful for regular costs like monthly hosting, software subscriptions or retainers you pay.
- **Activity**: a log of what happened with this vendor and when.
- **Documents**: upload contracts, supplier agreements, W-9s or other files. Only admin portal users can see these. Vendors cannot.

## What information can I store for a vendor?

On desktop, all fields are on one screen. On mobile, they are split across tabs. Most fields are optional, so fill in only what your bookkeeping needs.

![creating editing vendor](https://invoiceninja.github.io/assets/images/vendors/create_edit_vendor_fields.png "creating editing vendor")

### Details

- **Name**: the vendor's business or trading name.
- **Number**: created automatically to identify the vendor. You can change the number pattern under _Settings > Generated Numbers_.
- **Assigned User**: the team member responsible for this vendor.
- **ID Number**: optional, for any business ID number used in your country or region.
- **VAT Number**: the vendor's Value Added Tax number, often required in the European Union.
- **Website**: the vendor's website address.
- **Phone**: the vendor's main phone number.
- **Routing ID**: optional, the vendor's bank routing ID.
- **Tax Exempt**: reserved for future E-Invoicing behaviour.
- **Classification**: optional, the type of vendor: Individual, Business, Company, Partnership, Trust, Charity, Government or Other.
- **Tags**: optional labels to help you group and find vendors.

### Address

The vendor's billing address: **Street**, **Apt/Suite**, **City**, **State/Province**, **Postal Code** and **Country**.

### Contacts

Click **Add contact** to add as many contacts as you like, one for each person or department you deal with. Contacts matter most for purchase orders: anyone with **Send Email** ticked gets a copy of the purchase order email by default.

- **First Name** and **Last Name**: the person's name. You can also put a department name in the first name field.
- **Email**: the contact's preferred email address.
- **Phone**: the contact's preferred phone number.
- **Send Email**: turn this on to include the contact on purchase order emails by default.
- **CC Only**: the contact is copied on emails rather than being a main recipient.
- **Authorized to sign**: marks this contact as allowed to sign documents for the vendor.

### Additional Info

**Settings** tab

- **Currency**: the currency the vendor bills you in. New purchase orders for this vendor use it by default.
- **Language**: the vendor's preferred language.

Below Currency and Language are two notes boxes:

- **Public Notes**: shown by default on this vendor's purchase orders. Good for instructions or descriptions you want on every purchase order.
- **Private Notes**: only admin portal users can see these. Use them for internal notes, such as reliability or pricing quirks.

**Custom Fields** tab

Any custom fields you set up under _Settings > Custom Fields > Vendors_ appear here for you to fill in. If you have none yet, the tab links you straight to that settings page.

## Related

- [Clients](/docs/user-guide/clients)
- [Expenses](/docs/user-guide/expenses)
- [Recurring Expenses](/docs/user-guide/recurring-expenses)
- [Purchase Orders](/docs/user-guide/purchase-orders)
- [API Documentation](https://invoiceninja.github.io/docs/api-reference/invoice-ninja-api-reference)
