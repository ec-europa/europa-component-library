/* eslint-disable import/no-extraneous-dependencies */
const contextDefault = require('@ecl/eu-specs-text-input/demo/data--default');
const contextDisabled = require('@ecl/eu-specs-text-input/demo/data--disabled');
const contextWithError = require('@ecl/eu-specs-text-input/demo/data--with-error');

module.exports = {
  title: 'Text inputs',
  label: 'Text inputs',
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
  variants: [
    {
      name: 'default',
      label: 'Normal input',
      context: contextDefault,
    },
    {
      name: 'disabled',
      label: 'Disabled input',
      context: contextDisabled,
    },
    {
      name: 'with-error',
      label: 'Input with error',
      context: contextWithError,
    },
  ],
};
