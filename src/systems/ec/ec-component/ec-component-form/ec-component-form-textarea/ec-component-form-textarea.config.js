const contextDefault = require('@ecl/generic-component-form-textarea/data/demo--default');
const contextIsDisabled = require('@ecl/generic-component-form-textarea/data/demo--is-disabled');
const contextHasError = require('@ecl/generic-component-form-textarea/data/demo--has-error');

module.exports = {
  title: 'Text areas',
  label: 'Text areas',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div class="ecl-form-group">
        <label for="${item.context.id}" class="ecl-form-label">
          ${item.label}
        </label>\n
        ${markup}\n
      </div>
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
      name: 'is-disabled',
      context: contextIsDisabled,
    },
    {
      name: 'has-error',
      context: contextHasError,
    },
  ],
};
