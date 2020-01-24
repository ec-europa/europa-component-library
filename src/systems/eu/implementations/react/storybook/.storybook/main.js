const stories = [
  '../../templates/**/*/stories/*.jsx',
  '../../page-structure/**/*/stories/*.jsx',
  '../../layout/**/*/stories/*.jsx',
  '../../components/**/*/stories/*.jsx',
  '../../utilities/**/*/stories/*.jsx',
];

const addons = [
  '@storybook/addon-options',
  '@storybook/addon-knobs',
  '@storybook/addon-viewport',
  '@storybook/addon-a11y',
  '@storybook/addon-cssresources',
  // '../../../../../../tools/storybook-addon-code/register.jsx',
];

module.exports = { stories, addons };
