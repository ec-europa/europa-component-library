const contextStandalone = require('@ecl/generic-component-link-block/data/demo--standalone');
const contextWrapper = require('@ecl/generic-component-link-block/data/demo--wrapper');

module.exports = {
  title: 'Link blocks',
  label: 'Link blocks',
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
  default: 'standalone',
  variants: [
    {
      name: 'standalone',
      label: 'Standalone block of links',
      context: contextStandalone,
    },
    {
      name: 'wrapper',
      label: 'Block of links with title',
      context: contextWrapper,
    },
  ],
};
