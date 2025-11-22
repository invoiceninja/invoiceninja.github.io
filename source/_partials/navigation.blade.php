{{-- <nav class="py-4 uppercase bg-white border-b sticky top-0 z-40 py-4 sticky top-0 z-40 lg:z-50 "> --}}
<meta name="locale" content="{{ $locale }}">

<nav class="py-4 sticky top-0 z-40 lg:z-50 w-full bg-white border-b">
    <div id="navigation-content" class="grid grid-cols-12">
        <div class="float-left pl-4 col-span-2">
            <a href="/{{ $locale }}" id=""><img class="object-contain h-10 mt-2	" src="/assets/images/logo-rounded.png" alt="Invoice Ninja logo" />
            </a>
        </div>
        @if (!$disable_search)
            <div class="search-wrapper w-full col-span-5 flex justify-center" id="search-box">
                <input type="text" id="search-input" placeholder="Search Invoice Ninja... (Ctrl K)" class="h-14 text-lg focus:outline-none rounded-mdsm:max-w-xs">
                <ul id="results-list" class="results-list"></ul>
            </div>
            <!-- <input type="text" placeholder="{{ $page->__('texts.quick_search', $locale) }}" id="topSearchBox" data-lpignore="true"
                class="pb-1 border-b hover:border-ninja-blue focus:border-ninja-blue focus:outline-none"> -->
        @endif
        <div id="right-side-items" class="text-sm w-full col-span-5 flex flex-grow justify-end pr-5">
            <div class="hidden md:hidden lg:block md:space-x-2">
                <span>
                    <a href="/{{ $locale }}/user-guide" class="py-2 border-b border-transparent hover:border-ninja-blue">{{ $page->__('texts.user_guide', $locale) }}</a>
                </span>
                <span>
                    <a href="/{{ $locale }}/self-host-installation" class="py-2 border-b border-transparent hover:border-ninja-blue">{{ $page->__('texts.self_host', $locale) }}</a>
                </span>
                <span>
                    <a href="https://api-docs.invoicing.co/" target="_blank" class="py-2 border-b border-transparent hover:border-ninja-blue">{{ $page->__('texts.api_documentation', $locale) }}</a>
                </span>
                <span>
                    <a href="https://github.com/invoiceninja/invoiceninja" target="_blank" class="py-2 border-b border-transparent hover:border-ninja-blue">
                        <svg class="inline mr-1 align-middle" width="16" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
                        </svg>
                        {{ $page->__('texts.repository', $locale) }}
                    </a>
                </span>
                <span>
                    <a target="_blank" href="https://app.invoicing.co" class="px-5 py-2 border rounded-full hover:border-ninja-blue">{{ $page->__('texts.go_to_app', $locale) }}</a>
                </span>
                <span>
                    <select id="locale" onchange="this.options[this.selectedIndex].value && (window.location = '/' + this.options[this.selectedIndex].value);" class="mt-2 rounded-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option value="en">EN</option>
                        <option value="fr_CA">Fr (CA)</option>
                    </select>
                </span>
            </div>
            <div class="flex flex-col lg:hidden">
                <button id="mobile-menu-toggle" class="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>

        </div>
    </div>
    <div id="mobile-menu" class="hidden px-4 pt-4 flex flex-col">
        <a href="/{{ $locale }}/getting-started" class="py-2 border-b border-transparent hover:border-ninja-blue"> {{ $page->__('texts.user_guide', $locale) }} </a>
        <a href="/{{ $locale }}/self-host-installation" class="py-2 border-b border-transparent hover:border-ninja-blue">{{ $page->__('texts.self_host', $locale) }}</a>
        <a href="https://api-docs.invoicing.co/" target="_blank" class="py-2 border-b border-transparent hover:border-ninja-blue"> {{ $page->__('texts.api_documentation', $locale) }} </a>
        <a href="https://github.com/invoiceninja/invoiceninja" target="_blank" class="py-2 border-b border-transparent hover:border-ninja-blue">
            <svg class="inline mr-1 align-middle" width="16" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
            </svg>
            {{ $page->__('texts.repository', $locale) }}
        </a>
        <a href="https://app.invoicing.co" target="_blank" class="py-2 border-b border-transparent hover:border-ninja-blue"> {{ $page->__('texts.go_to_app', $locale) }}</a>
        <select id="locale_mobile" onchange="this.options[this.selectedIndex].value && (window.location = '/' + this.options[this.selectedIndex].value);" class="mt-2 rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option value="en">EN</option>
            <option value="fr_CA">Fr (CA)</option>
        </select>
    </div>
</nav>

<script>
    let element = document.getElementById('locale_mobile');
    element.value = document.querySelector('meta[name="locale"]').content;

    let element2 = document.getElementById('locale');
    element2.value = document.querySelector('meta[name="locale"]').content;
</script>
