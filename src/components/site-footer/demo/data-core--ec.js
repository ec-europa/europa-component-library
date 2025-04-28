const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  section_site_info: {
    logo: {
      picture: {
        img: {
          src: '/logo.svg#negative',
          alt: 'European Commission',
        },
      },
      path: exampleLink,
    },
    description:
      'This site is managed by:<br />[name of the manager of the site]',
    links: [
      {
        link: {
          label: 'Accessibility',
          path: exampleLink,
        },
      },
    ],
  },
  section_core: {
    links: [
      {
        link: {
          label: 'About us',
          path: 'https://commission.europa.eu/about-european-commission_en',
        },
      },
      {
        link: {
          label: 'Contact us',
          path: 'https://commission.europa.eu/about-european-commission/contact_en',
        },
      },
      {
        link: {
          label: 'Priorities',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Topics',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Funding and tenders',
          path: 'https://commission.europa.eu/funding-tenders_en',
        },
      },
      {
        link: {
          label: 'Jobs',
          path: 'https://commission.europa.eu/jobs-european-commission_en',
        },
      },
      {
        link: {
          label: 'Press corner',
          path: 'https://ec.europa.eu/commission/presscorner/home/en',
        },
      },
      {
        link: {
          label: 'Events',
          path: 'https://commission.europa.eu/events_en',
        },
      },
    ],
  },
  section_common: {
    social_media: {
      description: 'Follow us',
      description_inline: true,
      links: [
        {
          link: {
            label: 'Instagram',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'instagram',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'X',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'x',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Linkedin',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'linkedin',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Other',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'chain',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Other',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'chain',
            family: 'networks',
            style: 'inverted',
          },
        },
      ],
    },
    links_inline: true,
    links: [
      {
        link: {
          label: 'Report an IT vulnerability',
          path: '#',
        },
      },
      {
        link: {
          label: 'Languages on our websites',
          path: 'https://commission.europa.eu/languages-our-websites_en',
        },
      },
      {
        link: {
          label: 'Cookies',
          path: 'https://commission.europa.eu/cookies_en',
        },
      },
      {
        link: {
          label: 'Privacy policy',
          path: 'https://commission.europa.eu/privacy-policy_en',
        },
      },
      {
        link: {
          label: 'Legal notice',
          path: 'https://commission.europa.eu/legal-notice_en',
        },
      },
    ],
  },

  split_columns: true,
  rows: [
    [
      [
        {
          logo: {
            alt: 'European Commission',
            language: 'en',
            path: exampleLink,
            src_desktop: '/logo-ec.svg',
          },
          description:
            'This site is managed by:<br />[name of the manager of the site]',
          links: [
            {
              link: {
                label: 'Accessibility',
                path: 'https://commission.europa.eu/accessibility-statement_en',
                inverted: true,
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
                label: 'About us',
                path: 'https://commission.europa.eu/about-european-commission_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Contact us',
                path: 'https://commission.europa.eu/about-european-commission/contact_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Priorities',
                path: '#',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Topics',
                path: '#',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Funding and tenders',
                path: 'https://commission.europa.eu/funding-tenders_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Jobs',
                path: 'https://commission.europa.eu/jobs-european-commission_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Press corner',
                path: 'https://ec.europa.eu/commission/presscorner/home/en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Events',
                path: 'https://commission.europa.eu/events_en',
                inverted: true,
              },
            },
          ],
          links_columns: true,
        },
      ],
    ],
    [
      [
        {
          section_class_name: 'ecl-site-footer__section--social',
          title: 'Follow us',
          links: [
            {
              link: {
                label: 'Instagram',
                path: exampleLink,
                inverted: true,
                icon_position: 'before',
                hide_label: true,
              },
              icon: {
                name: 'instagram',
                size: 'm',
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
                hide_label: true,
              },
              icon: {
                name: 'x',
                size: 'm',
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
                hide_label: true,
              },
              icon: {
                name: 'linkedin',
                size: 'm',
                family: 'networks',
                style: 'inverted',
              },
            },
            {
              link: {
                label: 'Other networks',
                path: exampleLink,
                inverted: true,
                icon_position: 'before',
                hide_label: true,
              },
              icon: {
                name: 'chain',
                size: 'm',
                family: 'networks',
                style: 'inverted',
              },
            },
          ],
          links_inline: true,
        },
        {
          section_class_name: 'ecl-site-footer__section--extra-link',
          links: [
            {
              link: {
                label: 'Report an IT vulnerability',
                path: '#',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Languages on our websites',
                path: 'https://commission.europa.eu/languages-our-websites_en',
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
          links_inline: true,
          links_separator: true,
        },
      ],
    ],
  ],
};
