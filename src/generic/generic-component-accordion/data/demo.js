module.exports = function context(system) {
  const c = {
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
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'growth',
            size: 'xs',
          },
          level: 2,
        },
        body:
          '<p class="ecl-paragraph">Bullfights. Bull hockey. Do you like this? The bull is stabbed, prodded, beaten. The bull is wounded. The bull is tired before the matador ever steps into the ring. Now, is that victory? Of course it is. Wanna know the secret to winning? Creative sportsmanship. In other words, one has to rig the game.</p>',
      },
      {
        id: 'pan2',
        heading: {
          title: 'Energy Union',
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'energy',
            size: 'xs',
          },
          level: 2,
        },
        body:
          '<p class="ecl-paragraph">Bullfights. Bull hockey. Do you like this? The bull is stabbed, prodded, beaten. The bull is wounded. The bull is tired before the matador ever steps into the ring. Now, is that victory? Of course it is. Wanna know the secret to winning? Creative sportsmanship. In other words, one has to rig the game.</p>',
      },
    ],
  };

  return c;
};
