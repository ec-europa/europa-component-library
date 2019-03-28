module.exports = {
  labelId: 'radio-invalid-label',
  label: 'Select your country',
  helperId: 'radio-invalid-helper',
  helperText: 'Helper text for the group',
  invalidText: 'Error message for the group',
  invalid: true,
  name: 'radio-invalid',
  items: [
    {
      id: 'radio-invalid-1',
      value: 'lu',
      label: 'Luxembourg',
      helperId: 'helper-invalid-1',
      helperText: 'Help text for option 1',
    },
    {
      id: 'radio-invalid-2',
      value: 'be',
      label: 'Belgium',
      helperId: 'helper-invalid-2',
      helperText: 'Help text for option 2',
    },
    {
      id: 'radio-invalid-3',
      value: 'fr',
      label: 'France (disabled)',
      helperId: 'helper-invalid-3',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
