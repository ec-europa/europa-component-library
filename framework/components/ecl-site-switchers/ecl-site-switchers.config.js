module.exports = {
  title: 'Site switchers',
  label: 'Site switchers',
  status: 'ready',
  preview: '@preview-center-transparent',
  tags: ['atom'],
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        political: { href: '#', label: 'Commission and its priorities' },
        info: { href: '#', label: 'Policies, information and services' },
      },
    },
    {
      name: 'header',
      label: 'Header',
      context: {
        variant: 'header',
        political: { href: '#', label: 'Commission and its priorities' },
        info: { href: '#', label: 'Policies, information and services' },
      },
    },
    {
      name: 'footer',
      label: 'Footer',
      context: {
        variant: 'footer',
        political: { href: '#', label: 'Commission and its priorities' },
        info: { href: '#', label: 'Policies, information and services' },
      },
    },
  ],
};
