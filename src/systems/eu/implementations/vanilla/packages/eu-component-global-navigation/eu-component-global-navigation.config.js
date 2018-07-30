const links = [
  {
    href: 'http://www.europarl.europa.eu',
    label: 'European Parliament',
  },
  {
    href: 'https://www.consilium.europa.eu/en/european-council/',
    label: 'European Council',
  },
  {
    href: 'https://www.consilium.europa.eu/en/council-eu/',
    label: 'Council of the European Union',
  },
  {
    href: 'https://ec.europa.eu/',
    label: 'European Commission',
  },
  {
    href: 'https://curia.europa.eu/',
    label: 'Court of Justice of the European Union',
  },
  {
    href: 'https://www.ecb.europa.eu',
    label: 'European Central Bank',
  },
  {
    href: 'https://www.eca.europa.eu',
    label: 'European Court of Auditors',
  },
  {
    href: 'https://eeas.europa.eu',
    label: 'European External Action Service',
  },
  {
    href: 'http://www.eesc.europa.eu',
    label: 'European Economic and Social Committee',
  },
  {
    href: 'http://cor.europa.eu',
    label: 'European Committee of the Regions',
  },
  {
    href: 'http://eib.europa.eu',
    label: 'European Investment Bank',
  },
  {
    href: 'https://www.ombudsman.europa.eu',
    label: 'European Ombudsman',
  },
  {
    href: 'https://edps.europa.eu/',
    label: 'European Data Protection Supervisor',
  },
  {
    href: 'https://epso.europa.eu',
    label: 'European Personnel Selection Office',
  },
  {
    href: 'https://publications.europa.eu',
    label: 'Publications Office of the European Union',
  },
  {
    href: 'https://europa.eu/european-union/about-eu/agencies_en',
    label: 'Agencies',
  },
];

module.exports = {
  title: 'Global navigation',
  label: 'Global navigation',
  status: 'ready',
  tags: ['molecule'],
  default: 'light',
  variants: [
    {
      name: 'light',
      label: 'Light',
      context: {
        official: {
          href: 'http://europa.eu/',
          label: 'An official website of the European Union',
          label_mobile: 'European Union',
        },
        institutions: {
          href:
            'https://europa.eu/european-union/about-eu/institutions-bodies_en',
          label: 'See all EU institutions and bodies',
          label_mobile: 'Institutions and bodies',
          links,
        },
        info:
          'All official European Union website addresses are in the "europa.eu" domain',
      },
    },
    {
      name: 'dark',
      label: 'Dark',
      context: {
        modifier: 'dark',
        official: {
          href: 'http://europa.eu/',
          label: 'An official website of the European Union',
          label_mobile: 'European Union',
        },
        institutions: {
          href:
            'https://europa.eu/european-union/about-eu/institutions-bodies_en',
          label: 'See all EU institutions and bodies',
          label_mobile: 'Institutions and bodies',
          links,
        },
        info:
          'All official European Union website addresses are in the "europa.eu" domain',
      },
    },
  ],
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.initExpandables('#ecl-global-navigation-toggle-button');
      });`,
    },
  },
};
