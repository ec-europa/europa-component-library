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
      label: 'Lorem ipsum',
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
      label: 'Dolor sit amet',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 3.1', path: exampleLink },
        { label: 'Item 3.2', path: exampleLink },
        { label: 'Item 3.3', path: exampleLink },
      ],
    },
    {
      label: 'Consectetur adipiscing elit',
      path: exampleLink,
    },
    {
      label: 'Quisque tincidunt pharetra',
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
      label: 'Suspendisse quis fermentum',
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
      label: 'Suspendisse cursus',
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
      label: 'Aliquam',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 8.1', path: exampleLink },
        { label: 'Item 8.2', path: exampleLink },
        { label: 'Item 8.3', path: exampleLink },
        { label: 'Item 8.4', path: exampleLink },
        { label: 'Item 8.5', path: exampleLink },
        { label: 'Item 8.6', path: exampleLink },
        { label: 'Item 8.7', path: exampleLink },
        { label: 'Item 8.8', path: exampleLink },
        { label: 'Item 8.9', path: exampleLink },
        { label: 'Item 8.10', path: exampleLink },
      ],
    },
    {
      label: 'Aliquam tempus, purus',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 9.1', path: exampleLink },
        { label: 'Item 9.2', path: exampleLink },
        { label: 'Item 9.3', path: exampleLink },
        { label: 'Item 9.4', path: exampleLink },
        { label: 'Item 9.5', path: exampleLink },
        { label: 'Item 9.6', path: exampleLink },
        { label: 'Item 9.7', path: exampleLink },
        { label: 'Item 9.8', path: exampleLink },
        { label: 'Item 9.9', path: exampleLink },
        { label: 'Item 9.10', path: exampleLink },
      ],
    },
    {
      label: 'Nullam ut',
      path: exampleLink,
      is_current: true,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 10.1', path: exampleLink },
        { label: 'Item 10.2', path: exampleLink },
        { label: 'Item 10.3', path: exampleLink },
        { label: 'Item 10.4', path: exampleLink },
        { label: 'Item 10.5', path: exampleLink },
        { label: 'Item 10.6', path: exampleLink },
        { label: 'Item 10.7', path: exampleLink },
        { label: 'Item 10.8', path: exampleLink },
        { label: 'Item 10.9', path: exampleLink },
        { label: 'Item 10.10', path: exampleLink },
      ],
    },
    {
      label: 'Fusce sodales, purus',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 10.1', path: exampleLink },
        { label: 'Item 10.2', path: exampleLink },
        { label: 'Item 10.3', path: exampleLink },
        { label: 'Item 10.4', path: exampleLink },
        { label: 'Item 10.5', path: exampleLink },
        { label: 'Item 10.6', path: exampleLink },
        { label: 'Item 10.7', path: exampleLink },
        { label: 'Item 10.8', path: exampleLink },
        { label: 'Item 10.9', path: exampleLink },
        { label: 'Item 10.10', path: exampleLink },
      ],
    },
  ],
};
