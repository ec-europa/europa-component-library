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
        political: {
          href: '../../example.html#',
          label: 'Commission and its priorities',
        },
        info: {
          href: '../../example.html#',
          label: 'Policies, information and services',
          is_active: true,
        },
      },
    },
    {
      name: 'header',
      label: 'Header',
      context: {
        variant: 'header',
        political: {
          href: '../../example.html#',
          label: 'Commission and its priorities',
          variant: '',
        },
        info: {
          href: '../../example.html#',
          label: 'Policies, information and services',
          is_active: true,
          variant: '',
        },
      },
    },
    {
      name: 'footer',
      label: 'Footer',
      context: {
        variant: 'footer',
        political: {
          href: '../../example.html#',
          label: 'Commission and its priorities',
          variant: '',
        },
        info: {
          href: '../../example.html#',
          label: 'Policies, information and services',
          is_active: true,
          variant: '',
        },
      },
    },
  ],
};
