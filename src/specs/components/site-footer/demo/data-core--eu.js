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
      ],
      [
        {
          title: 'EU institutions',
          title_with_separator: true,
          links: [
            {
              link: {
                label: 'European Parliament',
                path: 'http://www.europarl.europa.eu/portal/',
              },
            },
            {
              link: {
                label: 'European Council',
                path: 'http://www.consilium.europa.eu/en/european-council/',
              },
            },
            {
              link: {
                label: 'Council of the European Union',
                path: 'http://www.consilium.europa.eu/en/home/',
              },
            },
            {
              link: {
                label: 'European Commission',
                path: 'https://commission.europa.eu/index_en',
              },
            },
            {
              link: {
                label: 'Court of Justice of the European Union (CJEU)',
                path: 'http://curia.europa.eu/jcms/jcms/j_6/en/',
              },
            },
            {
              link: {
                label: 'European Central Bank (ECB)',
                path: 'https://www.ecb.europa.eu/home/html/index.en.html',
              },
            },
            {
              link: {
                label: 'European Court of Auditors (ECA)',
                path: 'http://www.eca.europa.eu/en',
              },
            },
            {
              link: {
                label: 'European External Action Service (EEAS)',
                path: 'https://eeas.europa.eu/headquarters/headquarters-homepage_en',
              },
            },
            {
              link: {
                label: 'European Economic and Social Committee (EESC)',
                path: 'http://www.eesc.europa.eu/?i=portal.en.home',
              },
            },
            {
              link: {
                label: 'European Committee of the Regions (CoR)',
                path: 'http://cor.europa.eu/en/',
              },
            },
            {
              link: {
                label: 'European Investment Bank (EIB)',
                path: 'https://www.eib.org/en/index.htm',
              },
            },
            {
              link: {
                label: 'European Ombudsman',
                path: 'https://www.ombudsman.europa.eu/en/home',
              },
            },
            {
              link: {
                label: 'European Data Protection Supervisor (EDPS)',
                path: 'https://secure.edps.europa.eu/EDPSWEB/edps/EDPS?lang=en',
              },
            },
            {
              link: {
                label: 'The European Data Protection Board',
                path: 'https://edpb.europa.eu/edpb_en',
              },
            },
            {
              link: {
                label: 'European Personnel Selection Office',
                path: 'https://epso.europa.eu/en',
              },
            },
            {
              link: {
                label: 'Publications Office of the European Union',
                path: 'https://op.europa.eu/en/home',
              },
            },
            {
              link: {
                label: 'Agencies',
                path: 'https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/institutions-and-bodies-profiles_en?f%5B0%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_DEC&f%5B1%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_EXEC&f%5B2%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/EU_JU',
              },
            },
          ],
          section_class_name: 'ecl-site-footer__section--desktop',
        },
        {
          title: 'EU institutions',
          title_with_separator: true,
          links: [
            {
              content_before: 'Search for ',
              link: {
                label: 'EU institutions',
                path: exampleLink,
              },
            },
          ],
          section_class_name: 'ecl-site-footer__section--mobile',
        },
      ],
    ],
  ],
};
