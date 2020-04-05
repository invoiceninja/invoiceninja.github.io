const path = require('path')

	module.exports = context => ({
	home: false,
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
            { text: 'Home', link: '/next/' },
            { text: 'Github', link: 'http://github.com/invoiceninja/invoiceninja/' },
            { text: 'Version', items: [
            	{ text: 'Master', link: 'https://invoiceninja.github.io/', target:'_self', rel:''}
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
	        path: '/clients.md',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Invoices',   // required
	        path: '/invoices.md',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Products',   // required
	        path: '/products.md',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Payments',   // required
	        path: '/payments.md',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Settings',   // required
	        path: '/settings.md',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Self Host',   // required
	        path: '/selfhost.md',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      }
		]
    }
})