const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const extractCSS = new ExtractTextPlugin('[name].css');

const config = {
  // context: path.resolve(__dirname, './framework'),
  entry: {
    vendors: path.resolve(__dirname, '../framework/vendors.js'),
    europa: path.resolve(__dirname, '../framework/app.js'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../framework'),
      use: [{
        loader: 'babel-loader',
      }],
    }, {
      test: /\.css$/,
      use: extractCSS.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?importLoaders=2',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                cssnano({
                  safe: true,
                }),
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
      }),
    }, {
      test: /\.scss$/,
      use: extractCSS.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?importLoaders=3',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                cssnano({
                  safe: true,
                }),
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
      }),
    }],
  },
  plugins: [
    extractCSS,
    // new webpack.NamedModulesPlugin(),
  ],

  // Emit a source map for easier debugging
  // devtool: 'cheap-module-eval-source-map',
};

module.exports = config;
