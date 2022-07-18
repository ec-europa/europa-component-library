module.exports = {
  name: 'rating-group-1',
  helper_id: 'helper-id-1',
  optional_text: '(optional)',
  required_text: '*',
  required: true,
  label: 'Please Rate',
  helper_text: "This is the group's helper text.",
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  star_filled_icon: {
    path: '/icons.svg',
    name: 'star-filled',
    size: 'm',
  },
  star_outline_icon: {
    path: '/icons.svg',
    name: 'star-outline',
    size: 'm',
  },
  items: [
    {
      value: '1',
      label: '1 star',
    },
    {
      value: '2',
      label: '2 stars',
    },
    {
      value: '3',
      label: '3 stars',
    },
    {
      value: '4',
      label: '4 stars',
    },
    {
      value: '5',
      label: '5 stars',
    },
  ],
};
