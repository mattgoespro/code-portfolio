const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function setDevServerApiHost(env) {
  let apiTarget = env['api-target'];
  let apiHost;
  let hostName;

  if (apiTarget === 'api') {
    apiHost = 'http://localhost:8080';
    hostName = 'API';
  } else if (apiTarget === 'stub') {
    apiHost = 'http://localhost:8081';
    hostName = 'API Stub';
  } else if (apiTarget === 'local') {
    if (env.apiPort) {
      apiHost = `http://localhost:${env.apiPort}`;
    } else {
      throw new Error('API target port not specified.');
    }
  }

  if (hostName === 'API') {
    console.log(`
      ___  _               _    _                        _  _    _        ___  _  _    _  _        _         _    ___  ___ 
     / __|| |_  __ _  _ _ | |_ (_) _ _   __ _   __ __ __(_)| |_ | |_     / __|(_)| |_ | || | _  _ | |__     /_\\  | _ \\|_ _|
     \\__ \\|  _|/ _\` || '_||  _|| || \' \\ / _\` |  \\ V  V /| ||  _|| ' \\   | (_ || ||  _|| __ || || || '_ \\   / _ \\ |  _/ | |
     |___/ \\__|\\__,_||_|   \\__||_||_||_|\\__, |   \\_/\\_/ |_| \\__||_||_|   \\___||_| \\__||_||_| \\_,_||_.__/  /_/ \\_\\|_|  |___|
                                        |___/                                                                              
    `);
  } else if (hostName === 'API Stub') {
    console.log(`
      ___  _               _    _                        _  _    _       ___  _          _    
     / __|| |_  __ _  _ _ | |_ (_) _ _   __ _   __ __ __(_)| |_ | |_    / __|| |_  _  _ | |__ 
     \\__ \\|  _|/ _\` || '_||  _|| || ' \\ / _\` |  \\ V  V /| ||  _|| ' \\   \\__ \\|  _|| || || '_ \\
     |___/ \\__|\\__,_||_|   \\__||_||_||_|\\__, |   \\_/\\_/ |_| \\__||_||_|  |___/ \\__| \\_,_||_.__/
                                        |___/                                                 
    `);
  } else {
    console.log(`
      ___  _               _    _                       _  _    _                _       _    ___  ___                             
     / __|| |_  __ _  _ _ | |_ (_) _ _   __ _  __ __ __(_)| |_ | |_   ___  _  _ | |_    /_\\  | _ \\|_ _|  _ __  _ _  ___ __ __ _  _ 
     \\__ \\|  _|/ _\` || '_||  _|| || ' \\ / _\` | \\ V  V /| ||  _|| ' \\ / _ \\| || ||  _|  / _ \\ |  _/ | |  | '_ \\| '_|/ _ \\ \\ /| || |
     |___/ \\__|\\__,_||_|   \\__||_||_||_|\\__, |  \\_/\\_/ |_| \\__||_||_|\\___/ \\_,_| \\__| /_/ \\_\\|_|  |___| | .__/|_|  \\___//_\\_\\ \\_, |
                                        |___/                                                           |_|                   |__/ 

    `);
  }

  return apiHost;
}

module.exports = function (_env, argv) {
  const buildMode = argv.mode;
  const apiHost = setDevServerApiHost(_env);

  return {
    entry: './src/main.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        shared: path.resolve(__dirname, 'src/app/assets/styles/shared.scss')
      }
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
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass')
              }
            }
          ]
        }
      ]
    },

    devServer: {
      compress: true,
      historyApiFallback: true,
      open: ['http://localhost:4000/home'],
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
