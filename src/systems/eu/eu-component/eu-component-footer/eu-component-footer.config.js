module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  context: {
    custom_footer: {
      identity: {
        href: 'https://example.com/homepage',
        label: 'Site identification',
      },
      social_links: {
        label: 'Follow us:',
        links: [
          {
            type: 'social-network',
            icon: 'facebook',
            link: {
              href: 'https://example.com/facebook',
              label: 'Facebook',
            },
          },
          {
            type: 'social-network',
            icon: 'twitter',
            link: {
              href: 'https://example.com/twitter',
              label: 'Twitter',
            },
          },
        ],
      },
      other_links: {
        links: [
          {
            link: {
              href: 'https://example.com/contact',
              label: 'Contact',
            },
          },
          {
            link: {
              href: 'https://example.com/sitemap',
              label: 'Site map',
            },
          },
          {
            link: {
              href: 'https://example.com/loremipsum1',
              label: 'Lorem ipsum',
            },
          },
          {
            link: {
              href: 'https://example.com/loremipsum2',
              label: 'Lorem ipsum',
            },
          },
          {
            link: {
              href: 'https://example.com/loremipsum3',
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
            href: 'https://example.com/call',
            label: 'Call 00 800 6 7 8 9 10 11. See details of service',
          },
          {
            href: 'https://example.com/email',
            label: 'E-mail your questions about the EU',
          },
          {
            href: 'https://example.com/euinyourcountry',
            label: 'EU in your country',
          },
          {
            href: 'https://example.com/localinformation',
            label: 'Local information services in the EU',
          },
          {
            href: 'https://example.com/institutions',
            label: 'Institutions, bodies and agencies',
          },
          {
            href: 'https://example.com/press',
            label: 'Press contacts',
          },
        ],
      },
      social_media: {
        title: 'Find EU social media accounts',
        items: [
          {
            href: 'https://example.com/social-media-tool',
            label: 'Use this tool to search for EU social media channels',
          },
        ],
      },
      find_institution: {
        title: 'Find a European institution',
        items: [
          {
            href: 'https://example.com/',
            label: 'European Parliament',
          },
          {
            href: 'https://example.com/',
            label: 'European Council',
          },

          {
            href: 'https://example.com/',
            label: 'Council of the European Union',
          },
          {
            href: 'https://example.com/',
            label: 'European Commission',
          },
          {
            href: 'https://example.com/',
            label: 'Court of Justice of the European Union',
          },
          {
            href: 'https://example.com/',
            label: 'European Central Bank',
          },
          {
            href: 'https://example.com/',
            label: 'European Court of Auditors',
          },
          {
            href: 'https://example.com/',
            label: 'European External Action Service',
          },
          {
            href: 'https://example.com/',
            label: 'European Economic and Social Committee',
          },
          {
            href: 'https://example.com/',
            label: 'European Committee of the Regions',
          },
          {
            href: 'https://example.com/',
            label: 'European Investment Bank',
          },
          {
            href: 'https://example.com/',
            label: 'European Ombudsman',
          },
          {
            href: 'https://example.com/',
            label: 'European Data Protection Supervisor',
          },
          {
            href: 'https://example.com/',
            label: 'European Personnel Selection Office',
          },
          {
            href: 'https://example.com/',
            label: 'Publications Office of the European Union',
          },
          {
            href: 'https://example.com/',
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
          href: 'https://example.com/',
          label: 'Language policy',
        },
        {
          href: 'https://example.com/',
          label: 'Web accessibility',
        },
      ],
    },
  },
};
