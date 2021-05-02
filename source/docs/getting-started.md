---
extends: _layouts.docs 
section: content
---

# Getting started

## Overview

Invoice Ninja is a invoicing application that makes sending invoices and receiving payments simple and easy. Our latest
version is a clean slate rewrite of our popular invoicing application which builds on the existing feature set and adds
a wide range of features and enhancements that you have asked for.

## Architecture

The app is divided into three main parts: the backend/API, the Admin Portal and the Client Portal.

### Backend - API

#### Lead developer: [David Bomba](https://twitter.com/deadbeefx0)

The API has been developed using [Laravel](https://laravel.com) the full API specification can be found [here](https://app.swaggerhub.com/apis/invoiceninja/invoiceninja). The latest code can be found in the [v5-stable](https://github.com/invoiceninja/invoiceninja/tree/v5-stable) and [v5-develop](https://github.com/invoiceninja/invoiceninja/tree/v5-develop) branches in the GitHub repo.

### Admin Portal - AP

#### Lead developer: [Hillel Coren](https://twitter.com/hillelcoren)

The Admin Portal has been developed using [Flutter](https://flutter.dev), it provides a consistent cross-platform experience with native applications for web, mobile and desktop. The latest code can be found [here](https://github.com/invoiceninja/admin-portal/).

### Client Portal - CP

#### Lead developer: [Benjamin Beganović](https://twitter.com/beganovichhh)

The Client Portal is also developed with Laravel along with [Tailwind](https://tailwindcss.com/).

<x-next url=/docs/introduction>Introduction</x-next>