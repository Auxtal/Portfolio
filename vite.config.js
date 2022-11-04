import { sveltekit } from '@sveltejs/kit/vite';
import path from "path"

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'$json': path.resolve('./src/lib/assets/data/'),
		},
	},
};

export default config;
