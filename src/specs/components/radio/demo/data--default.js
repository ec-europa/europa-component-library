const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  name: 'radio-group-1',
  helper_id: 'helper-id-1',
  optional_text: '(optional)',
  required_text: '*',
  required: true,
  label: 'Select your country',
  helper_text: "This is the group's helper text.",
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  items: [
    {
      id: 'radio-default-1',
      value: 'lu',
      label: 'Luxembourg',
      helper_id: 'helper-1',
      helper_text: 'Help text for an option',
      checked: true,
    },
    {
      id: 'radio-default-2',
      value: 'be',
      label: 'Belgium',
      helper_id: 'helper-2',
      helper_text: 'Help text for an option',
    },
    {
      id: 'radio-default-3',
      value: 'fr',
      label: 'France (disabled)',
      helper_id: 'helper-3',
      helper_text: 'Help text for an option',
      disabled: true,
    },
    {
      id: 'radio-default-4',
      value: 'lorem',
      label: `Lorem ipsum dolor sit amet, <a href="${exampleLink}">consectetur adipiscing elit</a>. Nullam suscipit eros gravida arcu aliquet, sed finibus nisl egestas. Cras sed purus nec turpis eleifend dignissim a in massa.`,
      helper_id: 'helper-4',
      helper_text: 'Help text for an option',
    },
  ],
};
