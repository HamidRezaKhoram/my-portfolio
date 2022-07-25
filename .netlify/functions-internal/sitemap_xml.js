const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-10aa36fc.js","js":["start-10aa36fc.js","chunks/index-a39e3231.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			{
				type: 'endpoint',
				id: "sitemap.xml",
				pattern: /^\/sitemap\.xml$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/sitemap.xml.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
