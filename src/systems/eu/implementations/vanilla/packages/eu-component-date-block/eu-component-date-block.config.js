const contextDefault = require('@ecl/generic-component-date-block/data/demo--default');
const contextOngoing = require('@ecl/generic-component-date-block/data/demo--ongoing');
const contextCancelled = require('@ecl/generic-component-date-block/data/demo--cancelled');
const contextPast = require('@ecl/generic-component-date-block/data/demo--past');

module.exports = {
  title: 'Date blocks',
  label: 'Date blocks',
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
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default event',
      context: contextDefault,
    },
    {
      name: 'ongoing',
      label: 'Ongoing event',
      context: contextOngoing,
    },
    {
      name: 'cancelled',
      label: 'Cancelled event',
      context: contextCancelled,
    },
    {
      name: 'past',
      label: 'Past event',
      context: contextPast,
    },
  ],
};
