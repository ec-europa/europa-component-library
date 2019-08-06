module.exports = {
  helperId: 'checkbox-default-helper',
  helperText: 'Helper text for the group',
  invalidText: 'Error message for the group',
  legend: 'Select your preferred destinations',
  legendId: 'checkbox-default-label',
  name: 'checkbox-default',
  items: [
    {
      defaultChecked: true,
      helperId: 'helper-default-1',
      helperText: 'Help text for option 1',
      id: 'checkbox-default-1',
      label: 'Spain',
      value: 'es',
    },
    {
      helperId: 'helper-default-2',
      id: 'checkbox-default-2',
      label: 'Belgium',
      value: 'be',
      helperText: 'Help text for option 2',
    },
    {
      disabled: true,
      helperId: 'helper-default-3',
      helperText: 'Help text for option 3',
      id: 'checkbox-default-3',
      label: 'France (disabled)',
      value: 'fr',
    },
  ],
};
