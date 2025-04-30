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
  label: 'Range slider',
  invalid_text: 'This is the error message',
  invalid_icon: {
    name: 'error',
  },
  sr_invalid_icon: 'Error',
  helper_text: "This is the input's helper text.",
  optional_text: '(optional)',
  required: false,
  label_aria_required: 'required',
  required_text: '*',
};
