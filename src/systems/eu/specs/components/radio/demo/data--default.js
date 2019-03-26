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
      helperText: 'Help text for option 1',
    },
    {
      id: 'radio-default-2',
      value: 'be',
      label: 'Belgium',
      helperText: 'Help text for option 2',
    },
    {
      id: 'radio-default-3',
      value: 'fr',
      label: 'France (disabled)',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
