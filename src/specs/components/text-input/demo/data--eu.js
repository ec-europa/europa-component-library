// Simple content for demo
module.exports = {
  id: 'example-input-id-1',
  label: 'Label',
  placeholder: 'Placeholder text',
  width: 'm',
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    type: 'notifications',
    name: 'warning',
    size: 'm',
  },
  helper_text: "This is the input's helper text.",
  optional_text: '(optional)',
  required: false,
  required_text: '*',
};
