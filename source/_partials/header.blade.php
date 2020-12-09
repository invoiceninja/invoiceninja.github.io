<div class="flex flex-col items-center min-w-full px-4 py-20 text-white pattern-background">
    <h2 class="text-4xl md:text-5xl">{{ $title }}</h2>
    <p class="mt-2 text-xl">{{ $text ?? '' }}</p>

    {{ $slot }}
</div>
