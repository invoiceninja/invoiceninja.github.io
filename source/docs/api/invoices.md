---
extends: _layouts.developer_resources
section: content
---

# Invoices

### Endpoints
<x-container>
<x-section>
The invoices endpoint allows you to interact with invoices.
</x-section>
<x-section>
Endpoints
```
GET /api/v1/invoices
POST /api/v1/invoices
PUT /api/v1/invoices/{invoice}
PUT /api/v1/invoices/{invoice}/upload
DELETE /api/v1/invoices/{invoice}
POST /api/v1/invoices/bulk
GET /api/v1/invoices/{invoice}/delivery_note
GET /api/v1/invoice/{invitation_key}/download
POST /api/v1/invoices/update_reminders
```
</x-section>
</x-container>


### Get Invoices

<x-container>
<x-section>
The GET route returns a list of invoices.
</x-section>
<x-section>
```
curl -X GET 'http://ninja.test:8000/api/v1/invoices' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Query Parameters
___
Query parameters can be chained together to form complex queries. The current supported values are:

**client_status**: Filters invoice by their status values:  
- **1** DRAFT  
- **2** SENT  
- **3** PARTIALLY PAID  
- **4** PAID  

It is possible to chain together multiple statuses using a comma separated list for example:  

```
/api/v1/invoices?client_status=1,2,3
```

**filter**: Search across multiple columns (number, po_number, date, amount, balance, custom_value1, custom_value2, custom_value3, custom_value4)  

```
/api/v1/invoices?filter=2022-01-05
```

**number**: Search by invoice number  
**without_deleted_clients**: Filters the returning invoices and excludes invoices for deleted clients.  
**with_trashed**: Returning invoices that have been archived.  
**upcoming**: Returns invoices which have NO due date or the due date is in the future.  
**overdue**: Returns invoices which have a due_date OR partial_due_date in the past.  
**payable**: Returns invoices which have a pending balance remaining.  
**sort**: Sort the returning dataset, format is column|ASC ie ?sort=name|DESC  
**private_notes**: Searches invoice on the private_notes column  
**created_at**: Filters invoices greater than or equal to the created_at timestamp (Unix Timestamp)  
**updated_at**: Filters invoices greater than or equal to the updated_at timestamp (Unix Timestamp)  
**is_deleted**: Search using is_deleted boolean flag  
**include**: A comma separated list of relationships to be returned back in the dataset options include:  
- client - The associated client  
- payments - The associated payments for this invoice  
- activities - The activity records for this invoice  
**per_page**: The number of invoices per page you want returned  
**page**: The page number  

#### Response
____

```
{
"data": [
{
    "id": "xYRdG7dDzO",
    "user_id": "VolejRejNm",
    "project_id": "",
    "assigned_user_id": "",
    "amount": 4513.61,
    "balance": 4513.61,
    "client_id": "Wpmbk5ezJn",
    "vendor_id": "",
    "status_id": "2",
    "design_id": "",
    "recurring_id": "",
    "created_at": 1675982786,
    "updated_at": 1675982786,
    "archived_at": 0,
    "is_deleted": false,
    "number": "0019",
    "discount": 0,
    "po_number": "",
    "date": "2022-12-20",
    "last_sent_date": "",
    "next_send_date": "",
    "due_date": "",
    "terms": "",
    "public_notes": "",
    "private_notes": "",
    "uses_inclusive_taxes": false,
    "tax_name1": "",
    "tax_rate1": 0,
    "tax_name2": "",
    "tax_rate2": 0,
    "tax_name3": "CA Sales Tax",
    "tax_rate3": 5,
    "total_taxes": 483.61,
    "is_amount_discount": true,
    "footer": "",
    "partial": 0,
    "partial_due_date": "",
    "custom_value1": "1972-12-12",
    "custom_value2": "no",
    "custom_value3": "",
    "custom_value4": "",
    "has_tasks": false,
    "has_expenses": false,
    "custom_surcharge1": 0,
    "custom_surcharge2": 0,
    "custom_surcharge3": 0,
    "custom_surcharge4": 0,
    "exchange_rate": 1,
    "custom_surcharge_tax1": false,
    "custom_surcharge_tax2": false,
    "custom_surcharge_tax3": false,
    "custom_surcharge_tax4": false,
    "line_items": [
        {
            "quantity": 1,
            "cost": 403,
            "product_key": "Id sit.",
            "notes": "Excepturi vel.",
            "discount": 0,
            "is_amount_discount": true,
            "tax_name1": "Sales Tax",
            "tax_rate1": 5,
            "tax_name2": "",
            "tax_rate2": 0,
            "tax_name3": "",
            "tax_rate3": 0,
            "sort_id": 0,
            "line_total": 403,
            "gross_line_total": 423.15,
            "custom_value1": "https:\/\/picsum.photos\/200",
            "custom_value2": "47",
            "custom_value3": "Sed placeat et.",
            "custom_value4": "Eos et iusto velit.",
            "type_id": "1",
            "product_cost": 0,
            "tax_amount": 20.15,
            "date": ""
        }
    ],
    "entity_type": "invoice",
    "reminder1_sent": "",
    "reminder2_sent": "",
    "reminder3_sent": "",
    "reminder_last_sent": "",
    "paid_to_date": 0,
    "subscription_id": "",
    "auto_bill_enabled": false,
    "invitations": [
        {
            "id": "W4QbYKezqM",
            "client_contact_id": "Wpmbk5ezJn",
            "key": "3TlMBVTIGgPQNMHzRhoHAo0mayy5O3rv",
            "link": "http:\/\/ninja.test:8000\/client\/invoice\/3TlMBVTIGgPQNMHzRhoHAo0mayy5O3rv",
            "sent_date": "2023-02-09 22:46:26",
            "viewed_date": "",
            "opened_date": "",
            "updated_at": 1675982786,
            "archived_at": 0,
            "created_at": 1675982786,
            "email_status": "",
            "email_error": ""
        },
    ],
    "documents": []
},
}⏎           
```

### Create Invoice

<x-container>
<x-section>
The POST route is used to create a invoice.  

Its important to note that contacts are intimately related to the invoice. The API expects the full contacts array with each POST/PUT request.  

To remove a contact you would simply drop the contact object from the contacts array and PUT back to the API.

</x-section>
<x-section>
```
curl -X POST 'http://ninja.test:8000/api/v1/invoices' \
-H "Content-Type:application/json" \
-d '{"name":"Invoice Name","contacts":[{"first_name":"helly","email":"email@example.com"}]}' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Parameters
____

**name**: (string) The invoice name  
**website**: (string) The invoice website  
**private_notes**: (string) Private notes for the invoice  
**industry_id**: (integer) The industry id of the invoice  
**size_id**: (integer) The size id of the invoice  
**address1**: (string) Address line 1  
**address2**: (string) Address line 2  
**city**: (string) City  
**state**: (string) State  
**postal_code**: (string) Postal code  
**country_id**: (string) The country id of the invoice  
**custom_value1**: (string) Custom value  
**custom_value2**: (string) Custom value  
**custom_value3**: (string) Custom value  
**custom_value4**: (string) Custom value  
**shipping_address1**: (string) Shipping address line 1  
**shipping_address2**: (string) Shipping address line 2  
**shipping_city**: (string) Shipping city  
**shipping_state**: (string) Shipping state  
**shipping_postal_code**: (string) Shipping postal code  
**shipping_country_id**: (integer) Shipping country id  
**settings**: (object) Settings object for the invoice - see Company Settings for more information  
**vat_number**: (string) Tax number of the invoice  
**id_number**: (string) ID reference for the invoice  
**group_settings_id**: (string) The group membership id  
**public_notes**: (string) Public notes for the invoice  
**phone**: (string) The phone number of the invoice  
**number**: (string) The reference number for the invoice  

Contacts array:  
**first_name**: (string) Contact first name.  
**last_name**: (string) Contact last name.  
**email**: (string) Contact email.  
**phone**: (string) Contact phone number.  
**custom_value1**: (string) Custom value  
**custom_value2**: (string) Custom value  
**custom_value3**: (string) Custom value  
**custom_value4**: (string) Custom value  
**send_email**: (bool) Determine if this contact will by default receive emails

#### Response
____

```
{
"data": {
    "id": "wMvbmEAbYA",
    "user_id": "q9wdL84djP",
    "assigned_user_id": "",
    "name": "Invoice Name",
    "website": "",
    "private_notes": "",
    "balance": 0,
    "group_settings_id": "",
    "paid_to_date": 0,
    "credit_balance": 0,
    "last_login": 0,
    "size_id": "",
    "public_notes": "",
    "invoice_hash": "AVS87HCjH2EHA74pAqYCmFJ9dAmg9rfQfpPc4NRu",
    "address1": "",
    "address2": "",
    "phone": "",
    "city": "",
    "state": "",
    "postal_code": "",
    "country_id": "840",
    "industry_id": "",
    "custom_value1": "",
    "custom_value2": "",
    "custom_value3": "",
    "custom_value4": "",
    "shipping_address1": "",
    "shipping_address2": "",
    "shipping_city": "",
    "shipping_state": "",
    "shipping_postal_code": "",
    "shipping_country_id": "",
    "settings": {
        "entity": "App\\Models\\Invoice",
        "invoice_terms": "Invoice Terms",
        "currency_id": "1"
    },
    "is_deleted": false,
    "vat_number": "",
    "id_number": "",
    "updated_at": 1631680816,
    "archived_at": 0,
    "created_at": 1631680816,
    "display_name": "Le Dudette",
    "number": "0002",
    "contacts": [
        {
            "id": "9wdL8kpdjP",
            "first_name": "Contact first name",
            "last_name": "Contact last name",
            "email": "email@gmail.com",
            "created_at": 1631680816,
            "updated_at": 1631680816,
            "archived_at": 0,
            "is_primary": true,
            "is_locked": false,
            "phone": "",
            "custom_value1": "",
            "custom_value2": "",
            "custom_value3": "",
            "custom_value4": "",
            "contact_key": "LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h",
            "send_email": true,
            "last_login": 0,
            "password": "",
            "link": "http:\/\/ninja.test\/invoice\/key_login\/LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h"
        }
    ],
    "documents": [],
    "gateway_tokens": []
}

```

### Update Invoice

<x-container>
<x-section>
The PUT route is used to create a invoice.  

It is important to note that the primary key representation of the invoice is not an integer, but a hashed id, ie. ```wMvbmEAbYA```
</x-section>
<x-section>
```
curl -X PUT 'http://ninja.test:8000/api/v1/invoices/wMvbmEAbYA' \
-H "Content-Type:application/json" \
-d '{"name":"Invoice Name","contacts":[{"first_name":"helly","email":"email@example.com"}]}' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Parameters
____

**name**: (string) The invoice name  
**website**: (string) The invoice website  
**private_notes**: (string) Private notes for the invoice  
**industry_id**: (integer) The industry id of the invoice  
**size_id**: (integer) The size id of the invoice  
**address1**: (string) Address line 1  
**address2**: (string) Address line 2  
**city**: (string) City  
**state**: (string) State  
**postal_code**: (string) Postal code  
**country_id**: (string) The country id of the invoice  
**custom_value1**: (string) Custom value  
**custom_value2**: (string) Custom value  
**custom_value3**: (string) Custom value  
**custom_value4**: (string) Custom value  
**shipping_address1**: (string) Shipping address line 1  
**shipping_address2**: (string) Shipping address line 2  
**shipping_city**: (string) Shipping city  
**shipping_state**: (string) Shipping state  
**shipping_postal_code**: (string) Shipping postal code  
**shipping_country_id**: (integer) Shipping country id  
**settings**: (object) Settings object for the invoice - see Company Settings for more information  
**vat_number**: (string) Tax number of the invoice  
**id_number**: (string) ID reference for the invoice  
**group_settings_id**: (string) The group membership id  
**public_notes**: (string) Public notes for the invoice  
**phone**: (string) The phone number of the invoice  
**number**: (string) The reference number for the invoice  

Contacts array:  
**first_name**: (string) Contact first name.  
**last_name**: (string) Contact last name.  
**email**: (string) Contact email.  
**phone**: (string) Contact phone number.  
**custom_value1**: (string) Custom value  
**custom_value2**: (string) Custom value  
**custom_value3**: (string) Custom value  
**custom_value4**: (string) Custom value  
**send_email**: (bool) Determine if this contact will by default receive emails

#### Response
____

```
{
"data": {
    "id": "wMvbmEAbYA",
    "user_id": "q9wdL84djP",
    "assigned_user_id": "",
    "name": "Invoice Name",
    "website": "",
    "private_notes": "",
    "balance": 0,
    "group_settings_id": "",
    "paid_to_date": 0,
    "credit_balance": 0,
    "last_login": 0,
    "size_id": "",
    "public_notes": "",
    "invoice_hash": "AVS87HCjH2EHA74pAqYCmFJ9dAmg9rfQfpPc4NRu",
    "address1": "",
    "address2": "",
    "phone": "",
    "city": "",
    "state": "",
    "postal_code": "",
    "country_id": "840",
    "industry_id": "",
    "custom_value1": "",
    "custom_value2": "",
    "custom_value3": "",
    "custom_value4": "",
    "shipping_address1": "",
    "shipping_address2": "",
    "shipping_city": "",
    "shipping_state": "",
    "shipping_postal_code": "",
    "shipping_country_id": "",
    "settings": {
        "entity": "App\\Models\\Invoice",
        "invoice_terms": "Invoice Terms",
        "currency_id": "1"
    },
    "is_deleted": false,
    "vat_number": "",
    "id_number": "",
    "updated_at": 1631680816,
    "archived_at": 0,
    "created_at": 1631680816,
    "display_name": "Le Dudette",
    "number": "0002",
    "contacts": [
        {
            "id": "9wdL8kpdjP",
            "first_name": "Contact first name",
            "last_name": "Contact last name",
            "email": "email@gmail.com",
            "created_at": 1631680816,
            "updated_at": 1631680816,
            "archived_at": 0,
            "is_primary": true,
            "is_locked": false,
            "phone": "",
            "custom_value1": "",
            "custom_value2": "",
            "custom_value3": "",
            "custom_value4": "",
            "contact_key": "LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h",
            "send_email": true,
            "last_login": 0,
            "password": "",
            "link": "http:\/\/ninja.test\/invoice\/key_login\/LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h"
        }
    ],
    "documents": [],
    "gateway_tokens": []
}

```


### Upload Invoice Documents

<x-container>
<x-section>
The PUT route is used to upload documents to a invoice record.  

</x-section>
<x-section>
```
curl -X PUT 'http://ninja.test:8000/api/v1/invoices/wMvbmEAbYA/upload' \
-H 'Content-Type: multipart/form-data' \
-F _method=PUT \
-F 'documents[]=@filename.png'
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>


#### Parameters
____

none.

#### Response
____


```
{
"data": {
    "id": "wMvbmEAbYA",
    "user_id": "q9wdL84djP",
    "assigned_user_id": "",
    "name": "Invoice Name",
    "website": "",
    "private_notes": "",
    "balance": 0,
    "group_settings_id": "",
    "paid_to_date": 0,
    "credit_balance": 0,
    "last_login": 0,
    "size_id": "",
    "public_notes": "",
    "invoice_hash": "AVS87HCjH2EHA74pAqYCmFJ9dAmg9rfQfpPc4NRu",
    "address1": "",
    "address2": "",
    "phone": "",
    "city": "",
    "state": "",
    "postal_code": "",
    "country_id": "840",
    "industry_id": "",
    "custom_value1": "",
    "custom_value2": "",
    "custom_value3": "",
    "custom_value4": "",
    "shipping_address1": "",
    "shipping_address2": "",
    "shipping_city": "",
    "shipping_state": "",
    "shipping_postal_code": "",
    "shipping_country_id": "",
    "settings": {
        "entity": "App\\Models\\Invoice",
        "invoice_terms": "Invoice Terms",
        "currency_id": "1"
    },
    "is_deleted": false,
    "vat_number": "",
    "id_number": "",
    "updated_at": 1631680816,
    "archived_at": 0,
    "created_at": 1631680816,
    "display_name": "Le Dudette",
    "number": "0002",
    "contacts": [
        {
            "id": "9wdL8kpdjP",
            "first_name": "Contact first name",
            "last_name": "Contact last name",
            "email": "email@gmail.com",
            "created_at": 1631680816,
            "updated_at": 1631680816,
            "archived_at": 0,
            "is_primary": true,
            "is_locked": false,
            "phone": "",
            "custom_value1": "",
            "custom_value2": "",
            "custom_value3": "",
            "custom_value4": "",
            "contact_key": "LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h",
            "send_email": true,
            "last_login": 0,
            "password": "",
            "link": "http:\/\/ninja.test\/invoice\/key_login\/LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h"
        }
    ],
    "documents": [
        {
            "id": "Wpmbk5ezJn",
            "user_id": "q9wdL84djP",
            "assigned_user_id": "",
            "project_id": "",
            "vendor_id": "",
            "url": "http:\/\/ninja.test\/api\/v1\/documents\/Wpmbk5ezJn\/download",
            "preview": "",
            "name": "document.pdf",
            "type": "pdf",
            "disk": "public",
            "hash": "niqbMIupZI0p1wS1ZwsEqJSMac8plimEXAr0TuIR.pdf",
            "size": 40078,
            "width": 0,
            "height": 0,
            "is_default": false,
            "updated_at": 1631681485,
            "archived_at": 0,
            "created_at": 1631681485,
            "is_deleted": false
        }
    ],
    "gateway_tokens": []
}
```

### Delete Invoice

<x-container>
<x-section>
The DELETE route is delete a Invoice. Note* To ensure referential integrity entity records are never permanently deleted. A deleted invoice is simply "hidden" from view and their balance, invoices and payments are hidden from all reports.  

</x-section>
<x-section>
```
curl -X DELETE 'http://ninja.test:8000/api/v1/invoices' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>


#### Parameters
____

none.

#### Response
____

```
{
"data": {
    "id": "wMvbmEAbYA",
    "user_id": "q9wdL84djP",
    "assigned_user_id": "",
    "name": "Invoice Name",
    "website": "",
    "private_notes": "",
    "shipping_postal_code": "",
    "shipping_country_id": "",
    "settings": {
        "entity": "App\\Models\\Invoice",
        "invoice_terms": "Invoice Terms",
        "currency_id": "1"
    },
    "is_deleted": false,
    "vat_number": "",
    "id_number": "",
    "updated_at": 1631680816,
    "archived_at": 0,
    "created_at": 1631680816,
    "display_name": "Le Dudette",
    "number": "0002",
    "contacts": [
        {
            "id": "9wdL8kpdjP",
            "first_name": "Contact first name",
            "last_name": "Contact last name",
            "email": "email@gmail.com",
            "created_at": 1631680816,
            "updated_at": 1631680816,
            "archived_at": 0,
        }
    ],
    "documents": [],
    "gateway_tokens": []
}
```

### Invoice Bulk Actions

<x-container>
<x-section>
The bulk action route allows you to perform an action on multiple invoices.

</x-section>
<x-section>
```
curl -X POST 'http://ninja.test/api/v1/invoices/bulk' \
-H "Content-Type:application/json" \
-d '{"action":"restore","ids":["VolejRejNm","wMvbmEAbYA"]}' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Parameters
____

**archive**: Archive invoices.  
**restore**: Restore invoices.  
**delete**: Delete invoices.  

#### Response
____

#### Response
____

Array of invoices
```
{
"data": [
{
    "id": "OpnelpJeKB",
    "user_id": "q9wdL84djP",
    "shipping_country_id": "4",
    "settings": {
        "entity": "App\\Models\\Invoice",
        "industry_id": "",
        "size_id": "",
        "currency_id": "1"
    },
    "is_deleted": false,
    "vat_number": "929146739",
    "contacts": [
        {
            "id": "YQdJqg9bOG",
            "first_name": "Jewell",
            "last_name": "McClure",
            "email": "user@example.com",

        },
    ],
    "documents": [],
    "gateway_tokens": []
}
],
"meta": {
    "pagination": {
        "total": 1,
        "count": 1,
        "per_page": 1,
        "current_page": 1,
        "total_pages": 1,
        "links": []
    }
}
}⏎           
```

### Invoice Purge

<x-container>
<x-section>
It is possible to remove a invoice (and all their associated data) permanently from the system. In order to
do this, you would need to use the purge routes.

This is a password protected route, meaning that a password override is required to execute this command, to
use this the header field X-API-PASSWORD is also required in the request. This password would match your login password.

</x-section>
<x-section>
```
curl -X POST '/api/v1/invoices/{id}/purge' \
-H "X-API-TOKEN:company-token-test" \
-H "X-API-PASSWORD:your_login_password_here" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Route Parameters
____

id: The hashed ID of the invoice


#### Response
____

HTTP response code 200
```
{
"data": {
    'message': 'Success'
}⏎      
```

### Invoice Merge

<x-container>
<x-section>
It is possible to merge two invoices into a single invoice. This will aggregate both invoices invoices / documents and other attributes into a single invoice.

This is a password protected route, meaning that a password override is required to execute this command, to
use this the header field X-API-PASSWORD is also required in the request. This password would match your login password.

</x-section>
<x-section>
```
curl -X POST '/api/v1/invoices/{id}/{mergeable_invoice_hashed_id}/merge' \
-H "X-API-TOKEN:company-token-test" \
-H "X-API-PASSWORD:your_login_password_here" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Route Parameters
____

id: The invoice to receive the merging invoice
mergeable_invoice_hashed_id: The hashed id of the invoice to be merged.

#### Response
____

HTTP response: code 200
Object response: Invoice 

```
{
"data": {
    "id": "wMvbmEAbYA",
    "user_id": "q9wdL84djP",
    "assigned_user_id": "",
    "name": "Invoice Name",
    "website": "",
    "private_notes": "",
    "shipping_postal_code": "",
    "shipping_country_id": "",
    "settings": {
        "entity": "App\\Models\\Invoice",
        "invoice_terms": "Invoice Terms",
        "currency_id": "1"
    },
    "is_deleted": false,
    "vat_number": "",
    "id_number": "",
    "updated_at": 1631680816,
    "archived_at": 0,
    "created_at": 1631680816,
    "display_name": "Le Dudette",
    "number": "0002",
    "contacts": [
        {
            "id": "9wdL8kpdjP",
            "first_name": "Contact first name",
            "last_name": "Contact last name",
            "email": "email@gmail.com",
            "created_at": 1631680816,
            "updated_at": 1631680816,
            "archived_at": 0,
        }
    ],
    "documents": [],
    "gateway_tokens": []
}
```

