<?php /** @noinspection PhpInconsistentReturnPointsInspection */

use Illuminate\Translation\FileLoader;
use Illuminate\Translation\Translator;
use Illuminate\Filesystem\Filesystem;

return [
    'production' => false,
    'baseUrl' => 'https://invoiceninja.github.io',
    'title' => 'Free Source Available Invoicing, Expenses & Time-Tracking | Invoice Ninja',
    'description' => 'The leading free source available online invoicing app for freelancers & businesses. Invoice, accept payments, track expenses, & time-tasks',
    'collections' => [],
    'navigation' => require_once('navigation.php'),
    'user_guide_navigation' => require_once('user_guide_navigation.php'),
    'self_host_navigation' => require_once('self_host_navigation.php'),
    'migration_navigation' => require_once('migration_navigation.php'),
    'developer_resources_navigation' => require_once('developer_resources_navigation.php'),
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
    '__version' => function () {
        return 'v1.0.1';
    },
    '__' => function ($page, $key, $locale = 'en') {
        if (is_null($locale)) {
            $locale = $page->locale;
        }

        // Prepare the FileLoader
        $loader = new FileLoader(new Filesystem(), './lang');
        // Register the Translator
        $translator = new Translator($loader, $locale);
        
        return $translator->get($key);
    },
];
