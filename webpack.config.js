var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: [
    "babel-polyfill",
    "./app/index.js"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: { "presets": ["react", "babel-preset-es2015", "babel-preset-stage-3"]}
    }]
  },
  plugins: [HtmlWebpackPluginConfig]
}
