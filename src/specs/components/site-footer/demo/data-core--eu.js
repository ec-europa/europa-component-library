const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  rows: [
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
          description:
            'This site is managed by: [name of the manager of the site]',
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
                path: 'tel:0080067891011',
              },
            },
            {
              link: {
                label: 'Use other telephone options',
                path: 'https://european-union.europa.eu/contact-eu/call-us_en',
              },
            },
            {
              link: {
                label: 'Write us via our contact form',
                path: 'https://european-union.europa.eu/contact-eu/write-us_en',
              },
            },
            {
              link: {
                label: 'Meet us at one of the EU centres',
                path: 'https://european-union.europa.eu/contact-eu/meet-us_en',
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
                path: 'https://european-union.europa.eu/contact-eu/social-media-channels_en',
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
