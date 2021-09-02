// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  backToTop: {
    variant: 'standalone',
    label: 'Go to top',
    href: '#top',
    icon: {
      shape: 'ui--corner-arrow',
      size: 'fluid',
    },
  },
  identity: {
    title: 'Site identification',
    follow: {
      label: 'Follow us:',
      links: [
        {
          variant: 'standalone',
          label: 'Facebook',
          ariaLabel: 'Link to Facebook',
          href: exampleLink,
          iconPosition: 'before',
          icon: {
            shape: 'branded--facebook',
            size: 'xs',
          },
        },
        {
          variant: 'standalone',
          ariaLabel: 'Link to Twitter',
          label: 'Twitter',
          href: exampleLink,
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
          href: exampleLink,
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
      ],
    },
    info: [
      {
        variant: 'standalone',
        label: 'Contact',
        ariaLabel: 'Link to Contact',
        href: exampleLink,
      },
      {
        variant: 'standalone',
        label: 'Sitemap',
        ariaLabel: 'Link to Sitemap',
        href: exampleLink,
      },
      {
        variant: 'standalone',
        label: 'Lorem ipsum',
        ariaLabel: 'Link to Lorem ipsum',
        href: exampleLink,
      },
      {
        variant: 'standalone',
        label: 'Lorem ipsum dolor sit',
        ariaLabel: 'Link to Lorem ipsum dolor sit',
        href: exampleLink,
      },
    ],
  },
  sections: [
    {
      title: 'European Commission',
      links: [
        {
          variant: 'standalone',
          label: 'European Commission website',
          ariaLabel: 'Link to European Commission website',
          href: exampleLink,
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
          href: exampleLink,
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
          href: exampleLink,
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
          href: exampleLink,
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
          href: exampleLink,
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
          href: exampleLink,
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
      ariaLabel: 'Link to About the Commission new we presence',
      href: exampleLink,
    },
    {
      variant: 'standalone',
      href: exampleLink,
      ariaLabel: 'Link to Language policy',
      label: 'Language policy',
    },
    {
      variant: 'standalone',
      label: 'Resources for partners',
      ariaLabel: 'Link to Resources for partners',
      href: exampleLink,
    },
    {
      variant: 'standalone',
      label: 'Cookies',
      ariaLabel: 'Link to Cookies',
      href: exampleLink,
    },
    {
      variant: 'standalone',
      label: 'Privacy policy',
      ariaLabel: 'Link to Privacy policy',
      href: exampleLink,
    },
    {
      variant: 'standalone',
      label: 'Legal notice',
      ariaLabel: 'Link to Legal notice',
      href: exampleLink,
    },
    {
      variant: 'standalone',
      label: 'Contact',
      ariaLabel: 'Link to Contact',
      href: exampleLink,
    },
  ],
};
