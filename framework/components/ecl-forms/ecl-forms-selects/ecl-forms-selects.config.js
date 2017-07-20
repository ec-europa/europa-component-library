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
      context: {
        id: 'example-select-id-1',
      },
    },
    {
      name: 'disabled',
      label: 'Disabled select list',
      context: {
        id: 'example-selectid-2',
        is_disabled: true,
      },
    },
    {
      name: 'with-error',
      label: 'Select list with error',
      context: {
        id: 'example-select-id-3',
        has_error: true,
      },
    },
  ],
};
