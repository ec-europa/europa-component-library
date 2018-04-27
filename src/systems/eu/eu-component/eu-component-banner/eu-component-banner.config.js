// Load context from generic component
const hero = require('@ecl/generic-component-banner/data/demo--hero');
const video = require('@ecl/generic-component-banner/data/demo--video');

module.exports = {
  title: 'Banners',
  label: 'Banners',
  status: 'ready',
  tags: ['molecule'],
  variants: [
    {
      name: 'hero',
      context: hero,
    },
    {
      name: 'video',
      context: video,
    },
  ],
  default: 'hero',
};
