// Simple content for demo
module.exports = {
  label: 'Label',
  invalid_text: 'This is the error message',
  invalid_icon: {
    name: 'error',
  },
  sr_invalid_icon: 'Error',
  helper_text:
    'Only <strong>txt doc docx pdf odt rtf</strong> files. Maximum size is <strong>5 MB</strong>.<br />Encrypted documents and those containing macros are not accepted.',
  required_text: '(required)',
  optional_text: '(optional)',
  required: true,
  label_aria_required: 'required',
  disabled: false,
  invalid: false,
  input: {
    input_type: 'file',
    id: 'example-input-id-1',
    name: 'file-upload-name',
    button_choose_label: 'Choose file',
    button_replace_label: 'Replace file',
    multiple: false,
    required: true,
  },
};
