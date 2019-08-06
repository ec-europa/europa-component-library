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
      id: 'checkbox-invalid-1',
      value: 'es',
      label: 'Spain',
      helperId: 'helper-invalid-1',
      helperText: 'Help text for option 1',
      defaultChecked: true,
    },
    {
      id: 'checkbox-invalid-2',
      value: 'be',
      label: 'Belgium',
      helperId: 'helper-invalid-2',
      helperText: 'Help text for option 2',
    },
    {
      id: 'checkbox-invalid-3',
      value: 'fr',
      label: 'France (disabled)',
      helperId: 'helper-invalid-3',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
