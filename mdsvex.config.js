import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
	extensions: [".svelte.md", ".md", ".svx"],
	layout: {
		blog: "./src/lib/components/BlogLayout.svelte"
	},
	remarkPlugins: [],
	rehypePlugins: [],
	smartypants: {
		dashes: "oldschool"
	}
});

export default config;
