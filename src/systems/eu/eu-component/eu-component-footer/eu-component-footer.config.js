module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'ready',
  tags: ['organism'],
  context: {
    custom_footer: {
      identity: {
        href: '#homepage',
        label: 'Digital single market',
      },
      social_links: {
        label: 'Follow us:',
        links: [
          {
            type: 'social-network',
            icon: 'facebook',
            link: {
              href: '#facebook',
              label: 'Facebook',
            },
          },
          {
            type: 'social-network',
            icon: 'twitter',
            link: {
              href: '#twitter',
              label: 'Twitter',
            },
          },
          {
            type: 'external',
            link: {
              href: '#external-link',
              label: 'Other social media',
            },
          },
        ],
      },
      other_links: {
        links: [
          {
            link: {
              href: '#contact',
              label: 'Contact',
            },
          },
          {
            link: {
              href: '#sitemap',
              label: 'Site map',
            },
          },
          {
            link: {
              href: '#loremipsum1',
              label: 'Lorem ipsum',
            },
          },
          {
            link: {
              href: '#loremipsum2',
              label: 'Lorem ipsum',
            },
          },
          {
            link: {
              href: '#loremipsum3',
              label: 'Lorem ipsum',
            },
          },
        ],
      },
    },
    corporate_footer: {
      contact_eu: {
        title: 'Contact EU',
        // classes: 'ecl-footer__menu ecl-footer__menu--2-col ecl-list--unstyled',
        // extra_classes: 'ecl-col-md-8',
        items: [
          {
            href: '#call',
            label: 'Call 00 800 6 7 8 9 10 11. See details of service',
          },
          {
            href: '#email',
            label: 'E-mail your questions about the EU',
          },
          {
            href: '#euinyourcountry',
            label: 'EU in your country',
          },
          {
            href: '#localinformation',
            label: 'Local information services in the EU',
          },
          {
            href: '#institutions',
            label: 'Institutions, bodies and agencies',
          },
          {
            href: '#press',
            label: 'Press contacts',
          },
        ],
      },
      social_media: {
        title: 'Find the EU on social media accounts',
        // classes: 'ecl-footer__menu ecl-list--inline ecl-footer__social-links',
        // extra_classes: 'ecl-col-md-4',
        items: [
          {
            href: '#social-media-tool',
            label: 'Use this tool to search for EU social media channels.',
          },
        ],
      },
      find_institution: {
        title: 'Find an European institution',
        //  classes: 'ecl-h4 ecl-footer__title',
        // },
        // classes: 'ecl-footer__menu ecl-footer__menu--3-col ecl-list--unstyled',
        // extra_classes: 'ecl-col-md-12',
        items: [
          {
            href: '#',
            label: 'European Parliament',
          },
          {
            href: '#',
            label: 'European Council',
          },

          {
            href: '#',
            label: 'Council of the European Union',
          },
          {
            href: '#',
            label: 'European Commission',
          },
          {
            classes: 'ecl-footer__menu-item',
            link: {
              href: '#',
              label: 'Court of Justice of the European Union',
            },
          },
          {
            href: '#',
            label: 'European Central Bank',
          },
          {
            href: '#',
            label: 'European Court of Auditors',
          },
          {
            href: '#',
            label: 'European External Action Service',
          },
          {
            href: '#',
            label: 'European Economic and Social Committee',
          },
          {
            href: '#',
            label: 'European Committee of the Regions',
          },
          {
            href: '#',
            label: 'European Investment Bank',
          },
          {
            href: '#',
            label: 'European Ombudsman',
          },
          {
            href: '#',
            label: 'European Data Protection Supervisor',
          },
          {
            href: '#',
            label: 'European Personnel Selection Office',
          },
          {
            href: '#',
            label: 'Publications Office of the European Union',
          },
          {
            href: '#',
            label: 'Agencies',
          },
        ],
      },
      bottom_links: [
        // type: 'plain',
        // wrapper_class: 'ecl-footer__eu',
        // menus: [
        //  {
        //    classes: 'ecl-list--inline ecl-footer__menu',
        //    extra_classes: 'ecl-col',
        //    items: [
        {
          href: '#',
          label: 'Work for the European Union',
        },
        {
          href: '#',
          label: 'Sitemap',
        },
        {
          href: 'http://ec.europa.eu/info/cookies_en',
          label: 'Cookies',
        },
        {
          href: '#',
          label: 'About this site',
        },
        {
          href: 'http://ec.europa.eu/info/legal-notice_en',
          label: 'Legal notice',
        },
      ],
    },
  },
};
