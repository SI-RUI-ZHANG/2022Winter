const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Images
        test: /\.(jpg|jpeg|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/assets/[name].[ext]',
        }
      },
      {
        // Fonts and SVGs
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/sign-in.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};