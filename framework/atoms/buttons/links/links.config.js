const variants = require('../variants.json');

module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'wip',
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<p>\n${markup}\n</p>\n<!-- End: @${item.handle} -->\n`;
  },
  variants,
};
