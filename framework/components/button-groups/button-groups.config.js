module.exports = {
  title: 'Button groups',
  label: 'Button groups',
  status: 'planned',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<h2>${item.label}\n</h2>\n${markup}\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [{
    name: 'two-cols',
    label: 'Two column button block',
    context: {
      modifier_class: 'btn-group-row-two',
    },
  }],
};
