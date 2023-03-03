module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    'cleanupIds',
    {
      name: 'prefixIds',
    },
    'convertStyleToAttrs',
  ],
};
