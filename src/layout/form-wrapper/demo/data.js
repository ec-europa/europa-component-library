const select = (id, label, placeholder, options, extra = {}) => ({
  form_group: {
    label,
    input: {
      input_type: 'select',
      id,
      name: id,
      placeholder,
      options: options.map((option, i) => ({
        value: String(i + 1),
        label: option,
      })),
      ...extra,
    },
  },
});

const multiple = {
  multiple: true,
  multiple_placeholder: 'Choose options',
  multiple_search_text: 'Enter filter keyword',
  multiple_search_no_results_text: 'No results found',
  multiple_all_text: 'Select all',
  multiple_nb_options: 'Options found:',
  multiple_close_text: 'Apply',
};

export default {
  id: 'form-wrapper-demo',
  title: {
    label: 'Filter results',
    level: 2,
  },
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
        select(
          'form-wrapper-country',
          'Country',
          '',
          ['Italy', 'Slovenia', 'Belgium', 'France'],
          multiple,
        ),
        select(
          'form-wrapper-region',
          'Select region',
          '',
          ['North', 'South', 'East', 'West'],
          multiple,
        ),
      ],
    },
    {
      items: [
        select(
          'form-wrapper-city',
          'Select city or town',
          'Select city or town',
          ['Brussels', 'Luxembourg', 'Strasbourg'],
        ),
        select('form-wrapper-theme', 'Select theme', 'Select theme', [
          'Agriculture',
          'Environment',
          'Transport',
        ]),
      ],
    },
  ],
  actions: [
    { label: 'Search', variant: 'primary', type: 'submit' },
    { label: 'Clear filters', variant: 'secondary', type: 'reset' },
  ],
};
