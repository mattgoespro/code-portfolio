import webpack, { Configuration } from "webpack";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlPlugin from "html-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import fs from "fs";

function generateStylesheetAliases() {
  const aliases = {};
  const basePath = "src/assets/styles";
  const stylesheetTypes = fs.readdirSync(path.resolve(__dirname, basePath));

  for (const stylesheetType of stylesheetTypes) {
    const stylesheets = fs.readdirSync(path.resolve(__dirname, `${basePath}/${stylesheetType}/`));

    for (const stylesheet of stylesheets.filter((s) => !s.includes(".d.ts"))) {
      aliases[stylesheet.substring(1, stylesheet.indexOf("."))] = path.resolve(
        __dirname,
        `${basePath}/${stylesheetType}/${stylesheet}`
      );
    }
  }

  return aliases;
}

const baseConfig: Configuration = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      ...generateStylesheetAliases(),
      svg: path.resolve(__dirname, "src/assets/svg")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: "({ isDisabled: true })"
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/css/[name].[contenthash:8].css",
      chunkFilename: "assets/styles/css/[name].[contenthash:8].chunk.css"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
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
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ["@svgr/webpack"]
      },
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
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
            loader: "@teamsupercell/typings-for-css-modules-loader",
            options: {
              formatter: "prettier",
              prettierConfigFile: path.resolve(__dirname, "./prettierrc")
            }
          },
          {
            loader: "css-loader",
            options: { modules: true }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        exclude: "/node_modules/",
        use: [
          MiniCssExtractPlugin.loader,
          "@teamsupercell/typings-for-css-modules-loader",
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  }
};

export default baseConfig;
