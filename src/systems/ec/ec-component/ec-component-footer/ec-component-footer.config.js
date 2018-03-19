module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  context: {
    custom_footer: {
      identity: {
        href: '#',
        label: 'Digital single market',
      },
      social_links: {
        label: 'Follow us:',
        links: [
          {
            type: 'social-network',
            icon: 'facebook',
            link: {
              href: '#',
              label: 'Facebook',
            },
          },
          {
            type: 'social-network',
            icon: 'twitter',
            link: {
              href: '#',
              label: 'Twitter',
            },
          },
          {
            type: 'external',
            link: {
              href: '#',
              label: 'Other social media',
            },
          },
        ],
      },
      other_links: {
        links: [
          {
            link: {
              href: '#',
              label: 'Contact',
            },
          },
          {
            link: {
              href: '#',
              label: 'Site map',
            },
          },
        ],
      },
    },
    corporate_footer: [
      {
        title: 'European Commission',
        classes: 'ecl-footer__menu',
        items: [
          {
            classes: 'ecl-footer__menu-item',
            link: {
              href: 'https://ec.europa.eu/commission/index_en',
              label: 'Commission and its priorities',
            },
          },
          {
            classes: 'ecl-footer__menu-item',
            link: {
              href: 'https://ec.europa.eu/info/index_en',
              label: 'Policies information and services',
            },
          },
        ],
      },
      {
        title: 'Follow the European Commission',
        classes: 'ecl-footer__menu ecl-list--inline ecl-footer__social-links',
        items: [
          {
            classes: 'ecl-footer__menu-item',
            link: {
              href: '#',
              label: 'Facebook',
              label_wrapper_class:
                'ecl-icon ecl-icon--facebook ecl-footer__social-icon',
            },
          },
          {
            classes: 'ecl-footer__menu-item',
            link: {
              href: '#',
              label: 'Twitter',
              label_wrapper_class:
                'ecl-icon ecl-icon--twitter ecl-footer__social-icon',
            },
          },
          {
            classes: 'ecl-footer__menu-item',
            link: {
              href: '#',
              label: 'Other social media',
              variant: 'external',
            },
          },
        ],
      },
      {
        title: 'European Union',
        classes: 'ecl-footer__menu',
        items: [
          {
            classes: 'ecl-footer__menu-item',
            link: {
              href: '#',
              label: 'EU institutions',
              variant: 'external',
            },
          },
          {
            classes: 'ecl-footer__menu-item',
            link: {
              href: '#',
              label: 'European Union',
              variant: 'external',
            },
          },
        ],
      },
    ],
    last_menu: {
      items: [
        {
          classes: 'ecl-footer__menu-item',
          link: {
            href:
              'http://ec.europa.eu/info/about-commissions-new-web-presence_en',
            label: "About the Commission's new web presence",
          },
        },
        {
          classes: 'ecl-footer__menu-item',
          link: {
            href: 'http://ec.europa.eu/info/resources-partners_en',
            label: 'Resources for partners',
          },
        },
        {
          classes: 'ecl-footer__menu-item',
          link: {
            href: 'http://ec.europa.eu/info/cookies_en',
            label: 'Cookies',
          },
        },
        {
          classes: 'ecl-footer__menu-item',
          link: {
            href: 'http://ec.europa.eu/info/legal-notice_en',
            label: 'Legal notice',
          },
        },
        {
          classes: 'ecl-footer__menu-item',
          link: {
            href: 'http://ec.europa.eu/info/contact_en',
            label: 'Contact',
          },
        },
      ],
    },
  },
};
