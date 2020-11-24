module.exports = {
  sections: {
    siteName: {
      // Mandatory
      title: {
        label: 'Site name',
        ariaLabel: 'Link to site name',
        href: '/example',
      },
      description:
        'This site is managed by the Directorate-General for "DG identification"',
    },
    dgServices: [
      {
        // Optional
        title: 'Contact us',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Contact information of the DG',
            ariaLabel: 'Link to Contact information of the DG',
            href: '/example',
          },
        ],
      },
      {
        // Optional
        title: 'Follow us on',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
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
            label: 'Linkedin',
            ariaLabel: 'Link to Linkedin',
            href: '/example',
            iconPosition: 'before',
            icon: {
              shape: 'branded--linkedin',
              size: 'xs',
            },
          },
        ],
        listClassName: 'ecl-footer-standardised__list--inline',
      },
    ],
    dgNavigations: [
      {
        // Optional
        title: 'About us',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Information about the DG',
            ariaLabel: 'Link to Information about the DG',
            href: '/example',
          },
        ],
      },
      {
        // Optional
        title: 'Related sites',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Related link 1',
            ariaLabel: 'Link to Related link 1',
            href: '/example',
          },
          {
            label: 'Related link 2',
            ariaLabel: 'Link to Related link 2',
            href: '/example',
          },
          {
            label: 'Related link 3',
            ariaLabel: 'Link to Related link 3',
            href: '/example',
          },
          {
            label: 'Related link 4',
            ariaLabel: 'Link to Related link 4',
            href: '/example',
          },
          {
            label: 'Related link 5',
            ariaLabel: 'Link to Related link 5',
            href: '/example',
          },
        ],
      },
    ],
    classes: {
      // Mandatory
      contentBefore: 'More information on:',
      links: [
        {
          label: 'Class name 1',
          ariaLabel: 'Link to Class name 1',
          href: '/example',
        },
        {
          label: 'Class name 2',
          ariaLabel: 'Link to Class name 2',
          href: '/example',
        },
      ],
      listClassName: 'ecl-footer-standardised__list--condensed',
    },
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
