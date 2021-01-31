---
extends: _layouts.docs
section: content
---

# Settings

## Basic Settings

The basic settings are where you can setup everything you need to define your company. 

## Company Details

The company details are where you configure your address, upload your company logo and also set your company defaults:

## Defaults 

The defaults are system wide - company level defaults, this will applied at every level of the application they refer to.

### Autobill

The Auto Bill selector has 4 options:

* Enabled - A user a payment will be automatically attempted if a payment method is stored on file.
* Enabled by default - The client will be given the option to allow payment methods to be stored with the radio box selected.
* Disabled by default - The client will be given the option to allow payment methods to be stored with the radio box unselected.
* Disabled - No option is given, and auto billing is disabled.

### Payment Type

This selector will set the default payment method.

### Payment Term

The payment term defined in 'days'. You can configure custom payment terms by clicking the Configure Payment Terms button

### Payment Emails

* Manual Payment Email - Sends a payment notification to the client when a manual payment is applied
* Online Payment Email - Sends a payment notification to the client when an online payment has been processed.

### Terms and Footers

The terms and footers text inputs allow you to define default for each. These will be injected into the document automagically for you. All you need to do is set it once here and we'll take care of the rest! Note, you can always override these values by editing them directly in the entity.

## User Details

## Localization

## Online Payments

## Tax Settings

## Product Settings

## Task Settings

## Expense Settings

## Import | Export

## Device Settings

## Account Management

## Advanced Settings

## Invoice Design

## Custom Fields

## Generated Numbers

![alt text](/assets/images/settings/generated_numbers/generated_numbers_settings_pane.png "Generated Numbers Settings")

Generated numbers contain a collection of variables that allow very fine grained customization of generated numbers for any entity in the application.

### Number Padding

The number padding drop down indicates how many leading zeros you'd like before each number. The default padding is 3 leading zeros ie 0001,0002,0003.

### Generate Number

The generate number option allows you to customize WHEN the number is applied, there are two configurations; When Saved (will apply immediate when you save an entity) or When Sent (when the entity is sent / marked as sent).

### Recurring Prefix

The recurring prefix is a prefix which is applied to entities that are created when a recurring entity has been generated.

### Shared Invoice Quote Counter

The shared invoice quote counter switch enables sharing of the counter between quote and invoices, so both entities increment as one rather than separate entities

### Reset Counter

Generated counters can be reset at a variety of frequencies. It is important to note that in order to reset the counter, you must combine enough unique variables to ensure that the generated counter will still be unique. 

```bash
{$date|y}-{$counter}

generates 

2021-0001
```

This counter will generate a date string of which could reset yearly, however it could not reset at a monthly interval as you will have counter collisions.

![alt text](/assets/images/settings/generated_numbers/generated_numbers_client.png "Client generated numbers")

### Entity generated numbers

As well as defining the pattern, you are also able to define where the counter can start.

## Email Settings

## Client Portal

## Templates & Reminders

## Group Settings

## Workflow Settings

## User Management

<x-next url=/docs/developer-guide>Developer Guide</x-next>