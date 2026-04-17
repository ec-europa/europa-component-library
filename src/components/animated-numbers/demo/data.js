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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: {
        name: 'trend-up',
        family: 'phosphor',
      },
      prefix: 'billion',
      value: '975',
      suffix: '<',
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
      value: '50',
      suffix: 'trillions',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'atom',
        family: 'phosphor',
      },
      prefix: '€',
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
      value: '8765',
      suffix: 'billions',
      description: 'Integer pharetra lacinia tristique',
    },
  ],
};
