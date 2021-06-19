---
extends: _layouts.docs
section: content
---

# Basic Settings

The basic settings are where you can setup everything you need to define your company. 

<h2 id=company_details>Company Details</h2>

The company details are where you configure your address, upload your company logo and also set your company defaults.

### Details

### Address

### Logo

### Defaults

The defaults are system wide - company level defaults, this will applied at every level of the application they refer to.

**Auto bill**

The Auto Bill selector has 4 options:

* Enabled - A user a payment will be automatically attempted if a payment method is stored on file.
* Enabled by default - The client will be given the option to allow payment methods to be stored with the radio box selected.
* Disabled by default - The client will be given the option to allow payment methods to be stored with the radio box unselected.
* Disabled - No option is given, and auto billing is disabled.

**Payment Type**

This selector will set the default payment method.

**Invoice Payment Terms**

The payment term defined in 'days'. You can configure custom payment terms by clicking the **Configure Payment Terms** button

**Quote Valid Until**

Similar to Invoice Payment Terms, you will select a length of time in days, from the list of payment terms time lengths.

**Payment Emails**

* Manual Payment Email - Sends a payment notification to the client when a manual payment is applied
* Online Payment Email - Sends a payment notification to the client when an online payment has been processed.

**Terms and Footers**

The terms and footers text inputs allow you to define default for each. These will be injected into the document automagically for you. All you need to do is set it once here and we'll take care of the rest!  Note, you can always override these values by editing them directly in the entity.  

The terms and footers appear below any Public Notes attached to your documents.

These make great places to set stock disclaimers or clauses, to clarify policies about liability and responsibility up front and in print on every document.

### Documents

Upload company documents here.  These are not used automatically on any documents, and are only accessible from the admin portal.  Documents stored here will also appear in the "public/storage" directory on the web server, implying that files stored here should not be considered truly secure, and this storage location is best reserved for template forms, notices, blank agreements, policy handouts, etc.

<h2 id=user_details>User Details</h2>

<h2 id=localization>Localization</h2>

<h2 id=online_payments>Online Payments</h2>

<h2 id=tax_settings>Tax Settings</h2>

<h2 id=product_settings>Product Settings</h2>

<h2 id=task_settings>Task Settings</h2>

<h2 id=expense_settings>Expense Settings</h2>

<h2 id=import_export>Import | Export</h2>

### JSON 

A full company backup can be generated via the Export option. This will schedule a job which will export all settings and data and compress it into a .zip file for download. When the job has been completed an email is sent with a download link (Download links expire daily).

The data can be transported to another installation, or used to overwrite an existing company dataset.

<x-warning>

If you do not wish to overwrite the current company and instead import the dataset as a NEW company you _must_ create a new company first prior to importing as this will overwrite the current company!

</x-warning>

When importing JSON you have the option to import only settings or data or both.

<x-warning>

Note on the hosted platform, the company importer will perform a preflight check to ensure your dataset is importable. If your plan does not have sufficient resources (ie. multiple users or client limit is reached), the importer will fail and you will be notified via email of the exact issue.

</x-warning>

<h2 id=device_settings>Device Settings</h2>

<h2 id=account_management>Account Management</h2>

<x-next url=/docs/advanced-settings>Advanced Settings</x-next>