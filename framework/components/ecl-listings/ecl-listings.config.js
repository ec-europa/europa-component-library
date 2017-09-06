module.exports = {
  title: 'Listings',
  label: 'Listings',
  status: 'ready',
  tags: ['molecule'],
  collated: false,
  variants: [
    {
      name: 'default',
      label: 'Default listing',
    },
    {
      name: 'date',
      label: 'Date listing - One column',
      context: {
        variant: 'date',
        date: {
          week_day: 'Tue',
          day: '12',
          month: 'Jan',
        },
      },
    },
    {
      name: 'date-2',
      label: 'Date listing - Two column',
      context: {
        variant: 'date-2',
      },
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail listing',
      context: {
        variant: 'thumbnail',
      },
    },
  ],
};
