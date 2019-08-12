module.exports = {
  helperId: 'checkbox-default-helper',
  helperText: 'Helper text for the group',
  invalid: true,
  invalidText: 'Error message for the group',
  legend: 'Select your preferred destinations',
  legendId: 'checkbox-default-label',
  name: 'checkbox-invalid',
  items: [
    {
      defaultChecked: true,
      helperId: 'helper-invalid-1',
      helperText: 'Help text for option 1',
      id: 'checkbox-invalid-1',
      label: 'Spain',
      value: 'es',
    },
    {
      helperId: 'helper-invalid-2',
      helperText: 'Help text for option 2',
      id: 'checkbox-invalid-2',
      label: 'Belgium',
      value: 'be',
    },
    {
      disabled: true,
      helperId: 'helper-invalid-3',
      helperText: 'Help text for option 3',
      id: 'checkbox-invalid-3',
      label: 'France (disabled)',
      value: 'fr',
    },
  ],
};
