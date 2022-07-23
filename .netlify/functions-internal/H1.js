const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["fav3.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-875bf05d.js","js":["start-875bf05d.js","chunks/index-a39e3231.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "H1",
				pattern: /^\/H1\/?$/,
				names: [],
				types: [],
				path: "/H1",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
