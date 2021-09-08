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

We built set of nice & simple wrapper methods in the main Inspector class, so you should be only responsible from passing data from & to Inspector.

### .. but I love Bootstrap more than Tailwind? What to do?

You can always publish the components & modify them fully. We're fine with that. Component classes are fully configurable.
