const breadcrumbSegments = [
  { href: '../../example.html#', label: 'Home' },
  { href: '../../example.html#', label: 'Announcements' },
  { label: 'Business, Economy, Euro' },
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
        breadcrumb: breadcrumbSegments,
        identity: 'Site identity',
        title: 'Business, Economy, Euro',
        introduction:
          'EU economy, finance and the euro, and practical information for EU businesses and entrepreneurs on product safety, environmental regulations, trade with non-EU countries and competition rules.',
        metas: ['News article', '6 July 2015', 'Brussels'],
      },
    },
    {
      name: 'basic',
      context: {
        identity: 'Site identity',
        breadcrumb: breadcrumbSegments,
      },
    },
  ],
  context: {
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () { 
          ECL.initBreadcrumb();
        });`,
    },
  },
};
