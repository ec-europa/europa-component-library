const contextDefault = require('@ecl/generic-component-featured-item/data/demo--default');
const contextExtended = require('@ecl/generic-component-featured-item/data/demo--extended');

module.exports = {
  title: 'Featured items',
  label: 'Featured items',
  status: 'ready',
  tags: ['molecule'],
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
      label: 'Featured item',
      context: contextDefault,
    },
    {
      name: 'extended',
      label: 'Featured item extended',
      context: contextExtended,
    },
  ],
};
