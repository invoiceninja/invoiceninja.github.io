---
extends: _layouts.user_guide
section: content
locale: en
---

# Basic Settings

The basic settings are where you can setup everything you need to define your company.

<x-info>
The settings search is a great way to find settings that are configured in multiple places. If you search for email, color or any other term you’ll find all of the relevant settings.
</x-info>

<h2 id=company_details>Company Details</h2>

Settings found here relate to the currently selected company, from the company selection drop-down widget in the top left corner of the admin portal UI. Select the company you want to view settings for. The Company Details section is where you configure your address, upload your company logo and also set your company defaults.

### Details

Any data entered in this first box of custom fields will all appear as your company's details section, in most default invoice layouts and other records. Emails and websites will be clickable links in PDFs.

- **Name** - Your company name
- **ID Number** - Your company's business number, or tax identification number
- **VAT Number** - A **value added tax identification number** or **VAT identification number** is an identifier used in many countries, including the EU, for value added tax purpose
- **Website** - Your company's website
- **Email** - General company contact email, or sales contact email would go best here
- **Phone** - Support contact phone number for your company

Any data entered in here is generally for reference purposes in the admin portal, and don't appear on default documents.

- **Size** - Approximate number of employees in this company
- **Industry** - A browsable, searchable list of preset categories to describe the field your company is in

### Address

On most default invoices and other documents, you also see all of the data entered in these fields as well. These fields should all be self explanatory, and apply to most if not all businesses in any country.

- **Street**
- **Apt/Suite**
- **City**
- **State/Province**
- **Postal Code**
- **Country**

### Logo

Image uploaded here will be saved in the public/storage directory like other uploaded files. The company logo image will appear on default invoice layouts, and in the company selection widget in the top left corner of the Admin Portal UI.

The image you select should be 300x300 for best results, and there are no restrictions to the size of the file you upload, but it will cause issues with PDF invoices easily if you do not follow the standard 300x300 pixel resolution practice for logos.

### Defaults

The defaults are system wide - company level defaults, this will applied at every level of the application they refer to.

- **Invoice Payment Terms** - The payment term defined in 'days'. You can configure custom payment terms by clicking the **Configure Payment Terms** button

- **Quote Valid Until** - Similar to Invoice Payment Terms, you will select a length of time in days, from the list of payment terms time lengths.

- **Terms and Footers** - The terms and footers text inputs allow you to define default for each. These will be injected into the document automagically for you. All you need to do is set it once here and we'll take care of the rest! Note, you can always override these values by editing them directly in the entity.

  The terms and footers appear below any Public Notes attached to your documents.

  These make great places to set stock disclaimers or clauses, to clarify policies about liability and responsibility up front and in print on every document.

### Documents

Upload company documents here. These are not used automatically on any documents, and are only accessible from the admin portal. Documents stored here will also appear in the "public/storage" directory on the web server, implying that files stored here should not be considered truly secure, and this storage location is best reserved for template forms, notices, blank agreements, policy handouts, etc.

<h2 id=user_details>User Details</h2>

The User Details section covers account settings for the currently logged in user. A user's details help identify them among your team, help your teammates contact each other, and is relevant in Invoice Ninja if you are assigning users to tasks, projects, clients, or etc as a practice for organization and accountability.

### Details

- **First Name**
- **Last Name**
- **Email** - Used to send password reset links to when requested.
- **Phone** - For your reference only.
- **Password** - You would use this field to change your user account password, it doesn't reveal your existing account password.
- **Enable Two Factor** - Enable two factor authentication using TOTP codes with any TOTP supported 2FA app or device. The pop-up will present a random secret code, and a matching QR code for it. It will require you test the TOTP with a one time password to verify the 2FA setup works, then save the change to your account.
- **Accent Color** - Accent colors are used mostly as selection highlighter, and button colors in the admin portal UI. Accent Color is a mix of user-associated, and company associated. Each user may pick all of their own accent colors, and for each company.

### Notifications

Email notifications can be configured here for your user account. You can setup email events to notify you of almost any variety of record change event, whether an invoice, quote, payment, or credit, was viewed, approved, paid, failed, late, sent, created, etc.

