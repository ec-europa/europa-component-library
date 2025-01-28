const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
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
                path: '/icon-social-media.svg',
                name: 'instagram-negative',
                size: 'm',
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
                path: '/icon-social-media.svg',
                name: 'twitter-negative',
                size: 'm',
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
                path: '/icon-social-media.svg',
                name: 'linkedin-negative',
                size: 'm',
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
                path: '/icon-social-media.svg',
                name: 'chain-negative',
                size: 'm',
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
