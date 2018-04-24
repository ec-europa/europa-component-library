const contextDefault = require('./data/demo--default');
const contextFacet = require('./data/demo--facet');
const contextFacetClose = require('./data/demo--facet-close');

module.exports = {
  title: 'Tags',
  label: 'Tags',
  status: 'ready',
  tags: ['atom'],
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
      label: 'Default tags',
      context: contextDefault,
    },
    {
      name: 'facet',
      label: 'Facet tags',
      context: contextFacet,
    },
    {
      name: 'facet-close',
      label: 'Facet tag with close',
      context: contextFacetClose,
    },
  ],
};
