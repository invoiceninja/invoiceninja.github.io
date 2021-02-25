@extends('_layouts.master')

@yield('beforeBody')

@section('body')
    <div class="hidden top-0 absolute z-40 bg-white w-full h-screen" id="mobile-menu-overlay">
       <div class="p-6 flex items-top justify-between">
           <div>
               @foreach($page->navigation as $section => $props)
                   <div clasS="mb-8">
                       <a class="block hover:text-ninja-blue font-semibold uppercase {{ (trimPath($page->getPath()) == trimPath($props['url'])) ? 'text-ninja-blue border-ninja-blue' : '' }}"
                          href="{{ $props['url'] }}">{{ $section }}</a>

                       <div class="mt-2">
                           @foreach($props->children as $child => $url)
                               <a class="block hover:text-ninja-blue py-1 {{ (trimPath($page->getPath()) == trimPath($url)) ? 'text-ninja-blue' : '' }}"
                                  href="{{ $url }}">{{ $child }}</a>
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

    <div class="max-w-8xl grid grid-cols-12 md:gap-16 py-4 px-4 lg:mx-auto">
        <div class="hidden mr-4 space-y-6 md:block lg:col-span-2">
            <div class="hidden lg:block fixed mt-2">
                @foreach($page->navigation as $section => $props)
                    <div clasS="mb-8">
                        <a class="block hover:text-ninja-blue font-semibold uppercase {{ (trimPath($page->getPath()) == trimPath($props['url'])) ? 'text-ninja-blue border-ninja-blue' : '' }}"
                           href="{{ $props['url'] }}">{{ $section }}</a>

                        <div class="mt-2">
                            @foreach($props->children as $child => $url)
                                <a class="block hover:text-ninja-blue py-1 {{ (trimPath($page->getPath()) == trimPath($url)) ? 'text-ninja-blue' : '' }}"
                                   href="{{ $url }}">{{ $child }}</a>
                            @endforeach
                        </div>
                    </div>
                @endforeach
            </div>
        </div> <!-- End of sidebar -->

        <div class="col-span-12 md:col-span-7 p-4 prose mx-auto" style="max-width: 100% !important;" id="page-content">
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

        <div class="hidden md:block col-span-3 p-4">
            <div class="fixed overflow-y-auto pr-10 h-full pb-32" id="toc-container">
                <!-- Placeholder for table of contents -->
                <span class="text-sm uppercase block mb-3 text-ninja-blue">On this page</span>
            </div>
        </div>
    </div>
@stop

@section('before-closing-body')
    <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
@endsection
