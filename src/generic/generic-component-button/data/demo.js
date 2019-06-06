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
      name: 'primary-disabled',
      label: 'Primary - disabled',
      context: {
        label: 'Primary - disabled',
        modifier: 'primary',
        is_disabled: true,
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
      name: 'secondary-disabled',
      label: 'Secondary - disabled',
      context: {
        label: 'Secondary - disabled',
        modifier: 'secondary',
        is_disabled: true,
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
    {
      name: 'call-disabled',
      label: 'Call-to-action - disabled',
      context: {
        label: 'Call-to-action - disabled',
        modifier: 'call',
        icon: 'caret-right',
        is_disabled: true,
      },
    },
  ],
};
