# Advanced Settings

<h2 id=invoice_design>Invoice Design</h2>

<h2 id=custom_fields>Custom Fields</h2>

<h2 id=generated_numbers>Generated Numbers</h2>

![alt text](/assets/images/settings/generated_numbers/generated_numbers_settings_pane.png "Generated Numbers Settings")

Generated numbers contain a collection of variables that allow very fine grained customization of generated numbers for any entity in the application.

**Number Padding**

The number padding drop down indicates how many leading zeros you'd like before each number. The default padding is 3 leading zeros ie 0001,0002,0003.

<h2 id=generated_numbers>Generated Numbers</h2>

The generate number option allows you to customize WHEN the number is applied, there are two configurations; When Saved (will apply immediate when you save an entity) or When Sent (when the entity is sent / marked as sent).

**Recurring Prefix**

The recurring prefix is a prefix which is applied to entities that are created when a recurring entity has been generated.

**Shared Invoice Quote Counter**

The shared invoice quote counter switch enables sharing of the counter between quote and invoices, so both entities increment as one rather than separate entities

**Reset Counter**

Generated counters can be reset at a variety of frequencies. It is important to note that in order to reset the counter, you must combine enough unique variables to ensure that the generated counter will still be unique. 

```bash
{$date|y}-{$counter}

generates 

2021-0001
```

This counter will generate a date string of which could reset yearly, however it could not reset at a monthly interval as you will have counter collisions.

![alt text](/assets/images/settings/generated_numbers/generated_numbers_client.png "Client generated numbers")

**Entity generated numbers**

As well as defining the pattern, you are also able to define where the counter can start.

<h2 id=email_settings>Email Settings</h2>

<h2 id=client_portal>Client Portal</h2>

<h2 id=templates_and_reminders>Templates & Reminders</h2>

<h2 id=group_settings>Group Settings</h2>

<h2 id=workflow_settings>Workflow Settings</h2>

<h2 id=user_management>User Management</h2>