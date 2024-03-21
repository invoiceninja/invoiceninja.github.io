---
extends: _layouts.user_guide
section: content
locale: en
---

# Payment Gateways

Invoice Ninja integrates​ with many "payment gateways" (AKA, merchant processors). A payment gateway allows merchants (that's you!) to accept credit cards and other electronic payments online directly from invoices you email out to your clients.

[Payment Gateway Integrations](https://invoiceninja.com/payments/)

- Invoice Ninja includes deep integration with a range of high quality payment gateways, allowing you to get paid fast and across many different gateways.
- Payment gateways can be setup in _Settings>Payment Settings>New Gateway_. From there, you will choose your payment gateway and click Setup.
- You cannot accept online invoice payments without first setting up a payment gateway.
- The easiest way to start accepting online payments is via Stripe. Stripe is the largest online payment gateway provider with the most currencies.
  - Simply select "New Gateway," Stripe Setup, then you will be taken to the Stripe login screen to link your account. If you do not have a Stripe account already, Stripe will guide you to create an account right away.

You can easily setup payment gateways within your account under _Settings>Payment Settings>"New Gateway"_

![Payment Gateways List - Blank](/assets/images/gateways/PaymentSettingsGatewaysBlankList_1.png "Payment Gateways List - Blank")

![Add Payment Gateway Home Page](/assets/images/gateways/AddPaymentGatewayHomePage.png "Add Payment Gateway Home Page")

![Add Payment Gateway dropdown list](/assets/images/gateways/AddPaymentGatewayDropdownList.png "Add Payment Gateway dropdown list")

- You can also integrate multiple gateways for different payment types. For example, you can configure Stripe for your ACH payments, Auth.net for you credit card payments and also PayPal. Gateways can also be configured based on a minimum or maximum amount, giving you maximum flexibility.
- Gateway fees can also be configured and passed on to the client when they perform transactions. For Stripe, Invoice Ninja can even auto calculate the fee amount to pass on to the customer if you enable this option.

## Notes

We no longer support the PayPal _Express API_ integration, we've updated to the "PayPal Platform" and now also support Venmo via PayPal.

We don't support "Test Mode" for payment gateways.

## Stripe

<p align="center">
	<img class="h-40" src="/assets/images/gateways/stripe.svg" alt="Stripe"/>
</p>

Our Stripe integration includes a wide range of payment options including:

- Card
- ACH
- SOFORT
- Alipay
- Pay
- SEPA
- Bancontact
- iDEAL
- Giropay
- Przelewy24
- EPS
- ACSS
- BECS
- FPX

Our Stripe integration also includes token billing and refunds

<hr>

## Checkout

<p align="center">
	<img class="h-50" src="/assets/images/gateways/checkout.jpg" alt="Checkout.com"/>
</p>

Our Checkout integration includes Credit Card payment options, including token billing and refunds.

<hr>

## Mollie

<p align="center">
	<img class="h-20" src="/assets/images/gateways/mollie.png" alt="Mollie"/>
</p>

Our Mollie integration includes a wide range of payment options including:

- Credit Card (including token billing)
- Bank Transfer
- KBC
- Bancontact
- iDEAL

### Error executing API call (422: Unprocessable Entity): No suitable payment methods found.

This error will occur when you don't have enabled payment methods in the Mollie dashboard.
Navigate to [Mollie](https://mollie.com/dashboard) > Settings > Website profiles > _Select your profile_ > Payment methods and enable Credit card.

<hr>

## PayTrace

<p align="center">
	<img class="h-20" src="/assets/images/gateways/paytrace.svg" alt="PayTrace"/>
</p>

Our PayTrace integration includes Credit Card payment options, including token billing and refunds.

<hr>

## PayFast

<p align="center">
	<img class="h-25" src="/assets/images/gateways/payfast.png" alt="PayFast"/>
</p>

Our PayFast integration includes Credit Card payment options. Here is a quick guide to help setup receiving credit card payments with PayFast

<p align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SOQhEidfwdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

<hr>

## Authorize.net

<p align="center">
	<img class="h-20" src="/assets/images/gateways/authorize.png" alt="Authorize.net"/>
</p>

Our PayTrace integration includes Credit Card payment options, including token billing and refunds.
