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
      context: {
        id: 'example-textarea-id-1',
        extra_attributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'is-disabled',
      context: {
        id: 'example-textarea-id-2',
        is_disabled: true,
        extra_attributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'has-error',
      context: {
        id: 'example-textarea-id-3',
        has_error: true,
        extra_attributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
  ],
};
