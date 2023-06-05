const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  split_columns: true,
  rows: [
    [
      [
        {
          logo: {
            title: 'European Commission',
            alt: 'European Commission logo',
            language: 'en',
            path: exampleLink,
            src_desktop: '/logo-ec.svg',
          },
          title: {
            link: {
              label: 'European Commission website',
              path: exampleLink,
            },
          },
          description:
            'This site is managed by: [name of the manager of the site]',
        },
      ],
      [
        {
          links: [
            {
              link: {
                label: 'Strategy',
                path: 'https://commission.europa.eu/strategy-and-policy_en',
              },
            },
            {
              link: {
                label: 'About the European Commission',
                path: 'https://commission.europa.eu/about-european-commission_en',
              },
            },
            {
              link: {
                label: 'Business, Economy, Euro',
                path: 'https://commission.europa.eu/business-economy-euro_en',
              },
            },
            {
              link: {
                label: 'Live, work, travel in the EU',
                path: 'https://commission.europa.eu/live-work-travel-eu_en',
              },
            },
            {
              link: {
                label: 'Law',
                path: 'https://commission.europa.eu/law_en',
              },
            },
            {
              link: {
                label: 'Funding, Tenders',
                path: 'https://commission.europa.eu/funding-tenders_en',
              },
            },
            {
              link: {
                label: 'Research and innovation',
                path: 'https://commission.europa.eu/research-and-innovation_en',
              },
            },
            {
              link: {
                label: 'Energy, Climate change, Environment',
                path: 'https://commission.europa.eu/energy-climate-change-environment_en',
              },
            },
            {
              link: {
                label: 'Education',
                path: 'https://commission.europa.eu/education_en',
              },
            },
            {
              link: {
                label: 'Aid, Development cooperation, Fundamental rights',
                path: 'https://commission.europa.eu/aid-development-cooperation-fundamental-rights_en',
              },
            },
            {
              link: {
                label: 'Food, Farming, Fisheries',
                path: 'https://commission.europa.eu/food-farming-fisheries_en',
              },
            },
            {
              link: {
                label: 'EU regional and urban development',
                path: 'https://commission.europa.eu/eu-regional-and-urban-development_en',
              },
            },
            {
              link: {
                label: 'Jobs at the European Commission',
                path: 'https://commission.europa.eu/jobs-european-commission_en',
              },
            },
            {
              link: {
                label: 'Statistics',
                path: 'https://commission.europa.eu/statistics_en',
              },
            },
            {
              link: {
                label: 'News',
                path: 'https://ec.europa.eu/commission/presscorner/home/en',
              },
            },
            {
              link: {
                label: 'Events',
                path: 'https://commission.europa.eu/events_en',
              },
            },
            {
              link: {
                label: 'Publications',
                path: 'https://commission.europa.eu/publications_en',
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
                label: "About the European Commission's web presence",
                path: 'https://commission.europa.eu/about-european-commissions-web-presence_en',
              },
            },
            {
              link: {
                label: 'Contact the European Commission',
                path: 'https://commission.europa.eu/about-european-commission/contact_en',
              },
            },
            {
              link: {
                label: 'Accessibility',
                path: 'https://commission.europa.eu/accessibility-statement_en',
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
        },
        {
          links: [
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
          section_class_name: 'ecl-site-footer__section--split-list',
        },
      ],
    ],
  ],
};
