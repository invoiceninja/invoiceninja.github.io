---
extends: _layouts.docs
section: content
---

# Advanced Settings

<h2 id=invoice_design>Invoice Design</h2>

These settings govern customization of the standard document design and layout used by default on new invoices, quotes, and credits.  

### General Settings

#### Customize & Preview

This button takes you to a very advanced template code editor, with a live preview generator.  Instructions for these features can be found under <a href="https://invoiceninja.github.io/docs/custom-fields/">under PDF Customizations</a>.  You can preview the invoice design templates here, before selecting one you like to use permanently.

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

![alt text](/assets/images/settings/generated_numbers/generated_numbers_settings_pane.png "Generated Numbers Settings")

Generated numbers contain a collection of variables that allow very fine grained customization of generated numbers for any entity in the application.

**Number Padding**

The number padding drop down indicates how many leading zeros you'd like before each number. The default padding is 3 leading zeros ie 0001,0002,0003.

<h2 id=generated_numbers>Generated Numbers</h2>

The generate number option allows you to customize WHEN the number is applied, there are two configurations; When Saved (will apply immediate when you save an entity) or When Sent (when the entity is sent / marked as sent).

**Recurring Prefix**

The recurring prefix is a prefix which is applied to entities that are created when a recurring entity has been generated.

**Shared Invoice Quote Counter**

The shared invoice quote counter switch enables sharing of the counter between quote and invoices, so both entities increment as one rather than separate entities

**Reset Counter**

Generated counters can be reset at a variety of frequencies. It is important to note that in order to reset the counter, you must combine enough unique variables to ensure that the generated counter will still be unique. 

```bash
{$date|y}-{$counter}

generates 

2021-0001
```

This counter will generate a date string of which could reset yearly, however it could not reset at a monthly interval as you will have counter collisions.

![alt text](/assets/images/settings/generated_numbers/generated_numbers_client.png "Client generated numbers")

**Entity generated numbers**

As well as defining the pattern, you are also able to define where the counter can start.

<h2 id=email_settings>Email Settings</h2>



<h2 id=client_portal>Client Portal</h2>

<h2 id=templates_and_reminders>Templates & Reminders</h2>

<h2 id=group_settings>Group Settings</h2>

<h2 id=workflow_settings>Workflow Settings</h2>

<h2 id=user_management>User Management</h2>

<x-next url=/docs/developer-guide>Developer Guide</x-next>