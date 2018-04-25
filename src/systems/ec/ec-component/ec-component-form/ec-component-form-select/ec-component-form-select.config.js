const contextDefault = require('@ecl/generic-component-form-select/data/demo--default');
const contextDisabled = require('@ecl/generic-component-form-select/data/demo--disabled');
const contextWithErrors = require('@ecl/generic-component-form-select/data/demo--with-errors');

module.exports = {
  title: 'Selects',
  label: 'Selects',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <label for="${item.context.id}">${item.label}\n</label>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default select list',
      context: contextDefault,
    },
    {
      name: 'disabled',
      label: 'Disabled select list',
      context: contextDisabled,
    },
    {
      name: 'with-error',
      label: 'Select list with error',
      context: contextWithErrors,
    },
  ],
};
