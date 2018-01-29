const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssNormalize = require('postcss-normalize');

module.exports = {
  entry: ['./packages/presets/ecl-preset-full/index.scss'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ttf|otf|eot|svg\?#icon|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[hash].[ext]',
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=4',
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
            },
            {
              loader: 'resolve-url-loader',
              options: {
                keepQuery: true,
              },
            },
            'sass-loader?sourceMap',
            {
              loader: 'postcss-loader',
              options: {
                parser: 'postcss-scss',
                plugins: () => [postcssNormalize()],
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
};
