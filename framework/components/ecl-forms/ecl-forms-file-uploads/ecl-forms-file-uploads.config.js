module.exports = {
  title: 'File uploads',
  label: 'File uploads',
  status: 'ready',
  collated: false,
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
      context: {
        id: 'example-input-id-1',
        name: 'example-input-name-1',
        _demo: {
          scripts: `document.addEventListener('DOMContentLoaded', function () {
            ECL.fileUploads();
          });`,
        },
      },
    },
    {
      name: 'is-disabled',
      label: 'Disabled file upload',
      context: {
        id: 'example-input-id-2',
        name: 'example-input-name-2',
        is_disabled: true,
        _demo: {
          scripts: `document.addEventListener('DOMContentLoaded', function () {
            ECL.fileUploads();
          });`,
        },
      },
    },
    {
      name: 'is-multiple',
      label: 'Multiple file upload',
      context: {
        id: 'example-input-id-3',
        name: 'example-input-name-3',
        is_multiple: true,
        _demo: {
          scripts: `document.addEventListener('DOMContentLoaded', function () {
            ECL.fileUploads();
          });`,
        },
      },
    },
    {
      name: 'has-error',
      label: 'File upload with error',
      context: {
        id: 'example-input-id-4',
        name: 'example-input-name-4',
        has_error: true,
        _demo: {
          scripts: `document.addEventListener('DOMContentLoaded', function () {
            ECL.fileUploads();
          });`,
        },
      },
    },
  ],
};
