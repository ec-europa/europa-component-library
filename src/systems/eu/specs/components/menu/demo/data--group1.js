// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Menu',
  close: 'Close',
  back: 'Back',
  siteName: 'Site name',
  menuLink: exampleLink,
  items: [
    { label: 'Home', href: exampleLink },
    {
      label: 'Item 2',
      href: exampleLink,
      isCurrent: true,
      subItems: [
        { label: 'Item 2.1', href: exampleLink },
        { label: 'Item 2.2', href: exampleLink },
        { label: 'Item 2.3', href: exampleLink, isCurrent: true },
        { label: 'Item 2.4', href: exampleLink },
        { label: 'Item 2.5', href: exampleLink },
        { label: 'Item 2.6', href: exampleLink },
        { label: 'Item 2.7', href: exampleLink },
        { label: 'Item 2.8', href: exampleLink },
        { label: 'Item 2.9', href: exampleLink },
        { label: 'Item 2.10', href: exampleLink },
        { label: 'Item 2.11', href: exampleLink },
        { label: 'Item 2.12', href: exampleLink },
        { label: 'Item 2.13', href: exampleLink },
        { label: 'Item 2.14', href: exampleLink },
        { label: 'Item 2.15', href: exampleLink },
        { label: 'Item 2.16', href: exampleLink },
      ],
    },
    {
      label: 'Item 3',
      href: exampleLink,
      subItems: [
        { label: 'Item 3.1', href: exampleLink },
        { label: 'Item 3.2', href: exampleLink },
        { label: 'Item 3.3', href: exampleLink },
      ],
    },
    {
      label: 'Item 4',
      href: exampleLink,
      subItems: [
        { label: 'Item 4.1', href: exampleLink },
        { label: 'Item 4.2', href: exampleLink },
        {
          label: 'Item 4.3 with a very long label going on 2 lines',
          href: exampleLink,
        },
        { label: 'Item 4.4', href: exampleLink },
        { label: 'Item 4.5', href: exampleLink },
        { label: 'Item 4.6', href: exampleLink },
        { label: 'Item 4.7', href: exampleLink },
        { label: 'Item 4.8', href: exampleLink },
        { label: 'Item 4.9', href: exampleLink },
        { label: 'Item 4.10', href: exampleLink },
        { label: 'Item 4.11', href: exampleLink },
        { label: 'Item 4.12', href: exampleLink },
        { label: 'Item 4.13', href: exampleLink },
        { label: 'Item 4.14', href: exampleLink },
      ],
    },
    {
      label: 'Item 5',
      href: exampleLink,
      subItems: [
        { label: 'Item 5.1', href: exampleLink },
        { label: 'Item 5.2', href: exampleLink },
        { label: 'Item 5.3', href: exampleLink },
        { label: 'Item 5.4', href: exampleLink },
        { label: 'Item 5.5', href: exampleLink },
        { label: 'Item 5.6', href: exampleLink },
        { label: 'Item 5.7', href: exampleLink },
      ],
    },
    {
      label: 'Item 6',
      href: exampleLink,
      subItems: [
        { label: 'Item 6.1', href: exampleLink },
        { label: 'Item 6.2', href: exampleLink },
        { label: 'Item 6.3', href: exampleLink },
        { label: 'Item 6.4', href: exampleLink },
        { label: 'Item 6.5', href: exampleLink },
        { label: 'Item 6.6', href: exampleLink },
        { label: 'Item 6.7', href: exampleLink },
        { label: 'Item 6.8', href: exampleLink },
        { label: 'Item 6.9 with a very long label', href: exampleLink },
        { label: 'Item 6.10', href: exampleLink },
        { label: 'Item 6.11', href: exampleLink },
        { label: 'Item 6.12', href: exampleLink },
        { label: 'Item 6.13', href: exampleLink },
        { label: 'Item 6.14', href: exampleLink },
        { label: 'Item 6.15', href: exampleLink },
        { label: 'Item 6.16', href: exampleLink },
      ],
    },
    {
      label: 'Item 7 with a long label',
      href: exampleLink,
      subItems: [
        { label: 'Item 7.1', href: exampleLink },
        { label: 'Item 7.2', href: exampleLink },
        { label: 'Item 7.3', href: exampleLink },
        { label: 'Item 7.4', href: exampleLink },
        { label: 'Item 7.5', href: exampleLink },
        { label: 'Item 7.6', href: exampleLink },
        { label: 'Item 7.7', href: exampleLink },
        { label: 'Item 7.8', href: exampleLink },
        { label: 'Item 7.9', href: exampleLink },
        { label: 'Item 7.10', href: exampleLink },
      ],
    },
  ],
};
