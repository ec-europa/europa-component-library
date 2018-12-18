module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  context: {
    custom_footer: {
      identity: 'Site identification',
      social_links: {
        label: 'Follow us:',
        links: [
          {
            type: 'social-network',
            icon: 'facebook',
            link: {
              href: '../../example.html#facebook',
              label: 'Facebook',
            },
          },
          {
            type: 'social-network',
            icon: 'twitter',
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
            html:
              'Call us <a href="../../example.html#call" class="ecl-link ecl-link--standalone">00 800 6 7 8 9 10 11</a> or use other <a href="../../example.html#call" class="ecl-link ecl-link--standalone">telephone options</a>',
          },
          {
            html:
              'E-mail us via our <a href="../../example.html#call" class="ecl-link ecl-link--standalone">contact form</a>',
          },
          {
            html:
              'Visit our <a href="../../example.html#call" class="ecl-link ecl-link--standalone">contact points</a> in your country',
          },
        ],
      },
      social_media: {
        title: 'Find an EU social media account',
        items: [
          {
            html:
              'Search for <a href="../../example.html#call" class="ecl-link ecl-link--standalone">EU social media channels</a>',
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
          href: '../../example.html#',
          label: 'Language policy',
        },
        {
          href: '../../example.html#',
          label: 'Privacy policy',
        },
        {
          href: '../../example.html#',
          label: 'Legal notice',
        },
        {
          href: '../../example.html#',
          label: 'Cookies',
        },
        {
          href: '../../example.html#',
          label: 'Web accessibility',
        },
      ],
      published_date: 'Last published 26/06/2018',
    },
  },
};
