module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn',
    'prettier/react',
  ],
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
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-for-loop': 'off',
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      rules: {
        // JSX files' name should be in PascalCase
        'unicorn/filename-case': ['error', { case: 'pascalCase' }],
      },
    },
  ],
};
