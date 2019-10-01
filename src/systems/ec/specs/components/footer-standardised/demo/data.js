module.exports = {
  sections: [
    {
      key: 'section 0',
      title: 'European Commission website',
      description:
        'This site is managed by the Directorate-General for Communication',
    },
    {
      key: 'section 1',
      title: 'Contact us',
      titleClassName: 'ecl-footer-standardised__title--separator',
      contentBefore: 'Contact information of the DG',
    },
    {
      key: 'section 2',
      title: 'About us',
      titleClassName: 'ecl-footer-standardised__title--separator',
      contentBefore: 'Information about the DG',
    },
    {
      key: 'section 3',
      title: 'Follow us on',
      titleClassName: 'ecl-footer-standardised__title--separator',
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
      listClassName: 'ecl-footer-standardised__list--inline',
    },
    {
      key: 'section 4',
      title: 'Related sites',
      titleClassName: 'ecl-footer-standardised__title--separator',
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
    {
      key: 'section 5',
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
      listClassName: 'ecl-footer-standardised__list--condensed',
    },
    {
      key: 'section 6',
      title: 'European Commission',
    },
    {
      key: 'section 7',
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
    {
      key: 'section 8',
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
  ],
};
