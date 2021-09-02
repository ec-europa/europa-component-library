const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  sections: {
    corporateName: {
      // Mandatory
      title: {
        label: 'European Commission',
        ariaLabel: 'Link to European Commission',
        href: 'https://ec.europa.eu/info/index_en',
      },
    },
    serviceNavigation: {
      // Mandatory
      links: [
        {
          label: 'Contact the European Commission',
          ariaLabel: 'Link to Contact the European Commission',
          href: exampleLink,
        },
        {
          label: 'Follow the European Commission on social media',
          ariaLabel: 'Link to Follow the European Commission on social media',
          href: exampleLink,
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
        {
          label: 'Resources for partners',
          ariaLabel: 'Link to Resources for partners',
          href: exampleLink,
        },
      ],
    },
    legalNavigation: {
      // Mandatory
      links: [
        {
          label: 'Language policy',
          ariaLabel: 'Link to Language policy',
          href: exampleLink,
        },
        {
          label: 'Cookies',
          ariaLabel: 'Link to Cookies',
          href: exampleLink,
        },
        {
          label: 'Privacy policy',
          ariaLabel: 'Link to Privacy policy',
          href: exampleLink,
        },
        {
          label: 'Legal notice',
          ariaLabel: 'Link to Legal notice',
          href: exampleLink,
        },
      ],
    },
  },
};
