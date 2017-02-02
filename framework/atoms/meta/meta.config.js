module.exports = {
  title: 'Meta',
  label: 'Meta',
  status: 'wip',
  collated: false,
  preview: '@preview-center-transparent',
  variants: [{
    name: 'default',
    label: 'Default',
    context: {
      modifier: '',
      meta_item_type_data: 'news article',
      meta_item_data: '17 September 2014',
    },
  }, {
    name: 'header',
    label: 'Header',
    context: {
      modifier: 'meta--header',
      meta_item_type_data: 'news article',
      meta_item_data: '17 September 2014',
    },
  }],
};
