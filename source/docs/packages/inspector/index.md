---
extends: _layouts.docs 
section: content
---

# Inspector

## About

Inpsector is package that provides simplified database record management. It aims to integrate into any Laravel application without taking over the frontend.

## Installation

Prefered way of installing Inspector is via Composer:

```bash 
composer require invoiceninja/inspector
```

## Requirements
- Laravel 8.x
- PHP 7.4+

## Why

We built Inspector with word **lightweight** in mind. It should be simple & should not take over your frontend. It doesn't care about which framework (if any) you use,
do you use Livewire, or anything else.

### How did we achieve this?

We built set of nice & simple wrapper methods in the main Inspector class, so you should be only responsible from passing data from & to Inspector. This way, Inspector
doesn't take over your frontend, nor it forces you to install Javascript or CSS frameworks.

### .. but I love Bootstrap more than Tailwind? What to do?

You can always publish the components & modify them fully. We're fine with that. Component classes are fully configurable.

## Usage

Like we previously said, you are reponsible from passing data from and to Inspector, so this is how it looks in the action. Let's say on frontend we want HTML table
with all available tables in our database.

### Showing all tables

To show all tables we can make use of `getTableNames()` method.

```php
public function index(\InvoiceNinja\Inspector $inspector)
{
    return view('some-page', [
        'tables' => $inspector->getTableNames()
    ]);
}
```

Now on frontend, we can make use of `x-inspector-tables` component to show all of them.

```html
<x-inspector-tables 
    :tables="$resources" 
    show-route-name="admin.resources.show" />
```

Now we should have a nice representation of all tables:

![alt text](/assets/images/packages/inspector/show-all-tables.png "Showing all tables")
