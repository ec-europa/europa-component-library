module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    node: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Temporary disable rule until https://github.com/yannickcr/eslint-plugin-react/issues/2427 is fixed
    'react/jsx-curly-brace-presence': 'off',
    'import/no-extraneous-dependencies': 'off',
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
