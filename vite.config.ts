import { sveltekit } from "@sveltejs/kit/vite";
import { imagetools } from "vite-imagetools";
// @ts-expect-error Resolve declaration issue
import path from "path";

import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    sveltekit(),
    imagetools({
      removeMetadata: true
    })
  ],
  resolve: {
    alias: {
      $components: path.resolve("./src/lib/components/"),
      $css: path.resolve("./src/lib/assets/css/"),
      $json: path.resolve("./src/lib/assets/json/"),
      $routes: path.resolve("./src/routes"),
      $src: path.resolve("./src/"),
      $utils: path.resolve("./src/lib/utils/")
    }
  }
};

export default config;
