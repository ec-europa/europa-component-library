module.exports = {
  legend: 'Select your country',
  helperText: "This is the group's helper text.",
  invalidText: 'This is the error message',
  optionalText: ' (optional)',
  items: [
    {
      id: 'radio-optional-1',
      value: 'lu',
      label: 'Luxembourg',
      helperId: 'helper-1',
      helperText: 'Help text for option 1',
      checked: true,
    },
    {
      id: 'radio-optional-2',
      value: 'be',
      label: 'Belgium',
      helperId: 'helper-2',
      helperText: 'Help text for option 2',
    },
    {
      id: 'radio-optional-3',
      value: 'fr',
      label: 'France (disabled)',
      helperId: 'helper-3',
      helperText: 'Help text for option 3',
      disabled: true,
    },
  ],
};
