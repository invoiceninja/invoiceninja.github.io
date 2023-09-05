---
extends: _layouts.user_guide 
section: content
locale: en
---

# Advanced Settings

<h2 id=invoice_design>Invoice Design</h2>

These settings govern customization of the standard document design and layout used by default on new invoices, quotes, and credits.  

### General Settings

#### Customize & Preview

This button takes you to a very advanced template code editor, with a live preview generator.  Instructions for these features can be found under <a href="https://invoiceninja.github.io/en/custom-fields/">under PDF Customizations</a>.  You can preview the invoice design templates here, before selecting one you like to use permanently.

#### Template Settings

* **Invoice Design** - Select a default design template for invoices.

* **Quote Design** - Select a default design template for quotes.

* **Credit Design** - Select a default design template for credits.

* **Page Layout** - Choose to setup your documents in portrait, or landscape mode.

* **Page Size** - Preformats the PDF renderings of your entities to be better suited for certain printer page sizes.  Typically select the most common page size A4, the default, unless you have specific print requirements in house.

* **Font Size** - Adjust the default font size to your preference.  Default 7.

* **Primary Font** - Default Roboto.  A default custom font for document templates.

* **Secondary Font** - Default Roboto.  A default secondary custom font for document templates.

* **Primary Color** - Default #0c45a3.  A default custom color used by document templates.

* **Secondary Color** - Default #7081e0.  A default secondary custom color used by document templates.

* **Empty Columns** - Default Show.  Optionally hide columns in the item list that have no values to populate.

### Client Details, Company Details, Invoice Details, etc.

A customizable list of data that populates sections of your documents, with the data entered in the associated record.

* **Add Field** - Select from a list of available record detail values, to include in the record's section on new documents.

* **Reset** - The button at the bottom resets the itemized list to its default values.

The following is a list of the sections included in various documents, invoices, quotes, credits, and each item in the list has its own tab in the Invoice Design settings menu, to customize the values that will be presented on your generated documents.

* **Client Details** - Fields added and removed here affect the section of your documents that print client record values.

* **Company Details** - Fields added and removed here affect the section of your documents that print company record values.

* **Company Address** - The company address is often presented in another location on the page, so it is separated into it's own section here as well.

* **Invoice Details** - These fields populate values from the invoice record itself, to create the section that describes what invoice this is.

* **Quote Details** - These fields populate values from the quote record itself, to create the section that describes what quote this is.

* **Credit Details** - These fields populate values from the credit record itself, to create the section that describes what credit this is.

* **Product Columns** - An itemized list of columns to include from the product details entries, for any product items included on your invoice, quote, or credit.

* **Task Columns** - An itemized list of columns to include from the task details entries, for any task items included on your invoice, quote, or credit.

* **Total Fields** - A list of all the accounting values, in as much or as little detail as you would like to present it on your invoices.

<h2 id=custom_fields>Custom Fields</h2>

Custom Fields options control up to 4 custom fields to include in all entity records, to describe the entities with that can be shown in your PDF and documented transactions, or kept for admin records only.  You can use these to add details about a liquor license to your own company, details about memberships to clients, or certifications of your employees assigned to tasks, or other details.

There are 5 different options for field types regardless of the type of record the custom field applies to.  In each case, you will select a field type on the right, and the value you enter on the left will represent the name of that custom field in forms and in the admin UI.

To include a custom field, just give the field a name.  Without a field name, it will not appear in your entity records.  To remove a custom field, just delete the field name completely.

* **Single-line Text** - Simply accepts a single line of arbitrary text for an entry.

* **Multi-line Text** - Accepts multiple lines of arbitrary text, more suitable for more detailed notes.

* **Switch** - This field is suited for true/false statements or yes/no states.  Custom toggle switch for active membership/license status, employee opt-in for night shifts, or check box value for products in inventory.

* **Dropdown** - This generates a field with a dropdown menu to select from a list, and you will be immediately asked to present a comma separated list of values to populate the drop down menu with.  

