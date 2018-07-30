const contextDefault = require('@ecl/generic-component-form-checkbox/data/demo--default');
const contextDisabled = require('@ecl/generic-component-form-checkbox/data/demo--disabled');
const contextChecked = require('@ecl/generic-component-form-checkbox/data/demo--checked');
const contextError = require('@ecl/generic-component-form-checkbox/data/demo--error');

module.exports = {
  title: 'Checkboxes',
  label: 'Checkboxes',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div class="ecl-u-mv-s">\n
      ${markup}\n
      </div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'default',
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
      name: 'with-error',
      context: contextError,
    },
    {
      name: 'checked',
      context: contextChecked,
    },
  ],
};
