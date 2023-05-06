<?php

return [
    'developer_guide' => [
        'url' => '/:locale/developer-guide',
        'children' => [
            'getting_started' => '/:locale/developer-guide',
            'payment_gateways' => '/:locale/payment-gateways',
            'static_variables' => '/:locale/statics',
            'api_docs' => 'https://api-docs.invoicing.co/',
        ],
    ],

];
