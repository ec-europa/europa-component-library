const contextDefault = require('./data/demo--default');
const contextTabs = require('./data/demo--tabs');
const contextSmall = require('./data/demo--small');

module.exports = {
  title: 'Navigation lists',
  label: 'Lists',
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
  tags: ['organism'],
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: contextDefault,
    },
    {
      name: 'tabs',
      label: 'Tabs',
      context: contextTabs,
    },
    {
      name: 'small',
      label: 'Small',
      context: contextSmall,
    },
  ],
};
