const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = (env, argv) => {
  const webpackCommon = require('./webpack.common')(env, argv);

  return merge(webpackCommon, {
    devtool: 'source-map',
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        openAnalyzer: argv.openAnalyzer === true,
        reportFilename: 'bundle-size-report.html',
        statsOptions: {
          assets: true,
          children: true,
          entrypoints: true,
          performance: true,
          usedExports: true,
          publicPath: true
        }
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
