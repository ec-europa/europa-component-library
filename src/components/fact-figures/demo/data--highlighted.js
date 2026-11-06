const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  variant: 'highlighted',
  display_icons: true,
  font_size: 'm',
  full_width: true,
  view_all: {
    link: {
      path: exampleLink,
      label: 'View all',
    },
  },
  sources: [
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'DG CNECT',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
  ],
  items: [
    {
      icon: {
        name: 'users-four',
        family: 'phosphor',
      },
      value: '36',
      description: 'Local communities',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'baby',
        family: 'phosphor',
      },
      value: '1,102',
      description: 'Children, aged up to 4',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'gender-female',
        family: 'phosphor',
      },
      value: '24',
      description: 'Active women members.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'certificate',
        family: 'phosphor',
      },
      value: '58',
      description: 'Trained women',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
  ],
};
