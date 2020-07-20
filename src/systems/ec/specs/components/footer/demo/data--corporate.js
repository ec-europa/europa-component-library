// Simple content for demo
module.exports = {
  backToTop: {
    variant: 'standalone',
    label: 'Go to top',
    ariaLabel: 'Link to go to top',
    href: '#top',
    icon: {
      shape: 'ui--corner-arrow',
      size: 'fluid',
    },
  },
  sections: [
    {
      title: 'European Commission',
      links: [
        {
          variant: 'standalone',
          label: 'European Commission website',
          ariaLabel: 'Link to European Commission website',
          href: '/example',
        },
      ],
    },
    {
      title: 'Follow the European Commission',
      links: [
        {
          variant: 'standalone',
          label: 'Facebook',
          ariaLabel: 'Link to Facebook',
          href: '/example',
          iconPosition: 'before',
          icon: {
            shape: 'branded--facebook',
            size: 'xs',
          },
        },
        {
          variant: 'standalone',
          label: 'Twitter',
          ariaLabel: 'Link to Twitter',
          href: '/example',
          iconPosition: 'before',
          icon: {
            shape: 'branded--twitter',
            size: 'xs',
          },
        },
        {
          variant: 'standalone',
          label: 'Other social networks',
          ariaLabel: 'Link to Other social networks',
          href: '/example',
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
      ],
    },
    {
      title: 'European Union',
      links: [
        {
          variant: 'standalone',
          label: 'European Union',
          ariaLabel: 'Link to European Union',
          href: '/example',
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
        {
          variant: 'standalone',
          label: 'EU institutions',
          ariaLabel: 'Link to EU institutions',
          href: '/example',
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
      ],
    },
  ],
  common: [
    {
      variant: 'standalone',
      label: "About the Commission's new web presence",
      ariaLabel: 'Link to About the Commission new web presence',
      href: '/example',
    },
    {
      variant: 'standalone',
      label: 'Language policy',
      ariaLabel: 'Link to Language policy',
      href: '/example',
    },
    {
      variant: 'standalone',
      label: 'Resources for partners',
      ariaLabel: 'Link to Resources for partners',
      href: '/example',
    },
    {
      variant: 'standalone',
      label: 'Cookies',
      ariaLabel: 'Link to Cookies',
      href: '/example',
    },
    {
      variant: 'standalone',
      label: 'Privacy policy',
      ariaLabel: 'Link to Privacy policy',
      href: '/example',
    },
    {
      variant: 'standalone',
      label: 'Legal notice',
      ariaLabel: 'Link to Legal notice',
      href: '/example',
    },
    {
      variant: 'standalone',
      label: 'Contact',
      ariaLabel: 'Link to Contact',
      href: '/example',
    },
  ],
};
