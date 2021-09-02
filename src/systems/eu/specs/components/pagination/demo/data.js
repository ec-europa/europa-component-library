// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  label: 'Pagination',
  items: [
    {
      isPrevious: true,
      ariaLabel: 'Go to previous page',
      link: {
        variant: 'standalone',
        href: exampleLink,
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
      ariaLabel: 'Go to page 24',
      link: {
        variant: 'standalone',
        href: exampleLink,
        label: '24',
      },
    },
    {
      ariaLabel: 'Go to page 25',
      link: {
        variant: 'standalone',
        href: exampleLink,
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
        href: exampleLink,
        label: '27',
      },
    },
    {
      ariaLabel: 'Go to page 28',
      link: {
        variant: 'standalone',
        href: exampleLink,
        label: '28',
      },
    },
    {
      isNext: true,
      ariaLabel: 'Go to next page',
      link: {
        variant: 'standalone',
        href: exampleLink,
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
