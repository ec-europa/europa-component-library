const contextDefault = require('@ecl/generic-component-search-form/data/data--default');
const contextInternal = require('@ecl/generic-component-search-form/data/data--internal');

module.exports = {
  title: 'Search forms',
  label: 'Search forms',
  status: 'ready',
  tags: ['molecule'],
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
