module.exports = {
  title: 'Link blocks',
  label: 'Link blocks',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'standalone',
  variants: [
    {
      name: 'standalone',
      label: 'Standalone block of links',
      context: {
        links: [
          { href: '../../example.html#', label: 'European Commission' },
          { href: '../../example.html#', label: 'Priorities' },
          {
            href: '../../example.html#',
            label: 'Jobs, Growth and Investment',
          },
        ],
      },
    },
    {
      name: 'wrapper',
      label: 'Block of links with title',
      context: {
        title: 'More information',
        links: [
          { href: '../../example.html#', label: 'European Commission' },
          { href: '../../example.html#', label: 'Priorities' },
          {
            href: '../../example.html#',
            label: 'Jobs, Growth and Investment',
          },
        ],
      },
    },
  ],
};
