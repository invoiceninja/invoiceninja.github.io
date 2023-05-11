{{--<nav class="py-4 uppercase bg-white border-b sticky top-0 z-40 py-4 sticky top-0 z-40 lg:z-50 ">--}}
<meta name="locale" content="{{ $locale }}">

<nav class="py-4 sticky top-0 z-40 lg:z-50 w-full bg-white border-b">
    <div id="navigation-content" class="grid grid-cols-12 gap-4">
        <div class="float-left pl-4 col-span-2">
            <a href="/{{ $locale }}" id=""><img class="object-contain h-10 mt-2	"
                src="/assets/images/logo-rounded.png"
                alt="Invoice Ninja logo"/>
            </a>    
        </div>
        @if(!$disable_search)
        <div class="search-wrapper w-full col-span-6  flex justify-center"  id="search-box">
                <input type="text" id="search-input" placeholder="Search Invoice Ninja..." class="h-14 text-lg focus:outline-none rounded-mdsm:max-w-xs">
            <ul id="results-list" class="results-list"></ul>
        </div>
        <!-- <input type="text" placeholder="{{ $page->__('texts.quick_search', $locale) }}" id="topSearchBox" data-lpignore="true"
                class="pb-1 border-b hover:border-ninja-blue focus:border-ninja-blue focus:outline-none"> -->
        @endif
        <div id="right-side-items" class="text-smw-full px-5 col-span-4 flex justify-end">
            <div class="hidden md:hidden lg:block md:space-x-5">
                
                <span>
                       <a href="/{{ $locale }}/user-guide" class="py-2 border-b border-transparent hover:border-ninja-blue">{{ $page->__('texts.user_guide', $locale) }}</a>
                </span>
                <span>
                       <a href="https://api-docs.invoicing.co/" target="_blank"
                   class="py-2 border-b border-transparent hover:border-ninja-blue">{{ $page->__('texts.api_documentation', $locale) }}</a>
                </span>
                <span>
                <a target="_blank" href="https://invoicing.co" class="px-5 py-2 border rounded-full hover:border-ninja-blue">{{ $page->__('texts.go_to_app', $locale) }}</a>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
            
        </div>
    </div>
    <div id="mobile-menu" class="hidden px-4 pt-4 flex flex-col">
        <a href="/{{ $locale }}/getting-started"
           class="py-2 border-b border-transparent hover:border-ninja-blue"> {{ $page->__('texts.user_guide', $locale) }} </a>
        <a href="https://api-docs.invoicing.co/" target="_blank"
           class="py-2 border-b border-transparent hover:border-ninja-blue"> {{ $page->__('texts.api_documentation', $locale) }} </a>
        <a href="https://invoicing.co" target="_blank"
           class="py-2 border-b border-transparent hover:border-ninja-blue"> {{ $page->__('texts.go_to_app', $locale) }}</a>
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