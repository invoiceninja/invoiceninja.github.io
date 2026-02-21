---
title: "Templates"
sidebar_position: 5
---

## Introduction

Templates allow you to create customized designs and documents using raw data. We have a prebuilt range of templates that will allow you to quickly create Statements / Payment Receipts / Payment Refund Receipts and Delivery Notes,  but the functionality does not stop there.

You can also run a templates against any entity within the application and have a PDF returned the the entities dataset embedded in. Here is an example of a template which has been produced from a Project:

![alt text](/assets/images/templates/project_template.png "Project Template")

When run against our project template, we receive a PDF like this:

![alt text](/assets/images/templates/project_template_output.png "Project Template Output")

In our template we have constructed (use the Twig templating engine) a document which contain the projects details and a summary of each task time log entry.

## Getting Started

### Delivery Note Example

<iframe class="video" src="https://www.youtube.com/embed/kfG5vvcbYes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Concepts

Templates are simple Html / CSS documents combined with the super powerful [twig](https://twig.symfony.com/) templating engine.

This combined with the raw data from Invoice Ninja allows you to create a document that exactly fits your requirements. To start, simply create a new template in

```bash
Settings / Invoice Design / Custom Designs
```

![alt text](/assets/images/templates/template_starter_1.png "Creating a new template")

You will see that along with providing a name for the design/template, there is a new selector which allows you to choose whether the design is a regular design (ie for invoices / quotes) or a template which can also be a custom design, but also includes the power twig syntax and data to create bespoke templates.

After selecting the template option, a series of checkboxes will appear where you can associate the data types with the template. This is an important step as it allows us to provide the menu options for this template in the correct location and also provides the correct context when running the template;

for example, if you select the invoice checkbox, the system will be able to prepare your invoice/s to be run through the template. You can select multiple options here and the system will ensure this data is prepared and ready for use in the template.

How did we construct this? Lets take a look at a template sample:

![alt text](/assets/images/templates/template_starter_2.png "Ninja Blocks")

Embedded in the html/css is a dedicated set of `<ninja></ninja>` tags, this tells the template engine that we are now using the Twig Templating system.

![alt text](/assets/images/templates/template_starter_3.png "Harvesting the data")

Templates always assume that the data being processed in an array of objects. In this particular case, we have an array of projects. If your template will only ever consider a single project then you'll want to harvest the first project in your array of projects using this syntax:

```twig
{% if projects %}
{% set project = projects|first %}
```

Now that we have the project object, we can use this in our template, to print a variable to the template, you would wrap the variable in {{ }} like this:

```twig
<h1>{{ project.name }}</h1>
<h3>Due: {{ project.due_date }}</h3>
<h6>{{ project.current_hours }} / {{ project.budgeted_hours }}: (Hours / Budgeted Hours @ {{ project.task_rate }}) - Report generated on {{ "now"|date('Y-m-d') }}</h6>
```

We've now started to introduce variables into our template and also some nifty twig formats for dynamic data such as a date using this following syntax to present when the report was generated

```twig
Report generated on {{ "now"|date('Y-m-d') }}
```

Lets now loop through the project tasks and output the time_log data with the following sequence

```twig
{% for task in project.tasks %}

    {% for log in task.time_log %}
    
    <tr>
        <td>{{ log.start_date }}</td>
        <td>
            <div>
                <ul>
                    <li>{{ log.description }}</li>
                    <li>{{ task.user.name }}</li>
                </ul>

        </td>
        <td>{{ log.duration|date('h:i:s')}}</td>
    </tr>
    {% endfor %}

{% endfor %}
```

Here we have created a for loop, iterating over every task in the project, this follows with another for loop where we loop over every time_log entry in each task where we output the dates / description and duration of each task.

Finally, we are able to transform the log.duration (seconds), into a date format with h:i:s format (Hours:Minutes:Seconds)

## Using blocks in templates

If you wish to use standard company/client/vendor details, this is super simple using standard div blocks:

```html
<div id="client-details">

<div id="company-details">

<div id="company-address">

<div id="vendor-details">

<div id="shipping-address">
```

These will populate using the data stored in Settings > Invoice Designs for each block.

## Data Access

### Twig variables

Accessing data using twig would be as follows:

First we'd check to ensure the variable is available

```twig
{% if tasks|e %}
{% endif %}
```

Then we can iterate

```twig
{% if tasks|e %}

    {% for task in tasks %}
    {% endfor %}

{% endif %}
```

Accessing data is done using dot notation, for example retrieving the client name of a tasks project would be as follows:

```twig
{{ task.project.client.name }}
```

### Invoice Ninja variables

Standard $ notation variables are also available within templates, this allows you to use familiar variables such as $invoice.amount - you can also combine twig and ninja variables like this to integrate conditionals into your template. ie

```twig

{% if invoice.balance > 0 %}
 $invoice.balance is payable!
{% else %}
 Invoice has been paid! Thanks!
{% endif %}
```

#### Allowed Tags
* if
* for
* set
* filter

#### Allowed Filters
* escape
* e
* upper
* lower
* capitalize
* filter
* length
* merge
* format_currency
* format_number
* format_percent_number
* map
* join
* first
* date
* sum
* nl2br
* reduce

#### Allowed Functions
* range
* cycle
* constant
* date

#### Allowed Properties
* type_id

#### Allowed Methods
* img
* t

## Statements

Statements are special objects in templates. Because the input data point is a client/s we need additional information to understand whether a template is a "statement" template or not.

When creating custom statements, you will want to insert a comment within the template so that the system can resolve that it is a statement for processing

```html
<!doctype html>
<!-- Statement - TemplateID #TS4 ##statement##-->
<html>
<head>
```

Note the special text 

```bash
##statement##
```

This will allow the system to resolve a custom statement.

## Object Json Definitions

Here are the object definitions that are available.

### Invoice
```json
{
    "invoices": [
        {
            "amount": "$6,606.30",
            "balance": "$6,606.30",
            "status_id": 2,
            "status": "Sent",
            "amount_raw": "6606.300000",
            "balance_raw": "6606.300000",
            "number": "0001",
            "discount": "6.000000",
            "po_number": "Unde.",
            "date": "25. March 2024",
            "last_sent_date": "",
            "next_send_date": "",
            "due_date": "",
            "terms": "Default company invoice terms",
            "public_notes": "",
            "private_notes": "",
            "uses_inclusive_taxes": false,
            "tax_name1": "GST",
            "tax_rate1": 10,
            "tax_name2": "VAT",
            "tax_rate2": 17.5,
            "tax_name3": "THIRDTAX",
            "tax_rate3": 5,
            "total_taxes": "$1,905.44",
            "total_taxes_raw": "1905.440000",
            "is_amount_discount": false,
            "footer": "Default invoice footer",
            "partial": "0.000000",
            "partial_due_date": "",
            "custom_value1": "",
            "custom_value2": "",
            "custom_value3": "",
            "custom_value4": "",
            "custom_surcharge1": 0,
            "custom_surcharge2": 0,
            "custom_surcharge3": 0,
            "custom_surcharge4": 0,
            "exchange_rate": 1,
            "custom_surcharge_tax1": false,
            "custom_surcharge_tax2": false,
            "custom_surcharge_tax3": false,
            "custom_surcharge_tax4": false,
            "reminder1_sent": "",
            "reminder2_sent": "",
            "reminder3_sent": "",
            "reminder_last_sent": "",
            "paid_to_date": "$0.00",
            "auto_bill_enabled": false,
            "line_items": [
                {
                    "quantity": 1,
                    "cost": "$372.00",
                    "product_key": "Ut in.",
                    "notes": "Architecto at est.",
                    "discount": 0,
                    "is_amount_discount": false,
                    "tax_name1": "Sales Tax",
                    "tax_rate1": 5,
                    "tax_name2": "",
                    "tax_rate2": 0,
                    "tax_name3": "",
                    "tax_rate3": 0,
                    "sort_id": "0",
                    "line_total": "$372.00",
                    "gross_line_total": "$389.48",
                    "custom_value1": "https://picsum.photos/200",
                    "custom_value2": "75",
                    "custom_value3": "Nulla est incidunt.",
                    "custom_value4": "Consequatur in.",
                    "type_id": "1",
                    "product_cost": "$0.00",
                    "tax_amount": "$17.48",
                    "date": "",
                    "tax_id": "1",
                    "task_id": "",
                    "expense_id": "",
                    "_id": "358982ee-f062-42f3-9dcf-4068e9347fa0",
                    "cost_raw": 372,
                    "discount_raw": 0,
                    "line_total_raw": "372.00",
                    "gross_line_total_raw": 389.48,
                    "tax_amount_raw": 17.48,
                    "product_cost_raw": 0,
                    "task": {
                        "number": "0007",
                        "description": "The task description",
                        "duration": 726023,
                        "rate": "$0.00",
                        "rate_raw": "0.000000",
                        "created_at": "21. March 2024",
                        "updated_at": "27. March 2024",
                        "date": "21. March 2024",
                        "project": {
                            "name": "Date App",
                            "number": "0006",
                            "created_at": "22. March 2024",
                            "updated_at": "22. March 2024",
                            "task_rate": "$0.00",
                            "task_rate_raw": "0.000000",
                            "due_date": "",
                            "private_notes": "",
                            "public_notes": "",
                            "budgeted_hours": 1200,
                            "custom_value1": "",
                            "custom_value2": "",
                            "custom_value3": "",
                            "custom_value4": "",
                            "color": "",
                            "current_hours": 0,
                            "client": {
                                "name": "Kilback-Stoltenberg",
                                "balance": "0.000000",
                                "payment_balance": "0.000000",
                                "credit_balance": "2084.140000",
                                "vat_number": "428950405",
                                "address1": "5 Wallaby Way",
                                "address2": "Apt 1",
                                "phone": "555 123-1321",
                                "city": "Sydney",
                                "state": "NSW",
                                "postal_code": "2113",
                                "country_id": "840",
                                "group": "Special Orders",
                                "location": {
                                    "location_name": "Billy",
                                    "address": "44 Nice Street<br/>Apt 5<br/>Nicest City, Best State 90210<br/>United States<br/>",
                                    "address1": "44 Nice Street",
                                    "address2": "Apt 5",
                                    "city": "Nicest City",
                                    "state": "Best State",
                                    "postal_code": "90210",
                                    "country": "USA"
                                }
                            },
                            "user": {
                                "name": "Glennie Schaefer Dr. Corbin Rowe",
                                "email": "small@example.com"
                            }
                        },
                        "time_log": [
                            {
                                "start_date_raw": 1711012404,
                                "start_date": "20. March 2024 22:13:24",
                                "end_date_raw": 1711095351,
                                "end_date": "21. March 2024 21:15:51",
                                "description": "Consequatur voluptas aperiam sapiente optio non dolores quaerat.",
                                "billable": true,
                                "duration_raw": 82947,
                                "duration": "23:02:27"
                            },
                            {
                                "start_date_raw": 1711095651,
                                "start_date": "21. March 2024 21:20:51",
                                "end_date_raw": 1711149254,
                                "end_date": "22. March 2024 12:14:14",
                                "description": "Aut iusto ducimus molestiae reprehenderit fugiat cum.",
                                "billable": true,
                                "duration_raw": 53603,
                                "duration": "14:53:23"
                            },
                        ],
                        "custom_value1": "",
                        "custom_value2": "",
                        "custom_value3": "",
                        "custom_value4": "",
                        "status": "Ready to do",
                        "user": {
                            "name": "Glennie Schaefer Dr. Corbin Rowe",
                            "email": "small@example.com"
                        },
                        "client": {
                            "name": "Kilback-Stoltenberg",
                            "balance": "0.000000",
                            "payment_balance": "0.000000",
                            "credit_balance": "2084.140000",
                            "vat_number": "428950405",
                            "address1": "5 Wallaby Way",
                            "address2": "Apt 1",
                            "phone": "555 123-1321",
                            "city": "Sydney",
                            "state": "NSW",
                            "postal_code": "2113",
                            "country_id": "840",
                            "group": "Special Orders",
                            "location": {
                                "location_name": "Billy",
                                "address": "44 Nice Street<br/>Apt 5<br/>Nicest City, Best State 90210<br/>United States<br/>",
                                "address1": "44 Nice Street",
                                "address2": "Apt 5",
                                "city": "Nicest City",
                                "state": "Best State",
                                "postal_code": "90210",
                                "country": "USA"
                            }
                        }
                    }
                },
                {
                    "quantity": 1,
                    "cost": "$73.00",
                    "product_key": "Non.",
                    "notes": "Aut sunt totam.",
                    "discount": 0,
                    "is_amount_discount": false,
                    "tax_name1": "Sales Tax",
                    "tax_rate1": 5,
                    "tax_name2": "",
                    "tax_rate2": 0,
                    "tax_name3": "",
                    "tax_rate3": 0,
                    "sort_id": "0",
                    "line_total": "$73.00",
                    "gross_line_total": "$76.43",
                    "custom_value1": "https://picsum.photos/200",
                    "custom_value2": "29",
                    "custom_value3": "Accusamus quo.",
                    "custom_value4": "Qui similique culpa.",
                    "type_id": "1",
                    "product_cost": "$0.00",
                    "tax_amount": "$3.43",
                    "date": "",
                    "tax_id": "1",
                    "task_id": "",
                    "expense_id": "",
                    "_id": "013efb0f-5f11-45fc-b404-20427fb0e2a0",
                    "cost_raw": 73,
                    "discount_raw": 0,
                    "line_total_raw": "73.00",
                    "gross_line_total_raw": 76.43,
                    "tax_amount_raw": 3.43,
                    "product_cost_raw": 0
                },
            ],
            
            "client": {
                "name": "Kub, Koepp and Conroy",
                "balance": "6606.300000",
                "payment_balance": "0.000000",
                "credit_balance": "0.000000",
                "vat_number": "373145743",
                "address1": "5 Wallaby Way",
                "address2": "Apt 1",
                "phone": "555 123-1321",
                "city": "Sydney",
                "state": "NSW",
                "postal_code": "2113",
                "country_id": "840",
                "group": "Special Orders",
                "location": {
                    "location_name": "Billy",
                    "address": "44 Nice Street<br/>Apt 5<br/>Nicest City, Best State 90210<br/>United States<br/>",
                    "address1": "44 Nice Street",
                    "address2": "Apt 5",
                    "city": "Nicest City",
                    "state": "Best State",
                    "postal_code": "90210",
                    "country": "USA"
                }
            },
            "payments": [
                {
                    "status": "Refunded",
                    "badge": "<h6><span class=\"badge badge-primary\">Refunded<\/span><\/h6>",
                    "amount": "$104.95",
                    "applied": "$104.95",
                    "balance": "-$104.95",
                    "refunded": "$104.95",
                    "amount_raw": "104.950000",
                    "applied_raw": "104.950000",
                    "refunded_raw": "104.950000",
                    "balance_raw": -104.95,
                    "date": "24. March 2024",
                    "method": "",
                    "currency": "USD",
                    "exchange_rate": 1,
                    "transaction_reference": null,
                    "is_manual": 1,
                    "number": "0003",
                    "custom_value1": "",
                    "custom_value2": "",
                    "custom_value3": "",
                    "custom_value4": "",
                    "created_at": "25. March 2024",
                    "updated_at": "25. March 2024",
                    "refund_activity": ["24. March 2024 Invoice #0029 $104.95 Refunded"],
                    "client": {
                        "name": "cypress",
                        "balance": "0.000000",
                        "payment_balance": "333.000000",
                        "credit_balance": "0.000000",
                        "vat_number": "561724719",
                        "address1": "5 Wallaby Way",
                        "address2": "Apt 1",
                        "phone": "555 123-1321",
                        "city": "Sydney",
                        "state": "NSW",
                        "postal_code": "2113",
                        "country_id": "840",
                        "group": "Special Orders",
                        "location": {
                            "location_name": "Billy",
                            "address": "44 Nice Street<br/>Apt 5<br/>Nicest City, Best State 90210<br/>United States<br/>",
                            "address1": "44 Nice Street",
                            "address2": "Apt 5",
                            "city": "Nicest City",
                            "state": "Best State",
                            "postal_code": "90210",
                            "country": "USA"
                        }
                    },
                    "paymentables": [
                        {
                            "invoice": "0029",
                            "amount_raw": "104.9500",
                            "refunded_raw": "104.9500",
                            "net_raw": 0,
                            "amount": "$104.95",
                            "refunded": "$104.95",
                            "net": "$0.00",
                            "is_credit": false,
                            "date": "24. March 2024",
                            "created_at": "25. March 2024",
                            "updated_at": "25. March 2024",
                            "timestamp": 1711329333
                        }
                    ],
                }
            ],
            "total_tax_map": [
                {
                    "name": "GST 10%",
                    "total": 470.09
                },
                {
                    "name": "VAT 17.5%",
                    "total": 822.65
                },
                {
                    "name": "THIRDTAX 5%",
                    "total": 235.04
                }
            ],
            "line_tax_map": [
                {
                    "name": "Sales Tax 5%",
                    "total": 124.72999999999999
                },
                {
                    "name": "VAT 17.5%",
                    "total": 117.95
                },
                {
                    "name": "GST 10%",
                    "total": 134.98
                }
            ]
        }
    ]
}
```

### Payment

```json
{
    "payments": [
        {
            "status": "Completed",
            "badge": "<h6><span class=\"badge badge-info\">Completed<\/span><\/h6>",
            "amount": "$6,723.74",
            "applied": "$6,723.74",
            "balance": "$0.00",
            "refunded": "$0.00",
            "amount_raw": "6723.740000",
            "applied_raw": "6723.740000",
            "refunded_raw": "0.000000",
            "balance_raw": 0,
            "date": "22. March 2024",
            "method": "",
            "currency": "USD",
            "exchange_rate": 1,
            "transaction_reference": "Manual entry",
            "is_manual": 1,
            "number": "0002",
            "custom_value1": "",
            "custom_value2": "",
            "custom_value3": "",
            "custom_value4": "",
            "created_at": "22. March 2024",
            "updated_at": "22. March 2024",
            "client": {
                "name": "Kilback-Stoltenberg",
                "balance": "0.000000",
                "payment_balance": "0.000000",
                "credit_balance": "2084.140000",
                "vat_number": "428950405",
                "address1": "5 Wallaby Way",
                "address2": "Apt 1",
                "phone": "555 123-1321",
                "city": "Sydney",
                "state": "NSW",
                "postal_code": "2113",
                "country_id": "840",
                "group": "Special Orders",
                "location": {
                    "location_name": "Billy",
                    "address": "44 Nice Street<br/>Apt 5<br/>Nicest City, Best State 90210<br/>United States<br/>",
                    "address1": "44 Nice Street",
                    "address2": "Apt 5",
                    "city": "Nicest City",
                    "state": "Best State",
                    "postal_code": "90210",
                    "country": "USA"
                }
            },
            "paymentables": [],
            "refund_activity": []
        }
    ]
}
```

### Task

```json
{
    "tasks": [
        {
            "number": "0007",
            "description": "The task description",
            "duration": 726023,
            "rate": "$0.00",
            "rate_raw": "0.000000",
            "created_at": "21. March 2024",
            "updated_at": "27. March 2024",
            "date": "21. March 2024",
            "project": {
                "name": "Date App",
                "number": "0006",
                "created_at": "22. March 2024",
                "updated_at": "22. March 2024",
                "task_rate": "$0.00",
                "task_rate_raw": "0.000000",
                "due_date": "",
                "private_notes": "",
                "public_notes": "",
                "budgeted_hours": 1200,
                "custom_value1": "",
                "custom_value2": "",
                "custom_value3": "",
                "custom_value4": "",
                "color": "",
                "current_hours": 0,
                "tasks": [],
                "client": {
                    "name": "Kilback-Stoltenberg",
                    "balance": "0.000000",
                    "payment_balance": "0.000000",
                    "credit_balance": "2084.140000",
                    "vat_number": "428950405",
                    "address1": "5 Wallaby Way",
                    "address2": "Apt 1",
                    "phone": "555 123-1321",
                    "city": "Sydney",
                    "state": "NSW",
                    "postal_code": "2113",
                    "country_id": "840",
                    "group": "Special Orders",
                    "location": {
                        "location_name": "Billy",
                        "address": "44 Nice Street<br/>Apt 5<br/>Nicest City, Best State 90210<br/>United States<br/>",
                        "address1": "44 Nice Street",
                        "address2": "Apt 5",
                        "city": "Nicest City",
                        "state": "Best State",
                        "postal_code": "90210",
                        "country": "USA"
                    }
                },
                "user": {
                    "name": "Glennie Schaefer Dr. Corbin Rowe",
                    "email": "small@example.com"
                }
            },
            "time_log": [
                {
                    "start_date_raw": 1711012404,
                    "start_date": "20. March 2024 22:13:24",
                    "end_date_raw": 1711095351,
                    "end_date": "21. March 2024 21:15:51",
                    "description": "Consequatur voluptas aperiam sapiente optio non dolores quaerat.",
                    "billable": true,
                    "duration_raw": 82947,
                    "duration": "23:02:27"
                },
                {
                    "start_date_raw": 1711095651,
                    "start_date": "21. March 2024 21:20:51",
                    "end_date_raw": 1711149254,
                    "end_date": "22. March 2024 12:14:14",
                    "description": "Aut iusto ducimus molestiae reprehenderit fugiat cum.",
                    "billable": true,
                    "duration_raw": 53603,
                    "duration": "14:53:23"
                },
            ],
            "custom_value1": "",
            "custom_value2": "",
            "custom_value3": "",
            "custom_value4": "",
            "status": "Ready to do",
            "user": {
                "name": "Glennie Schaefer Dr. Corbin Rowe",
                "email": "small@example.com"
            },
            "client": {
                "name": "Kilback-Stoltenberg",
                "balance": "0.000000",
                "payment_balance": "0.000000",
                "credit_balance": "2084.140000",
                "vat_number": "428950405",
                "address1": "5 Wallaby Way",
                "address2": "Apt 1",
                "phone": "555 123-1321",
                "city": "Sydney",
                "state": "NSW",
                "postal_code": "2113",
                "country_id": "840",
                "group": "Special Orders",
                "location": {
                    "location_name": "Billy",
                    "address": "44 Nice Street<br/>Apt 5<br/>Nicest City, Best State 90210<br/>United States<br/>",
                    "address1": "44 Nice Street",
                    "address2": "Apt 5",
                    "city": "Nicest City",
                    "state": "Best State",
                    "postal_code": "90210",
                    "country": "USA"
                }
            }
        }
    ]
}
```

## Definitions

### Invoice / Quote / Credit / Purchase Order Definition

| Field      | Description | Example |
| ----------- | ----------- | ----------- |
| amount | formatted currency | $6,606.30 |
| balance | formatted currency | $6,606.30 |
| status_id | integer representation of the status | 2 |
| status | text representation of invoice status | Sent |
| amount_raw | float | 6606.300000 |
| balance_raw | float | 6606.300000 |
| number | invoice number| 0001 |
| discount | float | 6.000000 |
| po_number | string | Unde. |
| date | string | 25. March 2024 |
| last_sent_date | string | 25. March 2024 |
| next_send_date | string | 25. March 2024 |
| due_date | string  | 25. March 2024 |
| terms | string | Default company invoice terms |
| public_notes | string | Public Notes |
| private_notes | string | Private notes |
| uses_inclusive_taxes | boolean | false |
| tax_name1 | string | GST |
| tax_rate1 | float | 1 |
| tax_name2 | string | VAT |
| tax_rate2 | float | 17. |
| tax_name3 | string | THIRDTAX |
| tax_rate3 | float | 0 |
| total_taxes | formatted currency | $1,905.44 |
| total_taxes_raw | float| 1905.440000 |
| is_amount_discount | bool | false |
| footer | string | Default invoice footer |
| partial | float | 0.000000 |
| partial_due_date | string | 24/1/2024 |
| custom_value1 | string | Custom Value |
| custom_value2 | string | Custom Value |
| custom_value3 | string | Custom Value |
| custom_value4 | string | Custom Value |
| custom_surcharge1 | float | 0 |
| custom_surcharge2 | float | 0 |
| custom_surcharge3 | float | 0 |
| custom_surcharge4 | float | 0 |
| exchange_rate | float  | 1 |
| custom_surcharge_tax1 | boolean | false |
| custom_surcharge_tax2 | boolean | false |
| custom_surcharge_tax3 | boolean | false |
| custom_surcharge_tax4 | boolean | false |
| reminder1_sent | string | 25. March 2024 |
| reminder2_sent | string | 25. March 2024 |
| reminder3_sent | string | 25. March 2024 |
| reminder_last_sent |  string | 25. March 2024 |
| paid_to_date | formatted currency | $0.00 |
| auto_bill_enabled | booleam| false |
| line_items | array | [Line items](/docs/advanced-topics/templates#line-items-definition) |
| client | object | [Client](/docs/advanced-topics/templates#client-definition) |
| payments | array | [Payment](/docs/advanced-topics/templates#payment-definition) |
| total_tax_map | array | [Tax Map](/docs/advanced-topics/templates#tax-map-definition) |
| line_tax_map | array | [Tax Map](/docs/advanced-topics/templates#tax-map-definition) |
| | | |

### Line items definition

| Field      | Description | Example |
| ----------- | ----------- | ----------- |
| quantity | float | 1 |
| cost | formatted currency | $372.00 |
| product_key | string | Ut in. |
| notes | string | Architecto at est. |
| discount | float| 0 |
| is_amount_discount | boolean | false |
| tax_name1 | string | Sales Tax |
| tax_rate1 | float | 5 |
| tax_name2 | string |  |
| tax_rate2 | float | 0 |
| tax_name3 | string |  |
| tax_rate3 | float | 0 |
| sort_id | float | 0 |
| line_total | formatted currency | $372.00 |
| gross_line_total | formatted currency | $389.48 |
| custom_value1 | string | https://picsum.photos/200 |
| custom_value2 | string  | 75 |
| custom_value3 | string | Nulla est incidunt. |
| custom_value4 | string | Consequatur in. |
| type_id | string | 1 |
| product_cost | formatted currency | $0.00 |
| tax_amount | formatted currency | $17.48 |
| date | string |  24/1/2023 |
| tax_id | string | 1 |
| task_id | string |  |
| task | object | [Task](/docs/advanced-topics/templates#task-definition)
| expense_id | string |  |
| _id | string | 358982ee-f062-42f3-9dcf-4068e9347fa0 |
| cost_raw | float | 372 |
| net_cost | string | $372.00 |
| net_cost_raw | float | 372.00 |
| discount_raw | float | 0 |
| line_total_raw | float | 372.00 |
| gross_line_total_raw | float | 389.48 |
| tax_amount_raw | float| 17.48 |
| product_cost_raw | float | 0 |
| | | |

### Tax map definition
| Field      | Description | Example |
| --- | --- | --- |
| name | string |  GST 10% |
| total | float|  470.09 |
| | | |

### Payment definition
| Field      | Description | Example |
| ---- | --- | --- |
| status | string | Refunded |
| badge | string | Refunded |
| amount | formatted currency | $104.95 |
| applied | formatted currency | $104.95 |
| balance | formatted currency  | -$104.95 |
| refunded | formatted currency  | $104.95 |
| amount_raw | float | 104.950000 |
| applied_raw | float | 104.950000 |
| refunded_raw | float | 104.950000 |
| balance_raw | float | -104.95 |
| date | string| 24. March 2024 |
| method | string | Visa |
| currency | string | USD |
| exchange_rate | float  | 1 |
| transaction_reference | string | 2sd2fv34 |
| is_manual | boolean | 1 |
| number | string | 0003 |
| custom_value1 | string | Custom Value |
| custom_value2 | string | Custom Value |
| custom_value3 | string | Custom Value |
| custom_value4 | string | Custom Value |
| created_at | string | 25. March 2024 |
| updated_at | string | 25. March 2024 |
| refund_activity | array of string | [24. March 2024 Invoice #0029 $104.95 Refunded] |
| paymentables | array | [Paymentables](/docs/advanced-topics/templates#paymentables-definition) |
| client | object | [Client](/docs/advanced-topics/templates#client-definition) |
| | | |

### Paymentables definition
| Field      | Description | Example |
| --- | --- | --- |
| invoice | string  | 0029 |
| amount_raw | float  | 104.9500 |
| refunded_raw | float  | 104.9500 |
| net_raw | float | 0 |
| amount | formatted currency | $104.95 |
| refunded | formatted currency | $104.95 |
| net | formatted currency | $0.00 |
| is_credit | boolean | false |
| date | string | 24. March 2024 |
| created_at | string | 25. March 2024 |
| updated_at | string | 25. March 2024 |
| timestamp | unix timestamp | 171132933 |
| | | |

### Task Definition

| Field      | Description | Example |
| ----------- | ----------- | ----------- |
| number | Task number |  0007 |
| description | Task Description |  Service for bob |
| duration | Duration of task in seconds |  72602 |
| rate | Task rate currency formatted  |  $0.00 |
| rate_raw | Task rate raw float |  0.000000 |
| created_at | Date task created |  21. March 2024 |
| updated_at | Date task updated |  27. March 2024 |
| date | Date of task |  21. March 2024 |
| custom_value1 | Task Custom Value 1 | Custom Value |
| custom_value2 | Task Custom Value 2 | Custom Value |
| custom_value3 | Task Custom Value 3 | Custom Value |
| custom_value4 | Task Custom Value 4 | Custom Value |
| status | The task status | Ready to do |
| user | The Creating User Object | See User Property definition |
| client | The Client Object | See Client Property definition |
| project | The Client Object | See Client Property definition |
| time_log | Array of time log entries | See time_log definition |
| | | |

### Expense Definition

| Field      | Description | Example |
| ----------- | ----------- | ----------- |
| category | The expense category | Travel |
| amount | The expense amount | $100.00 |
| amount_raw | The expense amount raw | 100.00 |
| date | The expense date | 24. March 2024 |
| private_notes | The expense private notes | Private notes |
| public_notes | The expense public notes | Public notes |
| exchange_rate | The expense exchange rate | 1.00 |
| tax_name1 | The expense tax name 1 | GST |
| tax_rate1 | The expense tax rate 1 | 10 |
| tax_name2 | The expense tax name 2 | VAT |
| tax_rate2 | The expense tax rate 2 | 17 |
| tax_name3 | The expense tax name 3 | THIRDTAX |
| tax_rate3 | The expense tax rate 3 | 0 |
| tax_amount1 | The expense tax amount 1 | $10.00 |
| tax_amount2 | The expense tax amount 2 | $17.00 |
| tax_amount3 | The expense tax amount 3 | $0.00 |
| payment_date | The expense payment date | 24. March 2024 |
| transaction_reference | The expense transaction reference | 1234567890 |
| custom_value1 | The expense custom value 1 | Custom Value |
| custom_value2 | The expense custom value 2 | Custom Value |
| custom_value3 | The expense custom value 3 | Custom Value |
| custom_value4 | The expense custom value 4 | Custom Value |
| calculate_tax_by_amount | The expense calculate tax by amount | true |
| uses_inclusive_taxes | The expense uses inclusive taxes | true |
| client | The expense client | [Client](/docs/advanced-topics/templates/#client-definition) |
| vendor | The expense vendor | [Vendor](/docs/advanced-topics/templates/#vendor-definition) |
| project | The expense project | [Project](/docs/advanced-topics/templates/#project-definition) |
| | | |

### Vendor Definition

| Field      | Description | Example |
| ----------- | ----------- | ----------- |
| name | The vendor name | Vendor Name |
| email | The vendor email | vendor@example.com |
| phone | The vendor phone | 1234567890 |
| website | The vendor website | https://www.vendor.com |
| number | The vendor number | 1234567890 |
| id_number | The vendor id number | 1234567890 |
| vat_number | The vendor vat number | 1234567890 |
| currency | The vendor currency | USD |
| custom_value1 | The vendor custom value 1 | Custom Value |
| custom_value2 | The vendor custom value 2 | Custom Value |
| custom_value3 | The vendor custom value 3 | Custom Value |
| custom_value4 | The vendor custom value 4 | Custom Value |
| address | The vendor address | 1234 Main St, Anytown, USA |
| shipping_address | The vendor shipping address | 1234 Main St, Anytown, USA |
| locale | The vendor locale | en |
| | | |

### Time Log Definition

| Time Log Array (of objects) | | | 
| ---- | ---- | ---- | 
|start_date_raw | unix timestamp | 1711095651 |
|start_date | Formatted start date | 21. March 2024 21:20:51 |
|end_date_raw | unix timestamp | 1711149254 |
|end_date | Formatted start date | 22. March 2024 12:14:14 |
|description | The task item description| Aut iusto ducimus molestiae reprehenderit fugiat cum |
|billable | boolean - defines if this time entry is billable | true |
|duration_raw | seconds - raw duration of entry | 53603 |
|duration | formatted duration | 14:53:23 |
| | | |

### User Definition

| Creating User Object | | | 
| ---- | ---- | ---- | 
| name | The users name | Bob Jane |
| email | The users email | bob@gmail.com |
| | | |

### Client Definition

| Client Object | | |
| ---- | ---- | ---- | 
| name | The full client name | Kilback-Stoltenberg |
| balance | The client balance | 0.000000 |
| payment_balance | The client payment balance | 0.000000 |
| credit_balance | Thje client credit balance | 2084.140000 |
| vat_number | The client VAT Number | 428950405 |
| currency | The client currency code | USD | 
| locale | The client locale | en |
| address1 | The first line of the billing address | 5 Wallaby Way |
| address2 | The second line of the billing address | Apt 1 |
| city | The city | Sydney |
| state | The state or province | NSW |
| postal_code | The postal or zip code | 2113 |
| country_id | The country ID | 840 |
| group | The client group name | Special Orders |
| location | The client location object | [Location](#location-definition) |
| phone | The client phone number | 555 123-1321 |
| address | The formatted billing address | 1 Wallaby Way, Sydney |
| shipping_address | The formatted shipping address | 2 Wallaby Way, Sydney | 
| custom_value1 | The first client custom value | Bob |
| custom_value2 | The second client custom value | Blue |
| custom_value3 | The third client custom value | Batman |
| custom_value4 | The fourth client custom value | Pistachio |
| | | |

### Location Definition

| Location Object | | |
| ---- | ---- | ---- | 
| location_name | The location name | Billy |
| address | The formatted location address with HTML line breaks | 44 Nice Street<br/>Apt 5<br/>Nicest City, Best State 90210<br/>United States<br/> |
| address1 | The first line of the location address | 44 Nice Street |
| address2 | The second line of the location address | Apt 5 |
| city | The city | Nicest City |
| state | The state or province | Best State |
| postal_code | The postal or zip code | 90210 |
| country | The country name | USA |
| | | |

### Project Definition

| Project Object | | |
| ---- | ---- | ---- | 
| name | The project name |  Date App |
| number | The project number |  0006 |
| created_at | Date created | 22. March 2024 |
| updated_at | Date updated | 22. March 2024 |
| task_rate | Task Rate for project (formatted in currency) |  $0.00 |
| task_rate_raw | Task rate for project - float format |  0.000000 |
| due_date | The due date for the project | 22. March 2025 |
| private_notes | The private notes of the project |  Private notes |
| public_notes | The public notes of the project |  Public notes |
| budgeted_hours | The number of hours budgeted for the project |  200 |
| custom_value1 | Project Custom Value 1 | Custom Value |
| custom_value2 | Project Custom Value 2 | Custom Value |
| custom_value3 | Project Custom Value 3 | Custom Value |
| custom_value4 | Project Custom Value 4 | Custom Value |
| color | The color associated with the project | #fff | 
| current_hours | The accured hours of the project so far | 100 |
| tasks | Array of tasks | [Task](/docs/advanced-topics/templates/#task-definition) |
| expenses | Array of expenses | [Expense](/docs/advanced-topics/templates/#expense-definition) |
| user | The Creating User Object | [User](/docs/advanced-topics/templates/#user-definition) |
| client | The Client Object | [Client](/docs/advanced-topics/templates/#client-definition) |
| | | |

## Sample Templates

### Statements
|Name | Description| Preview | |
|---- | ---- | ---- | ---- |
|TS1 |  Plain Statement | [<img src="/assets/images/templates/ts1.png" width="200"/>](/assets/images/templates/ts1.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/statements/ts1.html "download") |  
|TS2 |  Color Statement | [<img src="/assets/images/templates/ts2.png" width="200"/>](/assets/images/templates/ts2.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/statements/ts2.html "download") |
|TS3 | Vertical Statement | [<img src="/assets/images/templates/ts3.png" width="200"/>](/assets/images/templates/ts3.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/statements/ts3.html "download") |
|TS4 |  Logo Statement | [<img src="/assets/images/templates/ts4.png" width="200"/>](/assets/images/templates/ts4.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/statements/ts4.html "download") |
| | | | |

### Delivery Notes
|Name | Description| Preview | |
|---- | ---- | ---- | ---- |
|TD4 | 3 Column | [<img src="/assets/images/templates/td4.png" width="200"/>](/assets/images/templates/td4.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/delivery_notes/td4.html "download") |  
|TD5 | 2 Column / Footer | [<img src="/assets/images/templates/td5.png" width="200"/>](/assets/images/templates/td5.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/delivery_notes/td5.html "download") |  
|TD12 | 2 Column | [<img src="/assets/images/templates/td12.png" width="200"/>](/assets/images/templates/td12.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/delivery_notes/td12.html "download") |  
|TD13 | 2 Column Mono | [<img src="/assets/images/templates/td13.png" width="200"/>](/assets/images/templates/td13.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/delivery_notes/td13.html "download") |  
|||||

### Payment Receipts
|Name | Description| Preview | |
|---- | ---- | ---- | ---- |
|TP6 | Standard | [<img src="/assets/images/templates/tp6.png" width="200"/>](/assets/images/templates/tp6.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/payments/tp6.html "download") |  
|TP7 | Horizontal | [<img src="/assets/images/templates/tp7.png" width="200"/>](/assets/images/templates/tp7.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/payments/tp7.html "download") |  
|||||

### Refund Receipts
|Name | Description| Preview | |
|---- | ---- | ---- | ---- |
|TR8 | Horizontal | [<img src="/assets/images/templates/tr8.png" width="200"/>](/assets/images/templates/tr8.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/payments/tr8.html "download") |  
|TR9 | Standard | [<img src="/assets/images/templates/tr9.png" width="200"/>](/assets/images/templates/tr9.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/payments/tr9.html "download") |  
|||||

### Project/Tasks
|Name | Description| Preview | |
|---- | ---- | ---- | ---- |
|TP11 | Project Outline | [<img src="/assets/images/templates/tp11.png" width="200"/>](/assets/images/templates/tp11.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/projects/tp11.html "download") |
|TT10 | Task | [<img src="/assets/images/templates/tt10.png" width="200"/>](/assets/images/templates/tt10.png) | [Download](https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/resources/views/templates/tasks/tt10.html "download") |  
|||||

## Snippets

Here are some quick and easy snippets you can use in your templates/designs

### Display payments table on an invoice

```bash
​<ninja>
    {% if invoices %}
    {% set invoice = invoices|first %}
        <div>
        <table>
        {% if invoice.payments is not empty  %}
        <tr><td>Date</td><td>Amount</td></tr>
        {% for payment in invoice.payments %}
        <tr>
            <td>{{ payment.date }}</td>
            <td>{{ payment.amount }}</td>
        </tr>

        {% endfor %}
        </table>
        {% endif %}

    {% endif %}
</ninja>
```