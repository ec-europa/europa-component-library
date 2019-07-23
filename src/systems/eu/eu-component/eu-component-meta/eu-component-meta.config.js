const contextDefault = require('@ecl/generic-component-meta/data/demo--default');
const contextHeader = require('@ecl/generic-component-meta/data/demo--header');

module.exports = {
  title: 'Meta',
  label: 'Meta',
  status: 'ready',
  tags: ['atom'],
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<h3 class="ecl-heading ecl-heading--h3">${item.label}</h3>\n${markup}\n<!-- End: @${item.handle} -->\n`;
  },
  collated: true,
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default meta',
      context: contextDefault,
    },
    {
      name: 'header',
      label: 'Header meta',
      context: contextHeader,
    },
  ],
};
