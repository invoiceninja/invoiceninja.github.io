const path = require('path')

	module.exports = context => ({
    title: 'Invoice Ninja',
    description: "A to Z documentation for Invoice Ninja",
    base: '/', 
	plugins: ['versioning', {
		versionedSourceDir: path.resolve(context.sourceDir, '..', 'versioned_docs'),
	    pagesSourceDir: path.resolve(context.sourceDir, '..', 'unversioned_pages'),
	    onNewVersion(version, versionDestPath) {
	      // post-create hook
	      console.log(`Created version ${version} in ${versionDestPath}`)
	    }
	}],
    markdown: {
    	lineNumbers: true
  	},
    themeConfig:{
	    lastUpdated: 'Last Updated', 
	    smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'http://github.com/invoiceninja/invoiceninja/' },
            { text: 'Version', items: [
            	{ text: 'Master', link: 'https://invoiceninja.github.io/next/'}
            ]}
        ],
        sidebar: [
	      {
	        title: 'Home',   // required
	        path: '/',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Clients',   // required
	        path: '/clients/',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Invoices',   // required
	        path: '/invoices/',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Products',   // required
	        path: '/products/',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Payments',   // required
	        path: '/payments/',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Settings',   // required
	        path: '/settings/',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Self Host',   // required
	        path: '/selfhost/',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: [
	        	['/selfhost/installation.md', 'Installation'],
	        	['/selfhost/api.md', 'API'],
	        ]
	      }
		]
    }
})