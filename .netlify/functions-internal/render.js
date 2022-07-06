const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-78af8a71.js","js":["start-78af8a71.js","chunks/index-0b8a7a3e.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "js",
				pattern: /^\/js\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/js.js'))
			},
			{
				type: 'page',
				id: "aboutPopUp",
				pattern: /^\/aboutPopUp\/?$/,
				names: [],
				types: [],
				path: "/aboutPopUp",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
