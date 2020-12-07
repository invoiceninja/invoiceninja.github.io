# Developer resources

[[toc]]

## API Definition

Our full API definition can be found on swagger <a href="https://app.swaggerhub.com/apis/invoiceninja/invoiceninja">here</a>

## Adding payment gateways

Payment Driver Template.

So you want to make a payment driver for invoice ninja, but don't know where to start? The first step would be to reach out to us directly on Slack https://invoiceninja.slack.com and have a chat to us in real time so that we can help you hit the ground running and build your driver in the most efficient way possible. Contacting us prior will also ensure that your code can be merged back into the official repository as we will be maintaining this code into the future. 

Ready? Lets go!

### Step 1. Setup environment

You should update your code to be up to date with the <a href="https://github.com/invoiceninja/v5-develop">v5-develop</a> branch.

You will then want to create your own branch for for your driver ie.

```
git branch my_payment_driver
```

### Step 2. Adding the gateway into the gateways table

Lets create a migration file which will insert a record identifying the gateway.

```
php artisan make:migration my_new_gateway
```

Let open this file and in the up() method create our new gateway record

Init a new gateway instance

```
$gateway = new Gateway;
$gateway->name = 'Fancy Gateway'; 
$gateway->key = Str::lower(Str::random(32)); 
$gateway->provider = ‘FancyGateway’;
$gateway->is_offsite = true;
$gateway->fields = new \stdClass;
$gateway->visible = true;
$gateway->site_url = ‘https://stripe.com’;
$gateway->default_gateway_type_id = 1;
$gateway->save();
```

#### Gateway Properties

* name: The name of your gateway
* key: A random 32 alphanumeric gateway key (Type: string)
* provider: This is a camel cased string which is used to initialize your payment driver. We append the string Driver to this class, so if you payment driver is FancyGatewayDriver, then your provider will be FancyGateway. (Type: string)
* is_offsite: Specifies is this payment driver redirects the user to another page to complete the payment. Paypal Express for instance redirects to Paypal, and then returns the user once the payment is completed (Type: bool)
* fields: A stdClass object of key values which defines the user settings required for the gateway, ie, Api Keys, Secrets etc. All of these fields are strings except for testMode which is a boolean and indicates whether the gateway is set to test mode. (Type stdClass)
* visible: Defines whether the gateway should be visible in the UI (Type: bool)
* site_url: A URL field which allows the user to go directly to the gateway page for further information (Type: string, url)
* default_gateway_type_id: If your gateway has multiple ways to pay, ie Credit Card, Bank Transfer etc, then you’ll want to select a default method. The list of defined methods are found on the GatewayType model as follows:

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


