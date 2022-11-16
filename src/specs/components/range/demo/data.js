// Simple content for demo
module.exports = {
  id: 'example-range-id',
  min: 0,
  max: 30,
  value: 15,
  label: 'Range slider',
  width: 'm',
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  helper_text: "This is the input's helper text.",
  value_text: 'Value: ',
  optional_text: '(optional)',
  required: false,
  required_text: '*',
};
