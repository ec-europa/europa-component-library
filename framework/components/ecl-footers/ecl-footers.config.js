module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  context: {
    footer_menus: [
      {
        type: 'branded',
        wrapper_class: 'ecl-footer__site-identity',
        menus: [
          {
            title: {
              classes: 'ecl-h4',
              link: {
                href: '#',
                label: 'Digital single market',
                variant: 'standalone',
              },
            },
          },
          {
            label: 'Follow us:',
            classes:
              'ecl-footer__menu ecl-list--inline ecl-footer__social-links',
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
            classes: 'ecl-footer__menu ecl-list--unstyled',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Contact',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Site map',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'normal',
        wrapper_class: 'ecl-footer__site-corporate',
        menus: [
          {
            title: {
              value: 'European Commission',
              classes: 'ecl-h4 ecl-footer__title',
            },
            classes: 'ecl-footer__menu',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: 'https://ec.europa.eu/commission/index_en',
                  label: 'Commission and its priorities',
                  variant: 'inverted',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: 'https://ec.europa.eu/info/index_en',
                  label: 'Policies information and services',
                  variant: 'inverted',
                },
              },
            ],
          },
          {
            title: {
              value: 'Follow the European Commission',
              classes: 'ecl-h4 ecl-footer__title',
            },
            classes:
              'ecl-footer__menu ecl-list--inline ecl-footer__social-links',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Facebook',
                  label_wrapper_class:
                    'ecl-icon ecl-icon--facebook ecl-footer__social-icon',
                  variant: 'inverted',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Twitter',
                  label_wrapper_class:
                    'ecl-icon ecl-icon--twitter ecl-footer__social-icon',
                  variant: 'inverted',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Other social media',
                  variant: ['inverted', 'external'],
                },
              },
            ],
          },
          {
            title: {
              value: 'European Union',
              classes: 'ecl-h4 ecl-footer__title',
            },
            classes: 'ecl-footer__menu',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'EU institutions',
                  variant: ['inverted', 'external'],
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Union',
                  variant: ['inverted', 'external'],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'plain',
        wrapper_class: 'ecl-footer__ec',
        menus: [
          {
            classes: 'ecl-list--inline ecl-footer__menu',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href:
                    'http://ec.europa.eu/info/about-commissions-new-web-presence_en',
                  label: "About the Commission's new web presence",
                  variant: 'inverted',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: 'http://ec.europa.eu/info/resources-partners_en',
                  label: 'Resources for partners',
                  variant: 'inverted',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: 'http://ec.europa.eu/info/cookies_en',
                  label: 'Cookies',
                  variant: 'inverted',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: 'http://ec.europa.eu/info/legal-notice_en',
                  label: 'Legal notice',
                  variant: 'inverted',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: 'http://ec.europa.eu/info/contact_en',
                  label: 'Contact',
                  variant: 'inverted',
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