* **Date** - A date field requests a date value, and on the admin UI, will even present a widget for date selection to help formatting the field value.  Good for license/certificate expiry dates, product manufacture date, etc.

Each of these 5 field types can be assigned to up to 4 custom fields per entity type, selectable from the tabs at the top of the Custom Fields settings page.

* **Company** - These custom fields apply to the company record, as in the one for your company specifically.

* **Clients** - These custom fields apply to a client record, or the individual contact records nested in a client record.

* **Products** - These fields apply to each product record, to better describe the items in your inventory.

* **Invoices** - In addition to having 4 custom field options for your invoice records, you can also add a surcharge field.  The name of the field is entered here, and you select whether or not to apply tax.  The same tax applied to the entire invoice, otherwise it is exempt from it.  From the admin portal you will see the new surcharge field listed on every invoice above the tax drop downs, and it will expect you to assign an arbitrary dollar value to charge the client. 

*  **Payments** - Custom fields that appear in payment records.

* **Vendors** - Custom fields to help further describe your company's vendors, like your credit terms with them.

* **Expenses** - Add more detail to your expense records with custom fields for a tax category of your expenses to help at the end of the year.

* **Users** - These custom fields add detail to your user account records for registered users of the admin portal.  This would be a good place to put employee details if you plan to use the tasks system or have many users to manage.

<h2 id=generated_numbers>Generated Numbers</h2>

Generated numbers contain a collection of variables that allow very fine grained customization of generated numbers for any entity in the application.

### Settings

![alt text](/assets/images/settings/generated_numbers/generated_numbers_settings_pane.png "Generated Numbers Settings")

The settings tab contains the most general options that apply to number generation.  The other tabs provide more specific options that apply exclusively to each entity type.  The rules here apply broadly to every entity type.

* **Number Padding** - The number padding drop down indicates how many leading zeros you'd like before each number. The default padding is 3 leading zeros ie 0001,0002,0003.

* **Generate Number** - The generate number option allows you to customize WHEN the number is applied, there are two configurations; When Saved (will apply immediate when you save an entity) or When Sent (when the entity is sent / marked as sent).

* **Recurring Prefix** - The recurring prefix is a prefix which is applied to entities that are created when a recurring entity has been generated.

* **Shared Invoice/Quote Counter** - The shared invoice quote counter switch enables sharing of the counter between quote and invoices, so that quotes will use the counter that invoices use.

* **Shared Invoice/Credit Counter** - The shared invoice credit counter switch enables sharing of the counter between credits and invoices, so that credits will use the counter that invoices use.  Enabling both Invoice/Quote, and Invoice/Credit shared counters, will have all three entities use the same counter as invoices do, and share number sequencing.

* **Reset Counter** - Generated counters can be reset at a variety of frequencies. It is important to note that in order to reset the counter, you must combine enough unique variables to ensure that the generated counter will still be unique.  For example - if you use an annual reset counter for new entities, it would be a perfect addition to include the year at the beginning of the invoice number.

### Clients, Invoices, Recurring Invoices, Payments, etc.

![alt text](/assets/images/settings/generated_numbers/generated_numbers_client.png "Client generated numbers")

The various entity records available that generated numbers apply to, are all listed with their own tabs at the top, for you to customize the behaviours of the number generation for each respective entity type.

* **Number Pattern** - Single line text field you can manually edit to finely tune your generated numbers.  Create a rule that outlines how new numbers will be generated.

```bash
{$date:y}-{$counter}
```
This example of a number pattern will produce a number like this, for the 9th count in 2021:  2021-0009

Care to ensure you are adding enough unique data to the number patterns if you are using the *Reset Counter* feature, to prevent counter collisions.

* **Number Counter** - The number counter is manually editable, but you can create counter collisions if you're not careful.  The number counter for any given entity type states the progress of the number counter for that entity.

Also, at the bottom you will see some useful information to help you customize your *Number Pattern* more effectively.  The large button **View Date Formats** links to a page with a PHP style guide.  Below that, every entity type has it's own list of variables that can be used to add further customization to the *Number Pattern*.

