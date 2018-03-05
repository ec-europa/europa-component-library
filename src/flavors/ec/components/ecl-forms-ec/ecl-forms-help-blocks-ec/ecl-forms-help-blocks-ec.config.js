module.exports = {
  title: 'Help blocks',
  label: 'Help blocks',
  status: 'ready',
  collated: true,
  variants: [
    {
      name: 'default',
      context: {
        content: 'This is some placeholder help text.',
      },
    },
    {
      name: 'disabled',
      context: {
        content: 'Disabled: This is some placeholder help text.',
        is_disabled: true,
      },
    },
    {
      name: 'error',
      context: {
        content: 'On error: This is some placeholder help text.',
        has_error: true,
      },
    },
  ],
};
