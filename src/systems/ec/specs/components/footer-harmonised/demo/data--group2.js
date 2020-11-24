module.exports = {
  sections: {
    corporateName: {
      // Mandatory
      title: {
        label: 'European Commission',
        ariaLabel: 'Link to European Commission',
        href: 'https://ec.europa.eu/info/index_en',
      },
    },
    serviceNavigation: {
      // Mandatory
      links: [
        {
          label: 'Contact the European Commission',
          ariaLabel: 'Link to Contact the European Commission',
          href: '/example',
        },
        {
          label: 'Follow the European Commission on social media',
          ariaLabel: 'Link to Follow the European Commission on social media',
          href: '/example',
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
        {
          label: 'Resources for partners',
          ariaLabel: 'Link to Resources for partners',
          href: '/example',
        },
      ],
    },
    legalNavigation: {
      // Mandatory
      links: [
        {
          label: 'Language policy',
          ariaLabel: 'Link to Language policy',
          href: '/example',
        },
        {
          label: 'Cookies',
          ariaLabel: 'Link to Cookies',
          href: '/example',
        },
        {
          label: 'Privacy policy',
          ariaLabel: 'Link to Privacy policy',
          href: '/example',
        },
        {
          label: 'Legal notice',
          ariaLabel: 'Link to Legal notice',
          href: '/example',
        },
      ],
    },
  },
};
