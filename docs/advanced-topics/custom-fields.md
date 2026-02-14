---
title: "Custom Fields"
sidebar_position: 2
---
# Custom Fields {#custom-fields}

## PDF Customizations

PDF generation in v5 is via an HTML templating system. We provide multiple design templates for you to choose from, or
you can create your design using any HTML/CSS combinations.

## Snippets

These snippets are collected over time, some might find them useful, so we decided to collect them in the official
documentation.

### Getting all available selectors on the design

To make sure we can target all elements easily & make changes available faster to you, turn on "HTML Mode":

Settings (Advanced settings) > Invoice Design > Custom Designs (edit) > HTML Mode:

![alt text](/assets/images/pdf_customization/custom_design_html_mode.png "Toggling HTML mode")

Let's select the item column:

![alt text](/assets/images/pdf_customization/1-selecting-element-in-draft.png "Selecting element in the draft mode")

Now you can select element & inspect its selector:

![alt text](/assets/images/pdf_customization/2-inspecting-data-ref-of-element.png "Inspecting data-ref in the source code")

The important part for us is **data-ref**.

### Showing table column on one design & hiding on others

This will hide columns & rows related entirely. In this example, we hide the custom product field.

```css
/** CSS (includes) **/

[data-ref="product_table-product.product1-th"],
[data-ref="product_table-product.product1-td"] {
  display: none;
}
```

### Overwriting the "hidden" property on element

Some elements have a "hidden" property on the element. You can overwrite this with CSS.

```css
[data-ref="totals_table-subtotal-label"] {
  display: inline; /* or block */
}
```

## Creating a custom design

This is a section for you that want to create a new design completely from scratch
or just curious about understanding how templates work.

:::info
Keep in mind that in order to create designs some knowledge of HTML and CSS is mandatory.
:::

### Creating a design entry

Let's start by cloning an existing design. To do so, open the admin panel and navigate to **Settings > Invoice Design > Custom Designs > New Design**.

From this list you can create, edit, archive and delete custom designs.

![alt text](/assets/images/creating-custom-design/custom_designs_list.png)

Creating a new design:

![alt text](/assets/images/creating-custom-design/new_tutorial_design.png "Creating a design entry")

We will name ours **Tutorial** and base it off of the "Clean" existing design.

The base design isn't important if you have a completely new design in mind. Name your design and click **Save**.

### Design structure

On the top of the page we should see tabs such as, **Settings**, **Body**, **Header**, **Footer**, **Includes**, **Variables**.
This is how design is structured and for the most part, you can leave at is.

We will spend most of our time in **Includes** and **Body** sections.

#### Settings

![alt text](/assets/images/creating-custom-design/create_edit_design_settings_page.png "Design Edit or Create - Settings Page")

On the settings page, you can control how your design behaves while developing.

- Name: This is the name of your design
- Design: This is a dropdown list of existing designs; selecting an option will override your current design with the selected one.
- Entity: Select the type of item the design is for; Invoice, Quote, Credit, or Purchase Order.
- Invoice: In this example, the dropdown below the Entity dropdown is titled "Invoice" because we have selected the entity as Invoice. This will provide a list of recent items that are the type of entity you selected, so you can preview how your design would look based on the selected item.
  - Ex. We could select invoice #0027 to see that invoice's data (client, items, etc.) populated on the preview in real time as we are changing the design. Note: Changing the design doesn't modify the invoice itself; this only serves as a preview tool to see how it would apply to the selected invoice.
  - ![alt text](/assets/images/creating-custom-design/design_selecting_invoice_entity_example.png "Selecting invoice entity example")
- View Docs: This is a link which opens the current page you are reading (documentation on custom designs).
- Import: This allows you to paste the code of a design you wish to import. The code to paste is obtained from selecting "Export" in the source design you're copying.
  - ![alt text](/assets/images/creating-custom-design/design_import_popup.png)
- Export: This button will copy the code of the design to your clipboard. You can use this to import to another design.

#### Body

As the name suggests this is the heart of the design. This is where we will organize our elements. The HTML code of the body is all here.

#### Header

If you want to be fully semantic & fully follow HTML standards, this is where you should place your header content.

#### Footer

Just like the header, this is a more semantic section for footer content.

