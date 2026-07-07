const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Find your next role',
  description: 'Discover job opportunities in the EU institutions',
  search_input: {
    id: 'banner-search-input-id',
    name: 'banner-search-input-name',
    placeholder: 'Enter a search keyword',
  },
  search_button: {
    label: 'Search',
    size: 'm',
    variant: 'primary',
    style: 'highlight',
    type: 'submit',
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
