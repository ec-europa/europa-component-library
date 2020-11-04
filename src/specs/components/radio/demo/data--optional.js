module.exports = {
  name: 'radio-group-1',
  helper_id: 'helper-id-1',
  required_text: '*',
  required: true,
  label: 'Select your country',
  helper_text: "This is the group's helper text.",
  invalid_text: 'This is the error message',
  optional_text: ' (optional)',
  items: [
    {
      id: 'radio-optional-1',
      value: 'lu',
      label: 'Luxembourg',
      helper_id: 'helper-1',
      helper_text: 'Help text for option 1',
      checked: true,
    },
    {
      id: 'radio-optional-2',
      value: 'be',
      label: 'Belgium',
      helper_id: 'helper-2',
      helper_text: 'Help text for option 2',
    },
    {
      id: 'radio-optional-3',
      value: 'fr',
      label: 'France (disabled)',
      helper_id: 'helper-3',
      helper_text: 'Help text for option 3',
      disabled: true,
    },
  ],
};
