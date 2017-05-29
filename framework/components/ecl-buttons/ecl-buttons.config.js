const variants = require('./variants.json');

module.exports = {
  title: 'Buttons',
  label: 'Buttons',
  preview: '@preview-center-transparent',
  tags: ['atom'],
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h4>${item.label}\n</h4>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants,
};
