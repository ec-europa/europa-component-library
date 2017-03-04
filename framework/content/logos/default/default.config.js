module.exports = {
  title: 'Logos - Default',
  label: 'Default',
  status: 'wip',
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
