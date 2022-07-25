const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-3e2288cf.js","js":["start-3e2288cf.js","chunks/index-a39e3231.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js'))
		],
		routes: [
			{
				type: 'page',
				id: "ThirdPartOfText",
				pattern: /^\/ThirdPartOfText\/?$/,
				names: [],
				types: [],
				path: "/ThirdPartOfText",
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
