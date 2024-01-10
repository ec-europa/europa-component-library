// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  icon_path: '/icons.svg',
  label: 'Category filter',
  id: 'unique-id',
  items: [
    { label: 'Item 1', path: exampleLink },
    {
      label: 'Item 2 label',
      path: exampleLink,
      children: [
        {
          label: 'Item 2.1',
          path: exampleLink,
          children: [
            { label: 'Item 2.1.1', path: exampleLink },
            {
              label: 'Item 2.1.2',
              path: exampleLink,
              children: [
                { label: 'Item 2.1.2 a', path: exampleLink },
                { label: 'Item 2.1.2 b', path: exampleLink },
                { label: 'Item 2.1.2 c', path: exampleLink },
              ],
            },
            { label: 'Item 2.1.3', path: exampleLink },
            { label: 'Item 2.1.4', path: exampleLink },
          ],
        },
        { label: 'Item 2.2', path: exampleLink },
        { label: 'Item 2.3', path: exampleLink },
        { label: 'Item 2.4', path: exampleLink },
        { label: 'Item 2.5', path: exampleLink },
        { label: 'Item 2.6', path: exampleLink },
        { label: 'Item 2.7', path: exampleLink },
      ],
    },
    {
      label: 'Item 3 with a very long label',
      path: exampleLink,
      children: [
        {
          label: 'Item 3.1',
          path: exampleLink,
          children: [
            { label: 'Item 3.1.1', path: exampleLink },
            {
              label: 'Item 3.1.2',
              path: exampleLink,
              children: [
                { label: 'Item 3.1.2 a', path: exampleLink },
                { label: 'Item 3.1.2 b', path: exampleLink },
                { label: 'Item 3.1.2 c', path: exampleLink },
              ],
            },
            { label: 'Item 3.1.3', path: exampleLink },
            { label: 'Item 3.1.4', path: exampleLink },
          ],
        },
        { label: 'Item 3.2', path: exampleLink },
        { label: 'Item 3.3', path: exampleLink },
      ],
    },
    {
      label: 'Item 4 label',
      path: exampleLink,
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
      ],
    },
  ],
};
