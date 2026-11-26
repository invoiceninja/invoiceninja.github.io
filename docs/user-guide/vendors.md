---
title: "Vendors"
sidebar_position: 25
description: "Create and manage vendors, see how they connect to purchase orders and expenses, and review the settings that change vendor behaviour."
---

A vendor is a person or business you buy from, the counterpart of a [client](/docs/user-guide/clients). [Expenses](/docs/user-guide/expenses) and [recurring expenses](/docs/user-guide/recurring-expenses) can be linked to a vendor. This is optional. Every [purchase order](/docs/user-guide/purchase-orders) must be issued to a vendor.

## How vendors connect to other modules {#how-vendors-connect}

A vendor is the shared record behind purchase orders, expenses and recurring expenses. Those records use the vendor's contacts for outgoing email and for access to the vendor portal.

![A vendor connects to purchase orders, expenses and recurring expenses. Those records share vendor contacts, which receive notifications and use the vendor portal.](/assets/images/user_guide/vendors/vendors-relationships.svg)

| Record or feature | How it links | What flows through | More information |
| --- | --- | --- | --- |
| [Purchase orders](/docs/user-guide/purchase-orders) | A vendor is required on every purchase order. | The vendor currency is used on purchase order PDFs and reports. Public notes, terms and the footer can be copied onto a new purchase order when those fields are empty. Contacts with **Send Email** enabled receive the purchase order email and a portal invitation. | [Change vendor currency](#change-a-vendors-currency), [Vendor fields](#creating-and-editing-a-vendor) |
| [Expenses](/docs/user-guide/expenses) | The **Vendor** field on an expense is optional. | When the expense is marked as paid, Invoice Ninja can email the vendor. If the expense is linked to a purchase order, the purchase order's paid amount is also updated. | [Settings that affect vendors](#settings-that-affect-vendors) |
| [Recurring expenses](/docs/user-guide/recurring-expenses) | The **Vendor** field on a recurring expense is optional. | Each generated expense keeps the same vendor. | [Expenses](/docs/user-guide/expenses) |
| Vendor contacts | Stored on the vendor record. | Contacts receive purchase order emails and paid-expense notifications, and they sign in to the vendor portal. A saved purchase order has a **View in Portal** link for each contact. | [Vendor fields](#creating-and-editing-a-vendor) |
| Notifications | Sent to vendor contacts, not to the vendor record itself. | Purchase order emails use **Send Email** and **CC Only**. Paid-expense emails go to contacts who have **Send Email** enabled and an email address. | [Settings that affect vendors](#settings-that-affect-vendors) |
| Vendor portal | Vendor contacts sign in from a purchase order invitation or the **View in Portal** link. | Contacts can view that vendor's purchase orders. They can upload documents on a purchase order when **Vendor Document Upload** is enabled. Public files on the vendor record can also be accessed in the portal. | [Documents](#documents) |

### Settings that affect vendors {#settings-that-affect-vendors}

These company and vendor settings change how vendors, their contacts and related records behave.

| Setting | Path | Effect |
| --- | --- | --- |
| **Notify Vendor When Paid** | **Settings → Expense Settings** | Sends an email to the vendor when an expense linked to that vendor is marked as paid. The email goes to contacts who have **Send Email** enabled and an email address. This is off by default. |
| **Purchase Order** email template | **Settings → Templates & Reminders → Purchase Order** | The subject and body used when a purchase order is emailed to vendor contacts. |
| **Attach Documents** | **Settings → Email Settings** | When enabled, public documents on the paid expense are attached to the vendor notification email (hosted accounts need the Enterprise plan for documents). |
| **Vendor Document Upload** | **Settings → Client Portal → Settings** | Allows vendor contacts to upload documents on a purchase order in the vendor portal. This is off by default. |
| **Set Documents Public by Default** | **Settings → Company Details → Documents** | Controls whether new files on the vendor record are public, and therefore accessible in the vendor portal. See [Documents](#documents). |
| **Purchase Order Terms** and **Purchase Order Footer** | **Settings → Company Details → Defaults** | Copied onto a new purchase order when the purchase order's terms or footer are empty. |
| Purchase order design | **Settings → Invoice Design** | The **Purchase Order** design, plus the **Vendor** and **Purchase Order** tabs, control how vendor details appear on purchase order PDFs. |
| Vendor number pattern | **Settings → Generated Numbers → Vendors** | The pattern and counter used when a vendor number is generated automatically. |
| Vendor custom fields | **Settings → Custom Fields → Vendors** | Extra fields on the vendor form, under **Additional Info → Custom Fields**. |
| **Currency**, **Language**, **Public Notes**, **Send Email** and **CC Only** | **Vendors → Edit Vendor** | See [Vendor fields](#creating-and-editing-a-vendor). |

![Expense Settings with a callout on Notify Vendor When Paid.](/assets/images/user_guide/vendors/vendors-04-expense-settings.png)

1. **Notify Vendor When Paid**, under **Settings → Expense Settings**.

A purchase order has no Mark Paid action. Convert the purchase order to an expense, then mark that expense as paid. If **Notify Vendor When Paid** is enabled, Invoice Ninja can then email the vendor's contacts.

![A purchase order is converted to an expense. When that expense is marked as paid, the Notify Vendor When Paid email can be sent to vendor contacts.](/assets/images/user_guide/vendors/vendors-po-to-paid-flow.svg)

![Purchase order arrow menu with callouts on the menu, Convert to Expense and Vendor Portal.](/assets/images/user_guide/vendors/vendors-06-po-actions.png)

1. Open the arrow menu next to **Save**.
2. Choose **Convert to Expense** to create an expense from the purchase order.
3. **Vendor Portal** opens the vendor portal for this purchase order.

![Client Portal settings with a callout on Vendor Document Upload.](/assets/images/user_guide/vendors/vendors-05-portal-upload.png)

1. **Vendor Document Upload**, under **Settings → Client Portal → Settings**.

## Create a vendor {#creating-vendors}

Go to **Vendors** and click **New Vendor**. You can also click the **+** next to **Vendors** in the left menu, choose **+ → Expense → Vendor** in the top bar, or select **New Vendor** from the vendor dropdown when creating an expense or a purchase order.

![Vendor list with a callout on the New Vendor button.](/assets/images/user_guide/vendors/vendors-01-list.png)

1. Click **New Vendor**.

Vendors can also be imported (see [Import and Export](/docs/advanced-topics/import-and-export)) or created through Zapier, Make, APISync, or the [API](https://invoiceninja.github.io/docs/api-reference/invoice-ninja-api-reference).

If **Name** is left empty, the vendor is displayed using the primary contact's name, or the primary contact's email if that name is also empty.

## Vendor list {#vendor-module-view}

Select **Vendors** in the left menu to open the vendor list. You can sort by column, add or remove columns with **Columns**, search with **Filter**, import vendors with **Import**, and include archived or deleted vendors with the **Lifecycle** filter (**Active**, **Archived** or **Deleted**, then **Apply**).

Each row has an **Actions** menu with **Edit**, **Add Comment**, **Merge**, **Archive** and **Delete**.

<a id="actions-dropdown"></a>

## Change vendor currency {#change-a-vendors-currency}

Navigate to **Vendors → Edit Vendor → Additional Info → Settings → Currency** to change the vendor currency.

If no currency is set, the company's currency is used. Purchase order PDFs and purchase order reports use the vendor's current currency, so changing it can affect how existing purchase orders are displayed and reported.

## Archive, delete and restore {#archive-a-vendor}

<a id="common-tasks"></a>
<a id="delete-a-vendor"></a>
<a id="restore-an-archived-vendor"></a>
<a id="purge-a-vendor"></a>

| Action | Effect | Reversible |
| --- | --- | --- |
| **Archive** | Hides the vendor from the default list. Related purchase orders and expenses are not archived. | Yes, with **Restore** |
| **Delete** | Hides the vendor from the default list. Related purchase orders and expenses are not deleted. Purchase order reports and dashboard expense totals omit activity linked to a deleted vendor. | Yes, with **Restore** |

Use **Archive** to hide a vendor without changing report totals. Use **Delete** when purchase order reports and dashboard expense totals should omit that vendor's activity.

Vendors cannot be purged. A deleted vendor can be restored.

To archive or delete a vendor, choose **Archive** or **Delete** from the arrow menu next to **Edit Vendor**, or from the **Actions** menu on the vendor list. That arrow menu also includes **Add Comment** and **Merge**.

To restore a deleted vendor, set the **Lifecycle** filter to **Deleted**, then choose **Restore** from the row **Actions** menu or from the arrow menu on the vendor.

## Merge vendors

Administrators can merge two vendor records from the row **Actions** menu, or from the arrow menu next to **Edit Vendor**. Purchase orders, expenses, recurring expenses, contacts, documents and related activity move to the vendor you keep. The other vendor is permanently removed. Contacts with a matching or empty email are not kept as duplicates.

## View a vendor {#viewing-a-vendor}

Select a vendor in the list to open the record. The page shows **Details**, **Address** and **Contacts**, with tabs for **Purchase Orders**, **Expenses**, **Recurring Expenses**, **Activity** and **Documents**.

![Vendor record with a callout on the Purchase Orders, Expenses, Recurring Expenses, Activity and Documents tabs.](/assets/images/user_guide/vendors/vendors-03-view-tabs.png)

1. The vendor record tabs: **Purchase Orders**, **Expenses**, **Recurring Expenses**, **Activity** and **Documents**.

- <a id="purchase-orders"></a>**Purchase Orders**: every [purchase order](/docs/user-guide/purchase-orders) issued to this vendor.
- <a id="expenses"></a>**Expenses**: [expenses](/docs/user-guide/expenses) linked to this vendor. Linking an expense to a vendor is optional.
- <a id="recurring-expenses"></a>**Recurring Expenses**: [recurring expenses](/docs/user-guide/recurring-expenses) linked to this vendor.
- **Activity**: a log of changes to the vendor.
- <a id="documents"></a>**Documents**: files stored on the vendor record. The tab has an upload area and a table of Name, Date, Type and Size. It does not include a public or private control for individual files.

New files are public by default when **Settings → Company Details → Documents → Set Documents Public by Default** is enabled (the default). Public documents can be accessed by the vendor's contacts in the vendor portal. If that company setting is turned off, new files are not accessible in the vendor portal. On hosted Invoice Ninja, uploading documents requires the Enterprise plan. Self-hosted installations include this feature.

## Vendor fields {#creating-and-editing-a-vendor}

<a id="details"></a>
<a id="address"></a>
<a id="contacts"></a>
<a id="additional-info"></a>
<a id="settings"></a>
<a id="notes"></a>
<a id="custom-fields"></a>

Most fields are optional. **Currency**, **Language**, **Public Notes** and **Private Notes** are under **Additional Info → Settings**. Custom fields appear on the **Additional Info → Custom Fields** tab.

![Create vendor form with callouts on Name, Contacts and Currency.](/assets/images/user_guide/vendors/vendors-02-new-form.png)

1. **Name**. If left empty, the vendor is displayed using the primary contact's name, or the primary contact's email if that name is also empty.
2. **Contacts**.
3. **Currency**, under **Additional Info → Settings**.

| Field | Behaviour |
| --- | --- |
| **Number** | Generated automatically if you leave it empty. Number patterns are configured under **Settings → Generated Numbers → Vendors**. |
| **Assigned User** | A team member can view and edit a vendor they are assigned to, or that they created, even if they do not have permission to view or edit all vendors. |
| **Currency** | See [Change vendor currency](#change-a-vendors-currency). |
| **Language** | Used for purchase order PDFs and emails, and for expense payment notifications sent to the vendor. If unset, the company's language is used. |
| **Public Notes** | Copied onto a new purchase order when the purchase order's public notes are empty. Later changes to the vendor notes do not update existing purchase orders. |
| **Private Notes** | Visible in the admin portal. They are not included on purchase order PDFs. |
| **Send Email** (contact) | Contacts with **Send Email** enabled, and **CC Only** disabled, receive a purchase order invitation and are included when the purchase order is emailed. If no contact is set to receive the email, an invitation is still created for the primary contact. |
| **CC Only** (contact) | The contact is copied on the email (up to four addresses) instead of receiving their own invitation. |
| **Custom Fields** | Fields configured under **Settings → Custom Fields → Vendors** appear on the vendor form. |

## Related documentation

- [Clients](/docs/user-guide/clients)
- [Expenses](/docs/user-guide/expenses)
- [Recurring Expenses](/docs/user-guide/recurring-expenses)
- [Purchase Orders](/docs/user-guide/purchase-orders)
- [Import and Export](/docs/advanced-topics/import-and-export)
- [API Documentation](https://invoiceninja.github.io/docs/api-reference/invoice-ninja-api-reference)
