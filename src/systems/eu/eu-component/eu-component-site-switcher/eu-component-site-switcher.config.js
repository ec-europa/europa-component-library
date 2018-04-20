const contextDefault = require('@ecl/generic-component-site-switcher/data/data--default');
const contextFooter = require('@ecl/generic-component-site-switcher/data/data--footer');
const contextHeader = require('@ecl/generic-component-site-switcher/data/data--header');

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
