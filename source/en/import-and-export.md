---
extends: _layouts.user_guide 
section: content
locale: en
---

# Import

## Import Data

You can import data into Invoice Ninja from CSV files or other accounting software.

Our intelligent import system allows you to map columns dynamically. 

![alt text](/assets/images/settings/export_csv.png "CSV Imports")

First start by uploading your file to the correct category and click Import.

This will upload the file and we will perform column matching a return you to a new page.

![alt text](/assets/images/settings/import_column_matching.png "CSV Mapping")

Here we match the column from the CSV (left column) with the matching Invoice Ninja columns (right columns). From here you can adjust the mappings and when they look correct, click on Import.

The system will then process the CSV file and email you the results of the import.

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

There are several ways to export data out of Invoice Ninja.

## Reports

Using the [report](/docs/reports) you are able to generate reports and filter them down. When you are ready, there is an Export button which will export the data to csv for instant downloads.

## Export Function

```bash
Settings > Import | Export
```

![alt text](/assets/images/settings/export_csv.png "CSV Exports")

From the export menu you are able to select two formats:

 - JSON - Performs a full company backup which is then emailed to you. This will export your entire company and all information in case you ever need to restore your data.
 - CSV - Allows you to export categories, ie. clients, invoices and also perform Profit & Loss reports