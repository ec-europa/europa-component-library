const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./packages/presets/ecl-preset-full/index.scss'],
  output: {
    filename: 'dist/bundle.js',
  },
  module: {
    rules: [
      {
        // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
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
