const browsers = require('./browserslist');

module.exports = {
  presets: [
    [
      'env',
      {
        modules: false,
        useBuiltIns: true,
        targets: {
          browsers,
        },
      },
    ],
    'react',
    'stage-0',
  ],
  plugins: ['react-hot-loader/babel'],
};
