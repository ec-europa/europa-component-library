const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  inverted: false,
  border: false,
  counter_color: true,
  sources: [
    {
      name: 'Eurostat',
      url: exampleLink,
    },
    {
      name: 'DG CNECT',
      url: exampleLink,
    },
    {
      name: 'Eurostat',
      url: exampleLink,
    },
  ],
  items: [
    {
      category: 'Revenue',
      icon: {
        name: 'users',
        family: 'phosphor',
      },
      amount: '',
      value: '213',
      currency: '€',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'currency-eur',
        family: 'phosphor',
      },
      amount: 'billion',
      value: '888.2',
      currency: '€',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: {
        name: 'trend-up',
        family: 'phosphor',
      },
      amount: 'billion',
      value: '975',
      currency: '<',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'pulse',
        family: 'phosphor',
      },
      amount: '€',
      value: '1250',
      currency: 'billions',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
  ],
};
