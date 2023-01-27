import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";

import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: path.resolve("./src/lib/components/"),
      $json: path.resolve("./src/lib/assets/data/"),
      $src: path.resolve("./src/")
    }
  }
};

export default config;
