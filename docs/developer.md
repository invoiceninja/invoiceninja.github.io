[[toc]]

# Developer resources

## Adding payment gateways

Payment Driver Template.

So you want to make a payment driver for invoice ninja, but where to start? The first step would be to reach out to us directly on Slack https://invoiceninja.slack.com and have a chat to us in real time we can help you hit the ground running and build your driver in the most efficient way possible. Contacting us prior will also ensure that your code can be merged back into the official repository as we will be maintaining this code into the future. 

Ready? Lets go!

Step 1.

You should update your code to be up to date with the v5-develop branch.

You will then want to create your own branch for for your driver ie.

```
Git branch my_special_driver
```

Add the gateway into the gateways table

Lets create a migration file which will insert a record identifying the gateway.

```
php artisan make:migration my_new_gateway
```

Let open this file and in the up() method create our new gateway record


```
Init a new gateway instance

$gateway = new Gateway;

The name of your gateway (Type: string)

$gateway->name = ‘Fancy Gateway’;

A random 32 alphanumeric gateway key (Type: string)
$gateway->key = Str::lower(Str::random(32));

This is a camel cased string which is used to initialize your payment driver. We append the string Driver to this class, so if you payment driver is FancyGatewayDriver, then your provider will be FancyGateway. (Type: string)

$gateway->provider = ‘FancyGateway’;
Is_offsite specifies is this payment driver redirects the user to another page to complete the payment. Paypal Express for instance redirects to Paypal, and then returns the user once the payment is completed (Type: bool)

$gateway->is_offsite = true;

The fields property contains a stdClass object of key values which defines the user settings required for the gateway, ie, Api Keys, Secrets etc. All of these fields are strings except for testMode which is a boolean and indicates whether the gateway is set to test mode. (Type stdClass)

$gateway->fields = new \stdClass;

The visible field defines whether the gateway should be visible in the UI (Type: bool)

$gateway->visible = true;

The site_url is a linkable field which allows the user to go directly to the gateway page for further information (Type: string, url)

$gateway->site_url = ‘https://stripe.com’;

If your gateway has multiple ways to pay, ie Credit Card, Bank Transfer etc, then you’ll want to select a default method. The list of defined methods are found on the GatewayType model

```
    const CREDIT_CARD = 1;
    const BANK_TRANSFER = 2;
    const PAYPAL = 3;
    const CRYPTO = 4;
    const CUSTOM = 5;
    const ALIPAY = 6;
    const SOFORT = 7;
    const APPLE_PAY = 8;
    const SEPA = 9;
    const CREDIT = 10;
```

$gateway->default_gateway_type_id = 1;
$gateway->save();

