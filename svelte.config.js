
import preprocess from 'svelte-preprocess';
import { less } from 'svelte-preprocess-less';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	files: {
		assets: 'static',
	},
	
	preprocess: preprocess({
		style: less(),
	}),
};

export default config;
