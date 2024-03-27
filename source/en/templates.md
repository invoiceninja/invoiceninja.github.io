---
extends: _layouts.user_guide
section: content
locale: en
---

# Templates

## Introduction

Templates allow you to create customized designs and documents using raw data. We have a prebuilt range of templates that will allow you to quickly create Statements / Payment Receipts / Payment Refund Receipts and Delivery Notes,  but the functionality does not stop there.

You can also run a templates against any entity within the application and have a PDF returned the the entities dataset embedded in. Here is an example of a template which has been produced from a Project:

![alt text](/assets/images/templates/project_template.png "Project Template")

When run against our project template, we receive a PDF like this:

![alt text](/assets/images/templates/project_template_output.png "Project Template Output")

In our template we have constructed (use the Twig templating engine) a document which contain the projects details and a summary of each task time log entry.

## Getting Started

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
            </div>

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
<div id="client-details"></div>
<div id="company-details"></div>
<div id="company-address"></div>
<div id="vendor-details"></div>
<div id="shipping-address"></div>
```

There will populate using the data stored in Settings > Invoice Designs for each block.

## Invoice
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
            "terms": "<p>Default company invoice terms</p>",
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
            "footer": "<p>Default invoice footer</p>",
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
                    "product_cost_raw": 0
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
            "reminder1_sent": "",
            "reminder2_sent": "",
            "reminder3_sent": "",
            "reminder_last_sent": "",
            "paid_to_date": "$0.00",
            "auto_bill_enabled": false,
            "client": {
                "name": "Kub, Koepp and Conroy",
                "balance": "6606.300000",
                "payment_balance": "0.000000",
                "credit_balance": "0.000000",
                "vat_number": "373145743"
            },
            "payments": [],
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

## Task

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
                    "vat_number": "428950405"
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
                "vat_number": "428950405"
            }
        }
    ]
}
```

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

### Task Time Log Definition

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

### Task User Definition

| Creating User Object | | | 
| ---- | ---- | ---- | 
| name | The users name | Bob Jane |
| email | The users email | bob@gmail.com |
| | | |

### Task Client Definition

| Client Object | | |
| ---- | ---- | ---- | 
| name | The full client name | Kilback-Stoltenberg |
| balance | The client balance | 0.000000 |
| payment_balance | The client payment balance | 0.000000 |
| credit_balance | Thje client credit balance | 2084.140000 |
| vat_number | The client VAT Number | 428950405 |
| | | |

### Task Project Definition

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
| tasks | Array of tasks | [tasks] |
| user | The Creating User Object | See User Property definition |
| client | The Client Object | See Client Property definition |
| | | |

Accessing data using twig would be as follows:

First we'd check to ensure the variable is available

```twig
{% if tasks|e %}
{% endif%}
```

Then we can iterate

```twig
{% if tasks|e %}

    {% for task in tasks %}
    {% endfor %}

{% endif %}
```

Accessing data is done using dot notation, for example retrieving a the client name of a tasks project would be as follows:


```twig
{{ task.project.client.name }}
```