<?php

return [
    'User guide' => [
        'url' => '/:locale/getting-started',
        'children' => [
            'Getting Started' => '/:locale/getting-started',
            'Modules' => '/:locale/modules',
            'Reports' => '/:locale/reports',
            'Basic Settings' => '/:locale/basic-settings',
            'Advanced Settings' => '/:locale/advanced-settings',
            'PDF customization' => '/:locale/custom-fields',
            'Gateways' => '/:locale/gateways',
            'Payment Links' => '/:locale/payment-links',
            'Migrating to V5' => '/:locale/migration',
        ],
    ],
    'Self host' => [
        'url' => '/:locale/self-host-installation',
        'children' => [
            'Installation' => '/:locale/self-host-installation',
            'Troubleshooting' => '/:locale/self-host-troubleshooting',
            'Debug Mode' => '/:locale/self-host-debug-mode',
            'Updating' => '/:locale/self-host-updating',
            '.env Variables' => '/:locale/env-variables',
        ],
    ],
    'Hosted' => [
        'url' => '/:locale/hosted-quickstart',
        'children' => [
            'Quick Start' => '/:locale/hosted-quickstart',
            'Activate' => '/:locale/hosted-activate',
            'Custom Domain' => '/:locale/hosted-custom-domain',
            'Hosted Migration' => '/:locale/hosted-migration',
            'Stripe Integration' => '/:locale/hosted-stripe',
            'Troubleshooting' => '/:locale/hosted-troubleshooting',
        ],
    ],
    'Developer guide' => [
        'url' => '/:locale/developer-guide',
        'children' => [
            'Getting Started' => '/:locale/developer-guide',
            'Auth' => '/:locale/api/authentication',
            'Clients' => '/:locale/api/clients',
            'Payment Gateways' => '/:locale/payment-gateways',
            'Static Variables' => '/:locale/statics',
        ],
    ],
    'legal' => [
        'url' => '/:locale/legal/license',
        'children' => [
            'license' => '/:locale/legal/license',
            'terms_of_service' => '/:locale/legal/terms_of_service',
            'data_privacy' => '/:locale/legal/data_privacy',
            'selfhost_data_privacy' => '/:locale/legal/self_hosting_data',
            'selfhost_terms' => '/:locale/legal/self_hosting_terms',
            'gdpr' => '/:locale/legal/gdpr',
        ],        
    ]

];
