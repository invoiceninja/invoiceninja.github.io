<!DOCTYPE html>
<html lang="{{ $locale ?? 'en' }}">

<head>
    <title>{{ $page->title }}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="referrer" content="always">
    <link rel="canonical" href="{{ $page->getUrl() }}">
    <meta name="description" content="{{ $page->description }}">
    <meta name="docsearch:language" content="{{ $locale ?? 'en'}}" />
    <meta name="docsearch:version" content="{{ $page->__version() ?? 'v1.0.0'}}" />

    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
    <link rel="icon" type="image/png" href="/assets/images/favicon.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lunr/lunr.js"></script>
    <script type="text/javascript" src="/ind.js"></script>
    <script type="text/javascript" src="/index.js"></script>
    <style>
      .search-wrapper {
        position: relative;
        display: inline-block;
        width: 50%;
      }

        .results-list {
        position: absolute;
        background-color: white;
        border: 1px solid #ccc;
        padding: 0;
        margin: 0;
        list-style: none;
        max-height: 200px;
        overflow-y: scroll;
        width: calc(100% - 2px);
        z-index: 10000;
        top: 100%; /* This will pin the dropdown to the bottom of the search input */
        left: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        }

        .results-list li {
        padding: 8px;
        cursor: pointer;
        }

        .results-list li:hover {
        background-color: #eee;
        }
        .result-item {
          padding: 16px;
          cursor: pointer;
          border-bottom: 1px solid #f0f0f0;
        }

        .result-item:last-child {
          border-bottom: none;
        }

        .result-item:hover {
          background-color: #f9f9f9;
        }

        .result-title {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 4px;
          max-width: 400px;
        }

        .result-description {
          font-size: 14px;
          color: #777;
        }

    </style>
 
   <script>

      document.addEventListener('DOMContentLoaded', function () {

      let idx = lunr.Index.load(data);

      const input = document.getElementById('search-input');
      const resultsList = document.getElementById('results-list');

      input.addEventListener('input', function () {
        const query = input.value.toLowerCase().trim();

        const results = idx.search(query);

        // Clear previous results
        resultsList.innerHTML = '';

        if (query === '') {
          resultsList.style.display = 'none';
          return;
        }
        // Populate the dropdown results list
        results.forEach(result => {
        
          const matchedDoc = documents.find(doc => doc.id == result.ref);
        
          const li = document.createElement('li');
          li.className = 'result-item';

          const a = document.createElement('a');
          a.href = matchedDoc.uri;
          a.style.textDecoration = 'none'; // Remove the default underline from the link

          const div = document.createElement('div');
          div.className = 'result-title';
          div.textContent = matchedDoc.title + ' | ' + matchedDoc.sub_title;
          a.appendChild(div);

          const div2 = document.createElement('div');
          div2.className = 'result-description';
          div2.textContent = matchedDoc.body.substring(0, 150) + '...';
          a.appendChild(div2);

          li.appendChild(a);
          resultsList.appendChild(li);

        });

        resultsList.style.display = results.length ? 'block' : 'none';

      });

      // Hide the dropdown results list when clicking outside the search box
      document.addEventListener('click', function (event) {
        if (!event.target.closest('#search-box')) {
          resultsList.style.display = 'none';
        }

      })
      ;
    });
  </script>

@yield('before-closing-head')
</head>

@include('_partials.navigation', ['locale' => $locale])

<body class="font-sans antialiased text-gray-900 bg-white {{ $bodyClass ?? '' }}">
    @yield('body')
    @yield('before-closing-body')

    <script>
        document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
            let mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenu.classList.contains('hidden')) {
                return mobileMenu.classList.remove('hidden');
            }

            return mobileMenu.classList.add('hidden');
        });
    </script>

    <!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
    <script type="text/javascript">
        docsearch({
            apiKey: '4816218e8381d5a17beacd84823e9ea3',
            indexName: 'invoiceninja',
            inputSelector: '#topSearchBox',
            debug: false,
            searchParameters: {
                facetFilters: ['language:{{ $locale ?? "en" }}'],
            },
        });
    </script>
        <script type="text/javascript">
        docsearch({
            apiKey: '4816218e8381d5a17beacd84823e9ea3',
            indexName: 'invoiceninja',
            inputSelector: '#indexSearchBox',
            debug: false,
            searchParameters: {
                facetFilters: ['language:{{ $locale ?? "en" }}'],
            },
        });
    </script> -->

<style>
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video_container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}

</style>
</body>

</html>