#### Includes

This is where your styles go.

#### Variables

This is a list of some of the variables which are available to the current design. Clicking on a variable will copy it to the clipboard, so it can be pasted in the design.

### Other Tabs

You will see several additional tabs under Settings>Invoice Design.

- General Settings
  - This is where you can customize general settings for the _selected_ design. Toggling "Update all records" will apply your changes to all past records that were created with that design.
  - Ex. Page Layout, Page Size, Font Size, Logo Size, Fonts, Colors, Page Numbering...
  - Note that changing a design does not change invoices/records that were previously created using that design; to apply changes to all existing records, select "Update all records" after making a change.
- Custom Designs
  - This is where you can create & edit custom designs.

The remaining tabs listed below control which fields/variables/columns display on **all designs** that contain the data. For example, to include the client's VAT Number, you would add that field under the Client tab, and it would show on all invoices.

- Client
- Company
- Company Address
- Invoice
- Quote
- Credit
- Vendor
- Purchase Order
- Product Columns
- Task Columns
- Total Fields

### Requirements

Before we start customizing/coding our own design, keep in mind that Invoice Ninja has some requirements.
They are specific IDs for contents.

#### Target elements:

- #company-details
- #company-address
- #client-details
- #entity-details
- #delivery-note-table
- #product-table
- #task-table
- #table-totals
- #footer

