---
extends: _layouts.user_guide
section: content
locale: en
---

# User Guide

## Overview

Invoice Ninja is an invoicing application which makes sending invoices and receiving payments simple and easy. Our latest version is a clean slate rewrite of our popular invoicing application which builds on the existing feature set and adds a wide range of features and enhancements the community has asked for.

## Lets get started!

We support a wide range of devices and have custom applications for all platforms. For best performance we highly recommend using the application specific to your operating system.

| Device  | Link                                                                           |
| ------- | ------------------------------------------------------------------------------ |
| Android | [Download](https://play.google.com/store/apps/details?id=com.invoiceninja.app) |
| iOS     | [Download](https://apps.apple.com/us/app/invoice-ninja-v5/id1503970375)        |
| macOS   | [Download](https://download.invoiceninja.com/macos)                            |
| Linux   | [Download](https://snapcraft.io/invoiceninja)                                  |
| Windows | [Download](https://www.microsoft.com/en-us/p/invoice-ninja/9n3f2bbcfdr6)       |

Of course we also provide a fantastic web application which can be found [here](https://app.invoicing.co). No matter which device you use, your data will be kept in sync and up to date!

## Initial setup

You'll want to do some basic configuration when you log in for the first time, settings up your company name, address and uploading your logo. You can follow the steps with this short video.

<div class="video_container">
<x-video src="/assets/videos/setup/setup.mpd" is_dash="true" id="initial-setup-video"></x-video>
</div>

## Currency Precision, Unit Costs, Quantities and Tax Calculations.

### Unit Costs

Invoice Ninja accepts values denominated in the currency you are invoicing in. For unit costs greater than 1, the application will perform all calculations based on the currency in use, ie $41.644431 will use $41.64 in its base calculation where the currency precision is 2 decimal places. Where the unit cost value is less than 1, ie. 0.1254 precision up to 6 decimal places is supported, precision beyond this will be rounded to the nearest value. ie

$0.123456 Supported!
$0.1234567 Not Supported, will round to $0.123457

### Quantity values

Quantity values have a precision of up to 6 decimal places for all values

### Tax Calculations - Line Level / Invoice Level taxes

There can be small differences in the tax calculations depending if you are using Line Level or Invoice Level taxes.

Line level taxes are always calculated on the line level amount and then summed together.

Invoice level taxes are calculated on the sum of the line level amounts for example

| Description | Line Level Tax Calculation | Invoice Level Tax Calculation |
|------------|---------------------------|------------------------------|
| Item 1: $10.33 | $10.33 × 10% = $1.033 → $1.03 | - |
| Item 2: $10.33 | $10.33 × 10% = $1.033 → $1.03 | - |
| Item 3: $10.34 | $10.34 × 10% = $1.034 → $1.03 | - |
| Subtotal | $31.00 | $31.00 |
| Tax Calculation | Sum of rounded individual taxes:<br>$1.03 + $1.03 + $1.03 = $3.09 | Total × Tax Rate:<br>$31.00 × 10% = $3.10 |
| Total | $34.09 | $34.10 |

### Company Defaults

After your initial company setup, you may want to configure additional details about your company. You can follow this video to configure some default settings:

<div class="video_container">
<x-video src="/assets/videos/company_defaults/company_defaults.mpd" is_dash="true" id="company-defaults-video"></x-video>
</div>

### Company Logo

Display your company logo on your Invoice PDFs and in the client portal. All emails that you send to your client from Invoice Ninja will display your Company Logo. You can upload your company logo in:

```bash
Settings > Company Details > Logo
```

![Company Logo Upload](/assets/images/settings/company_logo.png "Company Logo Upload Location")

For best results, using a logo which has a landscape orientation. This will display best across all devices and resources including emails, PDF and the client portal

### Taxes and Localization

```bash
Settings > Tax Settings
```

Learn how to setup total taxes including line item taxes, and also localize your installation for your region.

<div class="video_container">
<iframe class="video" src="https://www.youtube.com/embed/Q-zM-vCjDXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Your first invoice

Step through the process of creating your first invoice. Includes creating custom product columns and also customizing your invoice number patterns.

<div class="video_container">
<iframe class="video" src="https://www.youtube.com/embed/kU1Ok-1RG5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Get Paid!

The final step connecting a payment gateway. Invoice Ninja links with all major payment gateways and makes getting paid super simple. Here is a short video of how to connect the most popular gateway Stripe to Invoice Ninja

<div class="video_container">
<iframe class="video" src="https://www.youtube.com/embed/qitfiD6L8rQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

For more information on payment gateways and methods that we support click [here](/en/gateways)

## Frequently Asked Questions

Please see our [FAQ](/en/faq) page

<x-next url=/en/clients>Clients</x-next>
