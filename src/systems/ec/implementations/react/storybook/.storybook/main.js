const stories = [
  '../../templates/**/*/stories/*.jsx',
  '../../page-structure/**/*/stories/*.jsx',
  '../../layout/**/*/stories/*.jsx',
  '../../components/**/*/stories/*.jsx',
  '../../utilities/**/*/stories/*.jsx',
  '../../deprecated/**/*/stories/*.jsx',
];

// const stories = contexts.filter(key => !key.includes('node_modules'));

const addons = [
  '@storybook/addon-options',
  '@storybook/addon-knobs',
  '@storybook/addon-viewport',
  '@storybook/addon-a11y',
  '@storybook/addon-cssresources',
  // '@ecl/storybook-addon-code',
];

module.exports = { stories, addons };
