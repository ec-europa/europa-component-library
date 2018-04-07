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
        href: 'https://example.com/',
        label: 'in-line link',
      },
    },
    {
      name: 'external',
      label: 'External',
      context: {
        variant: 'external',
        href: 'https://example.com/',
        label: 'external link',
      },
    },
    {
      name: 'standalone',
      label: 'Standalone',
      context: {
        variant: 'standalone',
        href: 'https://example.com/',
        label: 'standalone link',
      },
    },
    {
      name: 'inverted',
      label: 'Inverted',
      context: {
        variant: 'inverted',
        extra_classes: 'ecl-u-bg-shade',
        href: 'https://example.com/',
        label: 'inverted link',
      },
    },
    {
      name: 'all',
      label: 'All',
      context: {
        variant: 'all',
        href: 'https://example.com/',
        label: 'all link',
      },
    },
    {
      name: 'more',
      label: 'More',
      context: {
        variant: 'more',
        href: 'https://example.com/',
        label: 'more link',
      },
    },
  ],
};
