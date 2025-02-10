module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
    'prettier'
  ],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unused-class-component-methods': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': ['error', { 
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false 
    }]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
