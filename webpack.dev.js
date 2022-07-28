const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = (env, _argv) => {
  const webpackCommon = require('./webpack.common')(env, _argv);

  return merge(webpackCommon, {
    devtool: 'source-map',
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      })
    ],
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8081'
        }
      }
    }
  });
};
