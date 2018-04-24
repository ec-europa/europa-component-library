const contextDefault = require('./data/demo--default');
const contextFooter = require('./data/demo--footer');
const contextHeader = require('./data/demo--header');

module.exports = {
  title: 'Site switchers',
  label: 'Site switchers',
  status: 'ready',
  preview: '@preview-center-transparent',
  tags: ['atom'],
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: contextDefault,
    },
    {
      name: 'header',
      label: 'Header',
      context: contextHeader,
    },
    {
      name: 'footer',
      label: 'Footer',
      context: contextFooter,
    },
  ],
};
