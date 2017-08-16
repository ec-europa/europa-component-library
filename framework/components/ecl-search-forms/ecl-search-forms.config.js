module.exports = {
  title: 'Search forms',
  label: 'Search forms',
  status: 'ready',
  tags: ['molecule'],
  variants: [
    {
      name: 'default',
      label: 'Corporate',
      status: 'ready',
    },
    {
      name: 'internal',
      status: 'ready',
      context: {
        variant: 'internal',
      },
    },
  ],
};
