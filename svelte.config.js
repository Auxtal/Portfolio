import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter()
  },
  preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)]
};

export default config;
