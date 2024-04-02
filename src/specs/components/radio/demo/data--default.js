const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  optional_text: '(optional)',
  required_text: '*',
  required: true,
  label_aria_required: 'required',
  label_aria_optional: 'optional',
  disabled: false,
  invalid: false,
  label: 'Select your country',
  helper_text: "This is the group's helper text.",
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  input: {
    id: 'radio-default',
    input_type: 'radio',
    name: 'radio-group-1',
    required: true,
    items: [
      {
        id: 'radio-default-1',
        value: 'lu',
        label: 'Luxembourg',
      },
      {
        id: 'radio-default-2',
        value: 'be',
        label: 'Belgium',
      },
      {
        id: 'radio-default-3',
        value: 'fr',
        label: 'France (disabled)',
        disabled: true,
      },
      {
        id: 'radio-default-4',
        value: 'lorem',
        label: `Lorem ipsum dolor sit amet, <a href="${exampleLink}">consectetur adipiscing elit</a>. Nullam suscipit eros gravida arcu aliquet, sed finibus nisl egestas. Cras sed purus nec turpis eleifend dignissim a in massa.`,
      },
    ],
  },
};
