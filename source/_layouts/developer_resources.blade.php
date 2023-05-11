@extends('_layouts.master', ['bodyClass' => '', 'locale' => $page->locale, 'disable_search' => false])


@section('before-closing-head')
    <link rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/styles/agate.min.css">

    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/highlight.min.js"></script>

    <script>hljs.highlightAll();</script>
@stop

@yield('beforeBody')

@section('body')
    <div class="hidden top-0 absolute z-40 bg-white w-full h-screen" id="mobile-menu-overlay">
       <div class="p-6 flex items-top justify-between">
           <div>
               @foreach($page->developer_resources_navigation as $section => $props)
                   <div clasS="mb-8">
                       <a class="block hover:text-ninja-blue font-semibold uppercase {{ (trimPath($page->getPath()) == trimPath($props['url'])) ? 'text-ninja-blue border-ninja-blue' : '' }}"
                          href="{{ str_replace(':locale', $page->locale ?? 'en', $props['url']) }}"></a>

                       <div class="mt-2">
                           @foreach($props->children as $child => $url)
                               <a class="block hover:text-ninja{{ $page->__("texts.{$section}", $page->locale) }}-blue py-1 {{ (trimPath($page->getPath()) == trimPath($url)) ? 'text-ninja-blue' : '' }}"
                                  href="{{ str_replace(':locale', $page->locale, $url) }}">{{ $page->__("texts.{$child}", $page->locale) }}</a>
                           @endforeach
                       </div>
                   </div>
               @endforeach
           </div>
           <div>
                <button onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden');">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
           </div>
       </div>
    </div>

    <div class="max-w-12xl grid grid-cols-12 py-2 px-2 lg:mx-auto">
        <div class="hidden space-y-6 md:block lg:col-span-2">
            <div class="hidden lg:block fixed mt-2 h-full overflow-y-auto pb-32 pr-16 pl-4">
                @foreach($page->developer_resources_navigation as $section => $props)
                    <div clasS="mb-8">
                        <a class="block hover:text-ninja-blue font-semibold uppercase {{ (trimPath($page->getPath()) == trimPath($props['url'])) ? 'text-ninja-blue border-ninja-blue' : '' }}"
                          href="{{ str_replace(':locale', $page->locale ?? 'en', $props['url']) }}">{{ $page->__("texts.{$section}", $page->locale) }}</a>


                        <div class="mt-2">
                            @foreach($props->children as $child => $url)
                                <a class="block hover:text-ninja-blue py-1 {{ (trimPath($page->getPath()) == trimPath($url)) ? 'text-ninja-blue' : '' }}"
                                  href="{{ str_replace(':locale', $page->locale, $url) }}">{{ $page->__("texts.{$child}", $page->locale) }}</a>
                            @endforeach
                        </div>
                    </div>
                @endforeach
            </div>
        </div> <!-- End of sidebar -->

        <div class="col-span-12 md:col-span-8 prose mx-auto max-w-max" id="page-content">
            <div class="block lg:hidden flex flex-col mb-4 lg:mb-0">
                <button onclick="document.getElementById('mobile-menu-overlay').classList.remove('hidden');">&#8592; Documentation</button>
            </div>

            @yield('content')

            <a href="{{ $page->repositoryUrl . '/blob/v5-rework/source' . $page->getPath() }}.md"
               class="pt-4 border-t inline-flex items-center w-full block">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="feather feather-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span class="ml-2">Want to contribute? Edit this page on GitHub!</span>
            </a>
        </div> <!-- End of main content -->

        <div class="hidden md:block col-span-2 p-4">
            <div class="fixed overflow-y-auto pr-4 h-full pl-4 pb-32 text-sm" id="toc-container">
                <!-- Placeholder for table of contents -->
                <span class="text-sm uppercase block mb-3 text-ninja-blue">On this page</span>
            </div>
        </div>
    </div>
@stop

@section('before-closing-body')
    <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
@endsection
