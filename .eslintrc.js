module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
