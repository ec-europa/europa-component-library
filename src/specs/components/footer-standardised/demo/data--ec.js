module.exports = {
  rows: [
    [
      [
        {
          title: {
            link: {
              label: 'Site name',
              path: '/example',
            },
          },
          description:
            'This site is managed by the Directorate-General for "DG identification"',
        },
      ],
      [
        {
          title: 'Contact us',
          links: [
            {
              link: {
                label: 'Contact information of the DG',
                path: '/example',
                aria_label: 'Link to Contact information of the DG',
              },
            },
          ],
          title_class_name: 'ecl-footer-standardised__title--separator',
        },
        {
          title: 'Follow us on',
          links: [
            {
              link: {
                label: 'Facebook',
                path: '/example',
                aria_label: 'Link to Facebook',
                icon_position: 'before',
              },
              icon: {
                path: '/icons.svg',
                type: 'branded',
                name: 'facebook',
                size: 'xs',
              },
            },
            {
              link: {
                label: 'Twitter',
                path: '/example',
                aria_label: 'Link to Twitter',
                icon_position: 'before',
              },
              icon: {
                path: '/icons.svg',
                type: 'branded',
                name: 'twitter',
                size: 'xs',
              },
            },
            {
              link: {
                label: 'Linkedin',
                path: '/example',
                aria_label: 'Link to Linkedin',
                icon_position: 'before',
              },
              icon: {
                path: '/icons.svg',
                type: 'branded',
                name: 'linkedin',
                size: 'xs',
              },
            },
          ],
          list_class_name: 'ecl-footer-standardised__list--inline',
          title_class_name: 'ecl-footer-standardised__title--separator',
        },
      ],
      [
        {
          title: 'About us',
          links: [
            {
              link: {
                label: 'Information about the DG',
                path: '/example',
                aria_label: 'Link to Information about the DG',
              },
            },
          ],
          title_class_name: 'ecl-footer-standardised__title--separator',
        },
        {
          title: 'Related sites',
          links: [
            {
              link: {
                label: 'Related link 1',
                path: '/example',
                aria_label: 'Link to Related link 1',
              },
            },
            {
              link: {
                label: 'Related link 2',
                path: '/example',
                aria_label: 'Link to Related link 2',
              },
            },
            {
              link: {
                label: 'Related link 3',
                path: '/example',
                aria_label: 'Link to Related link 3',
              },
            },
            {
              link: {
                label: 'Related link 4',
                path: '/example',
                aria_label: 'Link to Related link 4',
              },
            },
            {
              link: {
                label: 'Related link 5',
                path: '/example',
                aria_label: 'Link to Related link 5',
              },
            },
          ],
          title_class_name: 'ecl-footer-standardised__title--separator',
        },
      ],
    ],
    [
      [
        {
          links: [
            {
              link: {
                label: 'Class name 1',
                path: '/example',
                aria_label: 'Link to Class name 1',
              },
            },
            {
              link: {
                label: 'Class name 2',
                path: '/example',
                aria_label: 'Link to Class name 2',
              },
            },
          ],
          list_class_name: 'ecl-footer-standardised__list--condensed',
          content_before: 'More information on:',
        },
      ],
    ],
    [
      [
        {
          title: {
            link: {
              label: 'European Commission',
              path: 'https://ec.europa.eu/info/index_en',
            },
          },
        },
      ],
      [
        {
          links: [
            {
              link: {
                label: 'Contact the European Commission',
                path: '/example',
                aria_label: 'Link to Contact the European Commission',
              },
            },
            {
              link: {
                label: 'Follow the European Commission on social media',
                path: '/example',
                aria_label:
                  'Link to Follow the European Commission on social media',
              },
            },
            {
              link: {
                label: 'Resources for partners',
                path: '/example',
              },
            },
          ],
        },
      ],
      [
        {
          links: [
            {
              link: {
                label: 'Language policy',
                path: '/example',
                aria_label: 'Link to Language policy',
              },
            },
            {
              link: {
                label: 'Cookies',
                path: '/example',
                aria_label: 'Link to Cookies',
              },
            },
            {
              link: {
                label: 'Privacy policy',
                path: '/example',
                aria_label: 'Link to Privacy policy',
              },
            },
            {
              link: {
                label: 'Legal notice',
                path: '/example',
                aria_label: 'Link to Legal notice',
              },
            },
          ],
        },
      ],
    ],
  ],
};
