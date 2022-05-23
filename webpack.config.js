/**
 * Start webpack in dev mode: webpack-dev-server --mode development --port 4000
 */

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

  if (!isProduction) {
    if (apiTarget === 'api-container') {
      apiHost = 'http://localhost:8080';
    } else if (apiTarget === 'api-stub') {
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
  } else {
    // TODO: Backend docker target
  }

  return {
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
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
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/styles/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/styles/css/[name].[contenthash:8].chunk.css'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
      }),
      new HtmlWebpackPlugin({
        title: 'Build Output Management',
        template: path.resolve(__dirname, 'public/index.html'),
        inject: true,
        clean: true
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false
      }),
      new CssMinimizerPlugin()
    ].filter(Boolean),
    // optimization: {
    //   minimize: isProduction,
    //   minimizer: [
    //     new TerserWebpackPlugin({
    //       terserOptions: {
    //         compress: {
    //           comparisons: false
    //         },
    //         mangle: {
    //           safari10: true
    //         },
    //         output: {
    //           comments: false,
    //           ascii_only: true
    //         },
    //         warnings: false
    //       }
    //     }),
    //     new CssMinimizerPlugin()
    //   ],

    //   runtimeChunk: 'single'
    // },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
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
