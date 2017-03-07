const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist/framework'),
    publicPath: '/framework',
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.(ttf|otf|eot|svg\?#icon|woff(2)?)(\?[a-z0-9]+)?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'images/[name].[hash].[ext]',
      },
    }],
  },
};
