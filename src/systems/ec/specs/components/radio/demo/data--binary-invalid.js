module.exports = {
  label: 'Do you need help?', // DEPRECATED
  labelId: 'radio-binary-label', // DEPRECATED
  legend: 'Do you need help?',
  legendId: 'legend-binary-invalid-id',
  helperId: 'radio-binary-invalid-helper',
  helperText: 'Helper text for the group',
  invalidText: 'Error message for the group',
  name: 'radio-binary-invalid',
  binary: true,
  invalid: true,
  items: [
    {
      id: 'radio-binary-invalid-1',
      value: 'yes',
      label: 'Yes',
      checked: true,
    },
    {
      id: 'radio-binary-invalid-2',
      value: 'no',
      label: 'No',
    },
  ],
};
