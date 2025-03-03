const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');

mix.jigsaw()
    .js('source/_assets/js/main.js', 'js')
    .postCss('source/_assets/css/main.css', 'css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .styles([
        'node_modules/@docsearch/css/dist/style.css'
    ], 'source/assets/build/css/docsearch.min.css')
    .copy('node_modules/lunr/lunr.min.js', 'source/assets/build/js')
    .copy('node_modules/video.js/dist/video.min.js', 'source/assets/build/js')
    .copy('node_modules/video.js/dist/video-js.css', 'source/assets/build/css')
    .options({
        processCssUrls: false,
    })
    .version();
