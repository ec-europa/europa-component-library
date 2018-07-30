const contextDefault = require('@ecl/generic-component-button/data/demo--default');
const contextPrimary = require('@ecl/generic-component-button/data/demo--primary');
const contextSecondary = require('@ecl/generic-component-button/data/demo--secondary');
const contextCall = require('@ecl/generic-component-button/data/demo--call')(
  'eu'
);

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
  default: 'default',
  variants: [
    {
      name: 'default',
      context: contextDefault,
    },
    {
      name: 'primary',
      context: contextPrimary,
    },
    {
      name: 'secondary',
      context: contextSecondary,
    },
    {
      name: 'call',
      context: contextCall,
    },
  ],
};
