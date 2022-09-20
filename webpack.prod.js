const { merge } = require('webpack-merge');

module.exports = (_env, _argv) => {
  const webpackCommon = require('./webpack.common')(_env, _argv);

  return merge(webpackCommon, {
    devtool: 'inline-source-map',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080'
        }
      }
    }
  });
};
