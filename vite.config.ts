import { sveltekit } from "@sveltejs/kit/vite";
import { imagetools } from "vite-imagetools";
import path from "path";

import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [imagetools(), sveltekit()],
  resolve: {
    alias: {
      $components: path.resolve("./src/lib/components/"),
      $images: path.resolve("./src/images/"),
      $json: path.resolve("./src/lib/assets/data/"),
      $src: path.resolve("./src/")
    }
  }
};

export default config;
