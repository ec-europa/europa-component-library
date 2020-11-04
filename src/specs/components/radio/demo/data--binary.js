module.exports = {
  name: 'radio-group-1',
  helper_id: 'helper-id-1',
  optional_text: '(optional)',
  required_text: '*',
  required: true,
  label: 'Do you need help?',
  helper_text: 'Helper text for the group',
  invalid_text: 'Error message for the group',
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
