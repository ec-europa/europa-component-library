/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
const siteSwitcherContent = require('@ecl/ec-specs-site-switcher/demo/data');
const siteHeaderContent = require('@ecl/ec-specs-site-header/demo/data--en');
const footerContent = require('@ecl/ec-specs-footer/demo/data--corporate');

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

module.exports = {
  siteSwitcher: siteSwitcherContent,
  breadcrumb: breadcrumbContent,
  siteHeader: siteHeaderContent,
  pageHeader: pageHeaderContent,
  footer: footerContent,
};
