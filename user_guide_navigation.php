<?php

return [
    'user_guide' => [
        'url' => '/:locale/getting-started',
        'children' => [
            'getting_started' => '/:locale/user-guide',
            'banking' => '/:locale/banking',
            'clients' => '/:locale/clients',
            'credits' => '/:locale/credits',
            'expenses' => '/:locale/expenses',
            'invoices' => '/:locale/invoices',
            'payments' => '/:locale/payments',
            'products' => '/:locale/products',
            'projects' => '/:locale/projects',
            'purchase_orders' => '/:locale/purchase_orders',
            'recurring_expenses' => '/:locale/recurring-expenses',
            'recurring_invoices' => '/:locale/recurring-invoices',
            'reports' => '/:locale/reports',
            'quotes' => '/:locale/quotes',
            'subscriptions' => '/:locale/subscriptions',
            'tasks' => '/:locale/tasks',
            'taxes' => '/:locale/taxes',
            'transactions' => '/:locale/transactions',
            'vendors' => '/:locale/vendors',
            'basic_settings' => '/:locale/basic-settings',
            'advanced_settings' => '/:locale/advanced-settings',
        ],
    ],
    'advanced_topics' => [
        'url' => '#',
        'children' => [
            'email_customization' => '/:locale/email-customization',
            'import_export' => '/:locale/import-and-export',
            'pdf_customization' => '/:locale/custom-fields',
            'payment_gateways' => '/:locale/gateways',
            'qr_codes' => '/:locale/qr-codes',
        ],        
    ],
    'hosted' => [
        'url' => '/:locale/hosted-quickstart',
        'children' => [
            'quick_start' => '/:locale/hosted-quickstart',
            'activate' => '/:locale/hosted-activate',
            'custom_domain' => '/:locale/hosted-custom-domain',
            'hosted_migration' => '/:locale/hosted-migration',
            'mail_servers' => '/:locale/hosted-mail',
            'stripe_integration' => '/:locale/hosted-stripe',
        ],
    ],

];
