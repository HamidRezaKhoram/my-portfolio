const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"start-d38fbe6d.js","js":["start-d38fbe6d.js","chunks/index-c8c9a2ed.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				id: "FlashCards",
				pattern: /^\/FlashCards\/?$/,
				names: [],
				types: [],
				path: "/FlashCards",
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
