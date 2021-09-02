// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  backToTop: {
    variant: 'standalone',
    label: 'Go to top',
    href: '#top',
    icon: {
      shape: 'ui--corner-arrow',
      size: 'fluid',
    },
  },
  sections: [
    {
      title: 'Contact the EU',
      items: [
        [
          {
            link: {
              variant: 'standalone',
              label: '00 800 6 7 8 9 10 11',
              ariaLabel: 'Link to Call us on 00 800 6 7 8 9 10 11',
              href: exampleLink,
            },
            before: 'Call us ',
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'telephone options',
              ariaLabel: 'Link to telephone options',
              href: exampleLink,
            },
            before: 'Use other ',
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'contact form',
              ariaLabel: 'Link to contact form',
              href: exampleLink,
            },
            before: 'Write to us via our ',
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'local EU office',
              ariaLabel: 'Link to local EU Office',
              href: exampleLink,
            },
            before: 'Meet us at a ',
          },
        ],
      ],
    },
    {
      title: 'Find an EU social media account',
      items: [
        [
          {
            link: {
              variant: 'standalone',
              label: 'Search for EU social media channels',
              ariaLabel: 'Link to Search for EU social media channels',
              href: exampleLink,
            },
          },
        ],
      ],
    },
    {
      title: 'EU institution',
      items: [
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Parliament',
              ariaLabel: 'Link to European Parliament',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Council',
              ariaLabel: 'Link to European Council',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'Council of the European Union',
              ariaLabel: 'Link to Council of the European Union',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Commission',
              ariaLabel: 'Link to European Commission',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'Court of Justice of the European Union',
              ariaLabel: 'Link to Court of Justice of the European Union',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Central Bank',
              ariaLabel: 'Link to European Central Bank',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Court of Auditors',
              ariaLabel: 'Link to European Court of Auditors',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European External Action Service',
              ariaLabel: 'Link to European External Action Service',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Economic and Social Committee',
              ariaLabel: 'Link to European Economic and social Committee',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Committee of the Regions',
              ariaLabel: 'Link to European Committee of the Regions',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Investment Bank',
              ariaLabel: 'Link to European Investment Bank',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Ombudsman',
              ariaLabel: 'Link to European Ombudsman',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Data Protection Supervisor',
              ariaLabel: 'Link to European Data this.props Supervisor',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'European Personnel Selection Office',
              ariaLabel: 'Link to European Personnel Selection office',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'Publications Office of the European Union',
              ariaLabel: 'Link to Publications office of the European Union',
              href: exampleLink,
            },
          },
        ],
        [
          {
            link: {
              variant: 'standalone',
              label: 'Agencies',
              ariaLabel: 'Link to Agencies',
              href: exampleLink,
            },
          },
        ],
      ],
    },
    {
      items: [
        [
          {
            link: {
              variant: 'standalone',
              label: 'EU institutions',
              ariaLabel: 'Link to EU institutions',
              href: exampleLink,
            },
            before: 'Search for ',
          },
        ],
      ],
    },
  ],
  common: {
    label: 'Last published 26/06/2018',
    links: [
      {
        variant: 'standalone',
        label: 'Work for the EU',
        ariaLabel: 'Link to Work for the EU',
        href: exampleLink,
      },
      {
        variant: 'standalone',
        label: 'Sitemap',
        ariaLabel: 'Link to Sitemap',
        href: exampleLink,
      },
      {
        variant: 'standalone',
        label: 'About this site',
        ariaLabel: 'Link to About this Site',
        href: exampleLink,
      },
      {
        variant: 'standalone',
        label: 'Language policy',
        ariaLabel: 'Link to Language policy',
        href: exampleLink,
      },
      {
        variant: 'standalone',
        label: 'Legal notice',
        ariaLabel: 'Link to Legal notice',
        href: exampleLink,
      },
      {
        variant: 'standalone',
        label: 'Cookies',
        ariaLabel: 'Link to Cookies',
        href: exampleLink,
      },
    ],
  },
};
