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
  search_select: {
    id: 'highlighted-search-select-id',
    name: 'highlighted-search-select-name',
    options: [
      {
        value: '',
        label: 'Select country',
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
