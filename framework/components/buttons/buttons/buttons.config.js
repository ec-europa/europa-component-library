const variants = require('../variants.json');

module.exports = {
  title: 'Buttons',
  label: 'Buttons',
  status: 'wip',
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<h2>${item.label}\n</h2>\n${markup}\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    label: 'Button element',
  },
  variants,
};
