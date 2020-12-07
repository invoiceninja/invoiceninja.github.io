const path = require('path')

	module.exports = context => ({
	home: false,
    title: 'Invoice Ninja',
    description: "A to Z documentation for Invoice Ninja",
    base: '/', 
	plugins: [
			['@vuepress/nprogress'],
			['@vuepress/back-to-top'],
			['one-click-copy', {
			    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
			    copyMessage: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
			    duration: 300, // prompt message display time.
			    showInMobile: false // whether to display on the mobile side, default: false.
			}],
			['versioning', {
			versionedSourceDir: path.resolve(context.sourceDir, '..', 'versioned_docs'),
		    pagesSourceDir: path.resolve(context.sourceDir, '..', 'unversioned_pages'),
		    onNewVersion(version, versionDestPath) {
		      // post-create hook
		      console.log(`Created version ${version} in ${versionDestPath}`)
		    }
		}]
	],
    markdown: {
    	lineNumbers: false
  	},
    themeConfig:{
	    lastUpdated: 'Last Updated', 
	    smoothScroll: true,
        nav: [
            { text: 'User Guide', link: '/' },
            { text: 'Github', link: 'http://github.com/invoiceninja/invoiceninja/' },
            { text: 'Version', items: [
            	{ text: 'Master', link: 'https://invoiceninja.github.io/', target:'_self', rel:''}
            ]}
        ],
        sidebar: [
	      {
	        title: 'User Guide',   // required
	        path: '/',      // optional, which should be a absolute path.
	        collapsable: true, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: [
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
	        ]
	      },
	      {
	        title: 'Developer Guide',   // required
	        path: '/developer.md',      // optional, which should be a absolute path.
	        collapsable: true, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      },
	      {
	        title: 'Self Host',   // required
	        path: '/selfhost.md',      // optional, which should be a absolute path.
	        collapsable: true, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      }
		]
    }
})