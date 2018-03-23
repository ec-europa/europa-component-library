module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  context: {
    custom_footer: {
      identity: {
        href: '#homepage',
        label: 'Site identification',
      },
      social_links: {
        label: 'Follow us:',
        links: [
          {
            type: 'social-network',
            icon: 'facebook',
            link: {
              href: '#facebook',
              label: 'Facebook',
            },
          },
          {
            type: 'social-network',
            icon: 'twitter',
            link: {
              href: '#twitter',
              label: 'Twitter',
            },
          },
        ],
      },
      other_links: {
        links: [
          {
            link: {
              href: '#contact',
              label: 'Contact',
            },
          },
          {
            link: {
              href: '#sitemap',
              label: 'Site map',
            },
          },
          {
            link: {
              href: '#loremipsum1',
              label: 'Lorem ipsum',
            },
          },
          {
            link: {
              href: '#loremipsum2',
              label: 'Lorem ipsum',
            },
          },
          {
            link: {
              href: '#loremipsum3',
              label: 'Lorem ipsum',
            },
          },
        ],
      },
    },
    corporate_footer: {
      contact_eu: {
        title: 'Contact the EU',
        items: [
          {
            href: '#call',
            label: 'Call 00 800 6 7 8 9 10 11. See details of service',
          },
          {
            href: '#email',
            label: 'E-mail your questions about the EU',
          },
          {
            href: '#euinyourcountry',
            label: 'EU in your country',
          },
          {
            href: '#localinformation',
            label: 'Local information services in the EU',
          },
          {
            href: '#institutions',
            label: 'Institutions, bodies and agencies',
          },
          {
            href: '#press',
            label: 'Press contacts',
          },
        ],
      },
      social_media: {
        title: 'Find EU social media accounts',
        items: [
          {
            href: '#social-media-tool',
            label: 'Use this tool to search for EU social media channels',
          },
        ],
      },
      find_institution: {
        title: 'Find a European institution',
        items: [
          {
            href: '#',
            label: 'European Parliament',
          },
          {
            href: '#',
            label: 'European Council',
          },

          {
            href: '#',
            label: 'Council of the European Union',
          },
          {
            href: '#',
            label: 'European Commission',
          },
          {
            href: '#',
            label: 'Court of Justice of the European Union',
          },
          {
            href: '#',
            label: 'European Central Bank',
          },
          {
            href: '#',
            label: 'European Court of Auditors',
          },
          {
            href: '#',
            label: 'European External Action Service',
          },
          {
            href: '#',
            label: 'European Economic and Social Committee',
          },
          {
            href: '#',
            label: 'European Committee of the Regions',
          },
          {
            href: '#',
            label: 'European Investment Bank',
          },
          {
            href: '#',
            label: 'European Ombudsman',
          },
          {
            href: '#',
            label: 'European Data Protection Supervisor',
          },
          {
            href: '#',
            label: 'European Personnel Selection Office',
          },
          {
            href: '#',
            label: 'Publications Office of the European Union',
          },
          {
            href: '#',
            label: 'Agencies',
          },
        ],
      },
      bottom_links: [
        {
          href: 'https://europa.eu/european-union/about-eu/working_en',
          label: 'Work for the European Union',
        },
        {
          href: 'https://europa.eu/european-union/abouteuropa/cookies_en',
          label: 'Cookies',
        },
        {
          href: 'https://europa.eu/european-union/abouteuropa/legal_notices_en',
          label: 'Legal notice',
        },
        {
          href: '#',
          label: 'Language policy',
        },
        {
          href: '#',
          label: 'Web accessibility',
        },
      ],
    },
  },
};
