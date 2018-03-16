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
      context: {
        label: 'tags',
        tags: [
          { value: 'apple', href: '#' },
          { value: 'orange', href: '#' },
          { value: 'lime', href: '#' },
          { value: 'strawberry', href: '#' },
        ],
      },
    },
    {
      name: 'facet',
      label: 'Facet tags',
      context: {
        modifier: 'facet',
        label: 'containing',
        tags: [{ value: 'Words that the facet is containing' }],
      },
    },
    {
      name: 'facet-close',
      label: 'Facet tag with close',
      context: {
        modifier: 'facet-close',
        tags: [
          { label: 'type', value: 'atom' },
          { label: 'status', value: 'wip' },
        ],
      },
    },
  ],
};
