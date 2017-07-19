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
              value: 'Digital single market',
              classes: 'ecl-h4',
              target: '#',
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
                  classes: 'ecl-link',
                  title: 'Facebook',
                  title_wrapper_class:
                    'ecl-icon ecl-icon--facebook ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link',
                  title: 'Twitter',
                  title_wrapper_class:
                    'ecl-icon ecl-icon--twitter ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-link--external',
                  title: 'Other social media',
                  title_wrapper_class: '',
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
                  classes: 'ecl-link',
                  title: 'Contact',
                  title_wrapper_class: '',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link',
                  title: 'Site map',
                  title_wrapper_class: '',
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
                  classes: 'ecl-link',
                  title: 'Commission and its priorities',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  target: 'https://ec.europa.eu/info/index_en',
                  classes: 'ecl-link',
                  title: 'Policies information and services',
                  title_wrapper_class: '',
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
                  classes: 'ecl-link',
                  title: 'Facebook',
                  title_wrapper_class:
                    'ecl-icon ecl-icon--facebook ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link',
                  title: 'Twitter',
                  title_wrapper_class:
                    'ecl-icon ecl-icon--twitter ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-link--external',
                  title: 'Other social media',
                  title_wrapper_class: '',
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
                  classes: 'ecl-link ecl-link--external',
                  title: 'EU institutions',
                  title_wrapper_class: '',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  target: '#',
                  classes: 'ecl-link ecl-link--external',
                  title: 'European Union',
                  title_wrapper_class: '',
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
                  classes: 'ecl-link',
                  title: "About the Commission's new web presence",
                  title_wrapper_class: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/resources-partners_en',
                  classes: 'ecl-link',
                  title: 'Resources for partners',
                  title_wrapper_class: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/cookies_en',
                  classes: 'ecl-link',
                  title: 'Cookies',
                  title_wrapper_class: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/legal-notice_en',
                  classes: 'ecl-link',
                  title: 'Legal notice',
                  title_wrapper_class: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footer__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/contact_en',
                  classes: 'ecl-link',
                  title: 'Contact',
                  title_wrapper_class: '',
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
