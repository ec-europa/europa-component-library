const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  helper_text: 'Helper text for the group',
  invalid_text: 'Error message for the group',
  label: 'Select your preferred destinations',
  optional_text: '(optional)',
  disabled: false,
  invalid: false,
  required_text: '*',
  required: true,
  label_aria_required: 'required',
  name: 'checkbox-default',
  invalid_icon: {
    name: 'error',
  },
  sr_invalid_icon: 'Error',
  input: {
    id: 'checkbox-default',
    input_type: 'checkbox',
    name: 'checkbox-default',
    invalid_text: 'Error message for the group',
    invalid_icon: {
      name: 'error',
    },
    sr_invalid_icon: 'Error',
    items: [
      {
        checked: true,
        id: 'checkbox-default-1',
        label: 'Spain',
        value: 'es',
      },
      {
        id: 'checkbox-default-2',
        label: 'Belgium',
        value: 'be',
      },
      {
        disabled: true,
        id: 'checkbox-default-3',
        label: 'France (disabled)',
        value: 'fr',
      },
      {
        id: 'checkbox-default-4',
        label: `Lorem ipsum dolor sit amet, <a href="${exampleLink}">consectetur adipiscing elit</a>`,
        value: 'lorem',
      },
    ],
  },
};
