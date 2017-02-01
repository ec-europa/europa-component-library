module.exports = {
  title: 'Buttons',
  label: 'Buttons',
  status: 'wip',
  collated: false,
  preview: '@preview-center-transparent',
  variants: [{
    name: 'default',
    label: 'Default',
    context: {
      modifier: 'default',
    },
  }, {
    name: 'primary',
    label: 'Primary',
    context: {
      modifier: 'primary',
    },
  }, {
    name: 'secondary',
    label: 'Secondary',
    context: {
      modifier: 'secondary',
    },
  }, {
    name: 'ctn',
    label: 'Call to action',
    context: {
      modifier: 'ctn',
    },
  }, {
    name: 'ctn--border',
    label: 'Call to action with border',
    context: {
      modifier: 'ctn--border',
    },
  }, {
    name: 'menu',
    label: 'Menu',
    context: {
      modifier: 'menu',
    },
  }],
};
