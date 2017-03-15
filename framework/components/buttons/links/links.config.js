const variants = require('../variants.json');

module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'wip',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div style="margin-bottom: 1rem;">\n
        <a href="#" class="ecl-button ecl-button--${item.context.modifier}">Link button</a>\n
        <a href="http://example.com" class="ecl-button ecl-button--${item.context.modifier}">External link button</a>\n
      </div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants,
};
