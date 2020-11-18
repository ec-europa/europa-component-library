// Simple content for demo
module.exports = {
  name: 'file-upload-name',
  label: 'Label',
  helper_text:
    "This is the input's helper text.<div class='ecl-u-mt-xs ecl-u-type-color-grey-75'>Only <strong>txt doc docx pdf odt rtf</strong> files. Maximum size is <strong>5 MB</strong>.<br />Encrypted documents and those containing macros are not accepted.</div>",
  invalid_text: 'This is the error message',
  required_text: '*',
  optional_text: ' (optional)',
  button_choose_label: 'Choose files',
  button_replace_label: 'Replace files',
  id: 'example-file-upload-multiple',
  multiple: true,
  required: true,
};
