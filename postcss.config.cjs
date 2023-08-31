module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({
      preset: "default"
    }),
    require("tailwindcss/nesting"),
    require("tailwindcss")
  ]
};
