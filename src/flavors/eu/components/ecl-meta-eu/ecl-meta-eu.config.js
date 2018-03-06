module.exports = {
  title: 'Meta',
  label: 'Meta',
  status: 'ready',
  tags: ['atom'],
  collator(markup, item) {
    return `<!-- Start: @${
      item.handle
    } -->\n<h3 class="ecl-heading ecl-heading--h3">${
      item.label
    }</h3>\n${markup}\n<!-- End: @${item.handle} -->\n`;
  },
  collated: true,
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default meta',
      context: {
        metas: ['news article', '17 September 2014'],
      },
    },
    {
      name: 'header',
      label: 'Header meta',
      context: {
        variant: 'header',
        metas: ['news article', '17 September 2014'],
      },
    },
  ],
};
