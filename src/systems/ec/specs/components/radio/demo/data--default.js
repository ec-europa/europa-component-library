module.exports = {
  labelId: 'radio-default-label',
  label: 'Select your country',
  helperText: 'Helper text for the group',
  invalidText: 'Error message for the group',
  name: 'radio-default',
  items: [
    {
      id: 'radio-default-1',
      value: 'lu',
      label: 'Luxembourg',
      helperId: 'helper-default-1',
      helperText: 'Help text for option 1',
    },
    {
      id: 'radio-default-2',
      value: 'be',
      label: 'Belgium',
      helperId: 'helper-default-2',
      helperText: 'Help text for option 2',
    },
    {
      id: 'radio-default-3',
      value: 'fr',
      label: 'France (disabled)',
      helperId: 'helper-default-3',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
