---
extends: _layouts.user_guide
section: content
---

# Subscriptions

Subscriptions are a supercharged version of our Buy Now links from version 4.

In version 5 subscriptions allow you to build an instant shop front where you can bundle your existing products into direct link purchases.

![alt text](/assets/images/subscriptions/subscription_list.png "Subscription list")

![alt text](/assets/images/subscriptions/subscription_overview.png "Subscription overview")

When you create a subscription a direct link is generated which is available to use to directly purchase the given subscription. It is important to note that even thou we have termed this functionality subscriptions, you can still generate direct links to one time purchases. This could be suitable for digital sales that are one time rather than recurring.

![alt text](/assets/images/subscriptions/subscription_products.png "Subscription products")

When you create the subscription you are able to combine one time and recurring products into a single subscriptions. For example, lets say you run a hosting business and want to create a subscription which has a single Setup charge as well as a monthly recurring charge for the server. 

When your client purchases this, the Setup charge will only be applied to the first invoice, and then a recurring invoice is generated for any recurring products in the subscription.

If you want to allow your clients to move between subscriptions then this is possible by creating a Group and adding each subscription to the group. This bundles all of the subscriptions tagged with the same group together!

![alt text](/assets/images/subscriptions/subscription_settings.png "Subscription settings")

The settings pane allows you to define the frequency / auto billing and also promo codes/discounts. We also have integrated the ability for end user self service to change between subscriptions or even cancel these subscriptions. We also handle the accounting for you for refunds if they are defined.

![alt text](/assets/images/subscriptions/subscription_webhooks.png "Subscription webhooks")

The final piece of the subscriptions puzzle is integrating with third party services. When a subscription is purchased / cancelled / upgraded we can notify a third party end point!

<x-next url=/docs/migration>Migrating to v5</x-next>