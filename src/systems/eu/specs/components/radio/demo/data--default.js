module.exports = {
  label: 'Select your country', // DEPRECATED
  labelId: 'label-id', // DEPRECATED
  legend: 'Select your country',
  legendId: 'legend-id',
  helperId: 'helper-id',
  helperText: "This is the group's helper text.",
  invalidText: 'This is the error message',
  requiredText: '*',
  optionalText: '(optional)',
  name: 'radio-default',
  items: [
    {
      id: 'radio-default-1',
      value: 'lu',
      label: 'Luxembourg',
      helperId: 'helper-1',
      helperText: 'Help text for option 1',
      checked: true,
    },
    {
      id: 'radio-default-2',
      value: 'be',
      label: 'Belgium',
      helperId: 'helper-2',
      helperText: 'Help text for option 2',
    },
    {
      id: 'radio-default-3',
      value: 'fr',
      label: 'France (disabled)',
      helperId: 'helper-3',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
