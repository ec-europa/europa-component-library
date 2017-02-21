const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, '../framework'),
  entry: {
    vendors: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, '../framework/vendors.js'),
      'webpack-hot-middleware/client',
    ],
    europa: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, '../framework/app.js'),
      'webpack-hot-middleware/client',
    ],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../framework'),
      use: [{
        loader: 'babel-loader',
      }, {
        loader: 'webpack-module-hot-accept',
      }],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=2',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer(),
            ],
          },
        }, {
          loader: 'resolve-url-loader',
          options: {
            keepQuery: true,
          },
        },
      ],
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=3',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer(),
            ],
          },
        }, {
          loader: 'resolve-url-loader',
          options: {
            keepQuery: true,
          },
        },
        'sass-loader?sourceMap',
      ],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map',
};
