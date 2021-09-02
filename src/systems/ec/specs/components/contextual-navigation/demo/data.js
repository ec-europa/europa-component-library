// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  label: 'Label for contextual navigation',
  items: [
    {
      label: 'Item 1',
      href: exampleLink,
      variant: 'standalone',
    },
    {
      label: 'Item 2',
      href: exampleLink,
      variant: 'standalone',
    },
    {
      label: 'Item 3',
      href: exampleLink,
      variant: 'standalone',
    },
    {
      label: 'Item 4',
      href: exampleLink,
      variant: 'standalone',
    },
    {
      label: 'Item 5',
      href: exampleLink,
      variant: 'standalone',
    },
    {
      label: 'Item 6',
      href: exampleLink,
      variant: 'standalone',
    },
  ],
  itemsLimit: 3,
  itemMore: {
    label: 'More',
    variant: 'ghost',
    icon: {
      shape: 'ui--corner-arrow',
      transform: 'rotate-90',
      size: 'fluid',
    },
  },
};
