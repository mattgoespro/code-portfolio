const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function setDevServerApiHost(env) {
  let apiTarget = env['api-target'];
  let apiHost;

  if (apiTarget === 'api') {
    apiHost = 'http://localhost:8080';
  } else if (apiTarget === 'stub') {
    apiHost = 'http://localhost:8081';
  } else if (apiTarget === 'local') {
    if (env.apiPort) {
      apiHost = `http://localhost:${env.apiPort}`;
    } else {
      throw new Error('API target port not specified.');
    }
  } else {
    throw new Error('API target not specified.');
  }

  return apiHost;
}

module.exports = function (_env, argv) {
  const buildMode = argv.mode;
  const apiHost = setDevServerApiHost(_env);

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(buildMode)
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/styles/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/styles/css/[name].[contenthash:8].chunk.css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack'
            }
          ]
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        },
        {
          test: /\.css$/,
          exclude: '/node_modules/',
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },

    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      client: {
        overlay: true
      },
      proxy: {
        '/api': {
          target: apiHost,
          pathRewrite: { '^/api': '' }
        }
      }
    }
  };
};
