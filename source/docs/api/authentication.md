---
extends: _layouts.developer_resources
section: content
---

# Authentication

## Base login

The minimum required fields for authenticating against the API is an email and password

```
curl -X POST 'http://ninja.test/api/v1/login' \
-H "Content-Type:application/json" \
-d '{"email":"demo@invoiceninja.com","password":"Password0"}' \
-H "X-Requested-With: XMLHttpRequest";
```

The return response is a CompanyUser object which contains child relations of the user / company and its associated entities

[truncated response]

```
 	{
        "permissions": "",
        "notifications": {
            "email": []
        },
        "settings": {},
        "is_owner": true,
        "is_admin": true,
        "is_locked": false,
        "updated_at": 1631673918,
        "archived_at": 0,
        "created_at": 1631673918,
        "permissions_updated_at": 1631709918,
        "ninja_portal_url": "",
        "user": {
            "id": "q9wdL84djP",
            "first_name": "Price Strosin",
            "last_name": "Dr. Estrella Ortiz",
            "email": "small@example.com",
            "last_login": 1631674051,
            "oauth_user_token": "",
            "company_user": {
                "permissions": "",
                "notifications": {
                    "email": []
                },
                "settings": {},
                "is_owner": true,
                "is_admin": true,
                "is_locked": false,
                "updated_at": 1631673918,
                "archived_at": 0,
                "created_at": 1631673918,
                "permissions_updated_at": 1631709918,
                "ninja_portal_url": ""
            }
        },
        "company": {
            "id": "kQBeX78dyK",
            "company_key": "vlyh36bobfixnoyxdd6jkahdfwdse77glu5pgbjwqlurraqpphx3zdoce5batvx2",
            "update_products": true,
            "subdomain": "",
            "portal_mode": "domain",
            "portal_domain": "http:\/\/ninja.test:8000",
            "settings": {
                "auto_archive_invoice": false,
                "lock_invoices": "off",
            }
            "documents": [],
            "users": [
                {
                    "id": "q9wdL84djP",
                    "first_name": "Price Strosin",
                    "last_name": "Dr. Estrella Ortiz",
                    "email": "small@example.com",
                    "has_password": false,
                    "oauth_user_token": "",
                    "company_user": {
                        "permissions": "",
                        "notifications": {
                            "email": []
                        },
                        "settings": {},
                        "is_owner": true,
                }
            ],
            "designs": [],
            "clients": [],
            "invoices": [],

```

You are able to append some query parameters which can include additional information in the response.

```
http://ninja.test/api/login?include_static=true
```

This will include a data array (These are datetime / payment terms and other "static" data that is used in the selectors of the administrator panel) located [here](https://github.com/invoiceninja/invoiceninja/blob/v5-stable/app/Utils/Statics.php)