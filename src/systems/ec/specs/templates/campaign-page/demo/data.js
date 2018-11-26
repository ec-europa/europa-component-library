/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
const siteHeaderContent = require('@ecl/ec-specs-site-header/demo/data--en');
const heroBannerContent = require('@ecl/ec-specs-hero-banner/demo/data--image');
const mediaContainerContent = require('@ecl/ec-specs-media-container/demo/data--video');
const cardContent = require('@ecl/ec-specs-card/demo/data--card-event');
const blockquoteContent = require('@ecl/ec-specs-blockquote/demo/data');
const footerContent = require('@ecl/ec-specs-footer/demo/data');

module.exports = {
  siteHeader: siteHeaderContent,
  heroBanner: heroBannerContent,
  mediaContainer: mediaContainerContent,
  card: cardContent,
  blockquote: blockquoteContent,
  footer: footerContent,
};
