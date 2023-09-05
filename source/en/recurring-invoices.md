---
extends: _layouts.user_guide
section: content
locale: en
---

# Recurring Invoices

Recurring invoices are a convenient way to automate the process of billing a client on a regular schedule. You can set a recurring invoice to be generated automatically at a specific interval and sent to your client via email. This feature is useful for businesses that have regular clients and bill them on a regular schedule, such as monthly or annually. It saves time and effort by automating the invoice creation process.

<video width="100%" controls>
  <source src="/assets/videos/recurring_invoices/create_recurring_invoice.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

## Autobill options

When configuring a Recurring invoice, you have a variety of options of how AutoBilling can be enabled. There are 4 options:

- Off
- Enabled
- Enabled by default
- Disabled by default

### Off

When set to Off it means that the recurring invoice will _never_ be auto-billed.

### Enabled

When set to Enabled it means that the recurring invoice will _always_ be auto-billed if a valid payment method is on file.

### Enabled by default

When set to Enabled by default - a radio checkbox will appear during the payment process. This checkbox will allow the user to opt in or opt out from auto-billing. With this particular setting, the radio button will be pre-selected to ENABLED auto-billing.

### Disabled by default

When set to Disabled by default - a radio checkbox will appear during the payment process. This checkbox will allow the user to opt in or opt out from auto-billing. With this particular setting, the radio button will be pre-selected to DISABLE auto-billing.

## Reserved keywords in the items description

To make your life easier, we've put together few reserved keywords in the line items description to make your work with
recurring invoices, much easier.

Reserved keywords are:

- :MONTH
- :YEAR
- :QUARTER
- :WEEK
- :WEEK_BEFORE
- :WEEK_AHEAD 
- :MONTHYEAR

As you may guess, each time invoice (PDF) is generated, keywords will be replaced with actual value, so:

- :MONTH will get translated to real month (e.g. January).
- :YEAR to the numeric value of the current year (e.g. 2021)
- .. and the :QUARTER to e.g. Q2.

:MONTH, :YEAR, :QUARTER :MONTHYEAR keywords also support basic mathematical operations: **addition**, **subtraction**, **multiplication** & **
division**.

So this is the pattern for mathematical operations:

> %KEYWORD% %OPERATION% %VALUE%

Let's see it in practice. Imagine you're sending an invoice for a gym membership every three months. Write this in item
description & let's see what we get: 

> Gym membership: :MONTH to :MONTH+3

![alt text](/assets/images/recurring_invoices/reserved-keywords-step-one.png "Typing reserved keys in description")

... and let's save & preview the invoice:

![alt text](/assets/images/recurring_invoices/reserved-keywords-pdf.png "Screenshot of PDF")

Nice! Now, each time you send this invoice, you don't have to put the exact month, nor the upcoming month.

### Supported combinations
```
Month: :MONTH
Year: :YEAR
Quarter: :QUARTER

:MONTH (+, -, *, /) e.g. :MONTH+1 :MONTH-1 :MONTH*2 :MONTH/2
:YEAR (+, -) :YEAR+1 :YEAR-1
:QUARTER (+, -) :QUARTER+1 :QUARTER-1
:MONTHYEAR (+, -) :MONTHYEAR :MONTHYEAR+1
```

## Reserved keyword for date ranges

Previously listed keywords are *super* cool, but what if we have to generate for example:

> Gym membership: February 2021 to February 2023

It's easy as typing following:
> Gym membership: [MONTHYEAR|MONTHYEAR+24]

Gym membership: February 2021 to February 2023 🎉

![alt text](/assets/images/recurring_invoices/reserved-keywords-monthyear-preview.png "Screenshot of PDF")

Another way to do it this:
> Gym membership: :MONTH :YEAR to :MONTH :YEAR+2

Keep in mind that **[MONTHYEAR|MONTHYEAR]** syntax will take care of **overlapping dates**.

### Supported combinations
```
[MONTHYEAR|MONTHYEAR +, -], [MONTHYEAR|MONTHYEAR+16], [MONTHYEAR|MONTHYEAR-2]
```

### Translations
As you can see [MONTHYEAR|MONTHYEAR] uses "to" between date ranges. This is not hard coded, but it builds itself based on [your localization settings](/en/basic-settings/#localization).

<x-next url=/en/reports>Reports</x-next>
