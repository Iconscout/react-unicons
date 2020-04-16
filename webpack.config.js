const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "lib", "cjs"),
    filename: "index.js",
    globalObject: "this",
    libraryTarget: "umd",
  },
  externals: {
    react: "react",
  },
  mode: "production",
};
