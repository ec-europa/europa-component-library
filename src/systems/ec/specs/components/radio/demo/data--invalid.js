module.exports = {
  label: 'Select your country', // DEPRECATED
  labelId: 'label-id', // DEPRECATED
  legend: 'Select your country',
  legendId: 'legend-invalid-id',
  helperId: 'helper-invalid-id',
  helperText: "This is the group's helper text.",
  invalidText: 'This is the error message',
  name: 'radio-invalid',
  invalid: true,
  items: [
    {
      id: 'radio-invalid-1',
      value: 'lu',
      label: 'Luxembourg',
      helperId: 'helper-1',
      helperText: 'Help text for option 1',
      checked: true,
    },
    {
      id: 'radio-invalid-2',
      value: 'be',
      label: 'Belgium',
      helperId: 'helper-2',
      helperText: 'Help text for option 2',
    },
    {
      id: 'radio-invalid-3',
      value: 'fr',
      label: 'France (disabled)',
      helperId: 'helper-3',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
