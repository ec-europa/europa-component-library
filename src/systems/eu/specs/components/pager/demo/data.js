// Simple content for demo
module.exports = {
  label: 'Pagination',
  items: [
    {
      isPrevious: true,
      ariaLabel: 'Go to previous page',
      link: {
        variant: 'standalone',
        href: '/example',
        label: 'Previous',
        iconPosition: 'before',
        icon: {
          shape: 'ui--corner-arrow',
          size: 'xs',
          transform: 'rotate-270',
        },
      },
    },
    {
      ariaLabel: 'Go to page 1',
      link: {
        variant: 'standalone',
        href: '/example',
        label: '1',
      },
    },
    {
      ariaLabel: 'Ellipsis',
      label: '…',
    },
    {
      ariaLabel: 'Go to page 24',
      link: {
        variant: 'standalone',
        href: '/example',
        label: '24',
      },
    },
    {
      ariaLabel: 'Go to page 25',
      link: {
        variant: 'standalone',
        href: '/example',
        label: '25',
      },
    },
    {
      isCurrent: true,
      ariaLabel: 'Page 26',
      label: '26',
    },
    {
      ariaLabel: 'Go to page 27',
      link: {
        variant: 'standalone',
        href: '/example',
        label: '27',
      },
    },
    {
      ariaLabel: 'Go to page 28',
      link: {
        variant: 'standalone',
        href: '/example',
        label: '28',
      },
    },
    {
      ariaLabel: 'Ellipsis',
      label: '…',
    },
    {
      ariaLabel: 'Go to page 110',
      link: {
        variant: 'standalone',
        href: '/example',
        label: '110',
      },
    },
    {
      isNext: true,
      ariaLabel: 'Go to next page',
      link: {
        variant: 'standalone',
        href: '/example',
        label: 'Next',
        iconPosition: 'after',
        icon: {
          shape: 'ui--corner-arrow',
          size: 'xs',
          transform: 'rotate-90',
        },
      },
    },
  ],
};