You can choose to set notifications to one of three option levels:

- **None** - Get no notifications for this event
- **Owned by user** - Only get notifications for this event, if the record in question is assigned to your user account
- **All Records** - Get notifications for every instance of this transaction category

Also, the All Events category can be used to quickly set notification levels of every category to the same thing all at once.

<h2 id=localization>Localization</h2>

### Settings

Here you can set some server-wide settings for Invoice Ninja that will be applied to the text formatting on all records generated PDF documents.

- **Currency** - Searchable drop down menu to select a default currency.
- **Currency Format** - Select preferred presentation method for your selected currency.
- **Language** - Searchable drop down menu to select a preferred language, where supported by Invoice Ninja.
- **Date Format** - Searchable drop down menu to select a preferred date format.
- **Military Time** - Toggle on and off 24-hour time preference.
- **First Month of the Year** - Default January, used to determine annual start point when looking at or generating reports.

### Custom Labels

In the custom labels section, you are able to reformat the descriptive text labels used in all your document templates. This is a useful feature to add custom language settings to your documents manually.

You have a list to maintain of custom labels. Adding a custom label, such as "Item", will add it to your list on the left column, and in the right column next to "Item" you will see a text-entry field for the text you want to replace "Item" with. For example "Line Item", or "UPC". This replaces the text used on all your invoices, and etc.

