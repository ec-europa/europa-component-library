module.exports = {
  label: 'Label',
  helper_text: "This is the input's helper text.",
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  sr_invalid_icon: 'Error',
  invalid_text: 'This is the error message',
  optional_text: '(optional)',
  required_text: '*',
  required: true,
  label_aria_required: 'required',
  label_aria_optional: 'optional',
  disabled: false,
  invalid: false,
  input: {
    id: 'example-input-id-1',
    name: 'example-input-id-1',
    input_type: 'datepicker',
    placeholder: 'DD-MM-YYYY',
    autoinit: true,
    required: true,
    default_value: '03-10-2023',
    icon_path: '/icons.svg',
  },
};
