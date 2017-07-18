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
      context: {
        label: 'Normal checkbox',
        id: 'example-checkbox-id-1',
        name: 'example-checkbox-name-1',
      },
    },
    {
      name: 'disabled',
      context: {
        label: 'Disabled checkbox',
        id: 'example-checkbox-id-2',
        name: 'example-checkbox-name-2',
        is_disabled: true,
      },
    },
    {
      name: 'with-error',
      context: {
        label: 'Checkbox with error',
        id: 'example-checkbox-id-3',
        name: 'example-checkbox-name-3',
        has_error: true,
      },
    },
  ],
};
