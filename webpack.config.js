const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = {
    plugins: [
      new HtmlWebpackPlugin({template: "src/index.html"}),
      new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    publicPath: "/"
  },
  // module: {
  //     rules: [
  //       {
  //         test: /\.js?/,
  //         loader: 'babel-loader',
  //         query: {
  //           presets:[  "@babel/preset-env", "@babel/preset-react" ]
  //         },
  //         exclude: /node_modules/
  //       },
  //       {
  //         test: /\.tsx?$/,
  //         loader: "awesome-typescript-loader"
  //       },
  //     ]
  //   }
}
