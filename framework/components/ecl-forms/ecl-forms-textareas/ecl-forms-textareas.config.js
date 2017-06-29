module.exports = {
  title: 'Text areas',
  label: 'Text areas',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div class="ecl-form-group">\n
      <label for="${item.context.id}">${item.label}\n</label>\n
      ${markup}\n
      </div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Normal textarea',
      context: {
        id: 'example-textarea-id-1',
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'disabled',
      label: 'Disabled textarea',
      context: {
        id: 'example-textarea-id-2',
        isDisabled: true,
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'with-error',
      label: 'Textarea with error',
      context: {
        id: 'example-textarea-id-3',
        hasError: true,
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
  ],
};
