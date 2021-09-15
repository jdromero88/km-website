const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'eval',
  devServer: {
    static: './dist',
    hot: true //enables HMR (Hot Module Replacement)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
