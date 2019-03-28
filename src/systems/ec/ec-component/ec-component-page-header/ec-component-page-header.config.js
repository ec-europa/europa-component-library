const breadcrumbSegments = [
  { href: '../../example.html#', label: 'Home' },
  { href: '../../example.html#', label: 'Announcements' },
  { label: 'Business, Economy, Euro' },
];

const languageSwitcherData = {
  is_primary: true,
  unavailable: 'français',
  current: 'Nederlands',
  options: [
    {
      href: '/en',
      hreflang: 'en',
      label: 'English',
      lang: 'en',
    },
    {
      href: '/hr',
      hreflang: 'hr',
      label: 'hrvatski',
      lang: 'hr',
    },
    {
      href: '/it',
      hreflang: 'it',
      label: 'italiano',
      lang: 'it',
    },
    {
      href: '/lv',
      hreflang: 'lv',
      label: 'latviesu',
      lang: 'lv',
    },
    {
      href: '/hu',
      hreflang: 'hu',
      label: 'magyar',
      lang: 'hu',
    },
  ],
};

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
        language_switcher: languageSwitcherData,
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
