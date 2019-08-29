const contextDefault = require('@ecl/generic-component-site-switcher/data/demo--default');
const contextFooter = require('@ecl/generic-component-site-switcher/data/demo--footer');
const contextHeader = require('@ecl/generic-component-site-switcher/data/demo--header');

module.exports = {
  title: 'Site switchers',
  label: 'Site switchers',
  status: 'ready',
  preview: '@preview-center-transparent',
  tags: ['atom'],
  hidden: true,
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
