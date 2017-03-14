const variants = require('../variants.json');

module.exports = {
  title: 'Button blocks',
  label: 'Button blocks',
  status: 'wip',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div style="margin-bottom: 1rem; min-width: 20em;">\n
        ${markup}\n
      </div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  context: {
    label: 'Button block element',
  },
  variants,
};
