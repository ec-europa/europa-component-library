const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  logo: {
    title: 'European Union',
    alt: 'European Union logo',
    language: 'en',
    href: exampleLink,
  },
  sections: {
    siteName: {
      description:
        'This site is managed by the European Commission, Directorate-General for Communication (<a href="/example" class="ecl-link ecl-link--standalone">DG COMM</a>)',
    },
    serviceNavigation: [
      {
        title: 'Contact the EU',
        titleClassName: 'ecl-footer-core__title--separator',
        links: [
          {
            label: 'Call us 00 800 6 7 8 9 10 11',
            ariaLabel: 'Link to Call us on 00 800 6 7 8 9 10 11',
            href: exampleLink,
          },
          {
            label: 'Use other telephone options',
            ariaLabel: 'Link to other telephone options',
            href: exampleLink,
          },
          {
            label: 'Write us via our contact form',
            ariaLabel: 'Link to contact form',
            href: exampleLink,
          },
          {
            label: 'Meet us at a local EU office',
            ariaLabel: 'Link to local offices',
            href: exampleLink,
          },
        ],
      },
      {
        title: 'Social media',
        titleClassName: 'ecl-footer-core__title--separator',
        links: [
          {
            label: 'Search for EU social media channels',
            ariaLabel: 'Link to Search EU social media channels',
            href: exampleLink,
          },
        ],
      },
      {
        title: 'Legal',
        titleClassName: 'ecl-footer-core__title--separator',
        links: [
          {
            label: 'Language policy',
            ariaLabel: 'Link to language policy',
            href: exampleLink,
          },
          {
            label: 'Privacy policy',
            ariaLabel: 'Link to Privacy policy',
            href: exampleLink,
          },
          {
            label: 'Legal notice',
            ariaLabel: 'Link to Legal notice',
            href: exampleLink,
          },
          {
            label: 'Cookies',
            ariaLabel: 'Link to Cookies info',
            href: exampleLink,
          },
        ],
      },
    ],
    legalNavigation: {
      title: 'EU institutions',
      titleClassName: 'ecl-footer-core__title--separator',
      links: [
        {
          label: 'European Parliament',
          ariaLabel: 'Link to European Parliament',
          href: exampleLink,
        },
        {
          label: 'European Council',
          ariaLabel: 'Link to European Council',
          href: exampleLink,
        },
        {
          label: 'Council of the European Union',
          ariaLabel: 'Link to Council of the European Union',
          href: exampleLink,
        },
        {
          label: 'European Commission',
          ariaLabel: 'Link to European Commission',
          href: exampleLink,
        },
        {
          label: 'Court of Justice of the European Union',
          ariaLabel: 'Link to Court of Justice of the European Union',
          href: exampleLink,
        },
        {
          label: 'European Central Bank',
          ariaLabel: 'Link to European Central Bank',
          href: exampleLink,
        },
        {
          label: 'European Court of Auditors',
          ariaLabel: 'Link to European Court of Auditors',
          href: exampleLink,
        },
        {
          label: 'European External Action Service',
          ariaLabel: 'Link to European External Action Service',
          href: exampleLink,
        },
        {
          label: 'European Economic and Social Committee',
          ariaLabel: 'Link to European Economic and social Committee',
          href: exampleLink,
        },
        {
          label: 'European Committee of the Region',
          ariaLabel: 'Link to European Committee of the Region',
          href: exampleLink,
        },
        {
          label: 'European Investment Bank',
          ariaLabel: 'Link to European Investment Bank',
          href: exampleLink,
        },
        {
          label: 'European Ombudsman',
          ariaLabel: 'Link to European Ombudsman',
          href: exampleLink,
        },
        {
          label: 'European Data Protection Supervisor',
          ariaLabel: 'Link to European Data Protection Supervisor',
          href: exampleLink,
        },
        {
          label: 'European Data Protection Board',
          ariaLabel: 'Link to European Data Protection Board',
          href: exampleLink,
        },
        {
          label: 'European Personnel Selection Office',
          ariaLabel: 'Link to European Personnel Selection Office',
          href: exampleLink,
        },
        {
          label: 'Publications Office of the European Union',
          ariaLabel: 'Link to Publications office of the European Union',
          href: exampleLink,
        },
        {
          label: 'Agencies',
          ariaLabel: 'Link to Agencies',
          href: exampleLink,
        },
      ],
    },
  },
};
