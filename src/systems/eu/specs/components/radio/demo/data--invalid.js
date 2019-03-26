module.exports = {
  labelId: 'radio-invalid-label',
  label: 'Select your country',
  helperText: 'Helper text for the group',
  invalidText: 'Error message for the group',
  invalid: true,
  name: 'radio-invalid',
  items: [
    {
      id: 'radio-invalid-1',
      value: 'lu',
      label: 'Luxembourg',
      helperText: 'Help text for option 1',
    },
    {
      id: 'radio-invalid-2',
      value: 'be',
      label: 'Belgium',
      helperText: 'Help text for option 2',
    },
    {
      id: 'radio-invalid-3',
      value: 'fr',
      label: 'France (disabled)',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
