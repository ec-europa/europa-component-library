// Simple content for demo
module.exports = {
  label: 'Label',
  helper_text:
    "This is the input's helper text.<div class='ecl-u-mt-xs ecl-u-type-color-grey-75'>Only <strong>txt doc docx pdf odt rtf</strong> files. Maximum size is <strong>5 MB</strong>.<br>Encrypted documents and those containing macros are not accepted.</div>",
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  required_text: '*',
  optional_text: ' (optional)',
  required: true,
  disabled: false,
  invalid: false,
  input: {
    input_type: 'file',
    id: 'example-file-upload-multiple',
    name: 'file-upload-name',
    button_choose_label: 'Choose files',
    button_replace_label: 'Replace files',
    multiple: true,
    required: true,
  },
};
