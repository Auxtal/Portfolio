import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter({ edge: true })
	},
	preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
