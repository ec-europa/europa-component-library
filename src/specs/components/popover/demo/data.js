// Simple content for demo
const { loremIpsum } = require('lorem-ipsum');

const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;
const lorem = loremIpsum({ count: 2 });

module.exports = {
  id: 'popover-example',
  toggle: {
    link: {
      label: 'Popover',
      path: exampleLink,
      type: 'standalone',
      aria_label: 'Popover toggle',
      icon_position: 'before',
    },
    icon: {
      path: '/icons.svg',
      name: 'share',
      size: 'm',
    },
  },
  content: lorem,
};
