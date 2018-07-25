module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  preview: '@preview-icons',
  context: {
    custom_footer: {
      identity: 'Site identification',
      social_links: {
        label: 'Follow us:',
        links: [
          {
            type: 'social-network',
            icon: {
              icon_path: '../../eu-preset-website/images/icons/symbol-defs.svg',
              icon: 'facebook',
              size: 'm',
            },
            link: {
              href: '../../example.html#facebook',
              label: 'Facebook',
            },
          },
          {
            type: 'social-network',
            icon: {
              icon_path: '../../eu-preset-website/images/icons/symbol-defs.svg',
              icon: 'twitter',
              size: 'm',
            },
            link: {
              href: '../../example.html#twitter',
              label: 'Twitter',
            },
          },
        ],
      },
      other_links: {
        links: [
          {
            link: {
              href: '../../example.html#contact',
              label: 'Contact',
            },
          },
          {
            link: {
              href: '../../example.html#sitemap',
              label: 'Site map',
            },
          },
          {
            link: {
              href: '../../example.html#loremipsum1',
              label: 'Lorem ipsum',
            },
          },
          {
            link: {
              href: '../../example.html#loremipsum2',
              label: 'Lorem ipsum',
            },
          },
          {
            link: {
              href: '../../example.html#loremipsum3',
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
            href: '../../example.html#call',
            label: 'Call 00 800 6 7 8 9 10 11. See details of service',
          },
          {
            href: '../../example.html#email',
            label: 'E-mail your questions about the EU',
          },
          {
            href: '../../example.html#euinyourcountry',
            label: 'EU in your country',
          },
          {
            href: '../../example.html#localinformation',
            label: 'Local information services in the EU',
          },
          {
            href: '../../example.html#institutions',
            label: 'Institutions, bodies and agencies',
          },
          {
            href: '../../example.html#press',
            label: 'Press contacts',
          },
        ],
      },
      social_media: {
        title: 'Find EU social media accounts',
        items: [
          {
            href: '../../example.html#social-media-tool',
            label: 'Use this tool to search for EU social media channels',
          },
        ],
      },
      find_institution: {
        title: 'Find a European institution',
        items: [
          {
            href: '../../example.html#',
            label: 'European Parliament',
          },
          {
            href: '../../example.html#',
            label: 'European Council',
          },

          {
            href: '../../example.html#',
            label: 'Council of the European Union',
          },
          {
            href: '../../example.html#',
            label: 'European Commission',
          },
          {
            href: '../../example.html#',
            label: 'Court of Justice of the European Union',
          },
          {
            href: '../../example.html#',
            label: 'European Central Bank',
          },
          {
            href: '../../example.html#',
            label: 'European Court of Auditors',
          },
          {
            href: '../../example.html#',
            label: 'European External Action Service',
          },
          {
            href: '../../example.html#',
            label: 'European Economic and Social Committee',
          },
          {
            href: '../../example.html#',
            label: 'European Committee of the Regions',
          },
          {
            href: '../../example.html#',
            label: 'European Investment Bank',
          },
          {
            href: '../../example.html#',
            label: 'European Ombudsman',
          },
          {
            href: '../../example.html#',
            label: 'European Data Protection Supervisor',
          },
          {
            href: '../../example.html#',
            label: 'European Personnel Selection Office',
          },
          {
            href: '../../example.html#',
            label: 'Publications Office of the European Union',
          },
          {
            href: '../../example.html#',
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
          href: '../../example.html#',
          label: 'Language policy',
        },
        {
          href: '../../example.html#',
          label: 'Web accessibility',
        },
      ],
    },
  },
};
