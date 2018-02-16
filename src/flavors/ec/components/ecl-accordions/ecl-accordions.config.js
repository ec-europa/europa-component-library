module.exports = {
  title: 'Accordions',
  label: 'Accordions',
  status: 'ready',
  tags: ['organism'],
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.accordions();
      });`,
    },
    panels: [
      {
        id: 'pan1',
        isExpanded: true,
        heading: {
          title:
            'Jobs, Growth, Investment and Competitiveness with an additional quite long string',
          icon: 'growth',
        },
        body:
          '<p>Bullfights. Bull hockey. Do you like this? The bull is stabbed, prodded, beaten. The bull is wounded. The bull is tired before the matador ever steps into the ring. Now, is that victory? Of course it is. Wanna know the secret to winning? Creative sportsmanship. In other words, one has to rig the game.</p>',
      },
      {
        id: 'pan2',
        heading: {
          title: 'Energy Union',
          icon: 'energy',
        },
        body:
          '<p>Bullfights. Bull hockey. Do you like this? The bull is stabbed, prodded, beaten. The bull is wounded. The bull is tired before the matador ever steps into the ring. Now, is that victory? Of course it is. Wanna know the secret to winning? Creative sportsmanship. In other words, one has to rig the game.</p>',
      },
    ],
  },
};
