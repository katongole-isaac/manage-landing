const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const TerserWebpackPlugin = require("terser-webpack-plugin");

// Used when hosting app on github pages.
// *** Used to resolve the root path when hosted on github pages
// i.e root path starting like './' instead of '/
webpackConfig.output.publicPath = "./"

module.exports = merge(webpackConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        exclude: /node_modules/,
      }),
    ],
  },
});
