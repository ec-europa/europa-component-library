const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

export default {
  items: [
    {
      tag: {
        type: 'link',
        path: exampleLink,
        label: 'Link tag',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Removable tag',
        aria_label: 'Dismiss',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Removable tag',
        aria_label: 'Dismiss',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Removable tag',
        aria_label: 'Dismiss',
      },
    },
    {
      tag: {
        type: 'link',
        path: exampleLink,
        label: 'Link tag',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Removable tag',
        aria_label: 'Dismiss',
      },
    },
    {
      tag: {
        type: 'link',
        path: exampleLink,
        label: 'Link tag',
      },
    },
  ],
};
