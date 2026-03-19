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
        { label: 'Organisation', path: exampleLink },
        { label: 'Departments and services', path: exampleLink },
        { label: 'How the Commission works', path: exampleLink },
        { label: 'Leadership', path: exampleLink },
      ],
    },
    {
      label: 'Our priorities',
      path: exampleLink,
      children: [
        { label: 'Green Deal', path: exampleLink },
        { label: 'Digital transformation', path: exampleLink },
        { label: 'Economy that works for people', path: exampleLink },
        { label: 'Stronger Europe in the world', path: exampleLink },
      ],
    },
    {
      label: 'News and media',
      path: exampleLink,
      children: [
        { label: 'News', path: exampleLink },
        { label: 'Press releases', path: exampleLink },
        { label: 'Speeches', path: exampleLink },
        { label: 'Events', path: exampleLink },
      ],
      featured: {
        items: [
          {
            label: 'Latest press conference',
            path: exampleLink,
            description: 'Highlights from the latest Commission briefing.',
          },
        ],
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
