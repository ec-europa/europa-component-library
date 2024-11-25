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
        },
      ],
      [
        {
          links: [
            {
              link: {
                label: 'Strategy',
                path: 'https://commission.europa.eu/strategy-and-policy_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'About the European Commission',
                path: 'https://commission.europa.eu/about-european-commission_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Business, Economy, Euro',
                path: 'https://commission.europa.eu/business-economy-euro_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Live, work, travel in the EU',
                path: 'https://commission.europa.eu/live-work-travel-eu_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Law',
                path: 'https://commission.europa.eu/law_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Funding, Tenders',
                path: 'https://commission.europa.eu/funding-tenders_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Research and innovation',
                path: 'https://commission.europa.eu/research-and-innovation_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Energy, Climate change, Environment',
                path: 'https://commission.europa.eu/energy-climate-change-environment_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Education',
                path: 'https://commission.europa.eu/education_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Aid, Development cooperation, Fundamental rights',
                path: 'https://commission.europa.eu/aid-development-cooperation-fundamental-rights_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Food, Farming, Fisheries',
                path: 'https://commission.europa.eu/food-farming-fisheries_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'EU regional and urban development',
                path: 'https://commission.europa.eu/eu-regional-and-urban-development_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Jobs at the European Commission',
                path: 'https://commission.europa.eu/jobs-european-commission_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Statistics',
                path: 'https://commission.europa.eu/statistics_en',
                inverted: true,
              },
            },
            {
              link: {
                label: 'Press Corner',
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
            {
              link: {
                label: 'Publications',
                path: 'https://commission.europa.eu/publications_en',
                inverted: true,
              },
            },
          ],
          links_columns: true,
          section_with_separator: true,
        },
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
                label: 'Accessibility',
                path: 'https://commission.europa.eu/accessibility-statement_en',
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
        },
        {
          links: [
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
          section_class_name: 'ecl-site-footer__section--split-list',
        },
      ],
    ],
  ],
};
