const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');

module.exports = (env, argv) => {
  const webpackCommon = require('./webpack.common')(env, argv);

  return merge(webpackCommon, {
    devtool: 'source-map',
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: argv.openAnalyzer === true,
        reportFilename: 'bundle-size-report.html'
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
