// Simple content for demo
module.exports = {
  label: 'Label',
  feedback_text: 'Feedback text',
  sr_feedback_icon: 'Error',
  helper_text:
    'Only <strong>txt doc docx pdf odt rtf</strong> files. Maximum size is <strong>5 MB</strong>.<br>Encrypted documents and those containing macros are not accepted.',
  required_text: '(required)',
  optional_text: '(optional)',
  required: true,
  disabled: false,
  input: {
    input_type: 'file',
    id: 'example-file-upload-multiple',
    name: 'file-upload-name',
    button_choose_label: 'Choose files',
    button_replace_label: 'Replace files',
    multiple: true,
  },
};
