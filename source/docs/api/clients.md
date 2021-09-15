---
extends: _layouts.docs
section: content
---

Clients

### Endpoints
<x-container>
<x-section>
The client object allows you to interact with clients and their contacts.
</x-section>
<x-section>
Endpoints
```
GET /v1/api/clients
POST /v1/api/clients
PUT /v1/api/clients/{client}
PUT /v1/api/clients/{client}/upload
DELETE /v1/api/clients/{client}
POST /v1/api/clients/bulk
```
</x-section>
</x-container>


### Get Clients
Its important to note that contacts are intimately related to the client. The API expects the full contacts array with each POST/PUT request.

<x-container>
<x-section>
The GET route returns a list of clients and their associated contacts.
</x-section>
<x-section>
```
curl -X GET 'http://ninja.test:8000/api/v1/clients' \
-H "X-API-TOKEN:company-token-test" \
-H "X-API-SECRET:password" \
-H "X-Requested-With: XMLHttpRequest";
```
</x-section>
</x-container>

#### Query Parameters
___
Query parameters can be chained together to form complex queries. The current supported values are:

**per_page**: The number of clients per page you want returned  
**page**: The page number  
**include**: A comma separated list of relations to include ie. contacts,documents,gateway_tokens  
**balance**: A query to return clients with a balance using an operator and value  
 - ie ?balance=lt:10 Returns clients with a balance less than 10  
 - available operators lt, lte, gt, gte, eq  
**between_balance**: Returns clients with a balance between two values  
 - ie ?between_balance=10:20 - Returns clients with a balance between 10 and 20  
**email**: Returns clients with a contacts.email field equal to an email  
**id_number**: Search by id_number  
**number**: Search by number  
**filter**: Search across multiple columns (name, id_number, first_name, last_name, email, custom_value1, custom_value2, custom_value3, custom_value4)  
**created_at**: Search by created at (Unix timestamp)  
**is_deleted**: Search using is_deleted boolean flag  

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
**group_settings_id**: (integer) The group membership id  
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
