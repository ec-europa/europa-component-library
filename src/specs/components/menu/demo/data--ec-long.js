// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'demo',
  aria_label: 'Main navigation',
  title: 'Menu',
  toggle: {
    label: 'Menu',
    icon: {
      path: '/icons.svg',
      name: 'hamburger',
      size: 'm',
    },
  },
  close: {
    label: 'Close',
    icon: {
      path: '/icons.svg',
      name: 'close',
      size: 'm',
    },
    hide_label: true,
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
        {
          label: 'Item 2.7',
          path: exampleLink,
          external: true,
          sr_external: 'Link to an external domain',
        },
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
      label: 'Live, work, study',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
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
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 6.1', path: exampleLink },
        { label: 'Item 6.2', path: exampleLink },
        { label: 'Item 6.3', path: exampleLink },
        { label: 'Item 6.4', path: exampleLink },
        { label: 'Item 6.5', path: exampleLink },
        { label: 'Item 6.6', path: exampleLink },
        { label: 'Item 6.7', path: exampleLink },
        { label: 'Item 6.8', path: exampleLink },
        { label: 'Item 6.9 with a very long label', path: exampleLink },
        { label: 'Item 6.10', path: exampleLink },
        { label: 'Item 6.11', path: exampleLink },
        { label: 'Item 6.12', path: exampleLink },
        { label: 'Item 6.13', path: exampleLink },
        { label: 'Item 6.14', path: exampleLink },
        { label: 'Item 6.15', path: exampleLink },
        { label: 'Item 6.16', path: exampleLink },
        { label: 'Item 6.17', path: exampleLink },
        { label: 'Item 6.18', path: exampleLink },
        { label: 'Item 6.19', path: exampleLink },
        { label: 'Item 6.20', path: exampleLink },
        { label: 'Item 6.21', path: exampleLink },
        { label: 'Item 6.22', path: exampleLink },
        { label: 'Item 6.23', path: exampleLink },
        { label: 'Item 6.24', path: exampleLink },
        { label: 'Item 6.25', path: exampleLink },
        { label: 'Item 6.26', path: exampleLink },
        { label: 'Item 6.27', path: exampleLink },
        { label: 'Item 6.28', path: exampleLink },
      ],
    },
    {
      label: 'European years',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
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
      label: 'Visit a European Union institution',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 8.1', path: exampleLink },
        { label: 'Item 8.2', path: exampleLink },
        { label: 'Item 8.3', path: exampleLink },
        { label: 'Item 8.4', path: exampleLink },
        { label: 'Item 8.5', path: exampleLink },
        { label: 'Item 8.6', path: exampleLink },
      ],
    },
    {
      label: 'Jobs & traineeships in EU institutions',
      path: exampleLink,
    },
    {
      label: 'Participate, interact, vote',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 9.1', path: exampleLink },
        { label: 'Item 9.2', path: exampleLink },
        { label: 'Item 9.3', path: exampleLink },
      ],
    },
  ],
};
