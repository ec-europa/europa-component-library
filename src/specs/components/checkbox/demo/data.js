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
  label_aria_optional: 'optional',
  name: 'checkbox-default',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  input: {
    id: 'checkbox-default',
    input_type: 'checkbox',
    name: 'checkbox-default',
    invalid_text: 'Error message for the group',
    invalid_icon: {
      path: '/icons.svg',
      name: 'error',
      size: 'm',
    },
    items: [
      {
        checked: true,
        id: 'checkbox-default-1',
        label: 'Spain',
        value: 'es',
        icon_path: '/icons.svg',
        required_text: '*',
        label_aria_required: 'required',
      },
      {
        id: 'checkbox-default-2',
        label: 'Belgium',
        value: 'be',
        icon_path: '/icons.svg',
      },
      {
        disabled: true,
        id: 'checkbox-default-3',
        label: 'France (disabled)',
        value: 'fr',
        icon_path: '/icons.svg',
      },
      {
        id: 'checkbox-default-4',
        label: `Lorem ipsum dolor sit amet, <a href="${exampleLink}">consectetur adipiscing elit</a>`,
        value: 'lorem',
        icon_path: '/icons.svg',
      },
    ],
  },
};
