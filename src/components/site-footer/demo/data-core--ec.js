const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  section_site_info: {
    logo: {
      picture: {
        img: {
          src: '/logo.svg#negative',
          alt: 'European Commission',
        },
      },
      path: exampleLink,
    },
    description:
      'This site is managed by:<span class="ecl-site-footer__description-name">[name of the manager of the site]</span>',
  },
  section_core: {
    links: [
      {
        link: {
          label: 'About us',
          path: 'https://commission.europa.eu/about-european-commission_en',
        },
      },
      {
        link: {
          label: 'Contact us',
          path: 'https://commission.europa.eu/about-european-commission/contact_en',
        },
      },
      {
        link: {
          label: 'Priorities',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Topics',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Funding and tenders',
          path: 'https://commission.europa.eu/funding-tenders_en',
        },
      },
      {
        link: {
          label: 'Jobs',
          path: 'https://commission.europa.eu/jobs-european-commission_en',
        },
      },
      {
        link: {
          label: 'Press corner',
          path: 'https://ec.europa.eu/commission/presscorner/home/en',
        },
      },
      {
        link: {
          label: 'Events',
          path: 'https://commission.europa.eu/events_en',
        },
      },
    ],
  },
  section_common: {
    social_media: {
      description: 'Follow us',
      description_inline: true,
      links: [
        {
          link: {
            label: 'Instagram',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'instagram',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'X',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'x',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Linkedin',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'linkedin',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Telegram',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'telegram',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Other',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'chain',
            family: 'networks',
            style: 'inverted',
          },
        },
      ],
    },
    links_inline: true,
    links: [
      {
        link: {
          label: 'Report an IT vulnerability',
          path: '#',
        },
      },
      {
        link: {
          label: 'Languages on our websites',
          path: 'https://commission.europa.eu/languages-our-websites_en',
        },
      },
      {
        link: {
          label: 'Cookies',
          path: 'https://commission.europa.eu/cookies_en',
        },
      },
      {
        link: {
          label: 'Privacy policy',
          path: 'https://commission.europa.eu/privacy-policy_en',
        },
      },
      {
        link: {
          label: 'Legal notice',
          path: 'https://commission.europa.eu/legal-notice_en',
        },
      },
      {
        link: {
          label: 'Accessibility',
          path: exampleLink,
        },
      },
    ],
  },
};
