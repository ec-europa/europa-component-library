const menuContent = require('@ecl/ec-specs-menu/demo/data--en');
const siteHeaderCoreContent = require('@ecl/ec-specs-site-header-core/demo/data--en');
const siteHeaderHarmonisedGroup1Content = require('@ecl/ec-specs-site-header-harmonised/demo/data--group1');
const siteHeaderHarmonisedGroup2Content = require('@ecl/ec-specs-site-header-harmonised/demo/data--group2');
const siteHeaderStandardisedContent = require('@ecl/ec-specs-site-header-standardised/demo/data--en');
const footerCoreContent = require('@ecl/ec-specs-footer-core/demo/data');
const footerHarmonisedGroup1Content = require('@ecl/ec-specs-footer-harmonised/demo/data--group1');
const footerHarmonisedGroup2Content = require('@ecl/ec-specs-footer-harmonised/demo/data--group2');
const footerStandardisedContent = require('@ecl/ec-specs-footer-standardised/demo/data');

const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

const breadcrumbContent = {
  label: 'You are here:',
};
const breadcrumbItems = [
  { label: 'Home', href: exampleLink },
  { label: 'Events', href: exampleLink },
  {
    label: 'Fair of European Innovators in Cultural heritage',
    href: exampleLink,
  },
  { label: 'Programme' },
];

const pageHeaderContent = {
  meta: 'Lorem | Ipsum',
  title: 'Conference',
  description: 'Fair of European Innovators in Cultural heritage',
};

const pageBannerContent = {
  title: 'Fair of European Innovators in Cultural Heritage',
  link: {
    label: 'Register',
    href: exampleLink,
  },
};

module.exports = (template) => {
  const data = {
    breadcrumbContent,
    breadcrumbItems,
    menuContent,
    pageHeader: pageHeaderContent,
    pageBanner: pageBannerContent,
  };

  if (template === 'core') {
    data.siteHeader = siteHeaderCoreContent;
    data.footer = footerCoreContent;
  } else if (template === 'standardised') {
    const siteHeaderStandardisedContentCopy = JSON.parse(
      JSON.stringify(siteHeaderStandardisedContent)
    );
    siteHeaderStandardisedContentCopy.banner = 'Site name';
    siteHeaderStandardisedContentCopy.menu = menuContent;
    data.siteHeader = siteHeaderStandardisedContentCopy;
    data.footer = footerStandardisedContent;
  } else if (template === 'harmonised-g1') {
    const siteHeaderHarmonisedGroup1ContentCopy = JSON.parse(
      JSON.stringify(siteHeaderHarmonisedGroup1Content)
    );
    siteHeaderHarmonisedGroup1ContentCopy.banner = 'Site name';
    siteHeaderHarmonisedGroup1ContentCopy.menu = menuContent;
    data.siteHeader = siteHeaderHarmonisedGroup1ContentCopy;
    data.footer = footerHarmonisedGroup1Content;
  } else if (template === 'harmonised-g2') {
    const siteHeaderHarmonisedGroup2ContentCopy = JSON.parse(
      JSON.stringify(siteHeaderHarmonisedGroup2Content)
    );
    siteHeaderHarmonisedGroup2ContentCopy.menu = menuContent;
    data.siteHeader = siteHeaderHarmonisedGroup2ContentCopy;
    data.footer = footerHarmonisedGroup2Content;
  }

  return data;
};
