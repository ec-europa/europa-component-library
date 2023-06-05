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
            'This site is managed by: [name of the manager of the site]',
          links: [
            {
              link: {
                label: 'Accessibility',
                path: exampleLink,
              },
            },
          ],
          section_class_name: 'ecl-site-footer__section--site-info',
        },
      ],
      [
        {
          title: 'Contact us',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Contact information of the DG',
                path: exampleLink,
              },
            },
          ],
        },
        {
          title: 'Follow us on',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Facebook',
                path: exampleLink,
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
          title_with_separator: true,
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
        {
          title: 'Related sites',
          title_with_separator: true,
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
          ],
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
          content_before: 'More information on:',
          section_class_name: 'ecl-site-footer__section--condensed',
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
              },
            },
            {
              link: {
                label: 'Follow the European Commission on social media',
                path: 'https://european-union.europa.eu/contact-eu/social-media-channels_en#/search?page=0&institutions=european_commission',
                external: true,
                icon_path: '/icons.svg',
              },
            },
            {
              link: {
                label: 'Resources for partners',
                path: 'https://commission.europa.eu/resources-partners_en',
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
          section_class_name: 'ecl-site-footer__section--split-list',
        },
      ],
    ],
  ],
};
