const path = require("path");
const { resolve } = require("path/posix");

module.exports = {
  entry: "./src/hellow.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            exclude: /node_modules/,
          },
        },
      },
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: __dirname,
    },
  },
};
