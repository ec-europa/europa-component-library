module.exports = {
  title: 'Language list',
  label: 'Language list',
  status: 'ready',
  collated: false,
  default: 'splash',
  preview: '@preview-splash-page',
  variants: [
    {
      name: 'splash',
      label: 'Splash',
      context: {
        variant: 'splash',
      },
    },
    {
      name: 'overlay',
      label: 'Overlay',
      context: {
        variant: 'overlay',
      },
    },
  ],
};
