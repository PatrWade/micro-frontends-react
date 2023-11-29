const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("../../webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./Products": "./src/bootstrap",
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
