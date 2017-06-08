module.exports = {
  title: 'Text inputs',
  label: 'Text inputs',
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
  variants: [
    {
      name: 'default',
      label: 'Normal input',
      context: {
        id: 'example-input-id-1',
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'disabled',
      label: 'Disabled input',
      context: {
        id: 'example-input-id-2',
        isDisabled: true,
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'with-error',
      label: 'Input with error',
      context: {
        id: 'example-input-id-3',
        hasError: true,
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
  ],
};
