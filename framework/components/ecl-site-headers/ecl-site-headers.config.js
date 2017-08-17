module.exports = {
  title: 'Site headers',
  label: 'Site headers',
  tags: ['organism'],
  status: 'ready',
  variants: [
    {
      name: 'default',
      context: {
        political: { href: '#', label: 'Commission and its priorities' },
        info: { href: '#', label: 'Policies, information and services' },
      },
    },
    {
      name: 'homepage',
      context: {
        global: {
          language: 'en',
        },
      },
    },
  ],
};
