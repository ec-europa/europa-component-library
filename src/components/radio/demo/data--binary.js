module.exports = {
  optional_text: '(optional)',
  required_text: '(required)',
  required: true,
  disabled: false,
  invalid: false,
  label: 'Do you need help?',
  invalid_text: 'This is the error message',
  invalid_icon: {
    name: 'error',
  },
  sr_invalid_icon: 'Error',
  helper_text: 'Helper text for the group',
  input: {
    id: 'radio-default',
    input_type: 'radio',
    name: 'radio-group-1',
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
  },
};
