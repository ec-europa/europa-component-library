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
          src: 'http://lorempixel.com/720/480/technics/4',
          alt: 'Technic picture',
        },
        meta: {
          type: 'announcement',
          date: '21 December 2016',
        },
        title: 'Energy Union tour',
      },
    },
    {
      name: 'extended',
      label: 'Featured item extended',
      context: {
        variant: 'extended',
        image: {
          src: 'http://lorempixel.com/720/480/technics/4',
          alt: 'Technic picture',
        },
        meta: {
          type: 'announcement',
          date: '21 December 2016',
        },
        title: 'Energy Union tour',
        link: {
          href: '#',
          label: 'See more',
        },
      },
    },
  ],
};