<h2 id=email_settings>Email Settings</h2>

These settings govern the behavior, appearance, and other settings for emails sent by Invoice Ninja software on behalf of your company.

* **Reply-To Name** - Specify a *reply-to name* to put at the top of your automated emails, such as to forward support requests to the appropriate contact.

* **Reply-To Email** - Specify the *reply-to email* of the user clients should contact for support.

* **BCC Email** - Blind Carbon Copy (BCC) email gets sent to a comma separated list of your specified email addresses.  BCC contact email addresses cannot be seen by any of the recipients of the email messages.

* **Email Design** - Select a design template for the appearance of your emails.

* **Email Signature** - Include a signature message along with all of your company email messages.  Multiple lines of text here for you to enter your custom signature.  HTML tags are respected here for formatting your email signature.

* **Send Time** - Any scheduled reminders for the day will get sent at this time.

* **Attach PDF** - Turning on this switch will send invoices as PDFs attached to your emails.  By default, your emails all have links to view the documents on the client portal, but it may be preferable to send the PDF directly.

* **Attach Documents** - When enabled, any files included in the *Documents* tab of the invoice, or other record, are attached to your emails to the clients.  Otherwise they can be viewed through the link on the client portal.

* **Attach UBL** - International standard Universal Business Language (UBL).   UBL documents are XML business documents such as purchase orders and invoices.  Enabling this feature attaches an XML document along with the PDF invoice.  Normally all the XML information is embedded in the PDF but some users prefer or cannot read the embedded XML data in a PDF. 

<h2 id=client_portal>Client Portal</h2>

These settings govern the behavior, function, and presentation of the Client Portal.

There are four tabs in this setting panel, with unique features in each of them to cover.

### Settings

These settings control the basic or general function and behavior of the client portal.

* **Client Portal** - Enable or disable the client portal.  Disabling it will send all links to the client portal to a page that says the application has been blocked by the administrator.  Generally enabled by default.

* **Tasks** - Disabled by default.  Enable it to present a tab on the left hand side for clients, to view Tasks that are assigned to them, whether invoiced or not.  Clients can see the tasks in a list, with columns for the task description, project name, status, and total duration.  This can allow clients to see your company's progress on tasks for them so far, and give them an overview of your project work for them.

* **Client Registration** - Enabling this will allow new users to register themselves, and generate their own client entries in your database through a registration link on the client portal.  

* **Document Upload** - Enable allowing your clients to upload documents to the server, which will be attached as documents to their own client records.  In the client portal, they will see the option to drag and drop or click to upload files with a large button across the screen under the Documents tab.

* **Storefront** - Enables API access to create invoices automatically.  After enabling, it will generate a company key, or API key to be used by your own or another third party's apps to perform invoice creation, and act as an automated storefront for your company's products or services.

* **Terms of Service** - Custom, multi-line text field will be presented as your terms of service, in a discrete, clickable link at the bottom of every page of the client portal.

* **Privacy Policy** - Another custom, multi-line text field will be presented as your Privacy Policy, in a discrete, clickable link at the bottom of every page of the client portal, right next to the Terms of Service.

### Authorization

These settings govern authorization, accountability, and authentication features for the client portal and client's invoices.

* **Password Protect Invoices** -  Disabled by default.  When enabled, clients will be asked to set a password the first time they view their invoices.  From now on they will need to enter this password.

* **Invoice Terms Checkbox** - Prompts the client to accept the invoice terms when making a payment for an invoice in the client portal.

* **Quote Terms Checkbox** - Prompts the client to accept the quote terms when confirming the quote in the client portal.

* **Invoice Signature** - Require client to provide their signature on the screen with a mouse or touch screen, when paying an invoice on the client portal.

* **Quote Signature** - Require client to provide their signature on the screen with a mouse or touch screen, when confirming a quote on the client portal.

* **Show on PDF** - Show the client's signature on the invoice/quote PDF after it has been signed.

### Messages

These are messages to be presented to clients at various screens of the client portal.  

