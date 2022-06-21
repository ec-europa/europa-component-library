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
            'This site is managed by the Directorate-General for Communication',
        },
      ],
      [
        {
          links: [
            {
              link: {
                label: 'Strategy',
                path: 'https://ec.europa.eu/info/strategy_en',
                aria_label: 'Link to Strategy',
              },
            },
            {
              link: {
                label: 'About the European Commission',
                path: 'https://ec.europa.eu/info/about-european-commission_en',
                aria_label: 'Link About the European Commission',
              },
            },
            {
              link: {
                label: 'Business, Economy, Euro',
                path: 'https://ec.europa.eu/info/business-economy-euro_en',
                aria_label: 'Link to Business, Economy, Euro',
              },
            },
            {
              link: {
                label: 'Live, work, travel in the EU',
                path: 'https://ec.europa.eu/info/live-work-travel-eu_en',
                aria_label: 'Link work, travel in the EU',
              },
            },
            {
              link: {
                label: 'Law',
                path: 'https://ec.europa.eu/info/law_en',
                aria_label: 'Link to Law',
              },
            },
            {
              link: {
                label: 'Funding, Tenders',
                path: 'https://ec.europa.eu/info/funding-tenders_en',
                aria_label: 'Link to Funding, Tenders',
              },
            },
            {
              link: {
                label: 'Research and innovation',
                path: 'https://ec.europa.eu/info/research-and-innovation_en',
                aria_label: 'Link to Research and innovation',
              },
            },
            {
              link: {
                label: 'Energy, Climate change, Environment',
                path: 'https://ec.europa.eu/info/energy-climate-change-environment_en',
                aria_label: 'Link to Climate change, Environment',
              },
            },
            {
              link: {
                label: 'Education',
                path: 'https://ec.europa.eu/info/education_en',
                aria_label: 'Link to Education',
              },
            },
            {
              link: {
                label: 'Aid, Development cooperation, Fundamental rights',
                path: 'https://ec.europa.eu/info/aid-development-cooperation-fundamental-rights_en',
                aria_label:
                  'Link to Aid, Development cooperation, Fundamental rights',
              },
            },
            {
              link: {
                label: 'Food, Farming, Fisheries',
                path: 'https://ec.europa.eu/info/food-farming-fisheries_en',
                aria_label: 'Link to Food, Farming, Fisheries',
              },
            },
            {
              link: {
                label: 'EU regional and urban development',
                path: 'https://ec.europa.eu/info/eu-regional-and-urban-development_en',
                aria_label: 'Link to EU regionaland urban development',
              },
            },
            {
              link: {
                label: 'Jobs at the European Commission',
                path: 'https://ec.europa.eu/info/jobs-european-commission_en',
                aria_label: 'Link to Jobs at the European Commission',
              },
            },
            {
              link: {
                label: 'Statistics',
                path: 'https://ec.europa.eu/info/statistics_en',
                aria_label: 'Link to Statistics',
              },
            },
            {
              link: {
                label: 'News',
                path: 'https://ec.europa.eu/commission/presscorner/home/en',
                aria_label: 'Link to News',
              },
            },
            {
              link: {
                label: 'Events',
                path: 'https://ec.europa.eu/info/events_en',
                aria_label: 'Link to Events',
              },
            },
            {
              link: {
                label: 'Publications',
                path: 'https://ec.europa.eu/info/publications_en',
                aria_label: 'Link to Publications',
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
                path: 'https://ec.europa.eu/info/about-european-commissions-web-presence_en',
                aria_label: 'Link to the accessibility report',
              },
            },
            {
              link: {
                label: 'Contact the European Commission',
                path: 'https://ec.europa.eu/info/about-european-commission/contact_en',
                aria_label: 'Link to Contact the European Commission',
              },
            },
            {
              link: {
                label: 'Follow the European Commission on social media',
                path: 'https://european-union.europa.eu/contact-eu/social-media-channels_en#/search?page=0&institutions=european_commission',
                aria_label:
                  'Link to Follow the European Commission on social media',
              },
            },
            {
              link: {
                label: 'Resources for partners',
                path: 'https://ec.europa.eu/info/resources-partners_en',
                aria_label: 'Link to Resources for partners',
              },
            },
          ],
        },
        {
          links: [
            {
              link: {
                label: 'Languages on our websites',
                path: 'https://ec.europa.eu/info/languages-our-websites_en',
                aria_label: 'Link to Languages on our websites',
              },
            },
            {
              link: {
                label: 'Cookies',
                path: 'https://ec.europa.eu/info/cookies_en',
                aria_label: 'Link to Cookies',
              },
            },
            {
              link: {
                label: 'Privacy policy',
                path: 'https://ec.europa.eu/info/privacy-policy_en',
                aria_label: 'Link to Privacy policy',
              },
            },
            {
              link: {
                label: 'Legal notice',
                path: 'https://ec.europa.eu/info/legal-notice_en',
                aria_label: 'Link to Legal notice',
              },
            },
          ],
        },
      ],
    ],
  ],
};
