module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'ready',
  preview: '@preview-links',
  collated: true,
  default: 'default',
  variants: [{
    name: 'default',
    label: 'default',
    context: {
      href: '/url',
      class: '',
      text: 'Link element',
    },
  }, {
    name: 'external',
    label: 'external',
    context: {
      href: 'http://',
      class: 'is-external',
      text: 'External link',
    },
  }, {
    name: 'smaller',
    label: 'smaller',
    context: {
      href: '#',
      class: 'smaller',
      text: 'Smaller text link',
    },
  }],
};