* **Dashboard** - From the dashboard page, the client will be greeted by this message.

* **Unpaid Invoice** - When viewing an unpaid invoice, the client will see this message.

* **Paid Invoice** - Client will see this message when viewing a paid invoice.

* **Unapproved Quote** - Client will be greeted by this message when opening a quote that is pending approval.

### Customize

Here we can customize the appearance of the client portal a little more.

* **Header** - Multi-line text value to be presented with a solid bar on its own row at the top of every page in the client portal.

* **Footer** - Multi-line text value to be presented with a solid bar on its own row at the bottom of every page in the client portal.

* **Custom CSS** - Enter your own custom CSS code to replace the stock CSS code of the client portal.

* **Custom JavaScript** - Enter any custom JavaScript code you would like to embed on the client portal also here.



<h2 id=templates_and_reminders>Templates & Reminders</h2>

Here we have one *edit* tab with some depth for control, and a *preview* tab, to see our changes.  This allows us to customize the messages that get included with your invoice, quote, payment, or reminder emails.

* **Template** - A drop down select menu to choose the email template we are going to modify.  Invoices, quotes, payments, reminders 1, 2, 3, etc.  **Reminders** are going to have more depth to customize, and their unique options will appear when you select a reminder template.  See below.

* **Subject** - Email subject line.  Default subject for an invoice email:  "New invoice $number from $company.name".  These values are sourced from your company data and records per message.  You can select different values from the menus below, according to your template category, to further customize the message in your email template subject lines.

* **Body** - Construct the body of the email template's message.  The default message body for an invoice email:  

     `"<p>To view your invoice for $amount, click the link below.</p><div class="center">$view_link</div>".`

     The email message body accepts basic HTML formatting for additional customization, and like with the subject, you may also add  other values to your body message, by selecting from the appropriate list of values below.

The categories below are tabs to select values to customize and personalize your message templates with, select the tabs to see the values ($amount, $due_date, etc) available for your template to get the relevant values in your messages.  Invoice and Quote template types have a slightly different set of available values, populating from the original invoice, or quote respectively.  

The values below are mostly self explanatory.  **Invoice / Quote** tab offers values populated from the relevant invoice or quote being emailed about.  **Client** tab offers values populated from the relevant client entry.  **Contact** tab offers values relevant for the first contact selected in the invoice record.  **Company** tab offers values from your own company record, to present information about your own company.  **User** tab offers values that represent the logged in user representing your company, who is sending the email message.  You can see what the values look like in an example message under the *Preview* tab.

### Reminder Templates

As mentioned above, when you select a reminder from the template list at the top of the edit tab, you will see new options appear specific to the reminders.

* **First, Second, and Third Reminders**
  * **Days** - A simple integer is accepted here for the number of days before sending the reminder email.
  * **Schedule** - When to send the email reminder, offset by the number of days chosen.   
    *After the invoice date* - Reminder sent days after the invoice date.
    *Before the due date* - Reminder sent days before the invoice due date.
    *After the due date* - Reminder sent days after the invoice due date.
  * **Send Email** - An on/off toggle switch, to enable sending emails automatically for this reminder message.
  * **Late Fee Amount** - Enter a dollar value for a flat late fee charge.
  * **Late Fee Percent** - Enter a percent value to apply a late fee rate as a percent of the remaining balance.

* **Endless Reminders**
  * **Send Email** - An on/off toggle switch, to enable sending emails automatically for this reminder message.
  * **Frequency** - A drop down menu to select the frequency of sending automated, endless reminder emails, once first, second, and third reminders are exhausted.



<h2 id=group_settings>Group Settings</h2>

Group settings is another category with a lot of depth, but most of the topics are covered exactly already because Group settings is mostly about enabling specific basic or advanced settings on a per-group basis, allowing you to build unique experiences for certain collections of clients.

The first step is to create a group, which is very simple, and only requires a group name.  Create  a group with the "+" icon in the top left corner of the group settings panel.  Give it a name and click "Save".

