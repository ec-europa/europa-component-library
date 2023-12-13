module.exports = {
  label: 'Select a country',
  helper_text: "This is the input's helper text.",
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  required_text: '*',
  optional_text: '(optional)',
  required: true,
  label_aria_required: 'required',
  label_aria_optional: 'optional',
  input: {
    input_type: 'select',
    width: 'm',
    icon_path: '/icons.svg',
    name: 'country',
    id: 'select-default',
    required: true,
    options: [
      {
        optgroup: {
          label: 'European countries',
          options: [
            {
              value: '1',
              label: 'Belgium',
            },
            {
              value: '2',
              label: 'France',
            },
            {
              value: '3',
              label: 'Luxembourg',
              disabled: true,
            },
            {
              value: '4',
              label: 'Germany',
            },
            {
              value: '5',
              label: 'Bulgaria',
              selected: true,
            },
            {
              value: '6',
              label: 'Italy',
            },
            {
              value: '7',
              label: 'Romania',
            },
            {
              value: '8',
              label: 'Greece',
            },
            {
              value: '9',
              label: 'Hungary',
            },
            {
              value: '10',
              label: 'Portugal',
            },
          ],
        },
      },
      {
        optgroup: {
          label: 'Non European countries',
          options: [
            {
              value: '11',
              label: 'China',
            },
          ],
        },
      },
      {
        value: '12',
        label: 'standalone option',
      },
    ],
  },
};
