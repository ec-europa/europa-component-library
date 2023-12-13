// Simple content for demo
module.exports = {
  input: {
    input_type: 'range',
    id: 'example-range-id',
    min: 0,
    max: 30,
    value: 15,
    value_text: 'Value: ',
    width: 'm',
  },
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  label: 'Range slider',
  helper_text: "This is the input's helper text.",
  optional_text: '(optional)',
  required: false,
  label_aria_required: 'required',
  label_aria_optional: 'optional',
  required_text: '*',
};