Select your group.  You will see an *Overview* tab and a *Documents* tab.   From the *Documents* tab you can upload files like most other Documents tabs, they will not be seen anywhere other than the admin portal.  The *Overview* tab has two options, an interactive Clients button, where you can view a list of clients in the group, or add clients to the group, and a *Configure Settings* button.

Note:  To remove a client from a group, it is easiest to edit the client directly and change their group or remove it.

### Configure Settings

Customize any options here to override the regular settings for each respective category, or leave a field blank to use the regular settings.

* **Company Details** - Configure a custom company profile for the client group.  This includes custom invoice terms, footers, and autobill settings.

* **Localization** - Configure a custom localization for your clients in other countries/time zones, or using different languages, currencies, etc.

* **Payment Settings** - Change autobill, and over/under payment permissions for the group.  Configure payment gateways for the group.

* **Task Settings** - Set specific task rate, and rule for presentation of tasks in the client portal, for the group.

* **Invoice Design** - Custom invoice design templates, specific to the group.

* **Generated Numbers** - Use a unique number counter and set of numbering rules for the group, apart from the rest of your clients.

* **Email Settings** - Change the default generic settings for emails sent out to group members by Invoice NInja.

* **Client Portal** - Customize the client portal, exclusively for group members.

* **Templates & Reminders** - Have special rules for templates & reminders for your group, personalize your messages further, or be more or less restrictive about late payments with certain groups.

* **Payment links** - View and edit general, and group-specific payment link settings.

* **Workflow Settings** - Change some of the admin portal UI workflow settings when interacting with invoices or quotes from client's group.



<h2 id=payment_links>Payment links</h2>

There are three views to the Payment links panel.  The payment link list, viewing a payment link, and creating or editing a payment link.

From the payment link list you can select existing payment links to view, or edit them.  You can also add new payment links with the "+" character in the top left corner of the payment links list panel.

When viewing a payment link you will see the initial cost of the payment link service at the top.  Below it, is a link you can copy and share to clients, or post on your storefront, which prompts clients to pay for, and setup the selected payment link, which creates the invoice and payment records for you when they do that.   Finally you will see links to filtered lists of invoices, or recurring invoices that are directly related to your payment link.   

When you *edit a payment link* there are three tabs with unique features to control the payment links with.

### Overview

* **Name** - The name of your monthly payment link, presentable to clients.

* **Group** - Assign payment links to groups, to allow group members to switch between payment links available exclusively to them based on their group membership.  Payment links not assigned to a group, will be visible to users who are not in a group only.  Use this to make special payment link models available to certain VIP clients, or etc.

* **Products** - A searchable, and selectable drop down list of available products from the company.  These products are issued as a one-time purchase on the payment link model.  For example, a setup service fee.

* **Recurring Products** - Also a searchable, and selectable drop down list of available products.  These products will appear on recurring invoices, for example, as the regular payment link fee.

### Settings

* **Frequency** - A drop down selection list to choose a regular interval to charge the clients for this payment link model.

* **Auto bill**
  * *Enabled* - A user a payment will be automatically attempted if a payment method is stored on file.
  * *Enabled by default* - The client will be given the option to allow payment methods to be stored with the radio box selected.
  * *Disabled by default* - The client will be given the option to allow payment methods to be stored with the radio box unselected.
  * *Disabled* - No option is given, and auto billing is disabled.

* **Promo Code** - An optional promo code to reward the client if they enter the correct code at checkout.

* **Promo Discount** - Select from the drop down menu on the right, either "Percent" or "Amount" to discount the client by a flat rate, or percentage of the invoice amount for that period.  On the left, in the text field, enter the rate to discount by.

* **Return URL** - Manually specify a URL to return the clients to when they are finished paying for and setting up their payment link.

* **Allow Query Overrides** - This toggle switch enables API calls to the backend to override payment link requests, in order to append additional information to the payment link requests automatically when the client interacts with your storefront's website or app.

