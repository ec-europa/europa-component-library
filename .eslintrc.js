module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
  },
  overrides: [
    {
      files: '**/scripts/**/*.js',
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
