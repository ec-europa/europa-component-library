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
                path: 'https://commission.europa.eu/strategy-and-policy_en',
                aria_label: 'Link to Strategy',
              },
            },
            {
              link: {
                label: 'About the European Commission',
                path: 'https://commission.europa.eu/about-european-commission_en',
                aria_label: 'Link About the European Commission',
              },
            },
            {
              link: {
                label: 'Business, Economy, Euro',
                path: 'https://commission.europa.eu/business-economy-euro_en',
                aria_label: 'Link to Business, Economy, Euro',
              },
            },
            {
              link: {
                label: 'Live, work, travel in the EU',
                path: 'https://commission.europa.eu/live-work-travel-eu_en',
                aria_label: 'Link work, travel in the EU',
              },
            },
            {
              link: {
                label: 'Law',
                path: 'https://commission.europa.eu/law_en',
                aria_label: 'Link to Law',
              },
            },
            {
              link: {
                label: 'Funding, Tenders',
                path: 'https://commission.europa.eu/funding-tenders_en',
                aria_label: 'Link to Funding, Tenders',
              },
            },
            {
              link: {
                label: 'Research and innovation',
                path: 'https://commission.europa.eu/research-and-innovation_en',
                aria_label: 'Link to Research and innovation',
              },
            },
            {
              link: {
                label: 'Energy, Climate change, Environment',
                path: 'https://commission.europa.eu/energy-climate-change-environment_en',
                aria_label: 'Link to Climate change, Environment',
              },
            },
            {
              link: {
                label: 'Education',
                path: 'https://commission.europa.eu/education_en',
                aria_label: 'Link to Education',
              },
            },
            {
              link: {
                label: 'Aid, Development cooperation, Fundamental rights',
                path: 'https://commission.europa.eu/aid-development-cooperation-fundamental-rights_en',
                aria_label:
                  'Link to Aid, Development cooperation, Fundamental rights',
              },
            },
            {
              link: {
                label: 'Food, Farming, Fisheries',
                path: 'https://commission.europa.eu/food-farming-fisheries_en',
                aria_label: 'Link to Food, Farming, Fisheries',
              },
            },
            {
              link: {
                label: 'EU regional and urban development',
                path: 'https://commission.europa.eu/eu-regional-and-urban-development_en',
                aria_label: 'Link to EU regionaland urban development',
              },
            },
            {
              link: {
                label: 'Jobs at the European Commission',
                path: 'https://commission.europa.eu/jobs-european-commission_en',
                aria_label: 'Link to Jobs at the European Commission',
              },
            },
            {
              link: {
                label: 'Statistics',
                path: 'https://commission.europa.eu/statistics_en',
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
                path: 'https://commission.europa.eu/events_en',
                aria_label: 'Link to Events',
              },
            },
            {
              link: {
                label: 'Publications',
                path: 'https://commission.europa.eu/publications_en',
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
                path: 'https://commission.europa.eu/about-european-commissions-web-presence_en',
                aria_label:
                  "Link to the About the European Commission's web presence",
              },
            },
            {
              link: {
                label: 'Contact the European Commission',
                path: 'https://commission.europa.eu/about-european-commission/contact_en',
                aria_label: 'Link to Contact the European Commission',
              },
            },
            {
              link: {
                label: 'Follow the European Commission on social media',
                path: 'https://european-union.europa.eu/contact-eu/social-media-channels_en#/search?page=0&institutions=european_commission',
                aria_label:
                  'Link to Follow the European Commission on social media',
                external: true,
                icon_path: '/icons.svg',
              },
            },
            {
              link: {
                label: 'Resources for partners',
                path: 'https://commission.europa.eu/resources-partners_en',
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
                path: 'https://commission.europa.eu/languages-our-websites_en',
                aria_label: 'Link to Languages on our websites',
              },
            },
            {
              link: {
                label: 'Cookies',
                path: 'https://commission.europa.eu/cookies_en',
                aria_label: 'Link to Cookies',
              },
            },
            {
              link: {
                label: 'Privacy policy',
                path: 'https://commission.europa.eu/privacy-policy_en',
                aria_label: 'Link to Privacy policy',
              },
            },
            {
              link: {
                label: 'Legal notice',
                path: 'https://commission.europa.eu/legal-notice_en',
                aria_label: 'Link to Legal notice',
              },
            },
          ],
        },
      ],
    ],
  ],
};
