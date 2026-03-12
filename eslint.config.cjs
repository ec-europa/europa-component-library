const js = require('@eslint/js');
const babelParser = require('@babel/eslint-parser');
const standard = require('eslint-config-standard');
const globals = require('globals');

const reactPlugin = require('eslint-plugin-react');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const prettierPlugin = require('eslint-plugin-prettier');

const importPlugin = require('eslint-plugin-import');
const nPlugin = require('eslint-plugin-n');
const promisePlugin = require('eslint-plugin-promise');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ECL: 'writable',
      },
    },
    plugins: {
      jest: jestPlugin,
      import: importPlugin,
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      n: nPlugin,
      promise: promisePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...standard.rules,
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'import/no-extraneous-dependencies': 'off',
      'no-param-reassign': 'off',
      'comma-dangle': 'off',
      'multiline-ternary': 'off',
      indent: 'off',
      'prettier/prettier': 'error',
      'space-before-function-paren': 'off',
      semi: 'off',
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^React$', // Ignore React import
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.json', '.svg'],
        },
      },
      react: {
        version: '19.1.0',
      },
    },
  },
  // Website-level React overrides
  {
    files: ['src/website/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
      },
    },
    rules: {
      'react/forbid-prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-danger': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/display-name': 'off',
    },
  },
  // Component-specific overrides
  {
    files: ['src/website/src/website-components/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/no-unused-class-component-methods': 'off',
    },
  },
  // Test files
  {
    files: ['src/**/*.test.js'],
    languageOptions: {
      globals: {
        process: 'readonly', // Explicitly add process here for tests
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
  // Scripts: allow console, process, require, etc.
  {
    files: ['**/scripts/**/*.js'],
    languageOptions: {
      globals: {
        process: 'readonly', // Explicitly add process here for scripts
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
  // Website index legacy override
  {
    files: ['src/website/src/Index.jsx'],
    rules: {
      'react/no-deprecated': 'off',
    },
  },
  // Demo files: ignore module resolution
  {
    files: ['**/demo/*.js'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
  // Playground
  {
    files: ['src/playground/addons/**/*.{js,jsx}'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
    },
  },
  {
    ignores: [
      '.changelog',
      '.tmp',
      '**/_imports',
      '**/build',
      'dist',
      '**/dist',
      '**/exports',
      '**/node_modules',
      '**/static',
      '**/public',
      'src/website/src/Index.jsx',
      'src/website/public/playground',
      'src/website/public/apis',
    ],
  },
];
