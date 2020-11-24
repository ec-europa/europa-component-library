module.exports = {
  sections: {
    siteName: {
      // Mandatory
      title: {
        label: 'European Commission website',
        href: '/example',
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
          href: '/example',
        },
        {
          label: 'About the European Commission',
          ariaLabel: 'Link About the European Commission',
          href: '/example',
        },
        {
          label: 'Business, Economy, Euro',
          ariaLabel: 'Link to Business, Economy, Euro',
          href: '/example',
        },
        {
          label: 'Live, work, travel in the EU',
          ariaLabel: 'Link work, travel in the EU',
          href: '/example',
        },
        {
          label: 'Law',
          href: '/example',
          ariaLabel: 'Link to Law',
        },
        {
          label: 'Funding, Tenders',
          ariaLabel: 'Link to Funding, Tenders',
          href: '/example',
        },
        {
          label: 'Research and innovation',
          ariaLabel: 'Link to Research and innovation',
          href: '/example',
        },
        {
          label: 'Energy, Climate change, Environment',
          ariaLabel: 'Link to Climate change, Environment',
          href: '/example',
        },
        {
          label: 'Education',
          ariaLabel: 'Link to Education',
          href: '/example',
        },
        {
          label: 'Aid, Development cooperation, Fundamental rights',
          ariaLabel: 'Link to Aid, Development cooperation, Fundamental rights',
          href: '/example',
        },
        {
          label: 'Food, Farming, Fisheries',
          ariaLabel: 'Link to Food, Farming, Fisheries',
          href: '/example',
        },
        {
          label: 'EU regional and urban development',
          ariaLabel: 'Link to EU regionaland urban development',
          href: '/example',
        },
        {
          label: 'Jobs at the European Commission',
          ariaLabel: 'Link to Jobs at the European Commission',
          href: '/example',
        },
        {
          label: 'Statistics',
          ariaLabel: 'Link to Statistics',
          href: '/example',
        },
        {
          label: 'News',
          ariaLabel: 'Link to News',
          href: '/example',
        },
        {
          label: 'Events',
          ariaLabel: 'Link to Events',
          href: '/example',
        },
        {
          label: 'Publications',
          ariaLabel: 'Link to Publications',
          href: '/example',
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
          href: '/example',
        },
        {
          label: 'Follow the European Commission on social media',
          ariaLabel: 'Link to Follow the European Commission on social media',
          href: '/example',
          iconPosition: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
        {
          label: 'Resources for partners',
          ariaLabel: 'Link to Resources for partners',
          href: '/example',
        },
      ],
    },
    legalNavigation: {
      // Mandatory
      links: [
        {
          label: 'Language policy',
          ariaLabel: 'Link to Language policy',
          href: '/example',
        },
        {
          label: 'Cookies',
          ariaLabel: 'Link to Cookies',
          href: '/example',
        },
        {
          label: 'Privacy policy',
          ariaLabel: 'Link to Privacy policy',
          href: '/example',
        },
        {
          label: 'Legal notice',
          ariaLabel: 'Link to Legal notice',
          href: '/example',
        },
      ],
    },
  },
};
