// Simple content for demo
const svgSprite = require('@ecl/ec-resources/dist/icons.svg');

module.exports = {
  title: 'EU Budget for the future (image)',
  description:
    'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
  button: {
    variant: 'call',
    label: 'Subscribe',
    icon: {
      icon: 'Icon_Corner-arrow-right',
      iconPath: svgSprite,
      size: 'xs',
    },
  },
  image:
    'https://ec.europa.eu/education/sites/education/files/jean-monnet-gs-banner.jpg',
  centered: true,
};
