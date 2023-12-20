module.exports = {
  optional_text: '(optional)',
  required_text: '*',
  required: true,
  label_aria_required: 'required',
  label_aria_optional: 'optional',
  disabled: false,
  invalid: false,
  label: 'Do you need help?',
  helper_text: 'Helper text for the group',
  invalid_text: 'Error message for the group',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  input: {
    id: 'radio-default',
    input_type: 'radio',
    name: 'radio-group-1',
    binary: true,
    required: true,
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
