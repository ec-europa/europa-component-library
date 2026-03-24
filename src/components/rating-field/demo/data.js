module.exports = {
  optional_text: '(optional)',
  required_text: '(required)',
  required: true,
  label: 'Please Rate',
  helper_text: 'Optional help text',
  invalid_text: 'Error text',
  invalid_icon: {
    name: 'error-outline',
  },
  sr_invalid_icon: 'Error',
  input: {
    input_type: 'rating-field',
    id: 'rating-field',
    name: 'rating-group',
    star_filled_icon: {
      name: 'star-filled',
      size: 'l',
    },
    star_outline_icon: {
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
