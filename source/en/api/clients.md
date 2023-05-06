---
extends: _layouts.developer_resources
section: content
locale: en
---

# Clients

### Endpoints
<x-container>
<x-section>
The clients endpoint allows you to interact with clients and their contacts.
</x-section>
<x-section>
Endpoints
```
GET /api/v1/clients
POST /api/v1/clients
PUT /api/v1/clients/{client}
PUT /api/v1/clients/{client}/upload
DELETE /api/v1/clients/{client}
POST /api/v1/clients/bulk
```
</x-section>
</x-container>


### Get Clients

<x-container>
<x-section>
The GET route returns a list of clients and their associated contacts.
</x-section>
<x-section>
```
curl -X GET 'http://ninja.test:8000/api/v1/clients' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Query Parameters
___
Query parameters can be chained together to form complex queries. The current supported values are:

**balance**: A query to return clients with a balance using an operator and value  
 - ie ?balance=lt:10 Returns clients with a balance less than 10  
 - available operators lt, lte, gt, gte, eq  
**between_balance**: Returns clients with a balance between two values  
 - ie ?between_balance=10:20 - Returns clients with a balance between 10 and 20  
**client_id**: Search by the client_id parameter
**created_at**: Search by created at (Unix timestamp)  
**updated_at**: Search by updated at (Unix timestamp)  
**email**: Returns clients with a contacts.email field equal to an email  
**filter**: Search across multiple columns (name, id_number, first_name, last_name, email, custom_value1, custom_value2, custom_value3, custom_value4)  
**id_number**: Search by id_number  
**is_deleted**: Search using is_deleted boolean flag  
**include**: A comma separated list of relations to include. 
 - contacts - The array of contacts associated with the client
 - documents - The array of documents associated with the client
 - gateway_tokens - Payment gateway tokens associated with the client
**name**: Search by Client Name
**number**: Search by number  
**per_page**: The number of clients per page you want returned  
**page**: The page number  
**sort**: Sort the returning dataset, format is column|ASC ie ?sort=name|DESC

#### Response
____

```
{
"data": [
{
    "id": "OpnelpJeKB",
    "user_id": "q9wdL84djP",
    "assigned_user_id": "",
    "name": "O'Reilly-Metz",
    "website": "http:\/\/www.okeefe.com\/aut-nostrum-omnis-explicabo-nostrum.html",
    "private_notes": "Laudantium enim numquam provident eius ipsa. Perspiciatis aut et sunt veniam sapiente. Et dicta quo quis vel consectetur dolor.",
    "balance": 10735.05,
    "group_settings_id": "",
    "paid_to_date": 0,
    "credit_balance": 0,
    "last_login": 0,
    "size_id": "",
    "public_notes": "",
    "client_hash": "VOYXVqOLrT1pc4FdKCg8AXVIeumby5IfKvkQ1eAB",
    "address1": "83865",
    "address2": "28362 Carlotta Junctions Apt. 508",
    "phone": "",
    "city": "South Sibylstad",
    "state": "New York",
    "postal_code": "52557-0628",
    "country_id": "288",
    "industry_id": "",
    "custom_value1": "",
    "custom_value2": "",
    "custom_value3": "",
    "custom_value4": "",
    "shipping_address1": "9999",
    "shipping_address2": "6540 Kari Meadows Apt. 411",
    "shipping_city": "East Jordy",
    "shipping_state": "Illinois",
    "shipping_postal_code": "39913-0552",
    "shipping_country_id": "4",
    "settings": {
        "entity": "App\\Models\\Client",
        "industry_id": "",
        "size_id": "",
        "currency_id": "1"
    },
    "is_deleted": false,
    "vat_number": "929146739",
    "id_number": "",
    "updated_at": 1631673918,
    "archived_at": 0,
    "created_at": 1631673918,
    "display_name": "O'Reilly-Metz",
    "number": "0001",
    "contacts": [
        {
            "id": "YQdJqg9bOG",
            "first_name": "Jewell",
            "last_name": "McClure",
            "email": "user@example.com",
            "created_at": 1631673918,
            "updated_at": 1631673918,
            "archived_at": 0,
            "is_primary": true,
            "is_locked": false,
            "phone": "276-345-6722",
            "custom_value1": "",
            "custom_value2": "",
            "custom_value3": "",
            "custom_value4": "",
            "contact_key": "d78CHQD80ePJbEn7tYX1fsRn5hXr7XiWQqjJYT9Q",
            "send_email": true,
            "last_login": 0,
            "password": "**********",
            "link": "http:\/\/ninja.test:8000\/client\/key_login\/d78CHQD80ePJbEn7tYX1fsRn5hXr7XiWQqjJYT9Q"
        },
        {
            "id": "y1aKZjleQG",
            "first_name": "Alaina",
            "last_name": "Wuckert",
            "email": "amcdermott@example.org",
            "created_at": 1631673918,
            "updated_at": 1631673918,
            "archived_at": 0,
            "is_primary": false,
            "is_locked": false,
            "phone": "(641) 879-8481",
            "custom_value1": "",
            "custom_value2": "",
            "custom_value3": "",
            "custom_value4": "",
            "contact_key": "KQoEiBxAQe05p43QubjoMcHxYKkBQLpWU4Swxi86",
            "send_email": true,
            "last_login": 0,
            "password": "**********",
            "link": "http:\/\/ninja.test:8000\/client\/key_login\/KQoEiBxAQe05p43QubjoMcHxYKkBQLpWU4Swxi86"
        }
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

### Create Client

<x-container>
<x-section>
The POST route is used to create a client.  

Its important to note that contacts are intimately related to the client. The API expects the full contacts array with each POST/PUT request.  

To remove a contact you would simply drop the contact object from the contacts array and PUT back to the API.

</x-section>
<x-section>
```
curl -X POST 'http://ninja.test:8000/api/v1/clients' \
-H "Content-Type:application/json" \
-d '{"name":"Client Name","contacts":[{"first_name":"helly","email":"email@example.com"}]}' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Parameters
____

**name**: (string) The client name  
**website**: (string) The client website  
**private_notes**: (string) Private notes for the client  
**industry_id**: (integer) The industry id of the client  
**size_id**: (integer) The size id of the client  
**address1**: (string) Address line 1  
**address2**: (string) Address line 2  
**city**: (string) City  
**state**: (string) State  
**postal_code**: (string) Postal code  
**country_id**: (string) The country id of the client  
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
**settings**: (object) Settings object for the client - see Company Settings for more information  
**vat_number**: (string) Tax number of the client  
**id_number**: (string) ID reference for the client  
**group_settings_id**: (string) The group membership id  
**public_notes**: (string) Public notes for the client  
**phone**: (string) The phone number of the client  
**number**: (string) The reference number for the client  

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
    "name": "Client Name",
    "website": "",
    "private_notes": "",
    "balance": 0,
    "group_settings_id": "",
    "paid_to_date": 0,
    "credit_balance": 0,
    "last_login": 0,
    "size_id": "",
    "public_notes": "",
    "client_hash": "AVS87HCjH2EHA74pAqYCmFJ9dAmg9rfQfpPc4NRu",
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
        "entity": "App\\Models\\Client",
        "invoice_terms": "Client Terms",
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
            "link": "http:\/\/ninja.test\/client\/key_login\/LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h"
        }
    ],
    "documents": [],
    "gateway_tokens": []
}

```

### Update Client

<x-container>
<x-section>
The PUT route is used to create a client.  

It is important to note that the primary key representation of the client is not an integer, but a hashed id, ie. ```wMvbmEAbYA```
</x-section>
<x-section>
```
curl -X PUT 'http://ninja.test:8000/api/v1/clients/wMvbmEAbYA' \
-H "Content-Type:application/json" \
-d '{"name":"Client Name","contacts":[{"first_name":"helly","email":"email@example.com"}]}' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Parameters
____

**name**: (string) The client name  
**website**: (string) The client website  
**private_notes**: (string) Private notes for the client  
**industry_id**: (integer) The industry id of the client  
**size_id**: (integer) The size id of the client  
**address1**: (string) Address line 1  
**address2**: (string) Address line 2  
**city**: (string) City  
**state**: (string) State  
**postal_code**: (string) Postal code  
**country_id**: (string) The country id of the client  
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
**settings**: (object) Settings object for the client - see Company Settings for more information  
**vat_number**: (string) Tax number of the client  
**id_number**: (string) ID reference for the client  
**group_settings_id**: (string) The group membership id  
**public_notes**: (string) Public notes for the client  
**phone**: (string) The phone number of the client  
**number**: (string) The reference number for the client  

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
    "name": "Client Name",
    "website": "",
    "private_notes": "",
    "balance": 0,
    "group_settings_id": "",
    "paid_to_date": 0,
    "credit_balance": 0,
    "last_login": 0,
    "size_id": "",
    "public_notes": "",
    "client_hash": "AVS87HCjH2EHA74pAqYCmFJ9dAmg9rfQfpPc4NRu",
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
        "entity": "App\\Models\\Client",
        "invoice_terms": "Client Terms",
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
            "link": "http:\/\/ninja.test\/client\/key_login\/LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h"
        }
    ],
    "documents": [],
    "gateway_tokens": []
}

```


### Upload Client Documents

<x-container>
<x-section>
The PUT route is used to upload documents to a client record.  

</x-section>
<x-section>
```
curl -X PUT 'http://ninja.test:8000/api/v1/clients/wMvbmEAbYA/upload' \
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
    "name": "Client Name",
    "website": "",
    "private_notes": "",
    "balance": 0,
    "group_settings_id": "",
    "paid_to_date": 0,
    "credit_balance": 0,
    "last_login": 0,
    "size_id": "",
    "public_notes": "",
    "client_hash": "AVS87HCjH2EHA74pAqYCmFJ9dAmg9rfQfpPc4NRu",
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
        "entity": "App\\Models\\Client",
        "invoice_terms": "Client Terms",
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
            "link": "http:\/\/ninja.test\/client\/key_login\/LE3IpSlTpV93DkMNNiSKiUmkaBpajsWW60I3818h"
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

### Delete Client

<x-container>
<x-section>
The DELETE route is delete a Client. Note* To ensure referential integrity entity records are never permanently deleted. A deleted client is simply "hidden" from view and their balance, invoices and payments are hidden from all reports.  

</x-section>
<x-section>
```
curl -X DELETE 'http://ninja.test:8000/api/v1/clients' \
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
    "name": "Client Name",
    "website": "",
    "private_notes": "",
    "shipping_postal_code": "",
    "shipping_country_id": "",
    "settings": {
        "entity": "App\\Models\\Client",
        "invoice_terms": "Client Terms",
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

### Client Bulk Actions

<x-container>
<x-section>
The bulk action route allows you to perform an action on multiple clients.

</x-section>
<x-section>
```
curl -X POST 'http://ninja.test/api/v1/clients/bulk' \
-H "Content-Type:application/json" \
-d '{"action":"restore","ids":["VolejRejNm","wMvbmEAbYA"]}' \
-H "X-API-TOKEN:company-token-test" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Parameters
____

**archive**: Archive clients.  
**restore**: Restore clients.  
**delete**: Delete clients.  

#### Response
____

#### Response
____

Array of clients
```
{
"data": [
{
    "id": "OpnelpJeKB",
    "user_id": "q9wdL84djP",
    "shipping_country_id": "4",
    "settings": {
        "entity": "App\\Models\\Client",
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

### Client Purge

<x-container>
<x-section>
It is possible to remove a client (and all their associated data) permanently from the system. In order to
do this, you would need to use the purge routes.

This is a password protected route, meaning that a password override is required to execute this command, to
use this the header field X-API-PASSWORD is also required in the request. This password would match your login password.

</x-section>
<x-section>
```
curl -X POST '/api/v1/clients/{id}/purge' \
-H "X-API-TOKEN:company-token-test" \
-H "X-API-PASSWORD:your_login_password_here" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Route Parameters
____

id: The hashed ID of the client


#### Response
____

HTTP response code 200
```
{
"data": {
    'message': 'Success'
}⏎      
```

### Client Merge

<x-container>
<x-section>
It is possible to merge two clients into a single client. This will aggregate both clients invoices / documents and other attributes into a single client.

This is a password protected route, meaning that a password override is required to execute this command, to
use this the header field X-API-PASSWORD is also required in the request. This password would match your login password.

</x-section>
<x-section>
```
curl -X POST '/api/v1/clients/{id}/{mergeable_client_hashed_id}/merge' \
-H "X-API-TOKEN:company-token-test" \
-H "X-API-PASSWORD:your_login_password_here" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Route Parameters
____

id: The client to receive the merging client
mergeable_client_hashed_id: The hashed id of the client to be merged.

#### Response
____

HTTP response: code 200
Object response: Client 

```
{
"data": {
    "id": "wMvbmEAbYA",
    "user_id": "q9wdL84djP",
    "assigned_user_id": "",
    "name": "Client Name",
    "website": "",
    "private_notes": "",
    "shipping_postal_code": "",
    "shipping_country_id": "",
    "settings": {
        "entity": "App\\Models\\Client",
        "invoice_terms": "Client Terms",
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

