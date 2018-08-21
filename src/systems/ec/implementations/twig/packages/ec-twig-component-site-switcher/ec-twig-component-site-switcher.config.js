const contextDefault = require('@ecl/generic-twig-component-site-switcher/data/demo--default');
const contextFooter = require('@ecl/generic-twig-component-site-switcher/data/demo--footer');
const contextHeader = require('@ecl/generic-twig-component-site-switcher/data/demo--header');

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
