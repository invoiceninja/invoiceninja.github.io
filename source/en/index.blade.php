@extends('_layouts.master', ['bodyClass' => '', 'locale' => 'en'])

@section('body')
@include('_partials.header', ['title' => 'Documentation', 'text' => 'What can we help with?'])

<div class="container px-8 my-10 md:mx-auto">

    <div class="grid place-items-center py-10">
        <input type="text" placeholder="Search Invoice Ninja" id="indexSearchBox" data-lpignore="true" class="h-12 text-lg border-none focus:outline-none block w-full rounded-mdsm:max-w-xs py-2 px-4">
    </div>

    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow border-t-4" style="border-color: rgb(84, 180, 52);">
            <a href="/en/user-guide">
                <div class="flex flex-1 flex-col p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto h-32 w-32 flex-shrink-0">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  <h1 class="mt-6 text-lg font-medium text-gray-900">{{ $page->__('texts.user_guide', 'en') }}</h1>
                </div>
            </a>
        </li>

        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow border-t-4" style="border-color: rgb(0, 128, 255);">
            <a href="/en/developer-guide">
                <div class="flex flex-1 flex-col p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto h-32 w-32 flex-shrink-0">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  <h1 class="mt-6 text-lg font-medium text-gray-900">{{ $page->__('texts.developer_resources', 'en') }}</h1>
                </div>
            </a>
        </li>

        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow border-t-4" style="border-color: rgb(255, 0, 0);">
            <a href="/en/getting-started/">
                <div class="flex flex-1 flex-col p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto h-32 w-32 flex-shrink-0">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  <h1 class="mt-6 text-lg font-medium text-gray-900">{{ $page->__('texts.self_host_installation', 'en') }}</h1>
                </div>
            </a>
        </li>

        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow border-t-4" style="border-color: rgb(255, 128, 0);">
            <a href="/en/migration">    
                <div class="flex flex-1 flex-col p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto h-32 w-32 flex-shrink-0">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  <h1 class="mt-6 text-lg font-medium text-gray-900">{{ $page->__('texts.migrate_to_v5', 'en') }}</h1>
                </div>
            </a>   
        </li>
        
    </ul>

    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-6">

        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
            <a href="https://invoiceninja.slack.com">
                <div class="flex flex-1 flex-col p-8">
                    <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src="/assets/images/slackbot.png" alt="">
                    <h1 class="mt-6 text-lg font-medium text-gray-900">Slack</h1>
                        <dl class="mt-1 flex flex-grow flex-col justify-between">
                            <dd class="text-sm text-gray-500"><a href="http://slack.invoiceninja.com">Not a member? Click for invite.</a></dd>
                      </dl>
                </div>
            </a>
        </li>

        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
            <a href="https://forum.invoiceninja.com">
                <div class="flex flex-1 flex-col p-8">
                    <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src="/assets/images/discourse.png" alt="">

                  <h1 class="mt-6 text-lg font-medium text-gray-900">Forum</h1>
                </div>
            </a>
        </li>

        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
            <a href="mailto:contact@invoiceninja.com">    
                <div class="flex flex-1 flex-col p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto h-32 w-32 flex-shrink-0">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                  <h1 class="mt-6 text-lg font-medium text-gray-900">Email</h1>
                </div>
            </a>   
        </li>
        
    </ul>

</div>
@endsection
