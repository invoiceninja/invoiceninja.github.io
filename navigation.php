<?php

return [
    'User guide' => [
        'url' => '/docs/getting-started',
        'children' => [
            'Introduction' => '/docs/introduction',
            'Clients' => '/docs/clients',
            'Products' => '/docs/products',
            'Invoices' => '/docs/invoices',
            'Recurring Invoices' => '/docs/recurring-invoices',
            'Payments' => '/docs/payments',
            'Settings' => '/docs/settings',
            'PDF customization' => '/docs/custom-fields',
        ],
    ],
    'Developer guide' => [
        'url' => '/docs/developer-guide',
        'children' => [],
    ],
    'Self host' => [
        'url' => '#',
        'children' => [
            'Installation' => '/docs/self-host-installation',
            'Updating' => '/docs/self-host-updating',
            'Troubleshooting' => '/docs/self-host-troubleshooting',
        ],
    ],
    'Migrating to V5' => [
        'url' => '/docs/migration',
        'children' => [],
    ]
];
