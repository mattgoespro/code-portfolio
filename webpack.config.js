const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = function (env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  const apiTarget = env.apiTarget;
  let apiHost;

  if (apiTarget === 'container') {
    apiHost = 'http://localhost:8080';
  } else if (apiTarget === 'stub') {
    apiHost = 'http://localhost:8081';
  }

  return {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? 'production' : 'development'
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
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: /\.module.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass')
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'file-loader'
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/styles/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/styles/css/[name].[contenthash:8].chunk.css'
      }),
      new HtmlWebpackPlugin({
        title: 'Build Output Management',
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
        inject: true,
        clean: true
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false
      }),
      new CssMinimizerPlugin()
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false
            },
            mangle: {
              safari10: true
            },
            output: {
              comments: false,
              ascii_only: true
            },
            warnings: false
          }
        }),
        new CssMinimizerPlugin()
      ],
      runtimeChunk: 'single'
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    devServer: {
      compress: true,
      open: true,
      port: 4000,
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
