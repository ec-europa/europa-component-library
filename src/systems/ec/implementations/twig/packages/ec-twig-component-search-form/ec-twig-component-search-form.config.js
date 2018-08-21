const contextDefault = require('@ecl/generic-twig-component-search-form/data/demo--default')(
  'ec'
);
const contextInternal = require('@ecl/generic-twig-component-search-form/data/demo--internal')(
  'ec'
);

module.exports = {
  title: 'Search forms',
  label: 'Search forms',
  status: 'ready',
  tags: ['molecule'],
  preview: '@preview-icons',
  variants: [
    {
      name: 'default',
      label: 'Corporate',
      context: contextDefault,
    },
    {
      name: 'internal',
      label: 'Internal',
      context: contextInternal,
    },
  ],
};
