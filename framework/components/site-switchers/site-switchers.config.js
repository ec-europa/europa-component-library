module.exports = {
  title: 'Site switchers',
  label: 'Site switchers',
  status: 'planned',
  preview: '@preview-center-transparent',
  tags: ['atom'],
  variants: [{
    name: 'header',
    label: 'Header',
    context: {
      modifier: 'site-switcher--header',
    },
  }, {
    name: 'footer',
    label: 'Footer',
    context: {
      modifier: 'site-switcher--footer',
    },
  }],
};
