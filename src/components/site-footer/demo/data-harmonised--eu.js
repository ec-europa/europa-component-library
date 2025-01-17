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
                label: 'Accessibility statement',
                path: exampleLink,
              },
            },
          ],
          section_class_name: 'ecl-site-footer__section--site-info',
        },
      ],
      [
        {
          title: 'Contact site name',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Link',
                path: exampleLink,
              },
            },
          ],
        },
        {
          title: 'Follow us',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Social 1',
                path: exampleLink,
                icon_position: 'before',
              },
              icon: {
                path: '/icon-social-media.svg',
                name: 'facebook',
                size: 'xs',
              },
            },
            {
              link: {
                label: 'Social 2',
                path: exampleLink,
                icon_position: 'before',
              },
              icon: {
                path: '/icon-social-media.svg',
                name: 'twitter',
                size: 'xs',
              },
            },
            {
              link: {
                label: 'Social 3',
                path: exampleLink,
                icon_position: 'before',
              },
              icon: {
                path: '/icon-social-media.svg',
                name: 'mastodon',
                size: 'xs',
              },
            },
          ],
        },
      ],
      [
        {
          title: 'Optional links',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Link 1',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Link 2',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Link 3',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Link 4',
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
          logo: {
            alt: 'European Union',
            language: 'en',
            path: exampleLink,
            src_desktop: '/logo-eu.svg',
            src_mobile: '/logo-mobile-eu.svg',
          },
          links: [
            {
              link: {
                label: 'Discover more on europa.eu',
                path: exampleLink,
              },
            },
          ],
        },
      ],
      [
        {
          title: 'Contact the EU',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Call us 00 800 6 7 8 9 10 11',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Use other telephone options',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Write us via our contact form',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Meet us at one of the EU centres',
                path: exampleLink,
              },
            },
          ],
        },
        {
          title: 'Social media',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Search for EU social media channels',
                path: exampleLink,
              },
            },
          ],
        },
      ],
      [
        {
          title: 'Legal',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Languages on our websites',
                path: 'https://european-union.europa.eu/languages-our-websites_en',
              },
            },
            {
              link: {
                label: 'Privacy policy',
                path: 'https://european-union.europa.eu/privacy-policy_en',
              },
            },
            {
              link: {
                label: 'Legal notice',
                path: 'https://european-union.europa.eu/legal-notice_en',
              },
            },
            {
              link: {
                label: 'Cookies',
                path: 'https://european-union.europa.eu/cookies_en',
              },
            },
            {
              link: {
                label: 'Accessibility',
                path: 'https://european-union.europa.eu/web-accessibility-policy_en',
              },
            },
          ],
        },
        {
          title: 'EU institutions and bodies',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Search all EU institutions and bodies',
                path: 'https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/search-all-eu-institutions-and-bodies_en',
              },
            },
          ],
        },
      ],
    ],
  ],
};
