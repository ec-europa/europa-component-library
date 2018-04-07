module.exports = {
  title: 'Featured items',
  label: 'Featured items',
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
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Featured item',
      context: {
        image: {
          src: '../../assets/demo_images/technics-demo-1.jpg',
          alt: 'Technic picture',
        },
        link: {
          href: 'https://example.com/featured-item-1',
          label: 'See more',
        },
        metas: ['announcement', '21 December 2016'],
        title: 'Energy Union tour',
      },
    },
    {
      name: 'extended',
      label: 'Featured item extended',
      context: {
        variant: 'extended',
        image: {
          src: '../../assets/demo_images/technics-demo-1.jpg',
          alt: 'Technic picture',
        },
        metas: ['announcement', '21 December 2016'],
        title: 'Energy Union tour',
        link: {
          href: 'https://example.com/featured-item-2',
          label: 'See more',
        },
      },
    },
  ],
};
