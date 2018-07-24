const contextDefault = require('@ecl/generic-component-search-form/data/demo--default')(
  'eu'
);
const contextInternal = require('@ecl/generic-component-search-form/data/demo--internal')(
  'eu'
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
