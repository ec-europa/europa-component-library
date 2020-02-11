module.exports = {
  sections: {
    corporateName: {
      // Mandatory
      title: {
        label: 'European Commission',
        href: 'https://ec.europa.eu/info/index_en',
      },
    },
    serviceNavigation: {
      // Mandatory
      links: [
        {
          label: 'Contact the European Commission',
          href: '/example',
        },
        {
          label: 'Follow the European Commission on social media',
          href: '/example',
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
        {
          label: 'Resources for partners',
          href: '/example',
        },
      ],
    },
    legalNavigation: {
      // Mandatory
      links: [
        {
          label: 'Language policy',
          href: '/example',
        },
        {
          label: 'Cookies',
          href: '/example',
        },
        {
          label: 'Privacy policy',
          href: '/example',
        },
        {
          label: 'Legal notice',
          href: '/example',
        },
        {
          label: 'Brexit content disclaimer',
          href: '/example',
        },
      ],
    },
  },
};
