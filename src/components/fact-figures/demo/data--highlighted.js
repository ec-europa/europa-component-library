const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

export default {
  variant: 'highlighted',
  display_icons: true,
  font_size: 'm',
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
      title: 'Local communities',
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
      title: 'Children, aged up to 4',
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
      title: 'Active women members.',
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
      title: 'Trained women',
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
