const breadcrumbSegments = [
  {
    href: '#',
    label: 'European Commission',
    variant: ['inverted', 'standalone'],
  },
  { href: '#', label: 'Announcements', variant: ['inverted', 'standalone'] },
];

module.exports = {
  title: 'Page Headers',
  label: 'Page Headers',
  tags: ['organism'],
  status: 'ready',
  variants: [
    {
      name: 'default',
      context: {
        variant: 'default',
        breadcrumb: breadcrumbSegments,
        identity: 'Digital single market',
        title: 'Business, Economy, Euro',
        introduction:
          'EU economy, finance and the euro, and practical information for EU businesses and entrepreneurs on product safety, environmental regulations, trade with non-EU countries and competition rules.',
        paragraph_class: 'ecl-paragraph ecl-paragraph--l',
        metas: ['News article', '6 July 2015', 'Brussels'],
      },
    },
    {
      name: 'basic',
      context: {
        identity: 'Digital single market',
        breadcrumb: breadcrumbSegments,
      },
    },
    /*
    {
      name: 'highlight',
      context: {
        variant: 'highlight',
        label: 'Highlight',
        highlight:
          'Maecenas at mi <strong>molestie nulla</strong> tempor interdum sed sit amet ipsum.',
      },
    },
    */
  ],
};
