{{--<nav class="py-4 uppercase bg-white border-b sticky top-0 z-40">--}}
<nav class="py-4 sticky top-0 z-40 lg:z-50 w-full mx-auto bg-white border-b">
    <div id="navigation-content" class="flex items-center justify-between px-4 md:px-0 md:mx-4 lg:px-4 xl:mx-auto max-w-8xl">
        <div id="google_translate_element" style="width:250px;"></div>
        <a href="/" id="left-side-logo">
            <img class="h-10"
                 src="/assets/images/logo-rounded.png"
                 alt="Invoice Ninja logo"/>
        </a>
        <section id="right-side-items" class="text-sm">
            <div class="hidden md:hidden lg:block md:space-x-5">
                <input type="text" placeholder="Quick search ..." id="topSearchBox" data-lpignore="true"
                       class="pb-1 border-b hover:border-ninja-blue focus:border-ninja-blue focus:outline-none">
                <a href="/docs/getting-started" class="py-2 border-b border-transparent hover:border-ninja-blue">User Guide</a>
                <a href="https://api-docs.invoicing.co/" target="_blank"
                   class="py-2 border-b border-transparent hover:border-ninja-blue">API Documentation</a>
                <a target="_blank" href="https://invoicing.co" class="px-5 py-2 border rounded-full hover:border-ninja-blue">Go
                    to app</a>
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
        </section>
    </div>
    <div id="mobile-menu" class="hidden px-4 pt-4 flex flex-col">
        <a href="/docs/getting-started"
           class="py-2 border-b border-transparent hover:border-ninja-blue">User Guide</a>
        <a href="https://api-docs.invoicing.co/" target="_blank"
           class="py-2 border-b border-transparent hover:border-ninja-blue">API Documentation</a>
        <a href="https://invoicing.co" target="_blank"
           class="py-2 border-b border-transparent hover:border-ninja-blue">Go to app</a>
    </div>
</nav>