const contextDefault = require('@ecl/generic-twig-component-form-radio/data/demo--default');
const contextChecked = require('@ecl/generic-twig-component-form-radio/data/demo--checked');
const contextDisabled = require('@ecl/generic-twig-component-form-radio/data/demo--disabled');
const contextError = require('@ecl/generic-twig-component-form-radio/data/demo--error');

module.exports = {
  title: 'Radios',
  label: 'Radios',
  status: 'ready',
  collated: true,
  variants: [
    {
      name: 'default',
      context: contextDefault,
    },
    {
      name: 'checked',
      context: contextChecked,
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
