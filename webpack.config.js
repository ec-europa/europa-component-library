const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].bundle.css');

const config = {
  // context: path.resolve(__dirname, './framework'),
  entry: {
    vendors: './framework/vendors.js',
    europa: './framework/app.js',
  },
  output: {
    path: path.resolve(__dirname, './static/framework'),
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
      }],
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract(['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']),
      /* use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ], */
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    }],
  },
  plugins: [
    extractCSS,
  ],
};

module.exports = config;
