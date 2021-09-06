const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  logo: {
    title: 'European Union',
    alt: 'European Union logo',
    language: 'en',
    href: exampleLink,
  },
  sections: {
    siteName: {
      title: {
        label: 'Site name',
        href: exampleLink,
        ariaLabel: 'Link to Site name',
      },
      description:
        'This site is managed by <a href="/example" class="ecl-link ecl-link--standalone">site owner name</a> and is an official website of the European Union',
    },
    dgServices: [
      {
        title: 'Contact site name',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Link',
            ariaLabel: 'Link to Link example',
            href: exampleLink,
          },
        ],
      },
      {
        title: 'Follow us',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Facebook',
            ariaLabel: 'Link to Facebook',
            href: exampleLink,
            iconPosition: 'before',
            icon: {
              shape: 'branded--facebook',
              size: 'xs',
            },
          },
          {
            label: 'Twitter',
            ariaLabel: 'Link to Twitter',
            href: exampleLink,
            iconPosition: 'before',
            icon: {
              shape: 'branded--twitter',
              size: 'xs',
            },
          },
          {
            label: 'Linkedin',
            ariaLabel: 'Link to Linkedin',
            href: exampleLink,
            iconPosition: 'before',
            icon: {
              shape: 'branded--linkedin',
              size: 'xs',
            },
          },
        ],
      },
    ],
    dgNavigations: {
      title: 'Optional links',
      titleClassName: 'ecl-footer-standardised__title--separator',
      links: [
        {
          label: 'Link 1',
          ariaLabel: 'Link to Link 1',
          href: exampleLink,
        },
        {
          label: 'Link 2',
          ariaLabel: 'Link to Link 2',
          href: exampleLink,
        },
        {
          label: 'Link 3',
          ariaLabel: 'Link to Link 3',
          href: exampleLink,
        },
        {
          label: 'Link 4',
          ariaLabel: 'Link to Link 4',
          href: exampleLink,
        },
      ],
    },
    corporateName: {
      description:
        'Discover more on <a href="/example" class="ecl-link ecl-link--standalone">europa.eu</a>',
    },
    serviceNavigation: [
      {
        title: 'Contact the EU',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Call us 00 800 6 7 8 9 10 11',
            ariaLabel: 'Call this number',
            href: exampleLink,
          },
          {
            label: 'Use other telephone options',
            ariaLabel: 'Link to other telephone options',
            href: exampleLink,
          },
          {
            label: 'Write us via our contact form',
            ariaLabel: 'Link to our contact form',
            href: exampleLink,
          },
          {
            label: 'Meet us at a local EU office',
            ariaLabel: 'Link to local EU offices',
            href: exampleLink,
          },
        ],
      },
      {
        title: 'Social media',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Search for EU social media channels',
            ariaLabel: 'Link EU social media channels',
            href: exampleLink,
          },
        ],
      },
      {
        title: 'Legal',
        titleClassName: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Language policy',
            ariaLabel: 'Link to language policy',
            href: exampleLink,
          },
          {
            label: 'Privacy policy',
            ariaLabel: 'Link to privacy policy',
            href: exampleLink,
          },
          {
            label: 'Legal notice',
            ariaLabel: 'Link to legal notice',
            href: exampleLink,
          },
          {
            label: 'Cookies',
            ariaLabel: 'Link to Cookies',
            href: exampleLink,
          },
        ],
      },
    ],
    legalNavigation: {
      title: 'EU institutions',
      titleClassName: 'ecl-footer-standardised__title--separator',
      links: [
        {
          label: 'European Parliament',
          ariaLabel: 'Link to local European Parliament',
          href: exampleLink,
        },
        {
          label: 'European Council',
          ariaLabel: 'Link to European Council',
          href: exampleLink,
        },
        {
          label: 'Council of the European Union',
          ariaLabel: 'Link to Council of the European Council',
          href: exampleLink,
        },
        {
          label: 'European Commission',
          ariaLabel: 'Link to European Commission',
          href: exampleLink,
        },
        {
          label: 'Court of Justice of the European Union',
          ariaLabel: 'Link to Court of Justice of the European Union',
          href: exampleLink,
        },
        {
          label: 'European Central Bank',
          ariaLabel: 'Link to European Central Bank',
          href: exampleLink,
        },
        {
          label: 'European Court of Auditors',
          ariaLabel: 'Link European Court of Auditors',
          href: exampleLink,
        },
        {
          label: 'European External Action Service',
          ariaLabel: 'Link to European External Service',
          href: exampleLink,
        },
        {
          label: 'European Economic and Social Committee',
          ariaLabel: 'Link to European Economic and Social Committee',
          href: exampleLink,
        },
        {
          label: 'European Committee of the Region',
          ariaLabel: 'Link to European Committee of the Region',
          href: exampleLink,
        },
        {
          label: 'European Investment Bank',
          ariaLabel: 'Link to European Investment Bank',
          href: exampleLink,
        },
        {
          label: 'European Ombudsman',
          ariaLabel: 'Link Ombudsman',
          href: exampleLink,
        },
        {
          label: 'European Data Protection Supervisor',
          ariaLabel: 'Link to European Data Protection Supervisor',
          href: exampleLink,
        },
        {
          label: 'European Data Protection Board',
          ariaLabel: 'Link to European Data Protection Board',
          href: exampleLink,
        },
        {
          label: 'European Personnel Selection Office',
          ariaLabel: 'Link to European Personnel Selection Office',
          href: exampleLink,
        },
        {
          label: 'Publications Office of the European Union',
          ariaLabel: 'Link to Publications Office of the Union',
          href: exampleLink,
        },
        {
          label: 'Agencies',
          ariaLabel: 'Link to Agencies',
          href: exampleLink,
        },
      ],
    },
  },
};
