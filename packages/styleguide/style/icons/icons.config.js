const config = require('@ec-europa/ecl-icons/ecl-icons.config');

config.collator = (markup, item) =>
  `<!-- Start: @${item.handle} -->${markup}<!-- End: @${item.handle} -->\n`;

module.exports = config;