* **Allow Plan Changes** - Allow clients who are on this payment link, the option to manually switch payment link models.  Different payment links available to change to, must be assigned to the same group.  Note, you can allow switching off of payment link A onto payment link B, and disallow switching off of payment link B, by not enabling *Allow Plan Changes* for payment link B only.

* **Allow Cancellation** - Allow clients to manually request payment link cancellations from the client portal.  When enabled, optionally set a time window for clients to qualify for a refund on their payment link.

* **Trial Enabled** - When enabled, the initial "Pay Now" button becomes a "Start Free Trial" button with no demand for payment details at the time of trial beginning.  When enabled, you should select a *Trial Duration* below in the newly spawned drop down menu.  Otherwise the trials will be indefinite.

* **Per Seat Enabled** - Toggle on or off to enable a maximum capacity, or seat limit for the payment link.  When enabled, enter a number on the single text line spawned below, to specify the number of maximum seats.

### Webhook

Webhooks allow your web based applications to communicate with each other.   These settings here, govern rules for outgoing webhooks when payment links are signed up for by clients.

* **Webhook URL** - Enter the URL of the web service you wish to send your notification to.

* **REST Method** - A drop down menu to select POST, or PUT.
  * **POST** - When you want to create a new entry, or record.
  * **PUT** - Use PUT to modify an entry or record.  The PUT functionality will cause the original entry or record to be fully replaced with the new incoming data.

Below you can set as many Key-Value header pairs as you like.  This is a JSON payload, 

* **Header Key** - Enter the appropriate HTTP header as per available headers for InvoiceNinja's JSON API.

* **Header Value** - Enter the value to be assigned to this custom HTTP header.



<h2 id=workflow_settings>Workflow Settings</h2>

A few settings to automate behaviors for handling invoices and quotes with.

### Invoices

* **Auto Email** - Enabled by default, will automatically send emails to clients when a recurring invoice is created for them.

* **Auto Archive** - Disabled by default, will automatically archive invoice records when they are fully paid.

* **Lock Invoices** - Automatically lock invoices to prevent changes:
  * **Off** - Disable this feature.
  * **When Sent** - Lock invoice after it has been sent to the client.
  * **When Paid** - Lock invoice only after the client has fully paid off the invoice.

### Quotes

* **Automatically Convert** - Enabled by default. Automatically convert the quote you sent into an invoice, after the client has approved the quote.

* **Auto Archive** - Disabled by default. Automatically archive quotes, after they have been successfully converted into invoices.



<h2 id=user_management>User Management</h2>

There are three views to the User Management panel.  The users list, viewing a user, and creating or editing a user, and their permissions in the admin portal..

When viewing a user, you see their email address at the top, which is used to sign into the admin portal with.  Below, you can see a list of buttons for all the client, invoice, quote, task, etc, records that the user has created, or been assigned.  The buttons will open user-filtered lists of the records for each respective category.

When at the edit user pane, you will see three tabs to customize user settings with:

### Details

* **First Name** - The user's first name.

* **Last Name** - The user's last name.

* **Email** - The user's email address.  Mandatory for the user to log in with.  When the user's account is first created, they will get an email from the InvoiceNinja server to verify their email address and log in.

* **Phone** - Optionally add a phone number to your user entries for reference.

### Notifications

A full list of events is shown here, for when an invoice, quote, payment, or credit has any sort of action taken, such as being created, being viewed, expiring, successful or failed payment, etc.

Enable email notifications to the user for any number of these events.  Choose a notification behavior for each event as preferred:

* **None** - No notifications will be sent for this event.

* **Owned by User** - Only  when the event occurs to a record owned by the user, will the notification be sent.

* **All Records** - Notify the user whenever this event occurs regardless of who owns the record.

### Permissions

* **Administrator** - an on/off switch to elevate the user to Administrator level privileges.
  * When disabled, a list of permission categories appears below, which the user will be subjected to.  Grant, or deny permissions to create, edit, or view any record category here; clients, invoices, quotes, tasks, vendors, products, etc.


<x-next url=/en/custom-fields>PDF customization</x-next>
