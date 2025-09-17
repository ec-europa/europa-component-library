module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      flexbox: 'no-2009',
      overrideBrowserslist: [
        '> 1%',
        'not dead',
        'not ie <= 11',
        'not safari < 14',
      ],
    }),
  ],
};
