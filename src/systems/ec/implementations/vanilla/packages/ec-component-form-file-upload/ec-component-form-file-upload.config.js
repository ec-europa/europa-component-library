const contextDefault = require('@ecl/generic-component-form-file-upload/data/demo--default');
const contextDisabled = require('@ecl/generic-component-form-file-upload/data/demo--disabled');
const contextMultiple = require('@ecl/generic-component-form-file-upload/data/demo--multiple');
const contextError = require('@ecl/generic-component-form-file-upload/data/demo--error');

module.exports = {
  title: 'File uploads',
  label: 'File uploads',
  preview: '@preview-forms-file-uploads',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants: [
    {
      name: 'default',
      label: 'Normal file upload',
      context: contextDefault,
    },
    {
      name: 'is-disabled',
      label: 'Disabled file upload',
      context: contextDisabled,
    },
    {
      name: 'is-multiple',
      label: 'Multiple file upload',
      context: contextMultiple,
    },
    {
      name: 'has-error',
      label: 'File upload with error',
      context: contextError,
    },
  ],
};
