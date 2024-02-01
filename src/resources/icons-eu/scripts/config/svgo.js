module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          convertPathData: false,
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'id',
      },
    },
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: false,
      },
    },
    'convertStyleToAttrs',
  ],
};
