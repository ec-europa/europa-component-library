const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  with_background: false,
  border: false,
  counter_color: true,
  sources_label: 'Sources:',
  sources: [
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'DG CNECT',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
  ],
  items: [
    {
      category: 'Revenue',
      icon: {
        name: 'users',
        family: 'phosphor',
      },
      prefix: '',
      value: '213',
      suffix: '€',
      suffix_label: 'euro',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      category: 'Revenue',
      icon: {
        name: 'currency-eur',
        family: 'phosphor',
      },
      prefix: 'billion',
      value: '888.2',
      suffix: '€',
      suffix_label: 'euro',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      category: 'Revenue',
      icon: {
        name: 'trend-up',
        family: 'phosphor',
      },
      prefix: 'M',
      prefix_label: 'million',
      value: '975',
      suffix: '<',
      suffix_label: 'less than',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'pulse',
        family: 'phosphor',
      },
      prefix: '€',
      prefix_label: 'euro',
      value: '1250',
      suffix: 'billions',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'aperture',
        family: 'phosphor',
      },
      prefix: '€',
      prefix_label: 'euro',
      value: '50',
      suffix: 'trillions',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'atom',
        family: 'phosphor',
      },
      prefix: '€',
      prefix_label: 'euro',
      value: '4350',
      suffix: 'millions',
      description: 'Curabitur ut mauris quam. Fusce non consequat ipsum',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'bell-simple',
        family: 'phosphor',
      },
      prefix: '€',
      prefix_label: 'euro',
      value: '125',
      suffix: 'billions',
      description: 'Curabitur ut mauris quam. Fusce non consequat ipsum',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'boat',
        family: 'phosphor',
      },
      prefix: '€',
      prefix_label: 'euro',
      value: '8765',
      suffix: 'billions',
      description: 'Integer pharetra lacinia tristique',
    },
  ],
};
