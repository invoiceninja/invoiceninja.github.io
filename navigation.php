<?php

return [
    'User guide' => [
        'url' => '/docs/getting-started',
        'children' => [
            'Introduction' => '/docs/introduction',
            'Clients' => '/docs/clients',
            'Credits' => '/docs/credits',
            'Expenses' => '/docs/expenses',
            'Invoices' => '/docs/invoices',
            'Payments' => '/docs/payments',
            'Products' => '/docs/products',
            'Projects' => '/docs/projects',
            'Purchase Orders' => '/docs/purchase_orders',
            'Quotes' => '/docs/quotes',
            'Recurring Expenses' => '/docs/recurring-expenses',
            'Reports' => '/docs/reports',
            'Recurring Invoices' => '/docs/recurring-invoices',
            'Subscriptions' => '/docs/subscriptions',
            'Tasks' => '/docs/tasks',
            'Vendors' => '/docs/vendors',
            'Advanced Settings' => '/docs/advanced-settings',
            'Basic Settings' => '/docs/basic-settings',
            'PDF customization' => '/docs/custom-fields',
            'Troubleshooting' => '/docs/troubleshooting',
            // 'Online Payments' => '/docs/gateways',  // Content has been included in /docs/basic-settings now.
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
    'Self host' => [
        'url' => '/docs/self-host-installation',
        'children' => [
            'Installation' => '/docs/self-host-installation',
            'Updating' => '/docs/self-host-updating',
            'Env Variables' => '/docs/env-variables',
            'Troubleshooting' => '/docs/self-host-troubleshooting',
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
