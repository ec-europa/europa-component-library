module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    node: true,
  },
  rules: {},
  overrides: [
    {
      files: '**/scripts/**/*.js',
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
