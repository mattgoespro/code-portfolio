const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  const webpackCommon = require('./webpack.common')(env, argv);

  return merge(webpackCommon, {
    devtool: 'source-map',
    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    ],
    devServer: {
      proxy: {
        '/api': {
          target: env['api-target'] || 'http://localhost:8081'
        }
      }
    }
  });
};
