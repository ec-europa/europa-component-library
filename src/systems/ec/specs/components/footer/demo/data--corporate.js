// Simple content for demo
module.exports = {
  sections: [
    {
      title: 'European Commission',
      links: [
        {
          variant: 'standalone',
          label: 'Commission and its priorities',
          href: '/example',
        },
        {
          variant: 'standalone',
          label: 'Policies, information and services',
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
      href: '/example',
    },
    {
      variant: 'standalone',
      href: '/example',
      label: 'Language policy',
    },
    {
      variant: 'standalone',
      label: 'Resources for partners',
      href: '/example',
    },
    {
      variant: 'standalone',
      label: 'Cookies',
      href: '/example',
    },
    {
      variant: 'standalone',
      href: '/example',
      label: 'Privacy policy',
    },
    {
      variant: 'standalone',
      label: 'Legal notice',
      href: '/example',
    },
    {
      variant: 'standalone',
      label: 'Contact',
      href: '/example',
    },
  ],
};
