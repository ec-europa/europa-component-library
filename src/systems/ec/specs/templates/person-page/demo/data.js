/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
const siteHeaderCoreContent = require('@ecl/ec-specs-site-header-core/demo/data--en');
const siteHeaderHarmonisedGroup1Content = require('@ecl/ec-specs-site-header-harmonised/demo/data--group1');
const siteHeaderHarmonisedGroup2Content = require('@ecl/ec-specs-site-header-harmonised/demo/data--group2');
const siteHeaderStandardisedContent = require('@ecl/ec-specs-site-header-standardised/demo/data--en');
const footerCoreContent = require('@ecl/ec-specs-footer-core/demo/data');
const footerHarmonisedGroup1Content = require('@ecl/ec-specs-footer-harmonised/demo/data--group1');
const footerHarmonisedGroup2Content = require('@ecl/ec-specs-footer-harmonised/demo/data--group2');
const footerStandardisedContent = require('@ecl/ec-specs-footer-standardised/demo/data');

const breadcrumbContent = {
  label: 'You are here:',
};
const breadcrumbItems = [
  { label: 'Home', href: '/example' },
  { label: 'The Commissioners', href: '/example' },
  { label: 'Vytenis Andriukaitis' },
];

const pageHeaderContent = {
  meta: 'Commissioner (2014 - 2019)',
  title: 'Vytenis Andriukaitis',
  description: 'Health & Food Safety',
};

module.exports = template => {
  const data = {
    breadcrumbContent,
    breadcrumbItems,
    pageHeader: pageHeaderContent,
  };

  if (template === 'core') {
    data.siteHeader = siteHeaderCoreContent;
    data.footer = footerCoreContent;
  } else if (template === 'standardised') {
    const siteHeaderStandardisedContentCopy = JSON.parse(
      JSON.stringify(siteHeaderStandardisedContent)
    );
    siteHeaderStandardisedContentCopy.banner = 'Site name';
    data.siteHeader = siteHeaderStandardisedContentCopy;
    data.footer = footerStandardisedContent;
  } else if (template === 'harmonised-g1') {
    const siteHeaderHarmonisedGroup1ContentCopy = JSON.parse(
      JSON.stringify(siteHeaderHarmonisedGroup1Content)
    );
    siteHeaderHarmonisedGroup1ContentCopy.banner = 'Site name';
    data.siteHeader = siteHeaderHarmonisedGroup1ContentCopy;
    data.footer = footerHarmonisedGroup1Content;
  } else if (template === 'harmonised-g2') {
    data.siteHeader = siteHeaderHarmonisedGroup2Content;
    data.footer = footerHarmonisedGroup2Content;
  }

  return data;
};
