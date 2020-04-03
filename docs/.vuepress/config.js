module.exports = context => ({
	  plugins: [
	    ['versioning', {
	      async onNewVersion(version, versionDestPath) {
	        const metadataFile = path.join(context.sourceDir, 'api', 'api.json')
	        if (await fs.exists(metadataFile)) {
	          const versioneddMetadataFile = path.join(versionDestPath, 'api', 'api.json')
	          await fs.copyFile(metadataFile, versioneddMetadataFile)
	        }
	      }
	    }],
	    'apidocs'
	  ]
	},
    title: 'InvoiceNinja',
    description: "A to Z documentation for Invoice InvoiceNinja",
    base: '/next/', 
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
});