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
* **Email** - Used to send password reset links to when requested.
* **Phone** - For your reference only.
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

### Custom Labels

In the custom labels section, you are able to reformat the descriptive text labels used in all your document templates.  This is a useful feature to add custom language settings to your documents manually.

You have a list to maintain of custom labels.  Adding a custom label, such as "Item", will add it to your list on the left column, and in the right column next to "Item" you will see a text-entry field for the text you want to replace "Item" with.  For example "Line Item", or "UPC".  This replaces the text used on all your invoices,  and etc.

* **Select Label** - From this drop down list you can select a label from a list of labels.
* **Add Custom** - Add a label to virtually any value used on your documents, with a few more steps.  Click the *Add Custom* blue text button in the top right of the panel, and what Invoice Ninja expects from you to create a working label for you, is the key name for the label (not the label's current text value).
	* **Labels** - Click the blue text "Labels" button in the "Add Custom" popup, to open a link a dictionary list of all the labels in a single PHP document.  Select a desired label to change from this extensive list, and use the key name `invoice_date` and not the value "Invoice Date" as the label name when adding a custom label, to link it directly to the dictionary key `invoice_date`.  When it appears in the list, it will present the key's value "Invoice Date" on your custom labels list, allowing you to change the text to "Date of Transaction", or anything else.

Edit, or create a new invoice, credit, etc, in order to see the changes to the text labels applied across your documents now.


<h2 id=online_payments>Online Payments</h2>

You may configure payment gateways, and payment rules/behaviors from here.

* **Auto Bill On** - In an event where auto billing is enabled, you can configure the automatic payment to be triggered when an invoice is sent, or on the due date of that invoice.
* **Use Available Credits** - Configure behavior for when a client has available credits in their account as they go to make a payment
  * *Off* - Will not use available credits in the client's account.
  * *Enabled* - Will use any available credits by default.
  * *Show Option* - Will prompt the user making the payment that there are credits available, if they choose to apply them.
* **Allow Over Payment** - Toggle on/off client ability to optionally pay extra as a tip.
* **Allow Under Payment** - Toggle the ability for clients to pay a minimum or partial amount owing.

### Configure Payment Gateways

Enter the Payment Gateways settings panel, where you can add, and configure payment gateways for clients to use from the client portal, for online payments.  Payment gateway service providers have their own fees and policies to be aware of, but this will help you with connecting Invoice Ninja with your payment gateway using their standard APIs.

In the new pane for Configure Payment Gateways, you see a list of configured payment gateways, and a "plus" icon used to create a new payment gateway.  When you create or edit a payment gateway there are three tabs of settings to configure.  **Credentials**, **Settings**, and **Limits/Fees**.  

#### Credentials

In this first most important pane, you define the necessary values in order to facilitate communication between Invoice Ninja and your payment gateway's API.  When you first create a new payment gateway, you must select a service provider from the list.

* **Stripe** - Our [Stripe](https://stripe.com) integration includes Credit Card, ACH, Sofort payment options. Our Stripe integration also includes token billing and refunds.  Enter your API secret key, and publishable key, provided by Stripe.  To acquire these, sign in or create a new account on the Stripe website, and visit the *Developer* menu, which expands and then underneath the developer menu, visit the *API Keys* menu.  Your secret key will be hidden, and can only be viewed once.  If you need to, create a new secret key.  For more information about Stripe API Keys, visit [Stripe Docs](https://stripe.com/docs/keys).
* **Braintree** - With [Braintree](https://www.braintreegateway.com/) you can integrate payment support through PayPal, credit card, and debit/bank transfer.  Enter your merchant ID, public key, and private key, provided by Braintree.  To acquire these, sign in or create a production account on the Braintree website, and click the "gear" icon in the top right corner, which expands a drop down list.  To find your public and private keys, visit *API* in the list, and to find your merchant ID, visit *Business* in the list.  For more information about Braintree gateway credentials, visit [Braintree Docs](https://developer.paypal.com/braintree/articles/control-panel/important-gateway-credentials).
* **PayPal Express** - Enter your API username, API password, and signature, provided by PayPal.  To acquire these, sign in or create a business account on the [PayPal](https://paypal.com/) website.  Hover over or click your profile icon in the top right of the screen for a drop down menu, and choose *Account Settings*.  Under the first section, *Account Access*, find *API Access* in the list, and click the *Update* button beside it.  Scroll down under "**NVP/SOAP API integration (Classic)**" and click *Manage API Credentials*.  Here you will find the existing credentials, or an opportunity to create new credentials.  For more information about these PayPal payment gateway credentials, visit [PayPal Docs](https://developer.paypal.com/docs/nvp-soap-api/apiCredentials/).
  There are a few extra options in the Credentials tab, exclusively for PayPal Express configuration.
  * **Test Mode** - Enable this option only if you are using sandbox/testing credentials from PayPal.
  * **Solution Type** - Choose either *Sole*, or *Mark*.  With Sole, a PayPal account is optional.  With Mark, your customers are required to have a PayPal account to pay with this method.
  * **Landing Page** - Choose either *Billing* or *Login*.  With Billing, you typically choose when using solution type Sole, because then a PayPal account is optional, and the user lands on a page with the bill and a prompt for payment.  With Login, you typically choose when using solution type Mark, to enforce the use of a PayPal account, and direct the customer immediately to login to PayPal if they are not already.
  * **Brand Name** - Add your company's name to the PayPal checkout.
  * **Header Image URL** - Choose to use either a header image, or a logo image to be shown at the PayPal checkout.  PayPal requests an image with maximum resolution of 750 pixels wide by 90 pixels high.  Set a URL link to your desired company header image.  
  * **Logo Image URL** - Choose to use either a header image, or a logo image to be shown at the PayPal checkout.  PayPal requests an image with maximum resolution of 190 pixels wide by 60 pixels high.  Set a URL link to your desired company logo image.  
  * **Border Color** - This option creates a 2 pixel wide border around your header image, in your chosen color.
* **Authorize.net** -  Our [Authorize.net](https://www.authorize.net/) integration includes Credit Card payment options, including token billing and refunds.  Enter your API Login ID and Transaction Key, provided by Authorize.net.  To acquire these, sign in to or create a merchant account on the Authorize.net website.  After signing in, click *Settings* on the left side menu, then click *API Credentials & Keys*.  From here you can view and manage new and existing API credentials.  For more information about these Authorize.net API credentials, visit [Authorize.net Docs](https://support.authorize.net/s/article/How-do-I-obtain-my-API-Login-ID-and-Transaction-Key).
  * **Test Mode** - Enable for testing transactions only, use if your account is running in "test mode".  For more information about test mode, visit [Authorize.net Docs](https://support.authorize.net/s/article/What-Is-Test-Mode-and-How-Do-I-Turn-It-off-and-On).
  * **Developer Mode** - Enable for use with sandbox accounts for developers only.  This is a separate account type, with no billing, and no *real* live transactions, and will have unique API credentials associated with it.  For more information, visit [sandbox.authorize.net](https://sandbox.authorize.net/).
  * **Live Endpoint** - Default value is the correct HTTP address for Authorize.net API calls to a live merchant account.
  * **Developer Endpoint** - Default value is the correct HTTP address for Authorize.net API calls to a sandbox account.  For more information about API endpoints, visit [Authorize.net Docs](https://developer.authorize.net/api/reference/index.html#gettingstarted-section-section-header).
* **Mollie** - Our [Mollie](https://www.mollie.com/en) integration includes Credit Card payment options, including token billing.  To setup Mollie as a payment method, you will need your profile ID #, and your website API Key.  Your profile ID # can be found in the top left corner of the screen when you log in to the Mollie dashboard, and you can find a list of your API keys by clicking the *Developers* expanding menu on the left sidebar, and then clicking *API Keys*, as described on the [Mollie knowledgebase](https://help.mollie.com/hc/en-us/articles/115000328205-Where-can-I-find-the-live-API-key-).  After approving your website, you will find your live, and test API keys here.  There is a checkbox in the Invoice Ninja admin portal when configuring the Mollie payment gateway, to enable test mode if you are going to use a *Test API Key* from Mollie. 
* **Custom** - This is a developer feature, where you can write in your own PHP code with custom API references for your own payment gateway service provider.  
* **Square** - Our [Square](https://squareup.com/) integration includes Credit Card payment options, including token billing, and refunds.  Once you sign up for a Square developer account and configure your application in the Square Developer Dashoard, you will need to provide the *Application ID*, *Access Token*, and *Location ID* to Invoice Ninja.  The *Application ID* and *Access Token* can be found under *OAuth* in the left hand sidebar, and the *Location ID* can be found under *Location* in the sidebar.  More information can be found in the [Square developer documentation](https://developer.squareup.com/docs/square-get-started).  The test mode checkbox is available for testing Square integration with Square sandbox credentials.
* **Eway Rapid** - Our [eWAY](https://www.eway.com.au/) integration includes Credit Card payment options, including token billing, and refunds.  Once you have setup your business in the eWAY portal, you can find your API details under the top menu, by hovering over *My Account* and then clicking *API Keys*.  Your *API Key* and *Password* for Invoice Ninja are listed near the top under *Rapid API Key* and your *Public API Key* can be found just below that under the section *Pay Now Button*.  You can find more detailed instructions from the [eWAY knowledgebase](https://go.eway.io/s/article/How-do-I-setup-my-Live-eWAY-API-Key-and-Password).  The Test Mode checkbox will enable use with the eWAY sandbox account for payment gateway testing.
* **Checkout.com** - Our [Checkout.com](https://www.checkout.com/) integration includes Credit Card payment options, including token billing and refunds.  Enter your API public key and API secret key, provided by Checkout.com.  To acquire these, sign in to or create a "The Hub" account on the Checkout.com website.  Once signed into "The Hub" click on *Settings* from the left side menu, and then click *Channels*.  Here you find a list of your businesses registered on Checkout.com, select the appropriate business (if you have multiple here) and you will find the API keys on this screen.  For more information about Checkout.com API credentials, visit [Checkout.com Docs](https://api-reference.checkout.com/#section/Authentication).
* * **Test Mode** - Enable for use when your checkout.com account/channel is running in test mode, not for live transactions or production use.
  * **Threeds** - "threeds" is an API feature to use 3D Secure payments on Checkout.com with Invoice Ninja.  3D Secure payments add an extra step of authentication for customers when processing a card transaction.  This feature reduces fraud risk, and also shifts liability in payment processing, to reduce transaction dispute claims.
* **PayTrace** - Our [PayTrace](https://www.paytrace.net/) integration includes Credit Card payment options, including token billing and refunds.  To setup PayTrace you will need your PayTrace account API user credentials and API key, which can be found after successfully setting up an account with PayTrace.  There is a process to go through with PayTrace involving testing a sandbox account first, before setting up live payments, make sure you use the *Test Mode* checkbox when going through this process with sandbox API credentials.  For more information visit the [PayTrace support website](https://developers.paytrace.com/support/home).

#### Settings

These settings govern some of the behaviors within Invoice Ninja's client portal, or admin portal, when looking at and interacting with your configured payment gateways.  Some of these options may or may not appear depending on your payment gateway type.

* **Label** - This label is for internal reference purposes only, and applies to the payment gateway list on the admin portal.
* **Capture Card** - Setting to save client credit card details for next time or not.  Enabled, or disabled.  Otherwise set to "Enabled by Default" or "Disabled by Default" to give the client an option at checkout to "Save payment method details" for later.  
* **Available Payment Types** - You will see a different list of supported payment methods, depending on the payment gateway service provider you chose.  Eg. Credit Card, Bank Transfer, Alipay, Apple Pay, PayPal, etc.  Enable or disable these options to give clients access to those payment methods at checkout.
* **Required Fields** - Tick the box for any field you wish to request the client to fill out for the payment records.  Optionally, update the client record in Invoice Ninja with the client's additional information you requested.
* **Accepted Card Logos** - Determines which logos are displayed during checkout.  Enable your accepted card logos to advertise support to your clients.

#### Limits/Fees

Here we manage any payment limits, or fees we wish to apply to any transactions.  Fees and limits applied are specific to the payment type you have selected.

* **Payment Type** - Only the payment methods that are enabled in your payment gateway *Settings* pane are available to select from here.  Choose one, and any fees or limits you set will be associated specifically with that payment method only.
* **Min Limit & Max Limit** - Enter a dollar value for the desired minimum, or maximum payment limits, and check the "Enable Min" or "Enable Max" boxes to enforce the minimum and maximum values.
* **Fee Percent** - Set a fee on transactions with this payment method, based on a % of the amount paid.
* **Fee Amount** - Set a flat rate fee for any transactions with this payment method.  Can be charged in addition to the Fee Percent, if both values are set.
* **Fee Cap** - Set a maximum value for payment method fees charged to a client.
* **Tax** - When one, two, or three *Item Tax Rates* are enabled (Basic Settings > Tax Settings) you will see one *Tax* field here for each tax rate.  These taxes are applied to the payment gateway fees you charge the customer.  
* **Adjust Fee Percent** - Use the toggle switch to enable this feature.  Use this when you intent to forward along the payment gateway fees to the customer.  For example, if the payment processing fee for your Stripe account is 30 cents flat, and 1%, and you wanted to pass that to the customer, you would enter a 0.30 flat *Fee Amount*, and 1 for *Fee Percent*, and enable the *Adjust Fee Percent*.  Because the total with fees will be higher, the *actual* fees Stripe charges will be higher also.  With this feature, Invoice Ninja will calculate and adjust the fee to charge the customer the expected fee amount, after the final invoice price is changed.
  * ***Note*** - When attempting to perfectly capture the payment gateway fee 100% and apply it to the client's payment using *Adjust Fee Percent*, you must disable *Invoice Tax Rates* and exclusively use *Item Tax Rates* (Basic Settings > Tax Settings).  When a payment fee is applied to a customer invoice, it is entered as a line item, and any invoice tax rates will be applied to the fee, which will throw off the formula to calculate the new fee percent correctly.  
  * You are responsible for verifying that your tax and fee settings comply with any laws that apply.  Seek legal counsel if you require direction on fee and tax policies for your organization.

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
* **Enable Markdown** - Enable your template designs to embed markdown into your HTML code, for formatting PDFs with markdown.  At this time, the markdown code can only be converted from within product line item descriptions, but there are plans to implement wider support.
* **Decimal Comma** - When creating or editing documents (invoices, quotes, etc) in the admin portal, enabling this will change the use of decimals, to commas in order to separate dollars from cents.  It operates with one or the other but not both at once.  For example, 20.00 will instead be represented as 20,00.  A decimal will be ignored with commas enabled, and vice versa.
* **Include Drafts** - When generating reports from the "Reports" module, enabling this feature will include objects that are still marked as drafts in the figures of your reports.
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

### Integrations

* **Google Analytics Tracking ID** - Without needing to write in the code yourself, easily integrate analytics and ecommerce tracking on your domain by inserting your Google Analytics account tracking ID in this field.  See [here](https://support.google.com/analytics/answer/1008080#zippy=%2Cin-this-article) for help finding your Analytics tracking ID.

### Security Settings

Configure some simple server account security settings for logged in users.

* **Password Timeout** - You normally require a password for certain actions, like deleting any data.  Here you can set a timeout until the next time you have to re-enter that password to perform another similar action.
* **Web Session Timeout** - Disabled by default, set a timeout to logout the user from the admin portal after a given time.
* **Require Password with Social Login** - If you have social login enabled on your server, you may enable this setting to force users to verify their account password anyways when they log in.

<x-next url=/docs/custom-fields>PDF customization</x-next>

