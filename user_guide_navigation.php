<?php

return [
    'user_guide' => [
        'url' => '#',
        'children' => [
            'getting_started' => '/:locale/user-guide',
            'faq' => '/:locale/faq',
            'payment_gateways' => '/:locale/gateways',
            'clients' => '/:locale/clients',
            'client_portal' => '/:locale/client-portal',
            'invoices' => '/:locale/invoices',
            'recurring_invoices' => '/:locale/recurring-invoices',
            'products' => '/:locale/products',
            'payments' => '/:locale/payments',
            'taxes' => '/:locale/taxes',
            'quotes' => '/:locale/quotes',
            'expenses' => '/:locale/expenses',
            'credits' => '/:locale/credits',
            'projects' => '/:locale/projects',
            'tasks' => '/:locale/tasks',
            'purchase_orders' => '/:locale/purchase_orders',
            'recurring_expenses' => '/:locale/recurring-expenses',
            'reports' => '/:locale/reports',
            'subscriptions' => '/:locale/subscriptions',
            'vendors' => '/:locale/vendors',
            'banking' => '/:locale/banking',
            'transactions' => '/:locale/transactions',
            'basic_settings' => '/:locale/basic-settings',
            'advanced_settings' => '/:locale/advanced-settings',
        ],
    ],
    'advanced_topics' => [
        'url' => '#',
        'children' => [
            'email_customization' => '/:locale/email-customization',
            'pdf_customization' => '/:locale/custom-fields',
            'import_export' => '/:locale/import-and-export',
            'qr_codes' => '/:locale/qr-codes',
            'templates' => '/:locale/templates',
        ],
    ],
    'hosted' => [
        'url' => '#',
        'children' => [
            'quick_start' => '/:locale/hosted-quickstart',
            'activate' => '/:locale/hosted-activate',
            'custom_domain' => '/:locale/hosted-custom-domain',
            'hosted_migration' => '/:locale/hosted-migration',
            'mail_servers' => '/:locale/hosted-mail',
            'stripe_integration' => '/:locale/hosted-stripe',
            'troubleshooting' => '/:locale/hosted-troubleshooting',
            'delete_account' => '/:locale/hosted-delete-account',
        ],
    ],

];
