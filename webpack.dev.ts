import { merge } from "webpack-merge";
import baseConfig from "./webpack.common";
import "webpack-dev-server";

export default merge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    compress: true,
    historyApiFallback: true,
    open: ["http://localhost:4000"],
    client: {
      overlay: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: { "^/api": "" }
      }
    }
  }
});
