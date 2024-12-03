const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "lib", "cjs"),
    filename: "index.js",
    globalObject: "this",
    library: {
      type: "umd",
    },
    clean: true,
  },
  externals: {
    react: "react",
  },
  mode: "production",
  optimization: {
    minimize: true,
  },
  target: "web",
};
