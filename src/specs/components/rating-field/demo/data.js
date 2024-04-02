module.exports = {
  optional_text: '(optional)',
  required_text: '*',
  required: true,
  label_aria_required: 'required',
  label_aria_optional: 'optional',
  label: 'Please Rate',
  helper_text: "This is the group's helper text.",
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  input: {
    input_type: 'rating-field',
    id: 'rating-field',
    name: 'rating-group',
    required: true,
    star_filled_icon: {
      path: '/icons.svg',
      name: 'star-filled',
      size: 'l',
    },
    star_outline_icon: {
      path: '/icons.svg',
      name: 'star-outline',
      size: 'l',
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
  },
};
