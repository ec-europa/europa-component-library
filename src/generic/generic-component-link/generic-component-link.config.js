module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div>Lorem ipsum, ${markup} consectetur adipiscing elit</div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        href: '../../example.html#',
        label: 'in-line link',
      },
    },
    {
      name: 'external',
      label: 'External',
      context: {
        variant: 'external',
        href: '../../example.html#',
        label: 'external link',
      },
    },
    {
      name: 'standalone',
      label: 'Standalone',
      context: {
        variant: 'standalone',
        href: '../../example.html#',
        label: 'standalone link',
      },
    },
    {
      name: 'inverted',
      label: 'Inverted',
      context: {
        variant: 'inverted',
        extra_classes: 'ecl-u-bg-shade',
        href: '../../example.html#',
        label: 'inverted link',
      },
    },
    {
      name: 'all',
      label: 'All',
      context: {
        variant: 'all',
        href: '../../example.html#',
        label: 'all link',
      },
    },
    {
      name: 'more',
      label: 'More',
      context: {
        variant: 'more',
        href: '../../example.html#',
        label: 'more link',
      },
    },
  ],
};
