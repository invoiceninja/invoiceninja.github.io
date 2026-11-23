---
title: "Import and Export Data"
sidebar_label: "Import and Export"
sidebar_position: 3
description: "How to import clients, invoices and other records from a CSV file or another invoicing app, and how to export reports, CSV files and full backups in Invoice Ninja."
---
# How to import and export your data in Invoice Ninja

Use this page when you want to bring your clients, invoices, products and other records into Invoice Ninja from a spreadsheet or another invoicing app, or when you want to get your data out as a CSV file or a full backup.

A CSV file is a simple spreadsheet file (comma-separated values) that Excel, Google Sheets and most accounting apps can save and open.

## How do I import a CSV file?

Each list page, such as **Clients**, **Invoices**, **Products** or **Vendors**, has an **Import** button at the top. It opens an import page for that type of record.

![CSV Imports](https://invoiceninja.github.io/assets/images/settings/import_overview.png "CSV Imports")

1. Go to the list for the records you want to import (for example **Clients**) and click **Import**.
2. Drop your file onto the **CSV file** box, or click it to choose the file.

   ![CSV Mapping](https://invoiceninja.github.io/assets/images/settings/import_column_matching.png "CSV Mapping")

3. Invoice Ninja uploads the file, matches your columns and opens a new page.

   ![CSV Mapping](https://invoiceninja.github.io/assets/images/settings/import_column_matching2.png "CSV Mapping")

4. Check the matches. The left column shows the columns from your CSV. The right column shows the Invoice Ninja field each one goes into. Change any that are wrong.
5. Click **Import**.
6. Invoice Ninja processes the file and emails you the results.

**Number format matters.** Numbers are read using your company currency format. For example, with USD a period (.) is the decimal separator. With EUR a comma (,) is the decimal separator.

## How do I import invoices?

Set up your invoice CSV like this:

1. **Include a unique invoice number.** Every invoice must have its own number. If you leave it out, the system will try to assign one itself.
2. **Use the same invoice number for each line item** that belongs on the same invoice. For example, an invoice with three items has three rows with the same invoice number.
3. **Add a quantity and a cost column for every line item.** These are used to work out the invoice total. If they are missing, a single line item of 1 x Invoice Amount is used.
4. **To record a payment**, add a payment amount column with the amount paid.

### What status values can I use for invoices?

| CSV value | Imported status |
|---|---|
| `draft` | Draft |
| `sent` | Sent |
| `paid` | Paid |
| `1` or `true` or `yes` | Paid |
| `0` or `false` or `no` | Sent |
| *(empty)* | Sent |

## How do I import quotes?

### What status values can I use for quotes?

| CSV value | Imported status |
|---|---|
| `draft` | Draft |
| `sent` | Sent |

## How do I import recurring invoices?

A recurring invoice is one that is sent automatically on a schedule, for example every month.

### How do I set how often a recurring invoice is sent?

Put one of these values in the frequency column:

| CSV value | Frequency |
|---|---|
| `daily` | Daily |
| `weekly` | Weekly |
| `biweekly` | Every 2 weeks |
| `4weeks` | Every 4 weeks |
| `monthly` or `month` | Monthly |
| `bimonthly` | Every 2 months |
| `quarterly` | Every 3 months |
| `4months` | Every 4 months |
| `6months` | Every 6 months |
| `yearly` or `annually` or `annual` or `year` | Annually |
| `2years` | Every 2 years |
| `3years` | Every 3 years |

If you leave it empty, the frequency is **Monthly**.

### How do I set auto bill?

Auto bill controls whether the client's saved payment method is charged automatically. Put one of these values in the auto bill column:

| CSV value | Result |
|---|---|
| `no` or `off` or `false` | Off |
| `yes` or `always` or `true` | Always |
| `optin` | Opt-in |
| `optout` | Opt-out |

If you leave it empty, auto bill is **Off**.

## Can I update existing products with an import?

Yes. Besides adding new products, an import can update products you already have.

Invoice Ninja looks for an existing product with the same Product/Item name. If it finds one, it updates that product with the new data instead of creating a new one.

**Note:** only active products are updated. If a matching product is archived or deleted, it is not updated. A NEW product is created instead.

## How do I move from another invoicing app?

1. Go to **Settings > Import | Export**.
2. Under **Import**, pick your old app in the **Import Type** dropdown.
3. Upload the files it asks for (see the table below).
4. Click **Import**. Invoice Ninja does the rest.

| Coming from | Import Type | Files to upload |
|---|---|---|
| FreshBooks | FreshBooks | Clients and invoices files |
| Invoice2go | Invoice2go | Invoice file |
| Invoicely | Invoicely | Clients and invoices files |
| QuickBooks | Quickbooks | The upload boxes shown for this option |
| Wave | Wave Accounting | Clients and accounting files |
| Zoho | Zoho | Contacts and invoices files |

## How do I export my data?

There are three ways to get data out of Invoice Ninja.

### Export a report to CSV

1. Open [Reports](/docs/user-guide/reports).
2. Pick the report type (for example **Invoice**, **Client** or **Profit and Loss**) and set the filters. Turn on **Customize Columns** to choose which columns to include.
3. Click **Export** (top right) to download the data as a CSV file straight away.

![Exports](https://invoiceninja.github.io/assets/images/settings/export_report.png "Exports")

To get a report by email on a regular basis, open the **Actions** menu (top right) and choose **Schedule**.

### Export one type of record to CSV

1. Go to **Settings > Import | Export**.
2. Under **Export**, choose what to export in the **Export Type** dropdown (for example **Activities**).
3. Click **Export**.

### Back up everything

Go to **Settings > Backup | Restore**.

- **To make a backup**, open the **Backup** tab and click **Export**. When the file is ready, you get an email with a download link.
- **To restore a backup**, open the **Restore** tab, upload the .zip file from your backup, choose whether to bring back settings (**Import Settings**), data (**Import Data**) or both, and click **Import**.

![Backup Exports](https://invoiceninja.github.io/assets/images/settings/export_backup.png "Backup Exports")

## Related

- [Reports](/docs/user-guide/reports)
