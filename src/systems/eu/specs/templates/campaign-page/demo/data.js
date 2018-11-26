/* eslint "import/no-extraneous-dependencies": ["error", { "devDependencies": true } ] */
const siteHeaderContent = require('@ecl/eu-specs-site-header/demo/data--en');
const heroBannerContent = require('@ecl/eu-specs-hero-banner/demo/data--image');
const mediaContainerContent = require('@ecl/eu-specs-media-container/demo/data--video');
const cardContent = require('@ecl/eu-specs-card/demo/data--card-event');
const blockquoteContent = require('@ecl/eu-specs-blockquote/demo/data');
const footerContent = require('@ecl/eu-specs-footer/demo/data');

module.exports = {
  siteHeader: siteHeaderContent,
  heroBanner: heroBannerContent,
  mediaContainer: mediaContainerContent,
  card: cardContent,
  blockquote: blockquoteContent,
  footer: footerContent,
};
