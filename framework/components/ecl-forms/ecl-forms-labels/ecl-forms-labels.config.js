module.exports = {
  title: 'Labels',
  label: 'Labels',
  status: 'ready',
  collated: true,
  variants: [
    {
      name: 'default',
      context: {
        label: 'Some label',
      },
    },
    {
      name: 'disabled',
      context: {
        label: 'Some disabled label',
        isDisabled: true,
      },
    },
  ],
};
