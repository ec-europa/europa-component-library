module.exports = {
  title: 'Breadcrumbs',
  label: 'Breadcrumbs',
  status: 'ready',
  variants: [{
    name: 'default',
    label: 'Default',
  }, {
    name: 'collapsible',
    label: 'Collapsible',
    context: {
      modifier: 'collapsible',
      _demo: {
        scripts: 'Europa.breadcrumbs();',
      },
    },
  }],
};
