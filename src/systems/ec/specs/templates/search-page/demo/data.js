/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
const siteHeaderCoreContent = require('@ecl/ec-specs-site-header-core/demo/data--en');
const siteHeaderStandardisedContent = require('@ecl/ec-specs-site-header-standardised/demo/data--en');
const footerCoreContent = require('@ecl/ec-specs-footer-core/demo/data');
const footerStandardisedContent = require('@ecl/ec-specs-footer-standardised/demo/data');

/*
const breadcrumbContent = {
  items: [
    { label: 'Home', href: '/example' },
    { label: 'Search', href: '/example' },
  ],
  label: 'You are here:',
};

const pageHeaderContent = {
  title: 'Search',
};
*/

module.exports = template => {
  const data = {
    // breadcrumb: breadcrumbContent,
    // pageHeader: pageHeaderContent,
  };

  if (template === 'core') {
    data.siteHeader = siteHeaderCoreContent;
    data.footer = footerCoreContent;
  } else if (template === 'standardised') {
    data.siteHeader = siteHeaderStandardisedContent;
    data.footer = footerStandardisedContent;
  }

  return data;
};
