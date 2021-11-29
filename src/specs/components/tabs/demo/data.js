// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  more_label: 'More',
  icon_path: '/icons.svg',
  items: [
    { label: 'Item 1 label', path: exampleLink },
    {
      label: 'Item 2 label',
      path: exampleLink,
    },
    {
      label: 'Item 3 with a very long label',
      path: exampleLink,
    },
    {
      label: 'Item 4 label',
      path: exampleLink,
      is_current: true,
    },
    {
      label: 'Item 5 label',
      path: exampleLink,
    },
    {
      label: 'Item 6 label',
      path: exampleLink,
    },
    {
      label: 'Item 7 label',
      path: exampleLink,
    },
  ],
};
