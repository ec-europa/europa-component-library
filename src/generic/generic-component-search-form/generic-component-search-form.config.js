module.exports = {
  title: 'Search forms',
  label: 'Search forms',
  status: 'ready',
  tags: ['molecule'],
  variants: [
    {
      name: 'default',
      label: 'Corporate',
      context: {
        aria_label: 'Search this website',
        button: {
          label: 'Search',
        },
        input: {
          id: 'corporate-search',
          extra_attributes: [
            { name: 'size', value: '30' },
            { name: 'maxlength', value: '128' },
          ],
        },
      },
    },
    {
      name: 'internal',
      label: 'Internal',
      context: {
        variant: 'internal',
        aria_label: 'Search this website',
        button: {
          label: 'Search',
        },
        input: {
          id: 'internal-search',
        },
      },
    },
  ],
};
