---
extends: _layouts.developer_resources
section: content
locale: en
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

</x-section>
<x-section>
```
curl -X POST 'http://ninja.test:8000/api/v1/invoices' \
-H "Content-Type:application/json" \
-d '{"terms":"Something","line_items":[{"quantity":1,"cost":10,"product_key":"example product","notes":"Product Description"}]}' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Parameters
____

**client_id**: **REQUIRED string** - The client id  
**project_id**: **optional string** - The associated project id  
**vendor_id**: **optional string** - The associated vendor id  
**subscription_id**: **optional string** - The associated subscription id  
**number**: **optional string** - The invoice number  
**discount**: **optional float** - Discount amount or percentage  
**po_number**: **optional string** - Purchase order number 
**date**: **optional date Y-m-d** - Invoice date  
**due_date**: **optional date Y-m-d** - Invoice due date
**public_notes**: **optional string** - Public notes of the invoice, theses are client visible  
**private_notes**: **optional string** - Private notes which are _not_ visible to the client
**terms**: **optional string** - Invoice terms  
**footer**: **optional string** - Invoice footer  
**design_id**: **optional string** - The design ID to be used for this invoice  
**uses_inclusive_taxes**: **optional bool true|false** - Determine the tax method to apply to the invoice exclusive or inclusive taxes  
**tax_name1**: **optional string ie GST** - The name of the first tax rate  
**tax_rate1**: **optiona float ie 10** - The rate of the first tax rate  
**tax_name2**: **optional string ie VAT** - The name of the first second rate  
**tax_rate2**: **optional float ie 17.5**  - The rate of the first second rate  
**tax_name3**: **optional string ie VAT** - The name of the first third rate  
**tax_rate3**: **optional float ie 17.5**  - The rate of the first third rate  
**is_amount_discount**: **optional bool true|false** - Boolean flag defining if the discount is an amount (true) or percentage (false)  
**partial**: **optional float ie 10.50** - Partial / Deposit amount - if required  
**partial_due_date**: **optional date Y-m-d** - The due date of the partial amount  
**custom_value1**: **optional string free form text** - Custom values for the invoice  
**custom_value2**: **optional string free form text** - Custom values for the invoice  
**custom_value3**: **optional string free form text** - Custom values for the invoice  
**custom_value4**: **optional string free form text** - Custom values for the invoice  
**custom_surcharge1**: **optional float ie. 1.20** - Custom surcharge amounts for the invoice  
**custom_surcharge2**: **optional float ie. 1.20** - Custom surcharge amounts for the invoice  
**custom_surcharge3**: **optional float ie. 1.20** - Custom surcharge amounts for the invoice  
**custom_surcharge4**: **optional float ie. 1.20** - Custom surcharge amounts for the invoice  
**custom_surcharge_tax1**: **optional bool true|false** - Flag determining if taxes should apply to the surcharge amounts  
**custom_surcharge_tax2**: **optional bool true|false** - Flag determining if taxes should apply to the surcharge amounts  
**custom_surcharge_tax3**: **optional bool true|false** - Flag determining if taxes should apply to the surcharge amounts  
**custom_surcharge_tax4**: **optional bool true|false** - Flag determining if taxes should apply to the surcharge amounts  
**exchange_rate**: **optional float ie 1.5** - The currency exchange rate for this invoice  
**auto_bill_enabled**: **optional bool true|false** - Boolean flag determining if the invoice should be auto billed  
**idempotency_key**: **optional string ie YgXPe3gISCdpcilDcQKaef06wgh1hE4p** - Idempotency key, used to mitigate double requests
**assigned_user_id**: **optional string** - The id of the assigned user for this invoice  
```
  "line_items": [
    {
      "product_key": "Id sit.",
      "notes": "Excepturi vel.",
      "cost": 403,
      "product_cost": 0,
      "quantity": 1,
      "tax_name1": "GST",
      "tax_rate1": 10,
      "tax_name2": "",
      "tax_rate2": 0,
      "tax_name3": "",
      "tax_rate3": 0,
      "custom_value1": "https://picsum.photos/200",
      "custom_value2": "47",
      "custom_value3": "Sed placeat et.",
      "custom_value4": "Eos et iusto velit.",
      "discount": 0,
      "type_id": "1"
    }
  ],
```

#### Response
____



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



#### Response
____

```
