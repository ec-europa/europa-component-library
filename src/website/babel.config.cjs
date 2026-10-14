module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        modules: false,
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['preval', '@babel/plugin-proposal-export-default-from'],
  env: {
    production: {
      plugins: ['transform-react-remove-prop-types'],
    },
  },
};
