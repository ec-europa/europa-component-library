export default {
  id: 'form-wrapper-demo',
  title: {
    label: 'Filter results',
    level: 2,
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus tellus nec iaculis commodo. Nulla facilisi. Duis at tortor ornare quam condimentum volutpat ac ac quam. Vivamus sed semper leo.',
  extra_attributes: [{ name: 'role', value: 'search' }],
  rows: [
    {
      items: [
        {
          form_group: {
            label: 'Search keywords',
            input: {
              input_type: 'search',
              id: 'form-wrapper-keywords',
              name: 'keywords',
            },
          },
        },
        {
          form_group: {
            label: 'Country',
            input: {
              input_type: 'select',
              id: 'form-wrapper-country',
              name: 'country',
              options: [
                { value: 1, label: 'Belgium' },
                { value: 2, label: 'France' },
                { value: 3, label: 'Italy' },
                { value: 4, label: 'Slovenia' },
              ],
              multiple: true,
              multiple_placeholder: 'Choose options',
              multiple_search_text: 'Enter filter keyword',
              multiple_search_no_results_text: 'No results found',
              multiple_all_text: 'Select all',
              multiple_nb_options: 'Options found:',
              multiple_close_text: 'Apply',
            },
          },
        },
        {
          form_group: {
            label: 'Region',
            input: {
              input_type: 'select',
              id: 'form-wrapper-region',
              name: 'region',
              options: [
                { value: 1, label: 'North' },
                { value: 2, label: 'South' },
                { value: 3, label: 'East' },
                { value: 4, label: 'West' },
              ],
              multiple: true,
              multiple_placeholder: 'Choose options',
              multiple_search_text: 'Enter filter keyword',
              multiple_search_no_results_text: 'No results found',
              multiple_all_text: 'Select all',
              multiple_nb_options: 'Options found:',
              multiple_close_text: 'Apply',
            },
          },
        },
      ],
    },
    {
      items: [
        {
          form_group: {
            label: 'City',
            input: {
              input_type: 'select',
              id: 'form-wrapper-city',
              name: 'city',
              options: [
                { value: 1, label: 'Brussels' },
                { value: 2, label: 'Luxembourg' },
                { value: 3, label: 'Strasbourg' },
              ],
            },
          },
        },
        {
          form_group: {
            label: 'Date',
            helper_text: 'Format: dd-mm-yyyy',
            input: {
              input_type: 'datepicker',
              id: 'form-wrapper-date',
              name: 'date',
              min: '2024-06-15',
              max: '2026-08-30',
              autoinit: true,
              default_value: '2026-11-30 14:13:48 Europe/Brussels',
            },
          },
        },
        {
          form_group: {
            label: 'Position',
            input: {
              input_type: 'search',
              id: 'form-wrapper-position',
              name: 'position',
            },
          },
        },
      ],
    },
  ],
  actions: [
    { label: 'Search', variant: 'primary', type: 'submit' },
    { label: 'Clear filters', variant: 'secondary', type: 'reset' },
  ],
};
