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
