@extends('_layouts.master')

@section('body')
    <div class="container flex py-4 mx-auto">
        <div class="hidden w-1/4 mr-4 space-y-6 md:block">
            @foreach($page->navigation as $section => $props)
            <div>
                <a class="block py-1 hover:text-ninja-blue font-semibold uppercase {{ (trimPath($page->getPath()) == trimPath($props['url'])) ? 'text-ninja-blue border-ninja-blue' : '' }}" href="{{ $props['url'] }}">{{ $section }}</a>

                <div class="mt-2">
                    @foreach($props->children as $child => $url)
                        <a class="block hover:text-ninja-blue py-1 {{ (trimPath($page->getPath()) == trimPath($url)) ? 'text-ninja-blue' : '' }}" href="{{ $url }}">{{ $child }}</a>
                    @endforeach
                </div>
            </div>
            @endforeach
        </div> <!-- End of sidebar -->

        <div class="w-full p-4 prose xl:prose-lg 2xl:prose-xl">
            @yield('content')
        </div> <!-- End of main content -->
    </div>
@stop

@section('before-closing-body')
    <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
@endsection
