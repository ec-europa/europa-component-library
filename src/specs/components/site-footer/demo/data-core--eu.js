const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  rows: [
    [
      [
        {
          logo: {
            title: 'European Union',
            alt: 'European Union logo',
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
              content_before: 'Call us ',
              link: {
                label: '00 800 6 7 8 9 10 11',
                path: 'tel:0080067891011',
              },
            },
            {
              content_before: 'Use other ',
              link: {
                label: 'telephone options',
                path: 'https://european-union.europa.eu/contact-eu/call-us_en',
              },
            },
            {
              content_before: 'Write us via our ',
              link: {
                label: 'contact form',
                path: 'https://european-union.europa.eu/contact-eu/write-us_en',
              },
            },
            {
              content_before: 'Meet us at one of the ',
              link: {
                label: 'EU centres',
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
              content_before: 'Search for ',
              link: {
                label: 'EU social media channels',
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
                path: '#',
              },
            },
          ],
        },
      ],
    ],
  ],
};
