const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  helper_text: 'Helper text for the group',
  invalid_text: 'Error message for the group',
  label: 'Select your preferred destinations',
  label_id: 'checkbox-default-label',
  optional_text: '(optional)',
  required: false,
  disabled: false,
  invalid: false,
  required_text: '*',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  input: {
    input_type: 'checkbox',
    name: 'checkbox-default',
    helper_id: 'checkbox-default-helper',
    invalid_text: 'Error message for the group',
    invalid_icon: {
      path: '/icons.svg',
      name: 'error',
      size: 'm',
    },
    items: [
      {
        checked: true,
        helper_id: 'helper-default-1',
        helper_text: 'Helper text for an option',
        id: 'checkbox-default-1',
        label: 'Spain',
        value: 'es',
        icon_path: '/icons.svg',
        required_text: '*',
      },
      {
        helper_id: 'helper-default-2',
        id: 'checkbox-default-2',
        label: 'Belgium',
        value: 'be',
        helper_text: 'Helper text for an option',
        icon_path: '/icons.svg',
      },
      {
        disabled: true,
        helper_id: 'helper-default-3',
        helper_text: 'Helper text for an option',
        id: 'checkbox-default-3',
        label: 'France (disabled)',
        value: 'fr',
        icon_path: '/icons.svg',
      },
      {
        helper_id: 'helper-default-4',
        id: 'checkbox-default-4',
        label: `Lorem ipsum dolor sit amet, <a href="${exampleLink}">consectetur adipiscing elit</a>`,
        value: 'lorem',
        helper_text: 'Helper text for an option',
        icon_path: '/icons.svg',
      },
    ],
  },
};
