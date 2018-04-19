module.exports = {
  title: 'Tags',
  label: 'Tags',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default tags',
      context: {},
    },
    {
      name: 'facet',
      label: 'Facet tags',
      context: {},
    },
    {
      name: 'facet-close',
      label: 'Facet tag with close',
      context: {},
    },
  ],
};
