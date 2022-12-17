import { sveltekit } from '@sveltejs/kit/vite';
import path from "path"

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'$lib': path.resolve('./src/lib/'),
			'$json': path.resolve('./src/lib/assets/data/'),
			'$components': path.resolve('./src/lib/components/')
		},
	},
};

export default config;
