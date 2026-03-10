---
title: "Import and Export"
sidebar_position: 3
---
## Import Data

You can import data into Invoice Ninja from CSV files or other accounting software from anywhere in the application using the green Import Button.

:::warning
**Note** Numbers are imported based on your company currency format. ie  USD currency will parse a period (.) as the decimal, EUR with parse a comma (,) as the decimal separator.
:::

![alt text](/assets/images/settings/import_overview.png "CSV Imports")

First start by uploading your CSV file to the dropzone.

![alt text](/assets/images/settings/import_column_matching.png "CSV Mapping")

This will upload the file and we will perform column matching and return you to a new page.

![alt text](/assets/images/settings/import_column_matching2.png "CSV Mapping")

Here we match the column from the CSV (left column) with the matching Invoice Ninja columns (right columns). From here you can adjust the mappings and when they look correct, click on Import.

The system will then process the CSV file and email you the results of the import.

:::warning
If you regularly import the same file format, the application will offer you the ability to save the import columns as a template. You can select the template from the dropdown when importing.
:::

## Importing Invoices

There are some special considerations when importing invoices.

1. A invoice number must be included in the file and must be unique. (If no invoice number is provided, the system will attempt to assign one itself.)
2. If you have multiple line items you wish to include within the same invoice, use the same invoice number for each line.
3. Each line item MUST include a quantity and cost column for the calculations of the invoice total. (Otherwise a generic 1 x Invoice Amount line item will be used.)
4. If you wish to include a payment on the invoice, add a payment amount column and reference the amount paid.

### Invoice Status Values

When importing invoices, you can set the status using the following values in your CSV:

| CSV Value | Result |
|-----------|--------|
| `draft` | Draft |
| `sent` | Sent |
| `paid` | Paid |
| `1` or `true` or `yes` | Paid |
| `0` or `false` or `no` | Sent |
| *(empty)* | Sent |

## Importing Quotes

### Quote Status Values

When importing quotes, you can set the status using the following values in your CSV:

| CSV Value | Result |
|-----------|--------|
| `draft` | Draft |
| `sent` | Sent |

## Importing Recurring Invoices

### Frequency Values

When importing recurring invoices, you can set the billing frequency using the following values in your CSV:

| CSV Value | Frequency |
|-----------|-----------|
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

If no frequency is provided, the default is **Monthly**.

### Auto Bill Options

When importing recurring invoices, you can set the auto bill behavior using the following values in your CSV:

| CSV Value | Result |
|-----------|--------|
| `no` or `off` or `false` | Off |
| `yes` or `always` or `true` | Always |
| `optin` | Opt-in |
| `optout` | Opt-out |

If no value is provided, the default is **Off**.


## Importing / Updating Products

As well as importing new products, you can also update existing products!

Invoice Ninja will check for existing products with the same Product/Item name and instead of creating a new product, it will update the product with the new data.

:::warning
**Note** Invoice Ninja will only update active products, archived/deleted products will not be updated instead NEW products will be created.
:::

## Third Party Import

### Freshbooks

From the Import page, select Freshbooks and then upload your clients and invoices files, we'll do the rest!

### Invoice2go

From the Import page, select Invoice2go, upload your invoice file and we'll do the rest!

### Invoicely

From the Import page, select Invoicely and then upload your clients and invoices files, we'll do the rest!

### Wave

From the Import page, select Wave Account and then upload your clients and accounting files, we'll do the rest!

### Zoho

From the Import page, select Zoho and then upload your contacts and invoices files, we'll do the rest!

# Export Data

There are several ways to export data out of Invoice Ninja:

## Export Function using Reports

Using the [report](/docs/user-guide/reports) you are able to generate reports and filter them down. When you are ready, there is an Export button which will export the data to csv for instant downloads.

![alt text](/assets/images/settings/export_report.png "Exports")

From the reports  menu you are able to curate custom reports including the ability to customize the columns that you wish to export.

You are also able to use the Schedule action to automatically email a report to a selected email address on a regular basis.

## Backup Function

```bash
Settings > Backup | Restore
```

Full system backups and restores can be performed from this section of the application. You can create a full backup which will be emailed to you for safe keeping.

![alt text](/assets/images/settings/export_backup.png "Backup Exports")
