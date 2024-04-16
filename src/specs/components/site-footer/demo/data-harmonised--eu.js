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
          description: `Discover more on <a href="${exampleLink}" class="ecl-link ecl-link--standalone">europa.eu</a>`,
          logo: {
            title: 'European Union',
            alt: 'European Union logo',
            language: 'en',
            path: exampleLink,
            src_desktop: '/logo-eu.svg',
            src_mobile: '/logo-mobile-eu.svg',
          },
        },
      ],
      [
        {
          title: 'Contact the EU',
          title_with_separator: true,
          links: [
            {
              content_before: 'Call us ',
              link: {
                label: '00 800 6 7 8 9 10 11',
                path: exampleLink,
              },
            },
            {
              content_before: 'Use other ',
              link: {
                label: 'telephone options',
                path: exampleLink,
              },
            },
            {
              content_before: 'Write us via our ',
              link: {
                label: 'contact form',
                path: exampleLink,
              },
            },
            {
              content_before: 'Meet us at one of the ',
              link: {
                label: 'EU centres',
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
              content_before: 'Search for ',
              link: {
                label: 'EU social media channels',
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
                path: '#',
              },
            },
          ],
        },
      ],
    ],
  ],
};
