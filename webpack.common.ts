import { readdirSync } from "fs";
import { resolve as resolvePath } from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import MiniCssExtractWebpackPlugin from "mini-css-extract-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";
import TsconfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration, DefinePlugin } from "webpack";

function generateStylesheetAliases() {
  const aliases = {};
  const basePath = "src/app/Assets/Styles";
  const stylesheets = readdirSync(resolvePath(__dirname, basePath)).filter(
    (s) => !s.includes(".d.ts")
  );

  for (const stylesheet of stylesheets) {
    aliases[stylesheet.substring(1, stylesheet.indexOf("."))] = resolvePath(
      __dirname,
      `${basePath}/${stylesheet}`
    );
  }

  return aliases;
}

const imageMinimizerPluginFileMatcher = /\.(jpe?g|png|svg)$/i;

const baseConfig: Configuration = {
  entry: "./src/main.tsx",
  output: {
    path: resolvePath(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".jpg", ".png"],
    plugins: [new TsconfigPathsWebpackPlugin()],
    alias: {
      ...generateStylesheetAliases(),
      "@SVG": resolvePath(__dirname, "src/app/Assets/SVG"),
      "@Images": resolvePath(__dirname, "src/app/Assets/Images")
    }
  },
  plugins: [
    new DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: "({ isDisabled: true })"
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: "write-references",
        build: false,
        configFile: resolvePath(__dirname, "./tsconfig.json"),
        configOverwrite: {
          compilerOptions: {
            outDir: "./dist"
          }
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: resolvePath(__dirname, "public/index.html"),
      favicon: resolvePath(__dirname, "public/favicon.ico"),
      inject: true
    }),
    new MiniCssExtractWebpackPlugin({
      filename: "assets/styles/css/[name].[contenthash:8].css",
      chunkFilename: "assets/styles/css/[name].[contenthash:8].chunk.css"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            test: imageMinimizerPluginFileMatcher,
            plugins: ["imagemin-mozjpeg", "imagemin-pngquant", "imagemin-svgo", "svgo"]
          }
        }
      })
    ],
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
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/ // *.svg?url
      },
      // {
      //   test: imageFileMatcher,
      //   loader: ImageMinimizerPlugin.loader,
      //   enforce: "pre",
      //   options: {
      //     minimizer: {
      //       implementation: ImageMinimizerPlugin.imageminMinify,
      //       options: imageMinimizerPluginOptions
      //     }
      //   }
      // },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource"
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
          MiniCssExtractWebpackPlugin.loader,
          {
            loader: "@teamsupercell/typings-for-css-modules-loader",
            options: {
              formatter: "prettier",
              prettierConfigFile: resolvePath(__dirname, ".prettierrc.js")
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
          MiniCssExtractWebpackPlugin.loader,
          "@teamsupercell/typings-for-css-modules-loader",
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  }
};

export default baseConfig;
