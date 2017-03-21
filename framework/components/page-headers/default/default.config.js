module.exports = {
  title: 'Default',
  label: 'Default',
  status: 'planned',
  default: 'image',
  variants: [{
    name: 'image',
    label: 'Image',
    title: 'Header with a background image',
    context: {
      modifier_class: 'page-header--image',
    },
  }, {
    name: 'large-intro',
    label: 'Large intro',
    title: 'Header with larger intro text',
    context: {
      modifier_class: 'page-header--large-intro',
    },
  }],
};
