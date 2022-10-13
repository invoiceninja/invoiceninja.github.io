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
            'Quotes' => '/docs/quotes',
            'Credits' => '/docs/credits',
            'Projects' => '/docs/projects',
            'Tasks' => '/docs/tasks',
            'Vendors' => '/docs/vendors',
            'Purchase Orders' => '/docs/purchase_orders',
            'Expenses' => '/docs/expenses',
            'Recurring Expenses' => '/docs/recurring-expenses',
            'Reports' => '/docs/reports',
            'Basic Settings' => '/docs/basic-settings',
            'Advanced Settings' => '/docs/advanced-settings',
            'PDF customization' => '/docs/custom-fields',
            'Gateways' => '/docs/gateways',
            'Subscriptions' => '/docs/subscriptions',
        ],
    ],
    'Hosted' => [
        'url' => '',
        'children' => [
            'Quick Start' => '/docs/hosted-quickstart',
            'Activate' => '/docs/hosted-activate',
            'Custom Domain' => '/docs/hosted-custom-domain',
            'Hosted Migration' => '/docs/hosted-migration',
            'Stripe Integration' => '/docs/hosted-stripe',
        ],
    ],
    'Self host' => [
        'url' => '/docs/self-host-installation',
        'children' => [
            'Installation' => '/docs/self-host-installation',
            'Troubleshooting' => '/docs/self-host-troubleshooting',
            'Updating' => '/docs/self-host-updating',
            'Env Variables' => '/docs/env-variables',
        ],
    ],
    'Developer guide' => [
        'url' => '/docs/developer-guide',
        'children' => [
            'Auth' => '/docs/api/authentication',
            'Clients' => '/docs/api/clients',
            'Payment Gateways' => '/docs/payment-gateways',
            'Static Variables' => '/docs/statics',
        ],
    ],
    'Migrating to V5' => [
        'url' => '/docs/migration',
        'children' => [],
    ],
    'Legal' => [
        'url' => '',
        'children' => [
            'License' => '/docs/legal/license',
            'Terms of Service' => '/docs/legal/terms_of_service',
            'Data Privacy' => '/docs/legal/data_privacy',
            'Selfhost Data Privacy' => '/docs/legal/self_hosting_data',
            'Selfhost Terms' => '/docs/legal/self_hosting_terms',
            'GDPR' => '/docs/legal/gdpr',
        ],        
    ]

];
