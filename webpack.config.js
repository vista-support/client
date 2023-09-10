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
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@util': path.resolve(__dirname, 'src/util'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
