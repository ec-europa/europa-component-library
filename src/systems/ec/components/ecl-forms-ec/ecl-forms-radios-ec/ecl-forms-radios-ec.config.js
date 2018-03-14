module.exports = {
  title: 'Radios',
  label: 'Radios',
  status: 'ready',
  collated: true,
  variants: [
    {
      name: 'default',
      context: {
        id: 'opt-1',
        name: 'opt-1',
        value: 'opt-1',
        label: 'Default',
      },
    },
    {
      name: 'checked',
      context: {
        id: 'opt-2',
        name: 'opt-2',
        value: 'opt-2',
        label: 'Checked option',
        checked: true,
      },
    },
    {
      name: 'disabled',
      context: {
        id: 'opt-3',
        name: 'opt-3',
        value: 'opt-3',
        label: 'Disabled option',
        is_disabled: true,
      },
    },
    {
      name: 'error',
      context: {
        id: 'opt-4',
        name: 'opt-4',
        value: 'opt-4',
        label: 'Option with error',
        has_error: true,
      },
    },
  ],
};
