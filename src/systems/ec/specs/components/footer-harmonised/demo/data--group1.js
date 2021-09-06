const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  sections: {
    siteName: {
      // Mandatory
      title: {
        label: 'Site name',
        ariaLabel: 'Link to example',
        href: exampleLink,
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
            ariaLabel: 'Link to Contact information of the DG',
            href: exampleLink,
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
            ariaLabel: 'Link to Facebook',
            href: exampleLink,
            iconPosition: 'before',
            icon: {
              shape: 'branded--facebook',
              size: 'xs',
            },
          },
          {
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
            label: 'Linkedin',
            ariaLabel: 'Link to Linkedin',
            href: exampleLink,
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
            ariaLabel: 'Link to Information about the DG',
            href: exampleLink,
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
            ariaLabel: 'Link to Related link 1',
            href: exampleLink,
          },
          {
            label: 'Related link 2',
            ariaLabel: 'Link to Related link 2',
            href: exampleLink,
          },
          {
            label: 'Related link 3',
            ariaLabel: 'Link to Related link 3',
            href: exampleLink,
          },
          {
            label: 'Related link 4',
            ariaLabel: 'Link to Related link 4',
            href: exampleLink,
          },
          {
            label: 'Related link 5',
            ariaLabel: 'Link to Related link 5',
            href: exampleLink,
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
          ariaLabel: 'Link to Class name 1',
          href: exampleLink,
        },
        {
          label: 'Class name 2',
          ariaLabel: 'Link to Class name 2',
          href: exampleLink,
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
          ariaLabel: 'Link to Contact the European Commission',
          href: exampleLink,
        },
        {
          label: 'Follow the European Commission on social media',
          ariaLabel: 'Link to Follow the European Commission',
          href: exampleLink,
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
        {
          label: 'Resources for partners',
          ariaLabel: 'Link to Resources for partners',
          href: exampleLink,
        },
      ],
    },
    legalNavigation: {
      // Mandatory
      links: [
        {
          label: 'Language policy',
          ariaLabel: 'Link to Language policy',
          href: exampleLink,
        },
        {
          label: 'Cookies',
          ariaLabel: 'Link to Cookies',
          href: exampleLink,
        },
        {
          label: 'Privacy policy',
          ariaLabel: 'Link to Privacy policy',
          href: exampleLink,
        },
        {
          label: 'Legal notice',
          ariaLabel: 'Link to Legal notice',
          href: exampleLink,
        },
      ],
    },
  },
};
