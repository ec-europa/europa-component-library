const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'highlighted-search',
  title: 'Find your next role',
  description: 'Discover job opportunities in the EU institutions',
  search_input: {
    id: 'highlighted-search-input-id',
    name: 'highlighted-search-input-name',
  },
  search_input_label: 'Search keywords',
  search_select: {
    multiple_placeholder: '',
    multiple_search_text: 'Enter filter keyword',
    multiple_search_no_results_text: 'No results found',
    multiple_all_text: 'Select all',
    multiple_nb_options: 'Options found:',
    multiple_close_text: 'Apply',
    multiple_clear_all_text: 'Clear all',
    multiple_counter_text: 'Selected:',
    id: 'highlighted-search-select-id',
    name: 'highlighted-search-select-name',
    options: [
      {
        value: '',
        label: '',
        disabled: true,
        selected: true,
      },
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
  search_select_label: 'Select country',
  search_helper: 'e.g. full time, designer, writer',
  search_button: {
    label: 'Search',
  },
  suggestion_label: 'Or explore:',
  suggestion: {
    items: [
      {
        tag: {
          type: 'link',
          path: exampleLink,
          label: 'Traineeships',
        },
      },
      {
        tag: {
          type: 'link',
          path: exampleLink,
          label: 'IT & Digital',
        },
      },
      {
        tag: {
          type: 'link',
          path: exampleLink,
          label: 'Policy & Law',
        },
      },
      {
        tag: {
          type: 'link',
          path: exampleLink,
          label: 'Translation',
        },
      },
      {
        tag: {
          type: 'link',
          path: exampleLink,
          label: 'Communication',
        },
      },
      {
        tag: {
          type: 'link',
          path: exampleLink,
          label: 'Finance & Economics',
        },
      },
    ],
  },
};
