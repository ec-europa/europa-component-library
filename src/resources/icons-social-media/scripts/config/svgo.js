module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          inlineStyles: false,
          prefixIds: true,
        },
      },
    },
    'cleanupIds',
    {
      name: 'prefixIds',
    },
  ],
};
