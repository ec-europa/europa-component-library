const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  label: 'Quick filter',
  items: [
    {
      tag: {
        type: 'link',
        path: exampleLink,
        label: 'Tag label',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Tag label',
        aria_label: 'Dismiss',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Tag label',
        aria_label: 'Dismiss',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Tag label',
        aria_label: 'Dismiss',
      },
    },
    {
      tag: {
        type: 'link',
        path: exampleLink,
        label: 'Tag label',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Tag label',
        aria_label: 'Dismiss',
      },
    },
    {
      tag: {
        type: 'link',
        path: exampleLink,
        label: 'Tag label',
      },
    },
  ],
};
