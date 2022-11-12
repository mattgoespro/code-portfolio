import webpack, { Configuration } from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const baseConfig: Configuration = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      colors: path.resolve(__dirname, 'src/assets/styles/abstracts/_colors.module.scss'),
      mixins: path.resolve(__dirname, 'src/assets/styles/abstracts/_mixins.module.scss'),
      shared: path.resolve(__dirname, 'src/assets/styles/abstracts/_shared.module.scss')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })'
    }),
    new ForkTsCheckerPlugin({ async: false }),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/styles/css/[name].[contenthash:8].chunk.css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      // {
      //   test: /\.(jpeg|png)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: '/images/[name].[ext]'
      //   }
      // },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack'
          }
        ]
      },
      {
        test: /\.ts(x)?$/,
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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              formatter: 'prettier',
              prettierConfigFile: path.resolve(__dirname, './prettierrc')
            }
          },
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          MiniCssExtractPlugin.loader,
          '@teamsupercell/typings-for-css-modules-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
};

export default baseConfig;
