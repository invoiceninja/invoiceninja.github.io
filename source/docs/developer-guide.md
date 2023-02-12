---
extends: _layouts.developer_resources
section: content
---

# Developer resources

## Getting Started.

The Invoice Ninja API is built on top of the <a href="https://laravel.com">Laravel Framework</a>, this is a hugely popular PHP framework with extensive high quality documentation and tutorials all over the web. To get started customizing and/or extending Invoice Ninja you will need to be acquainted with the latest version of Laravel and all of its features. The URL namespace for the api is **/api/v1** The Client Portal is a traditional web application also built with Laravel along with Livewire and Tailwind components. The URL namespace for client facing URLs is **/client/**

If you are planning to build new functionality in Invoice Ninja, for example a Inventory Module, rather than integrate this directly into the codebase, we highly recommend using the <a href="https://github.com/nwidart/laravel-modules">Laravel Modules</a> library. This library is already part of the Invoice Ninja core, so you can dive straight in and start building.

If you plan to contribute your code back to the official Invoice Ninja repository, please ensure you have test coverage for your functionality. We use <a href="https://phpunit.de/">Phpunit</a> for our API testing, and <a href="https://www.cypress.io/">Cypress</a> for our UI testing of the client portal.

## Architecture

The app is divided into three main parts: the backend/API and the two admin portals.

### Backend - API

#### Lead developer: [David Bomba](https://twitter.com/deadbeefx0)

- Framework: [Laravel](https://laravel.com)
- Code: [GitHub](https://github.com/invoiceninja/invoiceninja/tree/v5-stable)
- API: [Docs](https://api-docs.invoicing.co/)

### Admin Portal - Desktop & Mobile

#### Lead developer: [Hillel Coren](https://twitter.com/hillelcoren)

- Framework: [Flutter](https://flutter.dev)
- Code: [GitHub](https://github.com/invoiceninja/admin-portal)
- Demo: [demo.invoiceninja.com](https://demo.invoiceninja.com)

### Admin Portal - Web

#### Lead developer: [Benjamin Beganović](https://twitter.com/beganovichhh)

- Framework: [React](https://reactjs.org)
- Code: [GitHub](https://github.com/invoiceninja/ui)

## API Definition

Our full API definition can be found <a href="https://api-docs.invoicing.co/">here</a>

### Base URL for v5

The base url for v5 is:

```
https://invoicing.co
```

### Migrating from v4

Invoice Ninja v4 was initially built as a web application with an API added on later to support common uses cases and the limited functionality of the v4 mobile app. With v5 we’ve instead built an API first application, all features in the web/mobile/desktop apps are powered by the API.

For example v4 <a href="https://github.com/invoiceninja/invoiceninja/blob/master/app/Ninja/Transformers/ClientTransformer.php#L51">client includes</a> are limited to contacts, invoices, credits and activities, whereas in v5 <a href="https://github.com/invoiceninja/invoiceninja/blob/v5-develop/app/Transformers/ClientTransformer.php#L32">all options</a> are available. This includes: contacts, documents, gateway_tokens, documents, gateway_tokens, activities, ledger and system_logs.

Another major shortcoming of the v4 API is the docs, even though the functionality is limited, what is available isn’t necessarily documented. In v5 we’ve made sure to document every aspect of the API.

The v4 and v5 APIs are mostly the same but there are some key changes which are important to be aware of.

<x-warning>
The header name for the API token has changed from X-Ninja-Token in v4 to X-API-Token in v5.
</x-warning>

The data type of the id fields has changes from integer to string to support the new id format.

The route for uploading documents has changed, here's a v5 cURL example:

```
curl -X POST https://invoicing.co/api/v1/invoices/<invoice_id>/upload \
  -H 'Content-Type: multipart/form-data' \
  -H 'X-API-TOKEN: TOKEN' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -F _method=PUT \
  -F 'documents[]=@filename.png'
```

### API Headers

#### X-API-SECRET
<x-container>
<x-section>
The X-API-SECRET can be used as another layer of protection for your API. 

The X-API-SECRET requires you to configure a .env variable ```API_SECRET=```

This is an optional header, and is only assessed on the /api/v1/login route.
</x-section>
<x-section>
```
X-API-SECRET: value
```
</x-section>
</x-container>

#### X-API-TOKEN
<x-container>
<x-section>
The X-API-TOKEN is the authentication token and is required for all API requests

This is a required header.
</x-section>
<x-section>
```
X-API-TOKEN: value
```
</x-section>
</x-container>

#### X-Requested-With;
<x-container>
<x-section>
The X-Requested-With header is a security minded header, there is only one value accepted.

This is a required header.
</x-section>
<x-section>
```
X-Requested-With: XMLHttpRequest
```
</x-section>
</x-container>

#### Content-Type:application/json
<x-container>
<x-section>
When submitting data to the API you must declare the content type

This is a required header when using POST/PUT methods.
</x-section>
<x-section>
```
Content-Type: application/json
Content-Type: multipart/form-data
```
</x-section>
</x-container>

### Primary Keys

In version 5 of Invoice Ninja we move away from integer based primary keys and moved to hashed_id's, these are obfuscated string representations of the primary key for the all entity records.