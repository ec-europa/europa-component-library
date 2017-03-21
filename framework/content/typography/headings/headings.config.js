module.exports = {
  title: 'Headings',
  label: 'Headings',
  status: 'planned',
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<p>\n${markup}\n</p>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'h1',
  variants: [{
    name: 'h1',
    label: 'h1',
    context: {
      modifier: 'h1',
    },
  }, {
    name: 'h2',
    label: 'h2',
    context: {
      modifier: 'h2',
    },
  }, {
    name: 'h3',
    label: 'h3',
    context: {
      modifier: 'h3',
    },
  }, {
    name: 'h4',
    label: 'h4',
    context: {
      modifier: 'h4',
    },
  }, {
    name: 'h5',
    label: 'h5',
    context: {
      modifier: 'h5',
    },
  }, {
    name: 'h6',
    label: 'h6',
    context: {
      modifier: 'h6',
    },
  }],
};
