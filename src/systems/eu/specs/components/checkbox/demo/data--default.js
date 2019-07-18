module.exports = {
  labelId: 'checkbox-default-label',
  label: 'Select your preferred destionations',
  helperId: 'checkbox-default-helper',
  helperText: 'Helper text for the group',
  invalidText: 'Error message for the group',
  name: 'checkbox-default',
  items: [
    {
      id: 'checkbox-default-1',
      value: 'es',
      label: 'Spain',
      helperId: 'helper-default-1',
      helperText: 'Help text for option 1',
      defaultChecked: true,
    },
    {
      id: 'checkbox-default-2',
      value: 'be',
      label: 'Belgium',
      helperId: 'helper-default-2',
      helperText: 'Help text for option 2',
    },
    {
      id: 'checkbox-default-3',
      value: 'fr',
      label: 'France (disabled)',
      helperId: 'helper-default-3',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
