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
      context: {
        meta_item_type_data: 'news article',
        meta_item_data: '17 September 2014',
      },
    },
    {
      name: 'header',
      label: 'Header meta',
      context: {
        modifier: 'ecl-meta--header',
        meta_item_type_data: 'news article',
        meta_item_data: '17 September 2014',
      },
    },
  ],
};
