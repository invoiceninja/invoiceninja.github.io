---
extends: _layouts.user_guide
section: content
locale: en
---

# Payment Gateways

Invoice Ninja integrates​ with many "payment gateways" (AKA, merchant processors). A payment gateway allows merchants (that's you!) to accept credit cards and other electronic payments online directly from invoices you email out to your clients.

See our [Payment Gateway Integrations](https://invoiceninja.com/payments/)

- Invoice Ninja includes deep integration with a range of high quality payment gateways, allowing you to get paid fast and across many different gateways.
- Payment gateways can be setup in _Settings>Payment Settings>New Gateway_. From there, you will choose your payment gateway and click Setup.
  - When you create or edit a payment gateway there are three tabs of settings to configure. **Credentials**, **Settings**, and **Limits/Fees**.
- You cannot accept online invoice payments without first setting up a payment gateway.
- The easiest way to start accepting online payments is via Stripe. Stripe is the largest online payment gateway provider with the most currencies.
  - Simply select "New Gateway," Stripe Setup, then you will be taken to the Stripe login screen to link your account. If you do not have a Stripe account already, Stripe will guide you to create an account right away.

You can easily setup payment gateways within your account under _Settings>Payment Settings>"New Gateway"_

![Payment Gateways List - Blank](/assets/images/gateways/PaymentSettingsGatewaysBlankList_1.png "Payment Gateways List - Blank")

![Add Payment Gateway Home Page](/assets/images/gateways/AddPaymentGatewayHomePage.png "Add Payment Gateway Home Page")

![Add Payment Gateway dropdown list](/assets/images/gateways/AddPaymentGatewayDropdownList.png "Add Payment Gateway dropdown list")

- You can also integrate multiple gateways for different payment types. For example, you can configure Stripe for your ACH payments, Auth.net for you credit card payments and also PayPal. Gateways can also be configured based on a minimum or maximum amount, giving you maximum flexibility.
- Gateway fees can also be configured and passed on to the client when they perform transactions. For Stripe, Invoice Ninja can even auto calculate the fee amount to pass on to the customer if you enable this option.

### Credentials

In this first most important pane, you define the necessary values in order to facilitate communication between Invoice Ninja and your payment gateway's API.

### Settings

These settings govern some of the behaviors within Invoice Ninja's client portal, or admin portal, when looking at and interacting with your configured payment gateways. Some of these options may or may not appear depending on your payment gateway type.

- **Label** - This label is for internal reference purposes only, and applies to the payment gateway list on the admin portal.
- **Capture Card** - Setting to save client credit card details for next time or not. Enabled, or disabled. Otherwise set to "Enabled by Default" or "Disabled by Default" to give the client an option at checkout to "Save payment method details" for later.
- **Available Payment Types** - You will see a different list of supported payment methods, depending on the payment gateway service provider you chose. Eg. Credit Card, Bank Transfer, Alipay, Apple Pay, PayPal, etc. Enable or disable these options to give clients access to those payment methods at checkout.
- **Required Fields** - Tick the box for any field you wish to request the client to fill out for the payment records. Optionally, update the client record in Invoice Ninja with the client's additional information you requested.
- **Accepted Card Logos** - Determines which logos are displayed during checkout. Enable your accepted card logos to advertise support to your clients.

### Limits/Fees

Here we manage any payment limits, or fees we wish to apply to any transactions. Fees and limits applied are specific to the payment type you have selected.

- **Payment Type** - Only the payment methods that are enabled in your payment gateway _Settings_ pane are available to select from here. Choose one, and any fees or limits you set will be associated specifically with that payment method only.
- **Min Limit & Max Limit** - Enter a dollar value for the desired minimum, or maximum payment limits, and check the "Enable Min" or "Enable Max" boxes to enforce the minimum and maximum values.
- **Fee Percent** - Set a fee on transactions with this payment method, based on a % of the amount paid.
- **Fee Amount** - Set a flat rate fee for any transactions with this payment method. Can be charged in addition to the Fee Percent, if both values are set.
- **Fee Cap** - Set a maximum value for payment method fees charged to a client.
- **Tax** - When one, two, or three _Item Tax Rates_ are enabled (Basic Settings > Tax Settings) you will see one _Tax_ field here for each tax rate. These taxes are applied to the payment gateway fees you charge the customer.
- **Adjust Fee Percent** - Use the toggle switch to enable this feature. Use this when you intent to forward along the payment gateway fees to the customer. For example, if the payment processing fee for your Stripe account is 30 cents flat, and 1%, and you wanted to pass that to the customer, you would enter a 0.30 flat _Fee Amount_, and 1 for _Fee Percent_, and enable the _Adjust Fee Percent_. Because the total with fees will be higher, the _actual_ fees Stripe charges will be higher also. With this feature, Invoice Ninja will calculate and adjust the fee to charge the customer the expected fee amount, after the final invoice price is changed.
  - **_Note_** - When attempting to perfectly capture the payment gateway fee 100% and apply it to the client's payment using _Adjust Fee Percent_, you must disable _Invoice Tax Rates_ and exclusively use _Item Tax Rates_ (Basic Settings > Tax Settings). When a payment fee is applied to a customer invoice, it is entered as a line item, and any invoice tax rates will be applied to the fee, which will throw off the formula to calculate the new fee percent correctly.
  - You are responsible for verifying that your tax and fee settings comply with any laws that apply. Seek legal counsel if you require direction on fee and tax policies for your organization.

## Notes

We no longer support the PayPal _Express API_ integration, we've updated to the "PayPal Platform" and now also support Venmo via PayPal.

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
- BTCPay

Our Stripe integration also includes token billing and refunds

<hr>

## Square

Our [Square](https://squareup.com/) integration includes Credit Card payment options, including token billing, and refunds. Once you sign up for a Square developer account and configure your application in the Square Developer Dashoard, you will need to provide the following credentials:  

- **Application ID** 
- **Access Token** 
- **Location ID**
```

The _Application ID_ and _Access Token_ can be found under _OAuth_ in the left hand sidebar, and the _Location ID_ can be found under _Location_ in the sidebar. More information can be found in the [Square developer documentation](https://developer.squareup.com/docs/square-get-started). 

The test mode checkbox is available for testing Square integration with Square sandbox credentials.

<hr>

## Checkout.com

<p align="center">
	<img class="h-50" src="/assets/images/gateways/checkout.jpg" alt="Checkout.com"/>
</p>

Our Checkout integration includes Credit Card payment options, including token billing and refunds. Enter your API public key and API secret key, provided by Checkout.com. To acquire these, sign in to or create a "The Hub" account on the Checkout.com website. Once signed into "The Hub" click on _Settings_ from the left side menu, and then click _Channels_. Here you find a list of your businesses registered on Checkout.com, select the appropriate business (if you have multiple here) and you will find the API keys on this screen. For more information about Checkout.com API credentials, visit [Checkout.com Docs](https://api-reference.checkout.com/#section/Authentication).

- **Test Mode** - Enable for use when your checkout.com account/channel is running in test mode, not for live transactions or production use.
- **Threeds** - "threeds" is an API feature to use 3D Secure payments on Checkout.com with Invoice Ninja. 3D Secure payments add an extra step of authentication for customers when processing a card transaction. This feature reduces fraud risk, and also shifts liability in payment processing, to reduce transaction dispute claims.

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

To setup Mollie as a payment method, you will need your profile ID #, and your website API Key. Your profile ID # can be found in the top left corner of the screen when you log in to the Mollie dashboard, and you can find a list of your API keys by clicking the _Developers_ expanding menu on the left sidebar, and then clicking _API Keys_, as described on the [Mollie knowledgebase](https://help.mollie.com/hc/en-us/articles/115000328205-Where-can-I-find-the-live-API-key-). After approving your website, you will find your live, and test API keys here. There is a checkbox in the Invoice Ninja admin portal when configuring the Mollie payment gateway, to enable test mode if you are going to use a _Test API Key_ from Mollie.

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

<div class="video_container">
<x-video src="/assets/videos/gateways/payfast/payfast.mpd" is_dash="true" id="payfast-video"></x-video>
</div>

<hr>

## Authorize.net

<p align="center">
	<img class="h-20" src="/assets/images/gateways/authorize.png" alt="Authorize.net"/>
</p>

Our [Authorize.net](https://www.authorize.net/) integration includes Credit Card payment options, including token billing and refunds. Enter your API Login ID and Transaction Key, provided by Authorize.net. To acquire these, sign in to or create a merchant account on the Authorize.net website. After signing in, click _Settings_ on the left side menu, then click _API Credentials & Keys_. From here you can view and manage new and existing API credentials. For more information about these Authorize.net API credentials, visit [Authorize.net Docs](https://support.authorize.net/s/article/How-do-I-obtain-my-API-Login-ID-and-Transaction-Key).

- **Test Mode** - Enable for testing transactions only, use if your account is running in "test mode". For more information about test mode, visit [Authorize.net Docs](https://support.authorize.net/s/article/What-Is-Test-Mode-and-How-Do-I-Turn-It-off-and-On).
- **Developer Mode** - Enable for use with sandbox accounts for developers only. This is a separate account type, with no billing, and no _real_ live transactions, and will have unique API credentials associated with it. For more information, visit [sandbox.authorize.net](https://sandbox.authorize.net/).
- **Live Endpoint** - Default value is the correct HTTP address for Authorize.net API calls to a live merchant account.
- **Developer Endpoint** - Default value is the correct HTTP address for Authorize.net API calls to a sandbox account. For more information about API endpoints, visit [Authorize.net Docs](https://developer.authorize.net/api/reference/index.html#gettingstarted-section-section-header).

<hr>

## Braintree

With [Braintree](https://www.braintreegateway.com/) you can integrate payment support through PayPal, credit card, and debit/bank transfer. Enter your merchant ID, public key, and private key, provided by Braintree. To acquire these, sign in or create a production account on the Braintree website, and click the "gear" icon in the top right corner, which expands a drop down list. To find your public and private keys, visit _API_ in the list, and to find your merchant ID, visit _Business_ in the list. For more information about Braintree gateway credentials, visit [Braintree Docs](https://developer.paypal.com/braintree/articles/control-panel/important-gateway-credentials).

<hr>

## Custom

This is a developer feature (self-hosted), where you can write in your own PHP code with custom API references for your own payment gateway service provider.

<hr>

## Eway Rapid

Our [eWAY](https://www.eway.com.au/) integration includes Credit Card payment options, including token billing, and refunds. Once you have setup your business in the eWAY portal, you can find your API details under the top menu, by hovering over _My Account_ and then clicking _API Keys_. Your _API Key_ and _Password_ for Invoice Ninja are listed near the top under _Rapid API Key_ and your _Public API Key_ can be found just below that under the section _Pay Now Button_. You can find more detailed instructions from the [eWAY knowledgebase](https://go.eway.io/s/article/How-do-I-setup-my-Live-eWAY-API-Key-and-Password). The Test Mode checkbox will enable use with the eWAY sandbox account for payment gateway testing.

<hr>

## PayTrace

Our [PayTrace](https://www.paytrace.net/) integration includes Credit Card payment options, including token billing and refunds. To setup PayTrace you will need your PayTrace account API user credentials and API key, which can be found after successfully setting up an account with PayTrace. There is a process to go through with PayTrace involving testing a sandbox account first, before setting up live payments, make sure you use the _Test Mode_ checkbox when going through this process with sandbox API credentials. For more information visit the [PayTrace support website](https://developers.paytrace.com/support/home).

Our PayTrace integration includes Credit Card payment options, including token billing and refunds.

<hr>

## Digital Wallets

The below are NOT payment gateways, but rather some information on how your clients can pay an invoice via the client portal using these digital wallets. Support for this depends on your payment gateway (ex. some gateways don't support Apple Pay or Google Pay, etc.)

### Apple Pay & Google Pay

As of this moment, to pay with Apple or Google Pay a credit card needs to already be configured in your browser. This is not Invoice Ninja preference, but a platform choice.

**Safari on desktop**:

- Safari on Mac running macOS Sierra or later
- A iPhone (iPad isn't supported yet) with a credit card configured in Wallet. More info can be found on [Apple's support site](https://support.apple.com/en-us/HT204681).

**Safari on mobile**:

- iOS 10.1 or later
- A card configured in the Wallet app

**Google Chrome**:

- [A saved credit card](https://support.google.com/chrome/answer/142893?co=GENIE.Platform%3DDesktop&hl=en)

**Microsoft Edge**:

- Microsoft Edge 16.16299 or newer
- [A saved credit card](https://support.microsoft.com/en-us/help/4026594/microsoft-account-add-update-remove-credit-cards-and-other-ways-to-pay)

<hr>

## Crypto

### BTCPay

The integration of BTCPay Server with Invoice Ninja enables you to accept bitcoin as a payment method, without fees, intermediaries with payments going directly to your bitcoin wallet.

- [Instructions for BTCPay payment gateway setup](https://docs.btcpayserver.org/InvoiceNinja/)

<hr>

## CBA PowerBoard

To integrate with the Commonwealth Banks PowerBoard gateway you can use the following steps:

### API Credentials

The first step will be to log into your [PowerBoard](https://powerboard.commbank.com.au/v2/auth/sign-in) portal and retrieve your API credentials.

<img class="" src="/assets/images/gateways/powerboard1.png" alt="CBA PowerBoard"/>

Then navigate to the My Company link and click on API & Settings

<img class="" src="/assets/images/gateways/powerboard2.png" alt="CBA PowerBoard"/>

You'll want to copy the API Secret Key and API Public Key values and then click on the Services sidebar menu option to find your Credit Card Gateway ID.

<img class="" src="/assets/images/gateways/powerboard3.png" alt="CBA PowerBoard"/>

You'll want to copy the ID value highlighted adjacent to your Credit Card Service Provider.

<img class="" src="/assets/images/gateways/powerboard4.png" alt="CBA PowerBoard"/>

### Invoice Ninja + PowerBoard

Back in Invoice Ninja, navigate to Settings > Payment Settings; create a new Payment Gateway and select CBA PowerBoard from the drop down.

<img class="" src="/assets/images/gateways/powerboard5.png" alt="CBA PowerBoard"/>

In The Credentials tab, you can copy in the Secret Key / Public key and the Gateway ID from the previous step.

Further down, you will see some toggles which can control the card types you would like to accept payments from, you can enable/disable these as needed.

### Advanced Settings

Now that your PowerBoard gateway is configured, you can explore a range of features / options you can use with this gateway!

More reading:

- [Set Gateway Fees](https://invoiceninja.github.io/en/gateways/#limits-fees)
- [Payment Links](https://invoiceninja.github.io/en/advanced-settings/#payment_links)
- [Custom Email Servers](https://invoiceninja.github.io/en/hosted-mail/)
