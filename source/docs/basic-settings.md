---
extends: _layouts.docs
section: content
---

# Basic Settings

The basic settings are where you can setup everything you need to define your company. 

<h2 id=company_details>Company Details</h2>

Settings found here relate to the currently selected company, from the company selection drop-down widget in the top left corner of the admin portal UI.  Select the company you want to view settings for.  The Company Details section is where you configure your address, upload your company logo and also set your company defaults.  

### Details

Any data entered in this first box of custom fields will all appear as your company's details section, in most default invoice layouts and other records.  Emails and websites will be clickable links in PDFs.

* **Name** - Your company name
* **ID Number** - Your company's business number, or tax identification number
* **VAT Number** - A **value added tax identification number** or **VAT identification number** is an identifier used in many countries, including the EU, for value added tax purpose
* **Website** - Your company's website
* **Email** - General company contact email, or sales contact email would go best here
* **Phone** - Support contact phone number for your company

Any data entered in here is generally for reference purposes in the admin portal, and don't appear on default documents.

* **Size** - Approximate number of employees in this company
* **Industry** - A browsable, searchable list of preset categories to describe the field your company is in

### Address

On most default invoices and other documents, you also see all of the data entered in these fields as well.  These fields should all be self explanatory, and apply to most if not all businesses in any country.

* **Street**
* **Apt/Suite**
* **City**
* **State/Province**
* **Postal Code**
* **Country**

### Logo

Image uploaded here will be saved in the public/storage directory like other uploaded files.  The company logo image will appear on default invoice layouts, and in the company selection widget in the top left corner of the Admin Portal UI.  

The image you select should be 300x300 for best results, and there are no restrictions to the size of the file you upload, but it will cause issues with PDF invoices easily if you do not follow the standard 300x300 pixel resolution practice for logos.

### Defaults

The defaults are system wide - company level defaults, this will applied at every level of the application they refer to.

* **Auto bill**
  * *Enabled* - A user a payment will be automatically attempted if a payment method is stored on file.
  * *Enabled by default* - The client will be given the option to allow payment methods to be stored with the radio box selected.
  * *Disabled by default* - The client will be given the option to allow payment methods to be stored with the radio box unselected.
  * *Disabled* - No option is given, and auto billing is disabled.

* **Payment Type** - This selector will set the default payment method.

* **Invoice Payment Terms** - The payment term defined in 'days'. You can configure custom payment terms by clicking the **Configure Payment Terms** button

* **Quote Valid Until** - Similar to Invoice Payment Terms, you will select a length of time in days, from the list of payment terms time lengths.

* **Payment Emails**
  * *Manual Payment Email* - Sends a payment notification to the client when a manual payment is applied
  * *Online Payment Email* - Sends a payment notification to the client when an online payment has been processed.

* **Terms and Footers** - The terms and footers text inputs allow you to define default for each. These will be injected into the document automagically for you. All you need to do is set it once here and we'll take care of the rest!  Note, you can always override these values by editing them directly in the entity. 

  The terms and footers appear below any Public Notes attached to your documents.

  These make great places to set stock disclaimers or clauses, to clarify policies about liability and responsibility up front and in print on every document.

### Documents

Upload company documents here.  These are not used automatically on any documents, and are only accessible from the admin portal.  Documents stored here will also appear in the "public/storage" directory on the web server, implying that files stored here should not be considered truly secure, and this storage location is best reserved for template forms, notices, blank agreements, policy handouts, etc.

<h2 id=user_details>User Details</h2>

The User Details section covers account settings for the currently logged in user.  A user's details help identify them among your team, help your teammates contact each other, and is relevant in Invoice Ninja if you are assigning users to tasks, projects, clients, or etc as a practice for organization and accountability.

### Details

