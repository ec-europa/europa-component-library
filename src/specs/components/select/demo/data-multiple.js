module.exports = {
  id: 'select-multiple',
  label: 'Select a country',
  name: 'country',
  helper_text: 'This is the helper text.',
  invalid_text: 'Error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  required_text: '*',
  optional_text: ' (optional)',
  icon_path: '/icons.svg',
  required: true,
  input: {
    input_type: 'select',
    width: 'm',
    icon_path: '/icons.svg',
    id: 'select-multiple',
    name: 'country',
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
    multiple: true,
    multiple_placeholder: 'Choose options',
    multiple_search_text: 'Enter keyword',
    multiple_search_no_results_text: 'No results found',
    multiple_all_text: 'Select all',
    multiple_close_text: 'Apply',
    multiple_clear_all_text: 'Clear all',
  },
};
