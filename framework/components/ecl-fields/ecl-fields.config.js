module.exports = {
  title: 'Fields',
  label: 'Fields',
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
  tags: ['atom'],
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        label: 'Name',
        body: 'John Doe',
      },
    },
    {
      name: 'aligned',
      label: 'Aligned',
      context: {
        variant: 'aligned',
        body: 'Text without label',
      },
    },
  ],
};