* **First Name**
* **Last Name**
* **Email**
* **Phone**
* **Password** - You would use this field to change your user account password, it doesn't reveal your existing account password.
* **Enable Two Factor** - Enable two factor authentication using TOTP codes with any TOTP supported 2FA app or device.  The pop-up will present a random secret code, and a matching QR code for it.  It will require you test the TOTP with a one time password to verify the 2FA setup works, then save the change to your account.
* **Accent Color** - Accent colors are used mostly as selection highlighter, and button colors in the admin portal UI.  Accent Color is a mix of user-associated, and company associated.  Each user may pick all of their own accent colors, and for each company.

### Notifications

Email notifications can be configured here for your user account.  You can setup email events to notify you of almost any variety of record change event, whether an invoice, quote, payment, or credit, was viewed, approved, paid, failed, late, sent, created, etc.

You can choose to set notifications to one of three option levels:

* **None** - Get no notifications for this event
* **Owned by user** - Only get notifications for this event, if the record in question is assigned to your user account
* **All Records** - Get notifications for every instance of this transaction category

Also, the All Events category can be used to quickly set notification levels of every category to the same thing all at once.

<h2 id=localization>Localization</h2>

### Settings

Here you can set some server-wide settings for Invoice Ninja that will be applied to the text formatting on all records generated PDF documents.

* **Currency** - Searchable drop down menu to select a default currency.
* **Currency Format** - Select preferred presentation method for your selected currency.
* **Language** - Searchable drop down menu to select a preferred language, where supported by Invoice Ninja.
* **Date Format** - Searchable drop down menu to select a preferred date format.
* **Military Time** - Toggle on and off 24-hour time preference.
* **First Month of the Year** - Default January, used to determine annual start point when looking at or generating reports.

<h2 id=online_payments>Online Payments</h2>

You may configure payment gateways, and payment rules/behaviors from here.

* **Auto Bill On** - In an event where auto billing is enabled, you can configure the automatic payment to be triggered when an invoice is sent, or on the due date of that invoice.
* **Use Available Credits** - Configure behavior for when a client has available credits in their account as they go to make a payment
  * *Off* - Will not use available credits in the client's account.
  * *Enabled* - Will use any available credits by default.
  * *Show Option* - Will prompt the user making the payment that there are credits available, if they choose to apply them.
* **Allow Over Payment** - Toggle on/off client ability to optionally pay extra as a tip.
* **Allow Under Payment** - Toggle the ability for clients to pay a minimum or partial amount owing.

**Configure Payment Gateways** - Enter the Payment Gateways settings panel, where you can add, and configure payment gateways for clients to use from the client portal, for online payments.  *More on this later...*

<h2 id=tax_settings>Tax Settings</h2>

In this section we can configure some of the default settings for taxes applied to either entire invoices, or products themselves only.  Tax rates are expressed in % values only.

**CAREFUL!**

You can accidentally double charge taxes if you apply tax rates on the flat balance of an invoice, *and* on the individual products in the invoice themselves.  If there is a separate tax for certain products you sell, that might be where this could apply.

* **Invoice Tax Rates** - Disabled, one, two, or three tax rates choices.  You will see "*Default Tax Rate*" fields spawn near the bottom when you change this setting.  The new fields below will set the default tax rates applied to the flat balance of any invoice.  Note, that you can change the tax rates for any individual invoice.
* **Item Tax Rates** - Disabled, one, two, or three tax rate choices.  Optionally enable "*Tax*" fields which will then spawn in the *Edit Product* panel, or in the product listing on an invoice. 
* **Inclusive Taxes** - Enable this setting to use inclusive taxes, which determines whether the tax rate is reduced from the set product/invoice total value, or added on top of it after.
  * *Example*
    Exclusive:  100 + 10% = 100 + 10
    Inclusive:  100 + 10% = 90.91 + 9.09

**Configure Rates** - A simple *Tax Rates* settings panel to manage tax rates applicable to your company.  Tax rates configured here are selectable from the *Tax* and *Tax Rate* drop down menus on invoices and products.  You add a tax rate with the "+" button in the top left of this panel, and simply add a name, and tax rate expressed in percent only.

