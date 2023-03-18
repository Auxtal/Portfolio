module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  ignorePatterns: ["*.cjs"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  plugins: ["svelte3", "@typescript-eslint"],
  root: true,
  settings: {
    "svelte3/typescript": () => require("typescript")
  }
};
