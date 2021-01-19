<?php /** @noinspection PhpInconsistentReturnPointsInspection */

return [
    'production' => false,
    'baseUrl' => 'https://invoiceninja.github.io',
    'title' => 'Free Open-Source Invoicing, Expenses & Time-Tracking | Invoice Ninja',
    'description' => 'The leading free open-source online invoicing app for freelancers & businesses. Invoice, accept payments, track expenses, create proposals, & time-tasks',
    'collections' => [],
    'navigation' => require_once('navigation.php'),
    'isActive' => function ($page, $path) {
        return trimPath($page) == trimPath($path);
    },
    'isActiveParent' => function ($page, $menuItem): ?string {
        if (is_object($menuItem) && $menuItem->children) {
            return $menuItem->children->contains(function ($child) use ($page) {
                return trimPath($page->getPath()) == trimPath($child);
            });
        }
    },
    'repositoryUrl' => 'https://github.com/invoiceninja/invoiceninja.github.io',
];
