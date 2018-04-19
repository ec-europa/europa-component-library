const contextDefault = require('@ecl/generic-component-tag/data/data–default.config'); // Unable to resolve path to module
const contextFacet = require('@ecl/generic-component-tag/data/data–facet.config');
const contextFacetClose = require('@ecl/generic-component-tag/data/data-facet-close.config');

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
