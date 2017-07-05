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
        political: 'Commission and its priorities',
        info: 'Policies, information and services',
      },
    },
    {
      name: 'header',
      label: 'Header',
      context: {
        modifier: 'ecl-site-switcher--header',
        political: 'Commission and its priorities',
        info: 'Policies, information and services',
      },
    },
    {
      name: 'footer',
      label: 'Footer',
      context: {
        modifier: 'ecl-site-switcher--footer',
        political: 'Commission and its priorities',
        info: 'Policies, information and services',
      },
    },
  ],
};
