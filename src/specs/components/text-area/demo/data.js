// Simple content for demo
module.exports = {
  label: 'Label',
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  helper_text: "This is the input's helper text.",
  required: false,
  label_aria_required: 'required',
  label_aria_optional: 'optional',
  disabled: false,
  invalid: false,
  required_text: '*',
  optional_text: '(optional)',
  input: {
    input_type: 'textarea',
    id: 'example-textarea-id-1',
    placeholder: 'Placeholder text',
    rows: 4,
    width: 'm',
  },
};
