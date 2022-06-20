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
              label: 'European Commission',
              path: exampleLink,
            },
          },
        },
      ],
      [
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
      ],
      [
        {
          links: [
            {
              link: {
                label: 'Language policy',
                path: exampleLink,
                aria_label: 'Link to Language policy',
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
  group: 'group2',
};
