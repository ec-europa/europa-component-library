const colors = require('./colors.json');

const variants = Object.keys(colors).map(k => ({
  name: k,
  context: {
    code: colors[k],
    color: colors[colors[k]] ? colors[colors[k]] : colors[k],
    name: k,
  },
}));

module.exports = {
  title: 'Colors',
  label: 'Colors',
  status: 'wip',
  preview: '@preview-palettes',
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<li class="palette">\n${markup}\n</li>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'black',
  variants,
};
