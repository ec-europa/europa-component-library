const { variants } = require('@ecl/generic-component-button/data/demo');

module.exports = {
  title: 'Buttons',
  label: 'Buttons',
  preview: '@preview-icons-center-transparent',
  tags: ['atom'],
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants,
  context: {
    icon: {
      icon_path: '../../ec-preset-website/images/icons/symbol-defs.svg',
    },
  },
};
