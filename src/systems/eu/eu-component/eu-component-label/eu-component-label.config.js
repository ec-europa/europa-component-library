const contextUpcoming = require('@ecl/generic-component-label/data/demo--upcoming');
const contextOpen = require('@ecl/generic-component-label/data/demo--open');
const contextClose = require('@ecl/generic-component-label/data/demo--close');

module.exports = {
  title: 'Labels',
  label: 'Labels',
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
  tags: ['atom'],
  default: 'upcoming',
  variants: [
    {
      name: 'upcoming',
      label: 'Upcoming',
      context: contextUpcoming,
    },
    {
      name: 'open',
      label: 'Open / Highlight ',
      context: contextOpen,
    },
    {
      name: 'close',
      label: 'Closed',
      context: contextClose,
    },
  ],
};
