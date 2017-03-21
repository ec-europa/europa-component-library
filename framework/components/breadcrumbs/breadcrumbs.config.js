module.exports = {
  title: 'Breadcrumbs',
  label: 'Breadcrumbs',
  status: 'planned',
  tags: ['molecule'],
  preview: '@preview-breadcrumbs',
  context: {
    segments: [{
      target: '#',
      title: 'European Commission',
      isInternal: true,
    }, {
      target: '#',
      title: 'Priorities',
      isInternal: false,
    }, {
      target: '#',
      title: 'Jobs, Growth and Investment',
      isInternal: false,
    }],
  },
  variants: [{
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
