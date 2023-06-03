import MiniCssExtractWebpackPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import fs from "fs";
import webpack, { Configuration } from "webpack";
import path from "path";

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

const imageFileMatcher = /\.(jpe?g|png|svg)$/i;

const imageMinimizerPluginOptions = {
  minimizer: {
    implementation: ImageMinimizerPlugin.imageminMinify,
    options: {
      test: imageFileMatcher,
      // Lossless optimization
      plugins: [
        "imagemin-mozjpeg",
        "imagemin-pngquant",
        "imagemin-svgo",
        [
          "svgo",
          {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                    addAttributesToSVGElement: {
                      params: {
                        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }]
                      }
                    }
                  }
                }
              }
            ]
          }
        ]
      ]
    }
  }
} as const;
const baseConfig: Configuration = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: "./tsconfig.json"
      })
    ],
    alias: {
      ...generateStylesheetAliases(),
      svg: path.resolve(__dirname, "src/assets/svg")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
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
        configFile: path.resolve(__dirname, "./tsconfig.json"),
        configOverwrite: {
          compilerOptions: {
            outDir: "./dist"
          }
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      inject: true
    }),
    new MiniCssExtractWebpackPlugin({
      filename: "assets/styles/css/[name].[contenthash:8].css",
      chunkFilename: "assets/styles/css/[name].[contenthash:8].chunk.css"
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), new ImageMinimizerPlugin(imageMinimizerPluginOptions)],
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
      {
        test: imageFileMatcher,
        loader: ImageMinimizerPlugin.loader,
        enforce: "pre",
        options: {
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: imageMinimizerPluginOptions
          }
        }
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
