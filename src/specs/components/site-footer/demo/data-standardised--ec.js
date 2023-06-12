const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
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
                path: '/icon-social-media.svg',
                name: 'facebook-negative',
                size: 'xs',
              },
            },
            {
              link: {
                label: 'Twitter',
                path: exampleLink,
                inverted: true,
                icon_position: 'before',
              },
              icon: {
                path: '/icon-social-media.svg',
                name: 'twitter-negative',
                size: 'xs',
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
                path: '/icon-social-media.svg',
                name: 'linkedin-negative',
                size: 'xs',
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
            title: 'European Commission',
            alt: 'European Commission logo',
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
                external: true,
                icon_path: '/icons.svg',
              },
            },
            {
              link: {
                label: 'Resources for partners',
                path: 'https://commission.europa.eu/resources-partners_en',
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
