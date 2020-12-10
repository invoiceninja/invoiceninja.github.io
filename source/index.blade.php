@extends('_layouts.master')

@section('body')
@include('_partials.header', ['title' => 'Documentation', 'text' => 'What can we help with?'])

<div class="container px-8 my-10 md:mx-auto">
    <div class="grid grid-cols-12">
        <a href="/docs/getting-started" class="flex flex-col flex-wrap content-center justify-center h-64 col-span-12 p-4 text-center bg-white md:col-span-6">
            <h4 class="text-3xl font-semibold">Getting started</h4>
            <p class="mt-2">Learn how to get started with Invoice Ninja.</p>
        </a>

        <a href="/docs/troubleshooting" class="flex flex-col flex-wrap content-center justify-center h-64 col-span-12 p-4 text-center bg-gray-200 md:rounded-tr md:col-span-6">
            <h4 class="text-3xl font-semibold">Troubleshooting</h4>
            <p class="mt-2">Find solution for common issues.</p>
        </a>

        <a href="/docs/self-hosting/getting-started" class="flex flex-col flex-wrap content-center justify-center h-64 col-span-12 p-4 text-center bg-white md:bg-gray-200 md:col-span-6">
            <h4 class="text-3xl font-semibold">Self hosted guide</h4>
            <p class="mt-2">Learn more about self-hosting Invoice Ninja.</p>
        </a>

        <a href="/docs/api/getting-started" class="flex flex-col flex-wrap content-center justify-center h-64 col-span-12 p-4 text-center bg-gray-200 md:bg-white md:col-span-6">
            <h4 class="text-3xl font-semibold">API integration</h4>
            <p class="mt-2">Integrate Invoice Ninja in own projects.</p>
        </a>
    </div>

    <div class="flex flex-col flex-wrap content-center justify-center h-64 col-span-12 p-4 my-10 text-center bg-white md:col-span-6">
        <h4 class="text-2xl font-semibold md:text-3xl">Didn't find what you looking for?</h4>

        <div class="flex flex-col items-center justify-center mt-2 space-x-4 md:flex-row">
            <a class="pb-1 border-b border-transparent hover:border-ninja-blue" target="_blank" href="https://forum.invoiceninja.com">Forum</a>
            <a class="pb-1 border-b border-transparent hover:border-ninja-blue" target="_blank" href="https://www.invoiceninja.com/contact/">Technical support</a>
        </div>
    </div>
</div>
@endsection
