---
extends: _layouts.docs 
section: content
---

# PDF Customizations

PDF generation in v5 is via a HTML templating system. We provide multiple design templates for you to choose from, or you can create your own design using any HTML/CSS combinations.

One way we make customizing your PDF easier is by providing a list of variables you can using in your templates which can shown dynamic content, these are all itemized in our Custom Fields section.

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
$due_date - Entity due date label/value  
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
$amount_due - Alias of $total  
$quote.total - Alias of $total  

$invoice.total - Alias of $total  
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

$client.currency - Client currency code ie. AUD, USD  

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
```