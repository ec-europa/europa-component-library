const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  label: 'Pagination',
  items: [
    {
      type: 'previous',
      aria_label: 'Go to previous page',
      link: {
        link: {
          variant: 'standalone',
          path: exampleLink,
          label: 'Previous',
          icon_position: 'before',
          hide_label: true,
        },
        icon: {
          name: 'corner-arrow',
          size: 'xs',
          transform: 'rotate-270',
        },
      },
    },
    {
      aria_label: 'Go to page 1',
      link: {
        link: {
          variant: 'standalone',
          path: exampleLink,
          label: '1',
        },
      },
    },
    {
      type: 'truncation',
      label: '...',
    },
    {
      aria_label: 'Go to page 24',
      link: {
        link: {
          variant: 'standalone',
          path: exampleLink,
          label: '24',
        },
      },
    },
    {
      aria_label: 'Go to page 25',
      link: {
        link: {
          variant: 'standalone',
          path: exampleLink,
          label: '25',
        },
      },
    },
    {
      type: 'current',
      aria_label: 'Page 26 of 40',
      label: '26',
    },
    {
      aria_label: 'Go to page 27',
      link: {
        link: {
          variant: 'standalone',
          path: exampleLink,
          label: '27',
        },
      },
    },
    {
      aria_label: 'Go to page 28',
      link: {
        link: {
          variant: 'standalone',
          path: exampleLink,
          label: '28',
        },
      },
    },
    {
      type: 'truncation',
      label: '...',
    },
    {
      aria_label: 'Go to page 40',
      link: {
        link: {
          variant: 'standalone',
          path: exampleLink,
          label: '40',
        },
      },
    },
    {
      type: 'next',
      aria_label: 'Go to next page',
      link: {
        link: {
          variant: 'standalone',
          path: exampleLink,
          label: 'Next',
          icon_position: 'after',
          hide_label: true,
        },
        icon: {
          name: 'corner-arrow',
          size: 'xs',
          transform: 'rotate-90',
        },
      },
    },
  ],
  icon_path: '/icons.svg',
};
