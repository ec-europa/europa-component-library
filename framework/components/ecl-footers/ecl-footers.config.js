module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  context: {
    ecFooterMenus: [
      {
        type: 'branded',
        wrapperClass: 'ecl-footers__site-identity',
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
            classes: 'ecl-footers__menu ecl-list-inline',
            items: [
              {
                classes: 'ecl-footers__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: '',
                  title: 'Facebook',
                  titleWrapperClass:
                    'ecl-icon ecl-icon--facebook ecl-footers__social-icon',
                },
              },
              {
                classes: 'ecl-footers__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: '',
                  title: 'Twitter',
                  titleWrapperClass:
                    'ecl-icon ecl-icon--twitter ecl-footers__social-icon',
                },
              },
              {
                classes: 'ecl-footers__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link--external',
                  title: 'Other social media',
                  titleWrapperClass: '',
                },
              },
            ],
          },
          {
            classes: 'ecl-footers__menu ecl-list-inline',
            items: [
              {
                classes: 'ecl-footers__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: '',
                  title: 'Contact',
                  titleWrapperClass: '',
                },
              },
              {
                classes: 'ecl-footers__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: '',
                  title: 'Site map',
                  titleWrapperClass: '',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'normal',
        wrapperClass: 'ecl-footers__site-corporate',
        menus: [
          {
            title: {
              value: 'European Commission',
              classes: 'ecl-h4 ecl-footers__title',
            },
            classes: 'ecl-footers__menu',
            items: [
              {
                classes: 'ecl-footers__menu-item',
                link: {
                  target: 'https://ec.europa.eu/commission/index_en',
                  classes: '',
                  title: 'Commission and its priorities',
                },
              },
              {
                classes: 'ecl-footers__menu-item',
                link: {
                  target: 'https://ec.europa.eu/info/index_en',
                  classes: '',
                  title: 'Policies information and services',
                  titleWrapperClass: '',
                },
              },
            ],
          },
          {
            title: {
              value: 'Follow the European Commission',
              classes: 'ecl-h4 ecl-footers__title',
            },
            classes: 'ecl-footers__menu ecl-list-inline',
            items: [
              {
                classes: 'ecl-footers__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: '',
                  title: 'Facebook',
                  titleWrapperClass:
                    'ecl-icon ecl-icon--facebook ecl-footers__social-icon',
                },
              },
              {
                classes: 'ecl-footers__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: '',
                  title: 'Twitter',
                  titleWrapperClass:
                    'ecl-icon ecl-icon--twitter ecl-footers__social-icon',
                },
              },
              {
                classes: 'ecl-footers__menu-item ecl-list-inline__item',
                link: {
                  target: '#',
                  classes: 'ecl-link--external',
                  title: 'Other social media',
                  titleWrapperClass: '',
                },
              },
            ],
          },
          {
            title: {
              value: 'European Union',
              classes: 'ecl-h4 ecl-footers__title',
            },
            classes: 'ecl-footers__menu',
            items: [
              {
                classes: 'ecl-footers__menu-item',
                link: {
                  target: '#',
                  classes: 'ecl-link--external',
                  title: 'EU institutions',
                  titleWrapperClass: '',
                },
              },
              {
                classes: 'ecl-footers__menu-item',
                link: {
                  target: '#',
                  classes: 'ecl-link--external',
                  title: 'European Union',
                  titleWrapperClass: '',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'plain',
        wrapperClass: 'ecl-footers__ec',
        menus: [
          {
            classes: 'ecl-list-inline ecl-footers__menu',
            items: [
              {
                classes: 'ecl-list-inline__item ecl-footers__menu-item',
                link: {
                  target:
                    'http://ec.europa.eu/info/about-commissions-new-web-presence_en',
                  classes: '',
                  title: "About the Commission's new web presence",
                  titleWrapperClass: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footers__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/resources-partners_en',
                  classes: '',
                  title: 'Resources for partners',
                  titleWrapperClass: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footers__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/cookies_en',
                  classes: '',
                  title: 'Cookies',
                  titleWrapperClass: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footers__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/legal-notice_en',
                  classes: '',
                  title: 'Legal notice',
                  titleWrapperClass: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footers__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/contact_en',
                  classes: '',
                  title: 'Contact',
                  titleWrapperClass: '',
                },
              },
              {
                classes: 'ecl-list-inline__item ecl-footers__menu-item',
                link: {
                  target: 'http://ec.europa.eu/info/europa-analytics_en',
                  classes: '',
                  title: 'Europa Analytics',
                  titleWrapperClass: '',
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
