const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["fav.png","fav2.png","fav3.png","favicon(2).png","favicon.png","favicon2.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-7b6846c2.js","js":["start-7b6846c2.js","chunks/index-d2f99432.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			{
				type: 'endpoint',
				id: "js",
				pattern: /^\/js\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/js.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
