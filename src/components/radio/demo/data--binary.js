module.exports = {
  optional_text: '(optional)',
  required_text: '(required)',
  required: true,
  disabled: false,
  label: 'Do you need help?',
  feedback_text: 'Feedback text',
  sr_feedback_icon: 'Error',
  helper_text: 'Optional help text',
  input: {
    id: 'radio-default',
    input_type: 'radio',
    name: 'radio-group-1',
    binary: true,
    items: [
      {
        id: 'radio-binary-1',
        value: 'yes',
        label: 'Yes',
        checked: true,
      },
      {
        id: 'radio-binary-2',
        value: 'no',
        label: 'No',
      },
    ],
  },
};
