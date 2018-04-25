const contextDefault = require('@ecl/generic-component-list-item/data/demo--default');
const contextDate = require('@ecl/generic-component-list-item/data/demo--date');
const contextThumbnail = require('@ecl/generic-component-list-item/data/demo--thumbnail');
const contextHighlight = require('@ecl/generic-component-list-item/data/demo--highlight');

module.exports = {
  title: 'List items',
  label: 'List items',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      <ul class="ecl-list--unstyled">${markup}</ul>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default list item',
      context: contextDefault,
    },
    {
      name: 'date',
      label: 'Date list item',
      context: contextDate,
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail list item',
      context: contextThumbnail,
    },
    {
      name: 'higlight',
      label: 'Highlight list item',
      context: contextHighlight,
    },
  ],
};
