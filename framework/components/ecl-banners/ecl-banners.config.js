module.exports = {
  title: 'Banners',
  label: 'Banners',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'background',
  variants: [
    {
      name: 'background',
      label: 'Background banner',
      context: {
        modifier: 'background',
        src: 'http://lorempixel.com/1600/370/abstract/8',
        title: {
          label: 'White Paper on the future of Europe',
          href: '#',
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      },
    },
    {
      name: 'quote',
      label: 'Quote banner',
      context: {
        modifier: 'quote',
      },
    },
    {
      name: 'video',
      label: 'Video banner',
      context: {
        modifier: 'video',
      },
    },
  ],
};
