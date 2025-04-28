const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  section_site_info: {
    links: [],
  },
  section_contact: {
    title: 'Contact us',
    links: [
      {
        link: {
          label: 'Contact information of the DG',
          path: exampleLink,
        },
      },
    ],
  },
  section_about: {
    title: 'About us',
    links: [
      {
        link: {
          label: 'Information about the DG',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Information about the DG',
          path: exampleLink,
        },
      },
    ],
  },
  section_more: {
    title: 'More information on',
    links: [
      {
        link: {
          label: 'Class name 1',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Class name 2',
          path: exampleLink,
        },
      },
    ],
  },
  section_related: {
    title: 'Related links',
    links: [
      {
        link: {
          label: 'Related link 1',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Related link 2',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Related link 3',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Related link 4',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Related link 5',
          path: exampleLink,
        },
      },
    ],
  },
  section_common: {
    links: [],
  },

  rows: [
    [
      [
        {
          title: {
            link: {
              label: 'Site name',
              path: exampleLink,
            },
          },
          description:
            'This site is managed by:<br />[name of the manager of the site]',
          links: [
            {
              link: {
                label: 'Accessibility',
                path: exampleLink,
                inverted: true,
              },
            },
          ],
          section_class_name: 'ecl-site-footer__section--site-info',
        },
      ],
      [
        {
          title: 'Contact us',
          links: [
            {
              link: {
                label: 'Contact information of the DG',
                path: exampleLink,
                inverted: true,
              },
            },
          ],
        },
        {
          title: 'Follow us on',
          links: [
            {
              link: {
                label: 'Facebook',
                path: exampleLink,
                inverted: true,
                icon_position: 'before',
              },
              icon: {
                name: 'facebook',
                size: 'xs',
                family: 'networks',
                style: 'inverted',
              },
            },
            {
              link: {
                label: 'X',
                path: exampleLink,
                inverted: true,
                icon_position: 'before',
              },
              icon: {
                name: 'x',
                size: 'xs',
                family: 'networks',
                style: 'inverted',
              },
            },
            {
              link: {
                label: 'Linkedin',
                path: exampleLink,
                inverted: true,
                icon_position: 'before',
              },
              icon: {
                name: 'linkedin',
                size: 'xs',
                family: 'networks',
                style: 'inverted',
              },
            },
          ],
          links_inline: true,
        },
      ],
      [
        {
          title: 'About us',
          links: [
            {
              link: {
                label: 'Information about the DG',
                path: exampleLink,
                inverted: true,
              },
            },
            {
              link: {
                label: 'Information about the DG',
                path: exampleLink,
                inverted: true,
              },
            },
          ],
        },
        {
          title: 'Related sites',
          links: [
            {
              link: {
                label: 'Related link 1',
                path: exampleLink,
                inverted: true,
              },
            },
            {
              link: {
                label: 'Related link 2',
                path: exampleLink,
                inverted: true,
              },
            },
          ],
        },
      ],
    ],
    [
      [
        {
          title: 'More information on',
          links: [
            {
              link: {
                label: 'Class name 1',
                path: exampleLink,
                inverted: true,
              },
            },
            {
              link: {
                label: 'Class name 2',
                path: exampleLink,
                inverted: true,
              },
            },
          ],
        },
      ],
    ],
    [
      [
        {
          logo: {
            alt: 'European Commission',
            language: 'en',
            path: 'https://commission.europa.eu/index_en',
            src_desktop: '/logo-ec.svg',
          },
        },
      ],
      [
        {
          links: [
            {
              link: {
                label: 'Contact the European Commission',
                path: 'https://commission.europa.eu/about-european-commission/contact_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Follow the European Commission on social media',
                path: 'https://european-union.europa.eu/contact-eu/social-media-channels_en#/search?page=0&institutions=european_commission',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Resources for partners',
                path: 'https://commission.europa.eu/resources-partners_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Report an IT vulnerability',
                path: 'https://commission.europa.eu/legal-notice/vulnerability-disclosure-policy_en',
                inverted: true,
              },
            },
          ],
          section_class_name: 'ecl-site-footer__section--split-list',
        },
      ],
      [
        {
          links: [
            {
              link: {
                label: 'Languages on our websites',
                path: 'https://commission.europa.eu/language-policy_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Cookies',
                path: 'https://commission.europa.eu/cookies_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Privacy policy',
                path: 'https://commission.europa.eu/privacy-policy_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Legal notice',
                path: 'https://commission.europa.eu/legal-notice_en',
                inverted: true,
              },
            },
          ],
          section_class_name: 'ecl-site-footer__section--split-list',
        },
      ],
    ],
  ],
};
