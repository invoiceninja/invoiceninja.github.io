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

@include('_partials.navigation')

<body class="font-sans antialiased text-gray-900 bg-white {{ $bodyClass ?? '' }}">
    @yield('body')
    @yield('before-closing-body')

    <script>
        document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
            let mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenu.classList.contains('hidden')) {
                return mobileMenu.classList.remove('hidden');
            }

            return mobileMenu.classList.add('hidden');
        });
    </script>
</body>

</html>
