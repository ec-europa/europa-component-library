const variants = require('./variants');

module.exports = {
  title: 'Tables',
  label: 'Tables',
  status: 'ready',
  collated: true,
  preview: '@preview-tables',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.eclTables();
      });`,
    },
  },
  collator(markup, item) {
    return `
        <!-- Start: @${item.handle} -->\n
        <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
        ${markup}\n
        <!-- End: @${item.handle} -->\n
      `;
  },
  variants,
};
