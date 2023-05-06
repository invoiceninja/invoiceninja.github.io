---
extends: _layouts.user_guide
section: content
locale: en
---

# Subscriptions

## Introduction

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

## Webhook configuration

If you need to control events that occur outside of Invoice Ninja, you can configure the webhook endpoints to receive information as the user is stepping through the checkout process. All endpoints must be supported if you activate this feature of the application as the app will fail to proceed without a successful response from each of the following:

<x-warning>
	Webhooks are single time events that do not retry if your endpoint is unavailable.
</x-warning>

### Eligibility checker

This request queries the endpoint whether the client/contact is eligible to continue through the checkout. You may use this if you wish to restrict users to one subscription at a time, the payload that is sent to the endpoint looks like this

```
{
	"context" : "is_eligible",
	"subscription" : "l4zbq7repr",
	"contact" : "l4zbq7repr",
	"contact_email" : "customer@example.com",
	"client" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```

#### Parameters
 
**context**: (string) The context identifier, `is_eligible`  
**subscription**: The id of the subscription  
**contact**: The id of the contact  
**contact_email**: The contact email  
**client**: The id of the client  
**account_key**: A client reference (client.custom_value2)  

#### Response

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:

```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```

A failed request would return the an array like this:

```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```

### Start Trial

If you have configured your subscription to be a trial based subscription. Then after the eligibility check, the system will attempt to start the trial, your endpoint will receive a payload like this:

```
{
	"context" : "trial",
	"recurring_invoice" : "l4zbq7repr",
	"client" : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```

#### Parameters

**context**: (string) The context identifier, `trial`  
**recurring_invoice**: The id of the recurring invoice that was generated based on the subscription  
**client**: The id of the client  
**subscription**: The subscription id  
**account_key**: A client reference (client.custom_value2)  

#### Response

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:

```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```

A failed request would return the an array like this:

```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```

### Recurring Purchase

When a recurring subscription is created for the first time, a payload is sent to the endpoint to notify of a successful subscription creation and payment, the payload will look like this:

```
{
    "context" : "recurring_purchase",
    "recurring_invoice" : "l4zbq7repr",
    "invoice" : "l4zbq7repr",
    "client" : "l4zbq7repr",
    "subscription" : "l4zbq7repr",
    "contact" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```

#### Parameters

**context**: (string) The context identifier, `recurring_purchase`  
**recurring_invoice**: The id of the recurring invoice that was generated based on the subscription  
**invoice**: The id of the invoice that was generated based on the subscription  
**client**: The id of the client  
**contact**: The id of the contact  
**subscription**: The subscription id  
**account_key**: A client reference (client.custom_value2)  

#### Response

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:

```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```

A failed request would return the an array like this:

```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```

### Single Purchase

Where your subscription is only for a standard product, and _not_ a recurring product, then your endpoint will receive a single purchase webhook with the following configuration:

```
{
	"context" : "single_purchase",
	"invoice" : "l4zbq7repr",
	"client"  : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```

#### Parameters

**context**: (string) The context identifier, `single_purchase`  
**invoice**: The id of the invoice that was generated based on the subscription  
**client**: The id of the client  
**subscription**: The subscription id  
**account_key**: A client reference (client.custom_value2)  

#### Response

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:

```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```

A failed request would return the an array like this:

```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```

### Change Plan

If you support allowing clients to upgrade/downgrade their subscriptions, a change_plan webhook is fired.

When a client changes plans, there may be either a credit due, or a payment depending on the plan and pro rata refund that is generated. In these two cases, the payload differs with either a `credit` or `invoice` key appearing in the payload. The following are examples:

```
{
	"context" : "change_plan",
	"recurring_invoice" : "l4zbq7repr",
	"credit" : "l4zbq7repr",
	"client" : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
	"contact" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```

```
{
	"context" : "change_plan",
	"recurring_invoice" : "l4zbq7repr",
	"invoice" : "l4zbq7repr",
	"client" : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
	"contact" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```

#### Parameters

**context**: (string) The context identifier, `change_plan`  
**invoice**: The id of the invoice that was generated based on the subscription  
**credit**: The id of the credit that was generated based on the subscription **note** this field, _may_ be blank if no credit was generated  
**client**: The id of the client  
**contact**: The id of the contact  
**subscription**: The subscription id  
**account_key**: A client reference (client.custom_value2)  

#### Response

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:

```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```

A failed request would return the an array like this:

```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```

### Subscription Cancellation

If you allow subscription cancellations, then the following payload is forwarded to the endpoint:

```
{
	"context" : "cancellation",
	"subscription" : "l4zbq7repr",
	"recurring_invoice" : "l4zbq7repr",
	"client" : "l4zbq7repr",
	"contact" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```

#### Parameters

**context**: (string) The context identifier, `cancellation`  
**subscription**: The subscription id  
**recurring_invoice**: The id of the recurring invoice that was generated based on the subscription  
**client**: The id of the client  
**contact**: The id of the contact  
**account_key**: A client reference (client.custom_value2)  

#### Response

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:

```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```

A failed request would return the an array like this:

```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```

### Plan Expired

A daily check is performed to check if any subscriptions have gone past their due date without a payment. If a subscription has been found to expired, a webhook is sent with the following payload:

```
{
	"context" : "plan_expired",
	"client" : "l4zbq7repr",
	"invoice" : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
}
```

#### Parameters

**context**: (string) The context identifier, `plan_expired`  
**subscription**: The subscription id  
**invoice**: The id of the invoice that was generated based on the subscription  
**client**: The id of the client  

#### Response

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:

```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```

A failed request would return the an array like this:

```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```

### Plan Paid

When a payment for a subscription is made (ie for a renewal), a Plan Paid webhook event is fired with the following configuration:

```
{
    "context" : "plan_paid",
    "subscription" : "l4zbq7repr",
    "recurring_invoice" : "l4zbq7repr",
    "client" : "l4zbq7repr",
    "contact" : "l4zbq7repr",
    "invoice" : "l4zbq7repr",
    "account_key" : "l4zbq7repr",
}
```

#### Parameters

**context**: (string) The context identifier, `plan_expired`  
**subscription**: The subscription id  
**recurring_invoice**: The id of the recurring invoice that was generated based on the subscription  
**invoice**: The id of the invoice that was generated based on the subscription  
**client**: The id of the client  
**contact**: The id of the contact  
**account_key**: A client reference (client.custom_value2)  

#### Response

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:

```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```

A failed request would return the an array like this:

```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```


<x-next url=/en/tasks>Tasks</x-next>