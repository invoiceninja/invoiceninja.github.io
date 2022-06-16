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
            'Expenses' => '/docs/expenses',
            'Recurring Expenses' => '/docs/recurring-expenses',
            'Reports' => '/docs/reports',
            'Basic Settings' => '/docs/basic-settings',
            'Advanced Settings' => '/docs/advanced-settings',
            'Subscriptions' => '/docs/subscriptions',
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
