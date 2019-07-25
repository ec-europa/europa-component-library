module.exports = {
  label: 'Do you need help?', // DEPRECATED
  labelId: 'radio-binary-label', // DEPRECATED
  legend: 'Do you need help?',
  legendId: 'legend-id',
  helperId: 'radio-binary-helper',
  helperText: 'Helper text for the group',
  invalidText: 'Error message for the group',
  name: 'radio-binary',
  binary: true,
  items: [
    {
      id: 'radio-binary-1',
      value: 'yes',
      label: 'Yes',
      checked: true,
    },
    {
      id: 'radio-binary-2',
      value: 'no',
      label: 'No',
    },
  ],
};
