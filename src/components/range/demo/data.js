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
  invalid_text: 'Error text',
  invalid_icon: {
    name: 'error-outline',
  },
  sr_invalid_icon: 'Error',
  helper_text: 'Optional help text',
  optional_text: '(optional)',
  required: false,
  required_text: '(required)',
};
