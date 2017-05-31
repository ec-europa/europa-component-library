module.exports = {
  title: 'Site headers',
  label: 'Site headers',
  tags: ['organism'],
  status: 'wip',
  context: {
    global: {
      language: 'en',
    },
  },
  variants: [
    {
      name: 'default',
    },
    {
      name: 'homepage',
      context: {
        variant: 'homepage',
      },
    },
  ],
};
