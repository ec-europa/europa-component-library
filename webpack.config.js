const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

// const extractCSS = new ExtractTextPlugin('[name].bundle.css');

const config = {
  // context: path.resolve(__dirname, './framework'),
  entry: {
    vendors: [
      'webpack/hot/dev-server',
      './framework/vendors.js',
      'webpack-hot-middleware/client',
    ],
    europa: [
      'webpack/hot/dev-server',
      './framework/app.js',
      'webpack-hot-middleware/client',
    ],
    styles: [
      'webpack/hot/dev-server',
      './framework/index.scss',
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist/framework'),
    publicPath: '/framework',
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, '/framework'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      }, {
        loader: 'webpack-module-hot-accept',
      }],
    }, {
      test: /\.css$/,
      // loader: extractCSS.extract(['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']),
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'resolve-url-loader',
        },
      ],
    }, {
      test: /\.scss$/,
      // loader: extractCSS.extract(['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']),
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'resolve-url-loader',
          options: {
            keepQuery: true,
          },
        },
        'sass-loader?sourceMap',
      ],
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    }, {
      test: /\.(jpg|png)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]',
      },
    }],
  },
  plugins: [
    // extractCSS,
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin(),
  ],

  // Emit a source map for easier debugging
  devtool: 'cheap-module-eval-source-map',
};

module.exports = config;
