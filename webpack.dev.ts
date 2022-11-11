import { merge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import baseConfig from './webpack.common';
import 'webpack-dev-server';

export default merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    open: ['http://localhost:4000'],
    client: {
      overlay: true,
      progress: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' }
      }
    }
  }
});
