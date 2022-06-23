const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = (env, _argv) => {
  const webpackCommon = require('./webpack.common')(env, _argv);

  return merge(webpackCommon, {
    devtool: 'source-map',
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      })
    ]
  });
};