To get specific selectors, please refer to [Getting all available selectors on the design](#getting-all-available-selectors-on-the-design).

If it's easier for you to develop a static template first, you can always copy the source code provided under Settings tab and develop locally, copying changes into Invoice Ninja once you're happy with the design.

### Selectors

:::info
All the following selectors are marked using `data-ref` attribute.
:::

To query `client_details-client.name` for example, use following:

```css
[data-ref="client_details-client.name"] {
  background-color: red;
}
```

#### Client details

- client_details-client.name
- client_details-client.number
- client_details-client.vat_number
- client_details-client.address1
- client_details-client.address2
- client_details-client.city_state_postal
- client_details-client.country
- client_details-client.phone
- client_details-client.email

#### Company details

- company_details-company.name
- company_details-company.id_number
- company_details-company.vat_number
- company_details-company.website
- company_details-company.email
- company_details-company.phone

#### Company address

- company_address-company.address1
- company_address-company.address2
- company_address-company.city_state_postal
- company_address-company.country

#### Invoice details

- entity_details-invoice.number_label
- entity_details-invoice.number
- entity_details-invoice.po_number_label
- entity_details-invoice.po_number
- entity_details-invoice.date_label
- entity_details-invoice.date
- entity_details-invoice.due_date_label
- entity_details-invoice.due_date
- entity_details-invoice.total_label
- entity_details-invoice.total
- entity_details-invoice.balance_due_label
- entity_details-invoice.balance_due

#### Quote details

- entity_details-quote.number_label
- entity_details-quote.number
- entity_details-quote.po_number_label
- entity_details-quote.po_number
- entity_details-quote.date_label
- entity_details-quote.date
- entity_details-quote.valid_until_label
- entity_details-quote.valid_until
- entity_details-quote.total_label
- entity_details-quote.total

#### Credit details

- entity_details-quote.number_label
- entity_details-quote.number
- entity_details-quote.po_number_label
- entity_details-quote.po_number
- entity_details-quote.date_label
- entity_details-quote.date
- entity_details-quote.balance_label
- entity_details-quote.balance
- entity_details-quote.total_label
- entity_details-quote.total

#### Product table

- product_table-product.item-th
- product_table-product.description-th
- product_table-product.unit_cost-th
- product_table-product.quantity-th
- product_table-product.discount-th
- product_table-product.tax-th
- product_table-product.line_total-th

#### Task table

- task_table-task.service-th
- task_table-task.description-th
- task_table-task.rate-th
- task_table-task.hours-th
- task_table-task.discount-th
- task_table-task.tax-th
- task_table-task.line_total-th

#### Total columns

- totals_table-net_subtotal-label
- totals_table-net_subtotal
- totals_table-subtotal-label
- totals_table-subtotal
- totals_table-discount-label
- totals_table-discount
- totals_table-custom_surcharge1-label
- totals_table-custom_surcharge1
- totals_table-custom_surcharge2-label
- totals_table-custom_surcharge2
- totals_table-custom_surcharge3-label
- totals_table-custom_surcharge3
- totals_table-custom_surcharge4-label
- totals_table-custom_surcharge4
- totals_table-paid_to_date-label
- totals_table-paid_to_date
- totals_table-outstanding-label
- totals_table-outstanding

## Custom fields

```bash
$tax - Tax Label
$app_url - The full URL to the application
$from - From label
$to - To label
$total_tax_labels - Map of tax labels
$total_tax_values - Map of tax values
$line_tax_labels - Map of line tax labels
$line_tax_values - Map of line tax values
$date - Entity date label/value
$invoice.date - Alias of the $date label
$due_date - Entity due date label/value (or partial payment due date if set on invoice or quote)
$invoice.due_date - Alias of due date
$payment_due - Payment due label/value
$invoice.number - Invoice number label/value
$invoice.po_number - Invoice po_number label/value
$entity.datetime - Entity datetime label/value
$invoice.datetime - Alias of $entity.datetime
$quote.datetime - Alias of $entity.datetime
$credit.datetime - Alias of $entity.datetime

$entity - The entity Label ie. Invoice / Credit / Quote
$number - The number label ie. Invoice Number
$entity.terms - The entity terms label/value ie. Invoice Terms:
$terms - Alias of $entity.terms
$view_link - Entity view link ie. <a href="/link/to/entity">View Invoice</a>
$view_url - Entity view url ie. https://link.to.resource

$project.name - Project name label/value
$project.number - Project number /value

$entity_number - Alias of $number
$invoice.discount - Invoice dicount label/value
$discount - Alias of $invoice.discount
$subtotal - Subtotal label/value
$invoice.subtotal - Alias of $subtotal

$balance_due - Currency formatted balance due label/value
$balance_due_raw - Unformatted balance due label/value
$quote.balance_due - Alias of $balance_due
$invoice.balance_due - Alias of$balance_due
$outstanding - Alias of $balance_due

$partial_due - Partial due label/value
$total - Total label/value
$amount - Alias of $total
$amount_raw - Unformatted alias of $total
$amount_due - Alias of $total
$quote.total - Alias of $total

$invoice.total - Alias of $total
$invoice_total_raw - Unformatted alias of $total
$invoice.amount - Alias of $total
$quote.amount - Alias of $total
$credit.total - Alias of $total
$credit.number - Alias of $number
$credit.total - Alias of $total
$credit.po_number - Alias of $invoice.po_number
$credit.date - Credit date label/value
$balance - Alias of $balance
$credit.balance - Alias of $balance
$invoice.balance - Alias of $balance
$taxes - Total taxes label/value
$invoice.taxes - Alias of $taxes

$invoice.custom1 - Invoice custom value 1 label/value
$invoice.custom2 - Invoice custom value 2 label/value
$invoice.custom3 - Invoice custom value 3 label/value
$invoice.custom4 - Invoice custom value 4 label/value

$invoice.public_notes - Invoice public notes label/value
$entity.public_notes - Alias of $invoice.public_notes
$public_notes - Alias of $invoice.public_notes

$entity_issued_to - Issued to label
$your_entity - Your `entity` label

$quote.date - Alias of $date
$quote.number - Alias of $number
$quote.po_number - Alias of $invoice.po_number
$quote.quote_number - Alias of $quote.number
$quote_no - Alias of $quote.number
$quote.quote_no - Alias of $quote.number
$quote.valid_until - Valid until label/value
$credit_amount - Alias of $amount
$credit_balance - Alias of $balance

$credit_number - Alias of $number
$credit_no - Alias of $number
$credit.credit_no - Alias of $number

$invoice_no - Alias of $number
$invoice.invoice_no - Alias of $number

$client1 - Client custom value 1 label/value
$client2 - Client custom value 2 label/value
$client3 - Client custom value 3 label/value
$client4 - Client custom value 4 label/value

$address1 - Address line one label/value
$address2 - Address line two label/value
$id_number - Client id number label/value
$client.number - Client number label/value
$vat_number - Client VAT number label/value
$website - Client website label/value
$phone - Client phone label/value
$country - Client country label/value
$email - Contact email label/value
$client_name - Client name label/value
$client.name - Alias of $client_name
$client.address1 - Alias of $address1
$client.address2 - Alias of $address2
$client_address - Full client address label/value
$client.address - Alias of $client_address
$client.id_number - Alias of $id_number
$client.vat_number - Alias of $vat_number
$client.website - Alias of $website
$client.phone - Alias of $phone
$city_state_postal - Client city_state_postal code combination label/value
$client.city_state_postal - Alias of $city_state_postal
$postal_city_state - Client city_state combination label/value
$client.postal_city_state - Alias of $postal_city_state
$client.country - Alias of $country
$client.email - Alias of $email

$client.shipping_address - Full client shipping address block
$client.shipping_address1 - Shipping address line one label/value
$client.shipping_address2 - Shipping address line two label/value
$client.shipping_city - Shipping address city
$client.shipping_state - Shipping address state
$client.shipping_postal_code - Shipping address postal code
$client.shipping_country - Shipping address country

$client.currency - Client currency code ie. AUD, USD

$client.lang_2 - Locale of client language, ie. 'en'

$client.balance - Client balance label/value
$outstanding - Alias of $client.balance
$client_balance - Alias of $client.balance
$paid_to_date - Client paid to date label/value

$contact.full_name - Contact full name label/value
$contact.email - Contact email label/value
$contact.phone - Contant phone label/value

$contact.name - Contact name label/value
$contact.first_name - Contact first name label/value
$contact.last_name - Contact last name label/value


$contact.custom1 - Contact custom value 1 label/value
$contact.custom2 - Contact custom value 2 label/value
$contact.custom3 - Contact custom value 3 label/value
$contact.custom4 - Contact custom value 4 label/value

$company.city_state_postal - Company city_state_postal combination label/value
$company.postal_city_state - Company city_state combination label/value
$company.name - Company name label/value
$company.address1 - Company address line one label/value
$company.address2 - Company address line two label/value
$company.city - Company city label/value
$company.state - Company state label/value
$company.postal_code - Company postal code label/value
$company.country - Company country label/value
$company.phone - Company phone label/value
$company.email - Company email label/value
$company.vat_number - Company vat number label/value
$company.id_number - Company id number label/value
$company.website - Company website label/value
$company.address - Company full address label/value

$spc_qr_code - SPC formatted QR code

$logo - Full URL to company logo
$company.logo - Alias of $logo
$company_logo - Alias of $logo
$company1 - Company custom value 1 label/value
$company2 - Company custom value 2 label/value
$company3 - Company custom value 3 label/value
$company4 - Company custom value 4 label/value

$custom_surcharge1 - Custom surcharge 1 label/value
$custom_surcharge2 - Custom surcharge 2 label/value
$custom_surcharge3 - Custom surcharge 3 label/value
$custom_surcharge4 - Custom surcharge 4 label/value

$product.item - Product item label
$product.date - Product date label
$product.discount - Product discount label
$product.product_key - Product key label
$product.description - Product description label
$product.unit_cost - Product unit cost label
$product.quantity - Product quantity label
$product.tax - Tax label
$product.tax_name1 - Product tax name 1 label
$product.tax_name2 - Product tax name 2 label
$product.tax_name3 - Product tax name 3 label
$product.line_total - Product line total label
$product.product1 - Product custom 1 label
$product.product2 - Product custom 2 label
$product.product3 - Product custom 3 label
$product.product4 - Product custom 4 label

$task.date - Task date label
$task.discount - Task discount label
$task.service - Task service label
$task.description - Task description label
$task.rate - Task rate label
$task.hours - Task hours label
$task.tax - Tax label
$task.tax_name1 - Task tax name 1 label
$task.tax_name2 - Task tax name 2 label
$task.tax_name3 - Task tax name 3 label
$task.line_total - Task line total label

$contact.signature - The contact signature image.

$thanks - Thanks label
$from - From label
$to - To label
$details - Details label
$item - Item label
$description - Description label
$entity_footer - Entity footer label/value

$secondary_font_url - The URL to the font resource
$secondary_font_name - The name of the secondary font

$font_size - The size of the font selected in the settings
$font_name - The name of the primary font
$font_url - The URL to the primary font resource
```
