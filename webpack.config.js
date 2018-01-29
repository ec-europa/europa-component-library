const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const postcssNormalize = require('postcss-normalize');

module.exports = {
  entry: ['./packages/presets/ecl-preset-full/index.scss'],
  output: {
    filename: 'dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ttf|otf|eot|svg\?#icon|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'dist/fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'dist/images/[name].[hash].[ext]',
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=3',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  // postcssNormalize(),
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
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
