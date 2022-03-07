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
              aria_label: 'Link to site name',
              path: exampleLink,
            },
          },
          description:
            'This site is managed by <a href="/example" class="ecl-link ecl-link--standalone">site owner name</a> and is an official website of the European Union',
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
                aria_label: 'Link to contact site name',
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
                aria_label: 'Link to social 1',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Social 2',
                aria_label: 'Link to social 2',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Social 3',
                aria_label: 'Link to social 3',
                path: exampleLink,
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
                label: 'Accessibility',
                aria_label: 'Link to Accessibility',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Link 2',
                aria_label: 'Link to link 2',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Link 3',
                aria_label: 'Link to link 3',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Link 4',
                aria_label: 'Link to link 4',
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
          description:
            'Discover more on <a href="/example" class="ecl-link ecl-link--standalone">europa.eu</a>',
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
                aria_label: 'Link to 00 800 6 7 8 9 10 11',
                path: exampleLink,
              },
            },
            {
              content_before: 'Use other ',
              link: {
                label: 'telephone options',
                aria_label: 'Link to telephone options',
                path: exampleLink,
              },
            },
            {
              content_before: 'Write us via our ',
              link: {
                label: 'contact form',
                aria_label: 'Link to contact form',
                path: exampleLink,
              },
            },
            {
              content_before: 'Meet us at one of the ',
              link: {
                label: 'EU centres',
                aria_label: 'Link to EU centres',
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
                aria_label: 'Link to EU social media channels',
                path: exampleLink,
              },
            },
          ],
        },
        {
          title: 'Legal',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'Languages on our websites',
                aria_label: 'Link to Languages on our websites',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Privacy policy',
                aria_label: 'Link to Privacy policy',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Legal notice',
                aria_label: 'Link to Legal notice',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Cookies',
                aria_label: 'Link to Cookies',
                path: exampleLink,
              },
            },
          ],
        },
      ],
      [
        {
          title: 'EU institutions',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'European Parliament',
                aria_label: 'Link to European Parliament',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Council',
                aria_label: 'Link to European Council',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Council of the European Union',
                aria_label: 'Link to Council of the European Union',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Commission',
                aria_label: 'Link to European Commission',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Court of Justice of the European Union',
                aria_label: 'Link to Court of Justice of the European Union',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Central Bank',
                aria_label: 'Link to European Central Bank',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Court of Auditors',
                aria_label: 'Link to European Court of Auditors',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European External Action Service',
                aria_label: 'Link to European External Action Service',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Economic and Social Committee',
                aria_label: 'Link to European Economic and social Committee',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Commitee of the Regions',
                aria_label: 'Link to European Commitee of the Regions',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Investment Bank',
                aria_label: 'Link to European Investment Bank',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Ombudsman',
                aria_label: 'Link to European Ombudsman',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Data Protection Supervisor',
                aria_label: 'Link to European Data Protection Supervisor',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'The European Data Protection Board',
                aria_label: 'Link to The European Data Protection Board',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'European Personnel Selection Office',
                aria_label: 'Link to European Personnel Selection Office',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Publications Office of the European Union',
                aria_label: 'Link to Publications office of the European Union',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Agencies',
                aria_label: 'Link to Agencies',
                path: exampleLink,
              },
            },
          ],
          section_class_name: 'ecl-footer-standardised__section--desktop',
        },
        {
          title: 'EU institutions',
          title_with_separator: true,
          links: [
            {
              content_before: 'Search for ',
              link: {
                label: 'EU institutions',
                aria_label: 'Link to EU institutions',
                path: exampleLink,
              },
            },
          ],
          section_class_name: 'ecl-footer-standardised__section--mobile',
        },
      ],
    ],
  ],
};
