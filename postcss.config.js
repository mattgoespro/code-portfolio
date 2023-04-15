module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-preset-env"),
    require("postcss-fail-on-warn"),
    require("autoprefixer")
  ]
};
