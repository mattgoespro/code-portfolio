const { merge } = require('webpack-merge');

module.exports = (env, argv) => {
  const webpackCommon = require('./webpack.common')(env, argv);

  return merge(webpackCommon, {
    devtool: 'source-map',
    devServer: {
      proxy: {
        '/api': {
          target: env['api-target'] || 'http://localhost:8081'
        }
      }
    }
  });
};
