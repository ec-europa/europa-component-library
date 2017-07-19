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
                classes: 'ecl-link ecl-footer__link',
                target: '#',
                title: 'Digital single market',
              },
            },
          },
          {
            label: 'Follow us:',
            classes: 'ecl-footer__menu ecl-list-inline',
            items: [
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Facebook',
                  title_wrapper_class:
                    'ecl-icon ecl-icon--facebook ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Twitter',
                  title_wrapper_class:
                    'ecl-icon ecl-icon--twitter ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link ecl-link--external',
                  title: 'Other social media',
                },
              },
            ],
          },
          {
            classes: 'ecl-footer__menu ecl-list-inline',
            items: [
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Contact',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Site map',
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
                  target: 'https://ec.europa.eu/commission/index_en',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Commission and its priorities',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  target: 'https://ec.europa.eu/info/index_en',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Policies information and services',
                },
              },
            ],
          },
          {
            title: {
              value: 'Follow the European Commission',
              classes: 'ecl-h4 ecl-footer__title',
            },
            classes: 'ecl-footer__menu ecl-list-inline',
            items: [
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Facebook',
                  title_wrapper_class:
                    'ecl-icon ecl-icon--facebook ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Twitter',
                  title_wrapper_class:
                    'ecl-icon ecl-icon--twitter ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link ecl-link--external',
                  title: 'Other social media',
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
                  target: '#',
                  classes: 'ecl-link ecl-footer__link ecl-link--external',
                  title: 'EU institutions',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-footer__link ecl-link--external',
                  title: 'European Union',
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
            classes: 'ecl-list-inline ecl-footer__menu',
            items: [
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target:
                    'http://ec.europa.eu/info/about-commissions-new-web-presence_en',
                  classes: 'ecl-link ecl-footer__link',
                  title: "About the Commission's new web presence",
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/resources-partners_en',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Resources for partners',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/cookies_en',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Cookies',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/legal-notice_en',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Legal notice',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/contact_en',
                  classes: 'ecl-link ecl-footer__link',
                  title: 'Contact',
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
