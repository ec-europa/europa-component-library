// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Menu',
  close: 'Close',
  back: 'Back',
  menu_link: exampleLink,
  icon_path: '/icons.svg',
  items: [
    { label: 'Home', path: exampleLink },
    {
      label: 'Principles, countries, history',
      path: exampleLink,
      children: [
        { label: 'Item 7.1', path: exampleLink },
        { label: 'Item 7.2', path: exampleLink },
        { label: 'Item 7.3', path: exampleLink },
        { label: 'Item 7.4', path: exampleLink },
        { label: 'Item 7.5', path: exampleLink },
        { label: 'Item 7.6', path: exampleLink },
        { label: 'Item 7.7', path: exampleLink },
        { label: 'Item 7.8', path: exampleLink },
        { label: 'Item 7.9', path: exampleLink },
        { label: 'Item 7.10', path: exampleLink },
      ],
    },
    {
      label: 'Institutions, law, budget',
      path: exampleLink,
      children: [
        { label: 'Item 3.1', path: exampleLink },
        { label: 'Item 3.2', path: exampleLink },
        { label: 'Item 3.3', path: exampleLink },
      ],
    },
    {
      label: 'Priorities and actions',
      path: exampleLink,
      is_current: true,
      children: [
        { label: 'Item 2.1', path: exampleLink },
        { label: 'Item 2.2', path: exampleLink },
        { label: 'Item 2.3', path: exampleLink, is_current: true },
        { label: 'Item 2.4', path: exampleLink },
        { label: 'Item 2.5', path: exampleLink },
        { label: 'Item 2.6', path: exampleLink },
        { label: 'Item 2.7', path: exampleLink, external: true },
      ],
    },

    {
      label: 'Live, work, study',
      path: exampleLink,
      children: [
        { label: 'Item 5.1', path: exampleLink },
        { label: 'Item 5.2', path: exampleLink },
        { label: 'Item 5.3', path: exampleLink },
        { label: 'Item 5.4', path: exampleLink },
      ],
    },
    {
      label: 'News and events',
      path: exampleLink,
    },
    {
      label: 'Contact the EU',
      path: exampleLink,
      children: [
        { label: 'Item 5.1', path: exampleLink },
        { label: 'Item 5.2', path: exampleLink },
        { label: 'Item 5.3', path: exampleLink },
        { label: 'Item 5.4', path: exampleLink },
      ],
    },
  ],
};
