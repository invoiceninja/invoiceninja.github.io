<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">

<head>
    <title>{{ $page->title }}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="referrer" content="always">
    <link rel="canonical" href="{{ $page->getUrl() }}">
    <meta name="description" content="{{ $page->description }}">

    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">

    @yield('before-closing-head')
</head>

<body class="font-sans antialiased text-gray-900 bg-gray-100">
    <div class="p-px bg-ninja-blue"></div>

    <nav class="py-4 uppercase bg-white border-b">
        <div id="navigation-content" class="container flex items-center justify-between px-4 md:px-0 md:mx-auto">
            <a href="/" id="left-side-logo">
                <img class="h-10" src="https://raw.githubusercontent.com/invoiceninja/invoiceninja/v5-develop/public/images/invoiceninja-black-logo-2.png" alt="Invoice Ninja logo" />
            </a>
            <section id="right-side-items" class="text-sm">
                <div class="hidden md:block md:space-x-5">
                    <input type="text" placeholder="Quick search..." class="px-4 py-2 border rounded hover:border-ninja-blue focus:border-ninja-blue focus:outline-none">
                    <a href="/docs/getting-started" class="py-2 border-b border-transparent hover:border-ninja-blue">Documentation</a>
                    <a href="https://app.swaggerhub.com/apis/invoiceninja/invoiceninja" target="_blank" class="py-2 border-b border-transparent hover:border-ninja-blue">API documentation</a>
                    <a href="https://app.invoiceninja.com" class="px-5 py-2 border rounded-full hover:border-ninja-blue">Log in</a>
                </div>
                <div class="flex flex-col md:hidden">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    </nav>

    @yield('body')
    @yield('before-closing-body')
</body>

</html>
