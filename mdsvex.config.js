import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".md"],
  remarkPlugins: [],
  rehypePlugins: [],
  smartypants: {
    dashes: "oldschool"
  }
});

export default config;
