// Load context from generic component
const hero = require('@ecl/generic-component-banner/context/hero');
const video = require('@ecl/generic-component-banner/context/video');

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
