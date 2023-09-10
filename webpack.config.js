const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    index: path.join(PATHS.src, '/main.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(PATHS.src, '/index.html'),
    }),
    new MiniCssExtractPlugin(),
    new Dotenv(),
  ],
  output: {
    path: PATHS.dist,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};