<h2 id=product_settings>Product Settings</h2>

These options govern the behaviors and rules related to *Products* either when editing the products directly, or interacting with them on invoices, quotes, etc.

* **Show Product Discount** - Optionally enable a discount field for products/items when added to invoices or quotes.  This line item appears on invoice and quote documents sent to clients.
* **Show Product Cost** - Enables a *Product Cost* field in each product listing, for tracking item costs, and markup values.  This item does *not* appear on any customer invoices, it is only for the admin portal.
* **Show Product Quantity** - Display a quantity field on invoices or not.  Defaults to one, if the product quantity field is disabled.
* **Default Quantity** - When the product quantity field is enabled, enabling this will make the quantity default to 1, otherwise you must explicitly specify the quantity of each product.

* **Fill Products** - Enable, to automatically fill the description and cost fields with the values of the product you select, when adding a product to an invoice.
* **Update Products** - Changing the product description, or tax rate on an invoice, will automatically update that products entry in the product list.
* **Convert Products** - Enable to support automatically converting product prices to your client's currency.

<h2 id=task_settings>Task Settings</h2>

Settings here govern the rules and behaviors related to tasks, which are nested in projects.

* **Default Tax Rate** - Custom field to set a flat default task rate per hour.
* **Auto Start Tasks** - Enable to automatically start a task's time tracking when a task is created.
* **Show Task End Date** - Enables an "*End Date*" field when creating and editing tasks.

These rules strictly govern 

* **Show Tasks Table** - When enabled, will always present a "*Tasks*" category when adding items to invoices, where you can select tasks assigned to a client, and add them to the invoice.  
* **Invoice Task Datelog** - Include the dates of entries in the task log when adding the task to an invoice.
* **Invoice Task Timelog** - Include the timestamps of a given task when adding it to an invoice.
* **Add Documents to Invoice** - Enable to make documents attached to your tasks, visible to clients as well as admin portal users.

**Configure Statuses** - This button enters another settings panel for "*Task Statuses*" which manages a list of selectable statuses for tasks, for example:  Backlog, Ready to do, In Progress, and Done.  All there is to configure for a task status, is the name of the status, and an indicator color.

<h2 id=expense_settings>Expense Settings</h2>

These rules govern default settings and behaviors of your company's expense records.

Each of these settings below can be configured on a per-expense record basis, when creating or editing an expense.  Changing these settings here will change the default configuration for new expense records.

* **Should be Invoiced** - When enabled, an expense will indicate PENDING status as it waits to get put on a client invoice.
* **Mark Paid** - Each individual expense record has its own *Mark Paid* setting. 
* **Add Documents to Invoice** - Make the documents attached to an expense record visible to the client whose invoice it is being attached to.  

**Configure Categories** - This button enters a subsetting panel for "*Expense Categories*".  Here, you can manage a simple list (Name, and Color fields only) for expense categories.  This can help you organize your expenses more effectively, by assigning an expense category to each of your expenses.

<h2 id=import_export>Import | Export</h2>

Here, you have many options for file formats to import your company records from. 

### CSV

CSV formatted records can be imported only.  CSV file imports must be done per-category, and not all in one large file.  

You will have to manually select matching categories for some entries in the CSV after it is uploaded, because older or other software may not use the same labels.

 The expected formatting of the CSV document is to have a single row with all the column categories, followed by a row for each entry.  

When importing your CSV document, verify that the column on the left matches your column labels from the CSV file, and that the column in the middle matches the first row underneath the column labels of your CSV file.  Then on the right, select the most accurate label available from Invoice Ninja to associate those values with the new label upon import.

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

These settings govern the settings for the session or instance on the physical device you are currently signed into.  On a new device, these settings will not apply.

