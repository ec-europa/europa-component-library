module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/forbid-prop-types': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'no-restricted-exports': 'off',
    'react/display-name': 'off',
    'func-names': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-key': 'off',
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      rules: {
        'import/no-dynamic-require': 'off',
        'global-require': 'off',
      },
    },
    {
      files: ['**/stories/*.jsx'],
      rules: {
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
