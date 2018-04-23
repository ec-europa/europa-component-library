const contextOne = require('@ecl/generic-component-listing/data/data--one-column');
const contextTwo = require('@ecl/generic-component-listing/data/data--two-column');
const contextThree = require('@ecl/generic-component-listing/data/data--three-column');

module.exports = {
  title: 'Listings',
  label: 'Listings',
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
  default: 'one-column',
  variants: [
    {
      name: 'one-column',
      label: 'One column listing',
      context: contextOne,
    },
    {
      name: 'two-columns',
      label: 'Two columns listing',
      context: contextTwo,
    },
    {
      name: 'three-columns',
      label: 'Three columns listing',
      context: contextThree,
    },
  ],
};
