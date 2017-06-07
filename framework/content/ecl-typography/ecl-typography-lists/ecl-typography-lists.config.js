module.exports = {
  title: 'Rich Text Lists',
  label: 'Rich Text Lists',
  status: 'ready',
  order: 4,
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<h3 class="ecl-heading ecl-heading--h3">${item.label}</h3>\n${markup}\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'unordered',
      label: 'Unordered list',
    },
    {
      name: 'ordered',
      label: 'Ordered list',
    },
  ],
  default: 'unordered',
};
