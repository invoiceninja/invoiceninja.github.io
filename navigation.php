<?php

return [
    'User guide' => [
        'url' => '/docs/getting-started',
        'children' => [
            'Getting Started' => '/docs/getting-started',
            'Modules' => '/docs/modules',
            'Reports' => '/docs/reports',
            'Basic Settings' => '/docs/basic-settings',
            'Advanced Settings' => '/docs/advanced-settings',
            'PDF customization' => '/docs/custom-fields',
            'Gateways' => '/docs/gateways',
            'Payment Links' => '/docs/payment-links',
            'Migrating to V5' => '/docs/migration',
        ],
    ],
    'Self host' => [
        'url' => '/docs/self-host-installation',
        'children' => [
            'Installation' => '/docs/self-host-installation',
            'Troubleshooting' => '/docs/self-host-troubleshooting',
            'Updating' => '/docs/self-host-updating',
            '.env Variables' => '/docs/env-variables',
        ],
    ],
    'Hosted' => [
        'url' => '/docs/hosted-quickstart',
        'children' => [
            'Quick Start' => '/docs/hosted-quickstart',
            'Activate' => '/docs/hosted-activate',
            'Custom Domain' => '/docs/hosted-custom-domain',
            'Hosted Migration' => '/docs/hosted-migration',
            'Stripe Integration' => '/docs/hosted-stripe',
        ],
    ],
    'Developer guide' => [
        'url' => '/docs/developer-guide',
        'children' => [
            'Getting Started' => '/docs/developer-guide',
            'Auth' => '/docs/api/authentication',
            'Clients' => '/docs/api/clients',
            'Payment Gateways' => '/docs/payment-gateways',
            'Static Variables' => '/docs/statics',
        ],
    ],
    'Legal' => [
        'url' => '/docs/legal/license',
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
