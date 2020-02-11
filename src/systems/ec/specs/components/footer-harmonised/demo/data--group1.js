module.exports = {
  sections: {
    siteName: {
      // Mandatory
      title: {
        label: 'Site name',
        href: '/example',
      },
      description:
        'This site is managed by the Directorate-General for "DG identification"',
    },
    dgServices: [
      {
        // Optional
        title: 'Contact us',
        titleClassName: 'ecl-footer-harmonised__title--separator',
        links: [
          {
            label: 'Contact information of the DG',
            href: '/example',
          },
        ],
      },
      {
        // Optional
        title: 'Follow us on',
        titleClassName: 'ecl-footer-harmonised__title--separator',
        links: [
          {
            label: 'Facebook',
            href: '/example',
            iconPosition: 'before',
            icon: {
              shape: 'branded--facebook',
              size: 'xs',
            },
          },
          {
            label: 'Twitter',
            href: '/example',
            iconPosition: 'before',
            icon: {
              shape: 'branded--twitter',
              size: 'xs',
            },
          },
          {
            label: 'Linkedin',
            href: '/example',
            iconPosition: 'before',
            icon: {
              shape: 'branded--linkedin',
              size: 'xs',
            },
          },
        ],
        listClassName: 'ecl-footer-harmonised__list--inline',
      },
    ],
    dgNavigations: [
      {
        // Optional
        title: 'About us',
        titleClassName: 'ecl-footer-harmonised__title--separator',
        links: [
          {
            label: 'Information about the DG',
            href: '/example',
          },
        ],
      },
      {
        // Optional
        title: 'Related sites',
        titleClassName: 'ecl-footer-harmonised__title--separator',
        links: [
          {
            label: 'Related link 1',
            href: '/example',
          },
          {
            label: 'Related link 2',
            href: '/example',
          },
          {
            label: 'Related link 3',
            href: '/example',
          },
          {
            label: 'Related link 4',
            href: '/example',
          },
          {
            label: 'Related link 5',
            href: '/example',
          },
        ],
      },
    ],
    classes: {
      // Optional
      contentBefore: 'More information on:',
      links: [
        {
          label: 'Class name 1',
          href: '/example',
        },
        {
          label: 'Class name 2',
          href: '/example',
        },
      ],
      listClassName: 'ecl-footer-harmonised__list--condensed',
    },
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
