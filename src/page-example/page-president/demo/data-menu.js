const exampleLink = '#';

module.exports = {
  id: 'ec-navigation',
  aria_label: 'Main navigation',
  toggle: {
    label: 'Menu',
    icon: { name: 'hamburger', size: 'm' },
  },
  close: {
    label: 'Close',
    icon: { name: 'close', size: 'm' },
  },
  back_label: 'Back',
  items: [
    {
      label: 'Home',
      path: exampleLink,
    },
    {
      label: 'About us',
      path: exampleLink,
      children: [
        {
          label: 'Organisation',
          path: exampleLink,
          children: [
            {
              label: 'President',
              path: exampleLink,
            },
            {
              label: 'Commissioners',
              path: exampleLink,
            },
            {
              label: 'Departments and executive agencies',
              path: exampleLink,
            },
            {
              label: 'Staff',
              path: exampleLink,
            },
          ],
          see_all: true,
          see_all_label: 'See all',
        },
        {
          label: 'Roles',
          path: exampleLink,
          children: [
            {
              label: 'In strategy and policy',
              path: exampleLink,
            },
            {
              label: 'In law',
              path: exampleLink,
            },
            {
              label: 'In budget and funding',
              path: exampleLink,
            },
            {
              label: 'In international relations',
              path: exampleLink,
            },
          ],
          see_all: true,
          see_all_label: 'See all',
        },
        {
          label: 'Service standards and principles',
          path: exampleLink,
          children: [
            {
              label: 'Transparency',
              path: exampleLink,
            },
            {
              label: 'Ethics and Good Administration',
              path: exampleLink,
            },
            {
              label: 'Modernising the European Commission',
              path: exampleLink,
            },
            {
              label: "The Commission's use of languages",
              path: exampleLink,
            },
            {
              label: 'Digitalising the Commission',
              path: exampleLink,
            },
          ],
          see_all: true,
          see_all_label: 'See all',
        },
        {
          label: 'Contact',
          path: exampleLink,
        },
      ],
      info: {
        title: 'About us',
        content:
          'Learn more about the role of the European Commission, its leadership and corporate policies',
        link: {
          link: {
            label: 'More about us',
          },
        },
      },
      featured: {
        title: 'FEATURED',
        items: [
          {
            label: '2024-2029 Commission: Priorities and leadership',
            path: exampleLink,
          },
          {
            picture: {
              img: {
                src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_small_no_crop/public/2024-12/Berlaymont%20with%20Repower%20banner.jpg?itok=K0C3upei',
              },
            },
          },
        ],
      },
    },
    {
      label: 'Our priorities',
      path: exampleLink,
      one_level_only: true,
      children: [
        { label: 'Competitiveness', path: exampleLink },
        { label: 'Security and defence', path: exampleLink },
        { label: 'European social fairness', path: exampleLink },
        { label: 'Quality of life', path: exampleLink },
        { label: 'Democracy and our values', path: exampleLink },
        { label: 'A global Europe', path: exampleLink },
        { label: 'EU budget and reform', path: exampleLink },
      ],
      info: {
        title: 'Our priorities',
        content:
          'Learn how the EU is building a sustainable, digital, and inclusive future through its seven key priorities.',
        link: {
          link: {
            label: 'More about our priorities',
            path: exampleLink,
          },
        },
      },
      featured: {
        title: 'FEATURED',
        items: [
          {
            label: 'Advance your research career in EU',
            path: exampleLink,
          },
          {
            picture: {
              img: {
                src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_small_no_crop/public/2025-07/Research-innovation.jpg?itok=JnFFVXCe',
              },
            },
          },
        ],
      },
    },
    {
      label: 'News and media',
      path: exampleLink,
      children: [
        {
          label: 'News',
          path: exampleLink,
        },
        {
          label: 'Press corner',
          path: exampleLink,
        },
        {
          label: 'Visual stories',
          path: exampleLink,
        },
        {
          label: 'Audiovisual portal',
          path: exampleLink,
        },
      ],
      info: {
        title: 'News and media',
        content:
          'Stay up to date with news from the European Commission. Discover the latest updates, stories, and press and audiovisual material.',
        link: {
          link: {
            label: 'More about news and media',
            path: exampleLink,
          },
        },
      },
    },
    {
      label: 'Topics',
      path: exampleLink,
      one_level_only: true,
      children: [
        { label: 'Climate action', path: exampleLink },
        { label: 'Energy', path: exampleLink },
        { label: 'Migration', path: exampleLink },
        { label: 'Economy', path: exampleLink },
        { label: 'Trade', path: exampleLink },
      ],
    },
    {
      label: 'Resources',
      path: exampleLink,
      children: [
        { label: 'Documents', path: exampleLink },
        { label: 'Consultations', path: exampleLink },
        { label: 'Funding opportunities', path: exampleLink },
      ],
    },
    {
      label: 'Europe and you',
      path: exampleLink,
      children: [
        { label: 'Living in the EU', path: exampleLink },
        { label: 'Travel', path: exampleLink },
        { label: 'Business', path: exampleLink },
        { label: 'Your rights', path: exampleLink },
      ],
    },
  ],
};
