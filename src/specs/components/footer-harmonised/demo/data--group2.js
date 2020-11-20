module.exports = {
  sections: [
    {
      title: {
        link: {
          label: 'European Commission',
          path: 'https://ec.europa.eu/info/index_en',
        },
      },
      section_id: 1,
      type: 'corporate_name',
    },
    {
      links: [
        {
          link: {
            label: 'Contact the European Commission',
            path: '/example',
            aria_label: 'Link to Contact the European Commission',
          },
        },
        {
          link: {
            label: 'Follow the European Commission on social media',
            path: '/example',
            aria_label:
              'Link to Follow the European Commission on social media',
            icon_position: 'after',
          },
          icon: {
            path: '/icons.svg',
            type: 'ui',
            name: 'external',
            size: 'xs',
          },
        },
        {
          link: {
            label: 'Resources for partners',
            path: '/example',
            aria_label: 'Link to Resources for partners',
          },
        },
      ],
      section_id: 2,
      type: 'service_navigation',
    },
    {
      links: [
        {
          link: {
            label: 'Language policy',
            path: '/example',
            aria_label: 'Link to Language policy',
          },
        },
        {
          link: {
            label: 'Cookies',
            path: '/example',
            aria_label: 'Link to Cookies',
          },
        },
        {
          link: {
            label: 'Privacy policy',
            path: '/example',
            aria_label: 'Link to Privacy policy',
          },
        },
        {
          link: {
            label: 'Legal notice',
            path: '/example',
            aria_label: 'Link to Legal notice',
          },
        },
      ],
      section_id: '9',
      type: 'legal_navigation',
    },
  ],
  group: 'group2',
};
