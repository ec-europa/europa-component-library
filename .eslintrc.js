module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn',
  ],
  env: {
    node: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'unicorn/prefer-node-append': 'off', // IE browsers support appendChild and not append
    'no-underscore-dangle': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Temporary disable rule until https://github.com/yannickcr/eslint-plugin-react/issues/2427 is fixed
    'react/jsx-curly-brace-presence': 'off',
    'unicorn/prevent-abbreviations': 'off',
    // Disable "unicorn/prefer-dataset", since setAttribute and getAttribute are faster
    // https://jsperf.com/html5-dataset-vs-native-setattribute
    'unicorn/prefer-dataset': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  overrides: [
    {
      files: '**/demo/**/*.js',
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: '**/scripts/**/*.js',
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
