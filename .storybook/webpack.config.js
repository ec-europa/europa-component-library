const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.twig$/,
        use: 'string-loader',
      },
    ],
  },
};
