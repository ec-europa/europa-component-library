module.exports = {
  title: 'Tags',
  label: 'Tags',
  status: 'planned',
  collated: false,
  variants: [{
    tags: ['atom'],
    name: 'default',
    label: 'Default',
    context: {
      label_type: 'label--default',
      label_case: '',
      label_content: 'Label default',
    },
  }, {
    name: 'facet',
    label: 'Tags facet',
  }, {
    name: 'facet-close',
    label: 'Tags facet with close',
  }],
};
