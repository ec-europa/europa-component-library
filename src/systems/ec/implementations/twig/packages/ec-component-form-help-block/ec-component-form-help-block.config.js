const contextDefault = require('@ecl/generic-component-form-help-block/data/demo--default');
const contextDisabled = require('@ecl/generic-component-form-help-block/data/demo--disabled');
const contextError = require('@ecl/generic-component-form-help-block/data/demo--error');

module.exports = {
  title: 'Help blocks',
  label: 'Help blocks',
  status: 'ready',
  collated: true,
  variants: [
    {
      name: 'default',
      context: contextDefault,
    },
    {
      name: 'disabled',
      context: contextDisabled,
    },
    {
      name: 'error',
      context: contextError,
    },
  ],
};
