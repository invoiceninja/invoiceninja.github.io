---
title: "Hosted Stripe"
sidebar_position: 6
---
## Stripe Integration

In v5 of Invoice Ninja we have introduced Stripe Connect using OAuth. This integration provides a secure way to integrate your Stripe account into Invoice Ninja.

When you migrate your data across, we automatically create your Stripe account, however we need you to authorize via OAuth your Stripe account with Invoice Ninja. 

To do this, navigate to Settings > Payment Settings. Click on Stripe Connect you'll see the following:

![alt text](/assets/images/stripe/stripe1.png "Connect Stripe")

Click on <b>Gateway Setup</b> this button and you'll be taken to a page like this:

![alt text](/assets/images/stripe/stripe2.png "OAuth Stripe")

Select the account you wish to connect and we will look after the rest!!

## Stripe Webhooks

It is highly recommended that you configure webhooks that allow Stripe to communicate with Invoice Ninja.

In cases where the customer leaves prior to the transaction completing or a loss of communication between Stripe and Invoice Ninja. Webhooks can self heal any transactions that are incomplete.

You can find your webhook details on the Stripe overview page in Settings > Payment Settings > Configure Gateways > Stripe

![alt text](/assets/images/stripe/stripe_webhook_overview_1.png "Webhook Settings Invoice Ninja")

Using these details, log into Stripe and navigate to Developers > Webhooks

![alt text](/assets/images/stripe/stripe_webhook_overview_2.png "Webhook edit in Stripe")

Enter in your dedicated webhook URL as well as the five event types

:::info
source.chargeable  
charge.succeeded  
charge.failed  
customer.source.updated  
payment_intent.processing  
payment_intent.succeeded  
payment_intent.payment_failed  
payment_intent.partially_funded
:::

![alt text](/assets/images/stripe/stripe_webhook_overview_3.png "Add Events")