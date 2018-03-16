module.exports = {
  title: 'Text areas',
  label: 'Text areas',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div class="ecl-form-group">\n
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
        label: 'Normal textarea',
        id: 'example-textarea-id-1',
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'is-disabled',
      context: {
        label: 'Disabled textarea',
        id: 'example-textarea-id-2',
        isDisabled: true,
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'has-error',
      context: {
        label: 'Textarea with error',
        id: 'example-textarea-id-3',
        hasError: true,
        extraAttributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
  ],
};
