const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const babelConfig = require('./config/babel.config');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.js',
  },
  resolve: {
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    // `web` extension prefixes have been added for better support
    // for React Native Web.
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: babelConfig,
            },
          },
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          },
          {
            test: /\.(md|mdx)$/,
            include: [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, '../src'),
            ],
            use: [
              {
                loader: 'babel-loader',
                options: babelConfig,
              },
              '@mdx-js/loader',
            ],
          },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            use: {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new InterpolateHtmlPlugin(process.env),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        PUBLIC_URL: '',
      }),
    }),
  ],
};
