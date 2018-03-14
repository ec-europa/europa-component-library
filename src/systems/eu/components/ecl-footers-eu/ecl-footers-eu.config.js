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
            extra_classes: 'ecl-col-sm',
            title: {
              classes: 'ecl-h4 ecl-footer__link--site-identity',
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
            extra_classes: 'ecl-col-sm',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Facebook',
                  variant: 'standalone',
                  label_wrapper_class:
                    'ecl-icon ecl-icon--facebook ecl-footer__social-icon',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  variant: 'standalone',
                  label: 'Twitter',
                  label_wrapper_class:
                    'ecl-icon ecl-icon--twitter ecl-footer__social-icon',
                },
              },
            ],
          },
          {
            classes:
              'ecl-footer__menu ecl-list--unstyled ecl-footer__menu--2-col',
            extra_classes: 'ecl-col-sm',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Contact',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Site map',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Lorem ipsum',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Lorem ipsum',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Lorem ipsum',
                  variant: 'standalone',
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
              value: 'Contact EU',
              classes: 'ecl-h4 ecl-footer__title',
            },
            classes:
              'ecl-footer__menu ecl-footer__menu--2-col ecl-list--unstyled',
            extra_classes: 'ecl-col-md-8',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Call 00 800 6 7 8 9 10 11. See details of service',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'E-mail your questions about the EU',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'EU in your country',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Local information services in the EU',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Institutions, bodies and agencies',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Press contacts',
                  variant: 'standalone',
                },
              },
            ],
          },
          {
            title: {
              value: 'Find the EU on social media accounts',
              classes: 'ecl-h4 ecl-footer__title',
            },
            classes:
              'ecl-footer__menu ecl-list--inline ecl-footer__social-links',
            extra_classes: 'ecl-col-md-4',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label:
                    'Use this tool to search for EU social media channels.',
                  variant: 'standalone',
                },
              },
            ],
          },
          {
            title: {
              value: 'Find an European institution',
              classes: 'ecl-h4 ecl-footer__title',
            },
            classes:
              'ecl-footer__menu ecl-footer__menu--3-col ecl-list--unstyled',
            extra_classes: 'ecl-col-md-12',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Parliament',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Council',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Council of the European Union',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Commission',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Court of Justice of the European Union',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Central Bank',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Court of Auditors',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European External Action Service',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Economic and Social Committee',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Committee of the Regions',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Investment Bank',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Ombudsman',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Data Protection Supervisor',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'European Personnel Selection Office',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Publications Office of the European Union',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Agencies',
                  variant: 'standalone',
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
            extra_classes: 'ecl-col',
            items: [
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Work for the European Union',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'Sitemap',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: 'http://ec.europa.eu/info/cookies_en',
                  label: 'Cookies',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: '#',
                  label: 'About this site',
                  variant: 'standalone',
                },
              },
              {
                classes: 'ecl-footer__menu-item',
                link: {
                  href: 'http://ec.europa.eu/info/legal-notice_en',
                  label: 'Legal notice',
                  variant: 'standalone',
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
