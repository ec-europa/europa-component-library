module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react', 'jsx-a11y'],
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
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
      },
    },
  ],
};
