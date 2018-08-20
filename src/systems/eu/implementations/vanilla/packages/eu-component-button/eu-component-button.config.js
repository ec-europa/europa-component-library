const contextPrimary = require('@ecl/generic-component-button/data/demo--primary');
const contextSecondary = require('@ecl/generic-component-button/data/demo--secondary');
const contextGhost = require('@ecl/generic-component-button/data/demo--ghost');
const contextCall = require('@ecl/generic-component-button/data/demo--call')(
  'eu'
);
const contextSearch = require('@ecl/generic-component-button/data/demo--search');

module.exports = {
  title: 'Buttons',
  label: 'Buttons',
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
  default: 'primary',
  variants: [
    {
      name: 'primary',
      context: contextPrimary,
    },
    {
      name: 'secondary',
      context: contextSecondary,
    },
    {
      name: 'ghost',
      context: contextGhost,
    },
    {
      name: 'call',
      context: contextCall,
    },
    {
      name: 'search',
      context: contextSearch,
    },
  ],
};
