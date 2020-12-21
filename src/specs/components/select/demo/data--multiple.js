module.exports = {
  id: 'select-multiple',
  label: 'Select a country',
  helper_text: "This is the input's helper text.",
  invalid_text: 'This is the error message',
  required_text: '*',
  optional_text: ' (optional)',
  icon_path: '/icons.svg',
  required: true,
  width: 'm',
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
  multiple: true,
  multiple_placeholder: 'Placeholder text',
  multiple_search_text: 'Search',
  multiple_all_text: 'Select all',
};
