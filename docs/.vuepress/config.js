module.exports = {
    title: 'InvoiceNinja',
    description: "A to Z documentation for Invoice InvoiceNinja",
    base: '/', 
    plugins: ['versioning'],
    theme: 'titanium',
    themeConfig:{
	    lastUpdated: 'Last Updated', 
	    smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'http://github.com/invoiceninja/invoiceninja/' },
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
	        title: 'Introduction',   // required
	        path: '/introduction/',      // optional, which should be a absolute path.
	        collapsable: false, // optional, defaults to true
	        sidebarDepth: 1,    // optional, defaults to 1
	        children: []
	      }
		]
    }
};
