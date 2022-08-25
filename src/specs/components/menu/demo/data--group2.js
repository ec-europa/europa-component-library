// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  group: 'group2',
  title: 'Menu',
  close: 'Close',
  back: 'Back',
  menu_link: exampleLink,
  icon_path: '/icons.svg',
  items: [
    { label: 'Home', path: exampleLink },
    {
      label: 'Item 2 label',
      path: exampleLink,
      is_current: true,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 2.1', path: exampleLink },
        { label: 'Item 2.2', path: exampleLink },
        { label: 'Item 2.3', path: exampleLink, is_current: true },
        { label: 'Item 2.4', path: exampleLink },
        { label: 'Item 2.5', path: exampleLink },
        { label: 'Item 2.6', path: exampleLink },
        { label: 'Item 2.7', path: exampleLink },
        { label: 'Item 2.8', path: exampleLink },
        { label: 'Item 2.9', path: exampleLink },
        { label: 'Item 2.10', path: exampleLink },
        { label: 'Item 2.11', path: exampleLink },
        { label: 'Item 2.12', path: exampleLink },
        { label: 'Item 2.13', path: exampleLink },
        { label: 'Item 2.14', path: exampleLink },
        { label: 'Item 2.15', path: exampleLink },
        { label: 'Item 2.16', path: exampleLink },
      ],
    },
    {
      label: 'Item 3 label',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 3.1', path: exampleLink },
        { label: 'Item 3.2', path: exampleLink },
        { label: 'Item 3.3', path: exampleLink },
      ],
    },
    {
      label: 'Item 4 label',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      children: [
        { label: 'Item 4.1', path: exampleLink },
        { label: 'Item 4.2', path: exampleLink },
        {
          label: 'Item 4.3 with a very long label going on 2 lines',
          path: exampleLink,
        },
        { label: 'Item 4.4', path: exampleLink },
        { label: 'Item 4.5', path: exampleLink },
        { label: 'Item 4.6', path: exampleLink },
        { label: 'Item 4.7', path: exampleLink },
        { label: 'Item 4.8', path: exampleLink },
        { label: 'Item 4.9', path: exampleLink },
        { label: 'Item 4.10', path: exampleLink },
        { label: 'Item 4.11', path: exampleLink },
        { label: 'Item 4.12', path: exampleLink },
        { label: 'Item 4.13', path: exampleLink },
        { label: 'Item 4.14', path: exampleLink },
      ],
    },
    {
      label: 'Item 5 label',
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
      ],
    },
    {
      label: 'Item 6 label',
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
      ],
    },
    {
      label: 'Item 7 with a longer label',
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
  ],
};