* **Layout** - Explicitly choose from a desktop, or mobile layout.  Normally Invoice Ninja can detect which type of display you are using though.

* **Menu Sidebar** - The menu sidebar is the left-most sidebar for navigation.  When set to "*Collapse*" the sidebar stays pinned, and can expand or shrink.  When set to "*Float*" the sidebar stays hidden, and slides out from a gesture or by clicking the "*hamburger*" button in the top left corner.

* **History Sidebar** - The history sidebar will spawn somewhere on the righthand-side.  When set to "*Show/Hide*" the history sidebar spawns on the far right, and is a persistent sidebar that resizes and moves the panels around it.  When set to "*Float*" the history sidebar spawns in front of the panel you're working in when you press the "*History*" button at the top of a menu list, and it dismisses itself automatically.

* **Preview Sidebar** - Enabled is the default setting, which presents you with a list of clients, invoices, tasks, etc. and the entire entry in the list is a clickable button to view the entry's advanced details in a persistent sidebar on the righthand-side. 

  When disabled, you are instead presented with no sidebar on the right, only a list, and each entry shows a little more detail at a glance, but it doesn't offer advanced details views, and disabling this feature can effectively reduce features normally available to you through these detailed preview sidebars.



* **List Long Press** - Configure behavior when you long press a menu list entry.  "*Start Multiselect*" to use the long press to switch to an item selector mode and select multiple items to act upon, or choose "*Show Actions*" to simply spawn a context menu of available actions for that one menu list entry instead.
* **Rows Per Page** - Configure the default number of rows to load per menu page.



* **Dark Mode** - Toggles a dark theme for low light conditions, or personal preference.
* **Color Theme** - Select color themes to use for the tags assigned to invoices, payments, tasks, etc (Such as "*In Progress*" "*Sent*" or "*Running*").  Accent colors for the UI are chosen from the User Details section.

<h2 id=account_management>Account Management</h2>

The Account Management panel mostly governs the account for your company on the server, status with Invoice Ninja licensing, and API configurations for developers interested in automation.

### Overview

From this tab you have a few different things presented to you.

First are things related to your company's status, or terms with Invoice Ninja

* **Plan** - Status of your current plan with Invoice Ninja hosting services.
* **Activate Company** - Enable or disable company active state, disabling it will disable a number of automated features, like emails, recurring invoices, and notifications.
* **Purchase License** - A link to request an invoice from Invoice Ninja for a white label license.  License will be emailed to you.
* **Apply License** - Enter the license key provided by Invoice Ninja to remove white label from documents and client-facing parts of the app.

Second, are all developer resources for automation features.

* **API Tokens** - Create new randomly generated API tokens, and manage existing tokens in a subsettings panel here.
* **API Webhooks** - Create and manage API webhooks in a subsettings panel here.
* **API Docs** - Link to the API documentation for developers.
* **Zapier** - Login link for Zapier to configure automated processes with Zapier.

Third, are the most dangerous and serious buttons!  Make sure you know what you are doing!

* **Purge Data** - Permanently deletes *all your companies and records* from the database!
* **Delete Company** - Permanently deletes the *currently selected company* from the database!

### Enabled Modules

Tick boxes here enable and disable entire modules for the company.  Disabling a category or two like "Projects" and "Tasks" will remove them from the menu sidebar on the righthand-side and hide them and all their existing records, until you re-enable the module again.

### Security Settings

Configure some simple server account security settings for logged in users.

* **Password Timeout** - You normally require a password for certain actions, like deleting any data.  Here you can set a timeout until the next time you have to re-enter that password to perform another similar action.
* **Web Session Timeout** - Disabled by default, set a timeout to logout the user from the admin portal after a given time.
* **Require Password with Social Login** - If you have social login enabled on your server, you may enable this setting to force users to verify their account password anyways when they log in.

<x-next url=/docs/advanced-settings>Advanced Settings</x-next>