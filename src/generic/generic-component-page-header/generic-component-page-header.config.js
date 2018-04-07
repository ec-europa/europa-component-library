const breadcrumbSegments = [
  { href: 'https://example.com/', label: 'European Commission' },
  { href: 'https://example.com/', label: 'Announcements' },
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
