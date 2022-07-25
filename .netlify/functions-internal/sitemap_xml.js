const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"start-d38fbe6d.js","js":["start-d38fbe6d.js","chunks/index-c8c9a2ed.js"],"css":[]},
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
