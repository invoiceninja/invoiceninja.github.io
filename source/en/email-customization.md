---
extends: _layouts.user_guide 
section: content
locale: en
---

# Email Customization

## Custom Content

Customizing the content of you emails should be simple and painfree! By default we include a range of default - translated - templates which should suit most use cases! If you prefer to extend and customize the emails your clients please read on!

## WYSIWYG Edior
![alt text](/assets/images/reminders_templates/template_editor.png "Email content editor")

To start editing and customizing your emails navigate to:

```bash
Settings > Templates & Reminmders
```

From here you'll see the first panel with a dropdown selector where you can select each of your email templates. In Invoice Ninja there are templates for Invoices, Quotes, Credits, Statements, Reminders, Purchase Orders and also up to 3 custom templates where you can curate your own templates.
Selecting a template will replace the content in the panel beneath it where it can be updated and saved.

## Invoice Email Customization

The custom fields available for Invoices / Quotes and Credits are the same ones used for PDF customization, the full list can be found [here](http://localhost:8002/en/custom-fields#custom-fields)

## Payment Email Customization

The following are a basic list of support $variables that are supported in a payment email:

```bash
$view_link - A plain html link to view the payment ie https://invoice.ninja/client/payment/123
$viewLink - Alias of $view_link
$paymentLink - Alias of $view_link
$view_button - Creates a style html button with an embedded link to the client portal
$viewButton - Alias of $viewButton
$portalButton - A plain html link to the client portal login page
$portal_url - The text string of the client portal login page
$view_url - The text string of the payment link

$signature - The company email signature
$emailSignature - Alias of $signature

$poNumber - The purchase order number for the invoice (if set)
$client.balance - The outstanding client balance
$outstanding - Alias of $client.balance
$client_balance - Alias of $client.balance
$paid_to_date - Total paid to date for the client

$from - Label for the translated word "From"
$to - Label for the translated word "To"

$number - The payment number
$payment.number - Alias of $number
$entity - Label for the term "Payment"
$payment.amount - The amount of the payment
$amount - Alias of $payment.amount
$payment.refunded - The total refunded for the payment
$payment.date - The date of the payment
$transaction_reference - The payment transaction reference
$public_notes - The public notes of the Payment record
$payment1 - Custom value 1 for payments
$payment2 - Custom value 2 for payments
$payment3 - Custom value 3 for payments
$payment4 - Custom value 4 for payments

$client 1 - Custom value 1 for the client connected to the payment
$client 2 - Custom value 2 for the client connected to the payment
$client 3 - Custom value 3 for the client connected to the payment
$client 4 - Custom value 4 for the client connected to the payment

$address1 - Address line 1 of the client
$client.address1 - Alias of $address1
$address2 - Address line 2 of the client
$client.address2 - Alias of $address2
$client_address - Full client address
$id_number - ID Number of the client
$client.id_number - Alias of $id_number
$client.number - Number of the client
$vat_number - VAT/TAX number of the client
$client.vat_number - Alias of $vat_number
$website - Web URL of the client
$client.website - Alias of website
$phone - Client phone
$client.phone - Alias of phone
$country - Client country name
$client.country - Alias of $country
$email - Primary contact email address
$client.email - Alias of email
$client_name - The client name
$client.name - Alias of $client_name
$client - Alias of $client_name
$city_state_postal - City / Start / Postal code of the client
$client.city_state_postal - Alias of $city_state_postal
$postal_city_state - Postal code / City /State of the client
$client.postal_city_state - Alias of $postal_city_state
$postal_city - Postal Code / City of the client
$client.postal_city - Alias of $postal_city

```

In Invoice Ninja version 5, as a single payment can be associated with multiple invoices, there are some special helper variables which enable outputting all of the invoice references these are as follows:

```bash
$invoices - A comma separate string of invoices and the payment amount received for example:
```

<x-info>
Invoice #123 $5000.00, Invoice #124 $1000.00
</x-info>

```bash
$invoice_references_subject - A custom subject line which includes all of the invoices and their amounts, ie:
```

<x-info>
Invoice #123 $5000.00, Invoice #124 $1000.00
</x-info>

```bash
$invoice_references - A custom body of text including detailed information of the invoices
```

<x-info>
Invoice #123
Amount $5000.00
Balance $0

--------

Invoice #124
Amount $1000.00
Balance $500.00
</x-info>

```bash
$invoice - A comma separate list of invoice numbers
```
<x-info>
Invoice #123,124,125
</x-info>

```bash
$invoices.amount - A formatted string of invoice amounts
```

<x-info>
Invoice #123 $1000 Invoice #124 $2000.00
</x-info>


```bash
$invoices.balance - A formatted string of invoice balances
```

<x-info>
Invoice #123 $1000 Invoice #124 $2000.00
</x-info>


```bash
$invoices.due_date - A formatted string of invoice due dates
```

<x-info>
Invoice #123 2023/01/01 Invoice #124 2023/01/02
</x-info>

```bash
$invoice_numbers - Comma separate raw string of invoice numbers
```

<x-info>
123,124,125
</x-info>

```bash
$status_logo - Shows a paid stamp on the email if the payment status is completed
```

The end
<x-next url=/en/custom-fields>PDF customization</x-next>
