module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  preview: '@preview-icons',
  context: {
    custom_footer: {
      identity: 'Digital single market',
      social_links: {
        label: 'Follow us:',
        links: [
          {
            type: 'social-network',
            icon: {
              icon_path: '../../ec-preset-website/images/icons/symbol-defs.svg',
              icon: 'facebook',
              size: 'm',
            },
            link: {
              href: '../../example.html#',
              label: 'Facebook',
            },
          },
          {
            type: 'social-network',
            icon: {
              icon_path: '../../ec-preset-website/images/icons/symbol-defs.svg',
              icon: 'twitter',
              size: 'm',
            },
            link: {
              href: '../../example.html#',
              label: 'Twitter',
            },
          },
          {
            type: 'external',
            link: {
              href: '../../example.html#',
              label: 'Other social media',
            },
          },
        ],
      },
      other_links: {
        links: [
          {
            link: {
              href: '../../example.html#',
              label: 'Contact',
            },
          },
          {
            link: {
              href: '../../example.html#',
              label: 'Site map',
            },
          },
        ],
      },
    },
    corporate_footer: {
      about_ec: {
        title: 'European Commission',
        items: [
          {
            href: 'https://ec.europa.eu/commission/index_en',
            label: 'Commission and its priorities',
          },
          {
            href: 'https://ec.europa.eu/info/index_en',
            label: 'Policies information and services',
          },
        ],
      },
      social_media: {
        title: 'Follow the European Commission',
        items: [
          {
            type: 'social-network',
            icon: {
              icon_path: '../../ec-preset-website/images/icons/symbol-defs.svg',
              icon: 'facebook',
              size: 'm',
            },
            link: {
              href: '../../example.html#',
              label: 'Facebook',
            },
          },
          {
            type: 'social-network',
            icon: {
              icon_path: '../../ec-preset-website/images/icons/symbol-defs.svg',
              icon: 'twitter',
              size: 'm',
            },
            link: {
              href: '../../example.html#',
              label: 'Twitter',
            },
          },
          {
            type: 'external',
            link: {
              href: '../../example.html#',
              label: 'Other social media',
            },
          },
        ],
      },
      about_eu: {
        title: 'European Union',
        items: [
          {
            href: '../../example.html#',
            label: 'EU institutions',
          },
          {
            href: '../../example.html#',
            label: 'European Union',
          },
        ],
      },
      bottom_links: [
        {
          href:
            'http://ec.europa.eu/info/about-commissions-new-web-presence_en',
          label: "About the Commission's new web presence",
        },
        {
          href: 'http://ec.europa.eu/info/resources-partners_en',
          label: 'Resources for partners',
        },
        {
          href: 'http://ec.europa.eu/info/cookies_en',
          label: 'Cookies',
        },
        {
          href: 'http://ec.europa.eu/info/legal-notice_en',
          label: 'Legal notice',
        },
        {
          href: 'http://ec.europa.eu/info/contact_en',
          label: 'Contact',
        },
      ],
    },
  },
};
