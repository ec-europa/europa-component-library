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
      context: {
        id: 'example-input-id-1',
        extra_attributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'disabled',
      label: 'Disabled input',
      context: {
        id: 'example-input-id-2',
        is_disabled: true,
        extra_attributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
    {
      name: 'with-error',
      label: 'Input with error',
      context: {
        id: 'example-input-id-3',
        has_error: true,
        extra_attributes: [
          { name: 'placeholder', value: 'Some placeholder text.' },
        ],
      },
    },
  ],
};
