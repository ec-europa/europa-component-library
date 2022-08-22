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
          description: `This site is managed by <a href="${exampleLink}" class="ecl-link ecl-link--standalone">site owner name</a> and is an official website of the European Union`,
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
                path: 'https://european-union.europa.eu/languages-our-websites_en',
              },
            },
            {
              link: {
                label: 'Privacy policy',
                aria_label: 'Link to Privacy policy',
                path: 'https://european-union.europa.eu/privacy-policy_en',
              },
            },
            {
              link: {
                label: 'Legal notice',
                aria_label: 'Link to Legal notice',
                path: 'https://european-union.europa.eu/privacy-policy_en',
              },
            },
            {
              link: {
                label: 'Cookies',
                aria_label: 'Link to Cookies',
                path: 'https://european-union.europa.eu/web-accessibility-policy_en',
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
                path: 'http://www.europarl.europa.eu/portal/',
              },
            },
            {
              link: {
                label: 'European Council',
                aria_label: 'Link to European Council',
                path: 'http://www.consilium.europa.eu/en/european-council/',
              },
            },
            {
              link: {
                label: 'Council of the European Union',
                aria_label: 'Link to Council of the European Union',
                path: 'http://www.consilium.europa.eu/en/home/',
              },
            },
            {
              link: {
                label: 'European Commission',
                aria_label: 'Link to European Commission',
                path: 'https://ec.europa.eu/commission/index_en',
              },
            },
            {
              link: {
                label: 'Court of Justice of the European Union (CJEU)',
                aria_label: 'Link to Court of Justice of the European Union',
                path: 'http://curia.europa.eu/jcms/jcms/j_6/en/',
              },
            },
            {
              link: {
                label: 'European Central Bank (ECB)',
                aria_label: 'Link to European Central Bank',
                path: 'https://www.ecb.europa.eu/home/html/index.en.html',
              },
            },
            {
              link: {
                label: 'European Court of Auditors (ECA)',
                aria_label: 'Link to European Court of Auditors',
                path: 'http://www.eca.europa.eu/en',
              },
            },
            {
              link: {
                label: 'European External Action Service (EEAS)',
                aria_label: 'Link to European External Action Service',
                path: 'https://eeas.europa.eu/headquarters/headquarters-homepage_en',
              },
            },
            {
              link: {
                label: 'European Economic and Social Committee (EESC)',
                aria_label: 'Link to European Economic and social Committee',
                path: 'http://www.eesc.europa.eu/?i=portal.en.home',
              },
            },
            {
              link: {
                label: 'European Committee of the Regions (CoR)',
                aria_label: 'Link to European Commitee of the Regions',
                path: 'http://cor.europa.eu/en/',
              },
            },
            {
              link: {
                label: 'European Investment Bank (EIB)',
                aria_label: 'Link to European Investment Bank',
                path: 'https://www.eib.org/en/index.htm',
              },
            },
            {
              link: {
                label: 'European Ombudsman',
                aria_label: 'Link to European Ombudsman',
                path: 'https://www.ombudsman.europa.eu/en/home',
              },
            },
            {
              link: {
                label: 'European Data Protection Supervisor (EDPS)',
                aria_label: 'Link to European Data Protection Supervisor',
                path: 'https://secure.edps.europa.eu/EDPSWEB/edps/EDPS?lang=en',
              },
            },
            {
              link: {
                label: 'The European Data Protection Board',
                aria_label: 'Link to The European Data Protection Board',
                path: 'https://edpb.europa.eu/edpb_en',
              },
            },
            {
              link: {
                label: 'European Personnel Selection Office',
                aria_label: 'Link to European Personnel Selection Office',
                path: 'https://epso.europa.eu/en',
              },
            },
            {
              link: {
                label: 'Publications Office of the European Union',
                aria_label: 'Link to Publications office of the European Union',
                path: 'https://op.europa.eu/en/home',
              },
            },
            {
              link: {
                label: 'Agencies',
                aria_label: 'Link to Agencies',
                path: 'https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/institutions-and-bodies-profiles_en?f%5B0%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_DEC&f%5B1%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_EXEC&f%5B2%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/EU_JU',
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
