module.exports = {
  title: 'Site headers',
  label: 'Site headers',
  tags: ['organism'],
  status: 'ready',
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
