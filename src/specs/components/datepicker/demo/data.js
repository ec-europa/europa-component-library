module.exports = {
  label: 'Label',
  helper_text: "This is the input's helper text.",
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  invalid_text: 'This is the error message',
  optional_text: ' (optional)',
  required_text: '*',
  required: true,
  input: {
    id: 'example-input-id-1',
    name: 'example-input-id-1',
    input_type: 'datepicker',
    placeholder: 'DD-MM-YYYY',
    autoinit: true,
    required: true,
    default_value: '11-10-2021',
    icons_path: '/icons.svg',
  },
};
