const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("../../webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    hot: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
        teaser: "teaser@http://localhost:8082/remoteEntry.js",
        checkout: "checkout@http://localhost:8083/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};

module.exports = merge(commonConfig, devConfig);
