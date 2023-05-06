<?php

return [
    'self_host' => [
        'url' => '/:locale/self-host-installation',
        'children' => [
            'overview' => '/:locale/getting-started',
            'installation' => '/:locale/self-host-installation',
            'troubleshooting' => '/:locale/self-host-troubleshooting',
            'updating' => '/:locale/self-host-updating',
            'env_variables' => '/:locale/env-variables',
            'debug_mode' => '/:locale/self-host-debug-mode',

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
