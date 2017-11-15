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
  default: 'quote',
  variants: [
    {
      name: 'quote',
      label: 'Quote banner',
      context: {
        type: 'quote',
        quote: {
          body: `
            Nullam eget gravida sapien. Curabitur nec ligula varius tellus blandit auctor in non felis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Pellentesque in volutpat eros, ut fringilla tortor.
          `,
          author: 'President Juncker',
        },
      },
    },
  ],
};
