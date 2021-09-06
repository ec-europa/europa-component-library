const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  sections: {
    siteName: {
      // Mandatory
      title: {
        label: 'European Commission website',
        href: exampleLink,
      },
      description:
        'This site is managed by the Directorate-General for Communication',
    },
    classes: {
      // Mandatory
      contentBefore: 'More information on:',
      links: [
        {
          label: 'Strategy',
          ariaLabel: 'Link to Strategy',
          href: exampleLink,
        },
        {
          label: 'About the European Commission',
          ariaLabel: 'Link About the European Commission',
          href: exampleLink,
        },
        {
          label: 'Business, Economy, Euro',
          ariaLabel: 'Link to Business, Economy, Euro',
          href: exampleLink,
        },
        {
          label: 'Live, work, travel in the EU',
          ariaLabel: 'Link work, travel in the EU',
          href: exampleLink,
        },
        {
          label: 'Law',
          href: exampleLink,
          ariaLabel: 'Link to Law',
        },
        {
          label: 'Funding, Tenders',
          ariaLabel: 'Link to Funding, Tenders',
          href: exampleLink,
        },
        {
          label: 'Research and innovation',
          ariaLabel: 'Link to Research and innovation',
          href: exampleLink,
        },
        {
          label: 'Energy, Climate change, Environment',
          ariaLabel: 'Link to Climate change, Environment',
          href: exampleLink,
        },
        {
          label: 'Education',
          ariaLabel: 'Link to Education',
          href: exampleLink,
        },
        {
          label: 'Aid, Development cooperation, Fundamental rights',
          ariaLabel: 'Link to Aid, Development cooperation, Fundamental rights',
          href: exampleLink,
        },
        {
          label: 'Food, Farming, Fisheries',
          ariaLabel: 'Link to Food, Farming, Fisheries',
          href: exampleLink,
        },
        {
          label: 'EU regional and urban development',
          ariaLabel: 'Link to EU regionaland urban development',
          href: exampleLink,
        },
        {
          label: 'Jobs at the European Commission',
          ariaLabel: 'Link to Jobs at the European Commission',
          href: exampleLink,
        },
        {
          label: 'Statistics',
          ariaLabel: 'Link to Statistics',
          href: exampleLink,
        },
        {
          label: 'News',
          ariaLabel: 'Link to News',
          href: exampleLink,
        },
        {
          label: 'Events',
          ariaLabel: 'Link to Events',
          href: exampleLink,
        },
        {
          label: 'Publications',
          ariaLabel: 'Link to Publications',
          href: exampleLink,
        },
      ],
      listClassName: 'ecl-footer-core__list--columns',
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
