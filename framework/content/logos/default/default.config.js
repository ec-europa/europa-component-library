module.exports = {
  title: 'Logos - Default',
  label: 'Default',
  status: 'planned',
  preview: '@preview-center-transparent',
  order: 1,
  context: {
    to: '#link-to-homepage',
    title: 'Home',
  },
  variants: [{
    name: 'no-svg',
    context: {
      global: {
        svg: false,
      },
    },
  }],
};