- **Select Label** - From this drop down list you can select a label from a list of labels.
- **Add Custom** - Add a label to virtually any value used on your documents, with a few more steps. Click the _Add Custom_ blue text button in the top right of the panel, and what Invoice Ninja expects from you to create a working label for you, is the key name for the label (not the label's current text value).
  - **Labels** - Click the blue text "Labels" button in the "Add Custom" popup, to open a link a dictionary list of all the labels in a single PHP document. Select a desired label to change from this extensive list, and use the key name `invoice_date` and not the value "Invoice Date" as the label name when adding a custom label, to link it directly to the dictionary key `invoice_date`. When it appears in the list, it will present the key's value "Invoice Date" on your custom labels list, allowing you to change the text to "Date of Transaction", or anything else.

Edit, or create a new invoice, credit, etc, in order to see the changes to the text labels applied across your documents now.

<h2 id=payment_settings>Payment Settings</h2>

<div class="video_container">
<x-video src="/assets/videos/payments/payment_settings/payment_settings.mpd" is_dash="true" id="payment-settings-video"></x-video>
</div>

You may configure payment gateways, and payment rules/behaviors from here.

- **Auto bill**
  - _Enabled_ - A payment will be automatically attempted if a valid payment method is stored on file.
  - _Enabled by default_ - The client will be given the option to allow payment methods to be stored with the radio box selected.
  - _Disabled by default_ - The client will be given the option to allow payment methods to be stored with the radio box unselected.
  - _Disabled_ - No option is given, and auto billing is disabled.
- **Auto Bill On** - In an event where auto billing is enabled, you can configure the automatic payment to be triggered when an invoice is sent, or on the due date of that invoice.
- **Payment Type** - This selector will set the default payment method.
- **Use Available Credits** - Configure behavior for when a client has available credits in their account as they go to make a payment

  - _Off_ - Will not use available credits in the client's account.
  - _Enabled_ - Will use any available credits by default.
  - _Show Option_ - Will prompt the user making the payment that there are credits available, if they choose to apply them.

- **Allow Over Payment** - Toggle on/off client ability to optionally pay extra as a tip.
- **Allow Under Payment** - Toggle the ability for clients to pay a minimum or partial amount owing.

- **Payment Emails**
  - _Manual Payment Email_ - Sends a payment notification to the client when a manual payment is applied
  - _Online Payment Email_ - Sends a payment notification to the client when an online payment has been processed.

### Configure Payment Gateways

Integrating your Invoice Ninja account with a payment gateway allows clients to pay their invoices with 1-click!

The payment gateway processes the transaction in the background while your client never leave their Invoice Ninja client-side portal. Seamless!

Please see: [Payment Gateways](/en/gateways)

<h2 id=tax_settings>Tax Settings</h2>

In this section we can configure some of the default settings for taxes applied to either entire invoices, or products themselves only. Tax rates are expressed in % values only.

**CAREFUL!**

You can accidentally double charge taxes if you apply tax rates on the flat balance of an invoice, _and_ on the individual products in the invoice themselves. If there is a separate tax for certain products you sell, that might be where this could apply.

- **Invoice Tax Rates** - Disabled, one, two, or three tax rates choices. You will see "_Default Tax Rate_" fields spawn near the bottom when you change this setting. The new fields below will set the default tax rates applied to the flat balance of any invoice. Note, that you can change the tax rates for any individual invoice.
- **Item Tax Rates** - Disabled, one, two, or three tax rate choices. Optionally enable "_Tax_" fields which will then spawn in the _Edit Product_ panel, or in the product listing on an invoice.
- **Expense Tax Rates** - Disabled, one, two or three tax rate choices. Defines the number of tax rates to be configured for expenses.
- **Inclusive Taxes** - Enable this setting to use inclusive taxes, which determines whether the tax rate is reduced from the set product/invoice total value, or added on top of it after.
  - _Example_
    Exclusive: 100 + 10% = 100 + 10
    Inclusive: 100 + 10% = 90.91 + 9.09

**Configure Rates** - A simple _Tax Rates_ settings panel to manage tax rates applicable to your company. Tax rates configured here are selectable from the _Tax_ and _Tax Rate_ drop down menus on invoices and products. You add a tax rate with the "+" button in the bottom right panel, and simply add a name, and tax rate expressed in percent only.

<h2 id=product_settings>Product Settings</h2>

These options govern the behaviors and rules related to _Products_ either when editing the products directly, or interacting with them on invoices, quotes, etc.

- **Show Product Discount** - Optionally enable a discount field for products/items when added to invoices or quotes. This line item appears on invoice and quote documents sent to clients.
- **Show Product Cost** - Enables a _Product Cost_ field in each product listing, for tracking item costs, and markup values. This item does _not_ appear on any customer invoices, it is only for the admin portal.
- **Show Product Quantity** - Display a quantity field on invoices or not. Defaults to one, if the product quantity field is disabled.
- **Default Quantity** - When the product quantity field is enabled, enabling this will make the quantity default to 1, otherwise you must explicitly specify the quantity of each product.

- **Fill Products** - Enable, to automatically fill the description and cost fields with the values of the product you select, when adding a product to an invoice.
- **Update Products** - Changing the product description, or tax rate on an invoice, will automatically update that products entry in the product list.
- **Convert Products** - Enable to support automatically converting product prices to your client's currency.

<h2 id=task_settings>Task Settings</h2>

Settings here govern the rules and behaviors related to tasks, which are nested in projects.

- **Default Tax Rate** - Custom field to set a flat default task rate per hour.
- **Auto Start Tasks** - Enable to automatically start a task's time tracking when a task is created.
- **Show Task End Date** - Enables an "_End Date_" field when creating and editing tasks.

These rules strictly govern

- **Show Tasks Table** - When enabled, will always present a "_Tasks_" category when adding items to invoices, where you can select tasks assigned to a client, and add them to the invoice.
- **Invoice Task Datelog** - Include the dates of entries in the task log when adding the task to an invoice.
- **Invoice Task Timelog** - Include the timestamps of a given task when adding it to an invoice.
- **Add Documents to Invoice** - Enable to make documents attached to your tasks, visible to clients as well as admin portal users.

**Configure Statuses** - This button enters another settings panel for "_Task Statuses_" which manages a list of selectable statuses for tasks, for example: Backlog, Ready to do, In Progress, and Done. All there is to configure for a task status, is the name of the status, and an indicator color.

<h2 id=expense_settings>Expense Settings</h2>

These rules govern default settings and behaviors of your company's expense records.

Each of these settings below can be configured on a per-expense record basis, when creating or editing an expense. Changing these settings here will change the default configuration for new expense records.

- **Should be Invoiced** - Enable this to mark an expense as billable to a client. Expenses with invoicing enabled can be included on client invoices, and when you create an invoice from a project that the invoicable expense is linked to. When an expense record has invoicing enabled, it's lifecycle status will change to _Pending_ until it is invoiced, and paid for, after which it will be changed automatically again to _Paid_.
- **Mark Paid** - Enable this to indicate that your organization has paid the vendor for this expense. This is _not_ to indicate a payment from a client.
  - **Payment Type** - Select the payment type your organization used to pay the vendor with.
  - **Date** - Enter the date your organization paid the vendor.
  - **Transaction Reference** - Enter a transaction reference code or number if applicable.
- **Convert Currency** - If the expense is billed in a currency other than your own default currency, enabling this allows you to set the currency you prefer to pay with, and an exchange rate, to calculate how much the expense cost in your preferred currency.

<x-warning>

Note that when you view your reports, expenses will be categorized by the currency of the expense/vendor, not the currency selected under "Convert Currency". If you wish to consolidate your profit and loss totals under one currency, you should select your own currency for each expense record, and use the converted amount for the expense amount, leaving any reference to a foreign currency out of the record details.

</x-warning>

- **Add Documents to Invoice** - Enable this feature to include any documents attached to an expense, with the documents attached to the invoice when you create an invoice out of the expense record.
- **Enter Taxes** - Configure how the expense is taxed to you in more detail. Change between rate or amount to change the _Tax_ field (under the details tab) from a percent based tax, to a custom flat tax.
  - **By Rate** - this is selected by default. You can select a tax rate under _Details_ to apply to the expense.
  - **By Amount** - allows you to manually enter a _Tax Name_ and _Tax Amount_ under _Details_ to apply to the expense. Note that you can apply up to three tax rates/amounts to an expense, based on the settting _Settings > Tax Settings > Expense Tax Rates_ where you can select _Disabled, One Tax Rate, Two Tax Rates,_ or _Three Tax Rates_. For example, if you have _Three Tax Rates_ as the enabled option, you will see three _Tax_ options on the left.
- **Inclusive Taxes** - Enable this option if the taxes are inclusive to the cost of the expense, rather than exclusive. For example:
  - Exclusive tax is applied on top of the expense cost, like so: 100 + 10% = $110 total (100 + 10).
  - Inclusive tax is when taxes are deducted from the amount the vendor bills you, and included in your expense amount, rather than tacked on top of what you pay the vendor, like so: 100 + 10% = $100 total (90.91 +9.09).

**Configure Categories** - This table below the Expense Settings allows you to manage the _Expense Categories_". Here, you can manage a simple list (Name, and Color fields only) for expense categories. This can help you organize your expenses more effectively, by assigning an expense category to each of your expenses.

<h2 id=import_export>Import | Export</h2>

Here, you have many options for file formats to import your company records from.

### CSV

CSV formatted records can be imported only. CSV file imports must be done per-category, and not all in one large file.

You will have to manually select matching categories for some entries in the CSV after it is uploaded, because older or other software may not use the same labels.

The expected formatting of the CSV document is to have a single row with all the column categories, followed by a row for each entry.

When importing your CSV document, verify that the column on the left matches your column labels from the CSV file, and that the column in the middle matches the first row underneath the column labels of your CSV file. Then on the right, select the most accurate label available from Invoice Ninja to associate those values with the new label upon import.

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

These settings govern the settings for the session or instance on the physical device you are currently signed into. On a new device, these settings will not apply.

- **Layout** - Explicitly choose from a desktop, or mobile layout. Normally Invoice Ninja can detect which type of display you are using though.

- **Menu Sidebar** - The menu sidebar is the left-most sidebar for navigation. When set to "_Collapse_" the sidebar stays pinned, and can expand or shrink. When set to "_Float_" the sidebar stays hidden, and slides out from a gesture or by clicking the "_hamburger_" button in the top left corner.

- **History Sidebar** - The history sidebar will spawn somewhere on the righthand-side. When set to "_Show/Hide_" the history sidebar spawns on the far right, and is a persistent sidebar that resizes and moves the panels around it. When set to "_Float_" the history sidebar spawns in front of the panel you're working in when you press the "_History_" button at the top of a menu list, and it dismisses itself automatically.

- **Preview Sidebar** - Enabled is the default setting, which presents you with a list of clients, invoices, tasks, etc. and the entire entry in the list is a clickable button to view the entry's advanced details in a persistent sidebar on the righthand-side.

  When disabled, you are instead presented with no sidebar on the right, only a list, and each entry shows a little more detail at a glance, but it doesn't offer advanced details views, and disabling this feature can effectively reduce features normally available to you through these detailed preview sidebars.

- **List Long Press** - Configure behavior when you long press a menu list entry. "_Start Multiselect_" to use the long press to switch to an item selector mode and select multiple items to act upon, or choose "_Show Actions_" to simply spawn a context menu of available actions for that one menu list entry instead.
- **Rows Per Page** - Configure the default number of rows to load per menu page.

- **Dark Mode** - Toggles a dark theme for low light conditions, or personal preference.

- **Color Theme** - Select color themes to use for the tags assigned to invoices, payments, tasks, etc (Such as "_In Progress_" "_Sent_" or "_Running_"). Accent colors for the UI are chosen from the User Details section.

<h2 id=account_management>Account Management</h2>

The Account Management panel mostly governs the account for your company on the server, status with Invoice Ninja licensing, and API configurations for developers interested in automation.

### Overview

From this tab you have a few different things presented to you.

First are things related to your company's status, or terms with Invoice Ninja

- **Plan** - Status of your current plan with Invoice Ninja hosting services.
- **Activate Company** - Enable or disable company active state, disabling it will disable a number of automated features, like emails, recurring invoices, and notifications.
- **Enable Markdown** - Enable your template designs to embed markdown into your HTML code, for formatting PDFs with markdown. At this time, the markdown code can only be converted from within product line item descriptions, but there are plans to implement wider support.
- **Decimal Comma** - When creating or editing documents (invoices, quotes, etc) in the admin portal, enabling this will change the use of decimals, to commas in order to separate dollars from cents. It operates with one or the other but not both at once. For example, 20.00 will instead be represented as 20,00. A decimal will be ignored with commas enabled, and vice versa.
- **Include Drafts** - When generating reports from the "Reports" module, enabling this feature will include objects that are still marked as drafts in the figures of your reports.
- **Purchase License** - A link to request an invoice from Invoice Ninja for a white label license. License will be emailed to you.
- **Apply License** - Enter the license key provided by Invoice Ninja to remove white label from documents and client-facing parts of the app.

Second, are all developer resources for automation features.

- **API Tokens** - Create new randomly generated API tokens, and manage existing tokens in a subsettings panel here.
- **API Webhooks** - Create and manage API webhooks in a subsettings panel here.
- **API Docs** - Link to the API documentation for developers.
- **Zapier** - Login link for Zapier to configure automated processes with Zapier.

Third, are the most dangerous and serious buttons! Make sure you know what you are doing!

- **Purge Data** - Permanently deletes _all your companies and records_ from the database!
- **Delete Company** - Permanently deletes the _currently selected company_ from the database!

### Enabled Modules

Tick boxes here enable and disable entire modules for the company. Disabling a category or two like "Projects" and "Tasks" will remove them from the menu sidebar on the righthand-side and hide them and all their existing records, until you re-enable the module again.

### Integrations

- **Google Analytics Tracking ID** - Without needing to write in the code yourself, easily integrate analytics and ecommerce tracking on your domain by inserting your Google Analytics account tracking ID in this field. See [here](https://support.google.com/analytics/answer/1008080#zippy=%2Cin-this-article) for help finding your Analytics tracking ID.

### Security Settings

Configure some simple server account security settings for logged in users.

- **Password Timeout** - You normally require a password for certain actions, like deleting any data. Here you can set a timeout until the next time you have to re-enter that password to perform another similar action.
- **Web Session Timeout** - Disabled by default, set a timeout to logout the user from the admin portal after a given time.
- **Require Password with Social Login** - If you have social login enabled on your server, you may enable this setting to force users to verify their account password anyways when they log in.

<x-next url=/en/advanced-settings>Advanced Settings</x-next>
