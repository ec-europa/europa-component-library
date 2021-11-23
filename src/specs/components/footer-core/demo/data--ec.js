const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
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
                path: exampleLink,
                aria_label: 'Link to Strategy',
              },
            },
            {
              link: {
                label: 'About the European Commission',
                path: exampleLink,
                aria_label: 'Link About the European Commission',
              },
            },
            {
              link: {
                label: 'Business, Economy, Euro',
                path: exampleLink,
                aria_label: 'Link to Business, Economy, Euro',
              },
            },
            {
              link: {
                label: 'Live, work, travel in the EU',
                path: exampleLink,
                aria_label: 'Link work, travel in the EU',
              },
            },
            {
              link: {
                label: 'Law',
                path: exampleLink,
                aria_label: 'Link to Law',
              },
            },
            {
              link: {
                label: 'Funding, Tenders',
                path: exampleLink,
                aria_label: 'Link to Funding, Tenders',
              },
            },
            {
              link: {
                label: 'Research and innovation',
                path: exampleLink,
                aria_label: 'Link to Research and innovation',
              },
            },
            {
              link: {
                label: 'Energy, Climate change, Environment',
                path: exampleLink,
                aria_label: 'Link to Climate change, Environment',
              },
            },
            {
              link: {
                label: 'Education',
                path: exampleLink,
                aria_label: 'Link to Education',
              },
            },
            {
              link: {
                label: 'Aid, Development cooperation, Fundamental rights',
                path: exampleLink,
                aria_label:
                  'Link to Aid, Development cooperation, Fundamental rights',
              },
            },
            {
              link: {
                label: 'Food, Farming, Fisheries',
                path: exampleLink,
                aria_label: 'Link to Food, Farming, Fisheries',
              },
            },
            {
              link: {
                label: 'EU regional and urban development',
                path: exampleLink,
                aria_label: 'Link to EU regionaland urban development',
              },
            },
            {
              link: {
                label: 'Jobs at the European Commission',
                path: exampleLink,
                aria_label: 'Link to Jobs at the European Commission',
              },
            },
            {
              link: {
                label: 'Statistics',
                path: exampleLink,
                aria_label: 'Link to Statistics',
              },
            },
            {
              link: {
                label: 'News',
                path: exampleLink,
                aria_label: 'Link to News',
              },
            },
            {
              link: {
                label: 'Events',
                path: exampleLink,
                aria_label: 'Link to Events',
              },
            },
            {
              link: {
                label: 'Publications',
                path: exampleLink,
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
                label: 'Contact the European Commission',
                path: exampleLink,
                aria_label: 'Link to Contact the European Commission',
              },
            },
            {
              link: {
                label: 'Accessibility',
                path: exampleLink,
                aria_label: 'Link to the accessibility report',
              },
            },
            {
              link: {
                label: 'Follow the European Commission on social media',
                path: exampleLink,
                aria_label:
                  'Link to Follow the European Commission on social media',
              },
            },
            {
              link: {
                label: 'Resources for partners',
                path: exampleLink,
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
                path: exampleLink,
                aria_label: 'Link to Languages on our websites',
              },
            },
            {
              link: {
                label: 'Cookies',
                path: exampleLink,
                aria_label: 'Link to Cookies',
              },
            },
            {
              link: {
                label: 'Privacy policy',
                path: exampleLink,
                aria_label: 'Link to Privacy policy',
              },
            },
            {
              link: {
                label: 'Legal notice',
                path: exampleLink,
                aria_label: 'Link to Legal notice',
              },
            },
          ],
        },
      ],
    ],
  ],
};
