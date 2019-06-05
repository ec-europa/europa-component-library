module.exports = {
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        label: 'Default',
        modifier: 'default',
      },
    },
    {
      name: 'default-disabled',
      label: 'Default - disabled',
      context: {
        label: 'Default - disabled',
        modifier: 'default',
        is_disabled: true,
      },
    },
    {
      name: 'primary',
      context: {
        label: 'Primary',
        modifier: 'primary',
      },
    },
    {
      name: 'secondary',
      context: {
        label: 'Secondary',
        modifier: 'secondary',
      },
    },
    {
      name: 'call',
      label: 'Call-to-action',
      context: {
        label: 'Call-to-action',
        modifier: 'call',
        icon: 'caret-right',
      },
    },
  ],
};
