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