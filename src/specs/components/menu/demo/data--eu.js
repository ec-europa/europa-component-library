// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Menu',
  toggle: {
    link: {
      label: 'Menu',
      path: exampleLink,
      hide_label: true,
    },
    icon: {
      path: '/icons.svg',
      name: 'hamburger',
      size: 's',
    },
  },
  close: {
    label: 'Close',
    icon: {
      path: '/icons.svg',
      name: 'close-filled',
      size: 's',
    },
  },
  back_label: 'Back',
  see_all_label: 'See all pages',
  button_previous_label: 'Previous items',
  button_next_label: 'Next items',
  icon_path: '/icons.svg',
  items: [
    { label: 'Home', path: exampleLink },
    {
      label: 'Principles, countries, history',
      is_current: true,
      path: exampleLink,
      trigger_aria_label: "Access item's children",
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
      label: 'Institutions, law, budget',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 3.1', path: exampleLink },
        { label: 'Item 3.2', path: exampleLink },
        { label: 'Item 3.3', path: exampleLink },
      ],
    },
    {
      label: 'Priorities and actions',
      path: exampleLink,
    },
    {
      label: 'News and events',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 5.1', path: exampleLink },
        { label: 'Item 5.2', path: exampleLink },
        { label: 'Item 5.3', path: exampleLink },
        { label: 'Item 5.4', path: exampleLink },
        { label: 'Item 5.5', path: exampleLink },
        { label: 'Item 5.6', path: exampleLink },
        { label: 'Item 5.7', path: exampleLink },
        { label: 'Item 5.8', path: exampleLink },
        { label: 'Item 5.9 with a very long label', path: exampleLink },
        { label: 'Item 5.10', path: exampleLink },
        { label: 'Item 5.11', path: exampleLink },
        { label: 'Item 5.12', path: exampleLink },
        { label: 'Item 5.13', path: exampleLink },
        { label: 'Item 5.14', path: exampleLink },
        { label: 'Item 5.15', path: exampleLink },
        { label: 'Item 5.16', path: exampleLink },
        { label: 'Item 5.17', path: exampleLink },
        { label: 'Item 5.18', path: exampleLink },
        { label: 'Item 5.19', path: exampleLink },
        { label: 'Item 5.20', path: exampleLink },
        { label: 'Item 5.21', path: exampleLink },
        { label: 'Item 5.22', path: exampleLink },
        { label: 'Item 5.23', path: exampleLink },
        { label: 'Item 5.24', path: exampleLink },
        { label: 'Item 5.25', path: exampleLink },
        { label: 'Item 5.26', path: exampleLink },
        { label: 'Item 5.27', path: exampleLink },
        { label: 'Item 5.28', path: exampleLink },
      ],
    },
  ],
};
