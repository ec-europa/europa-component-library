const data = require('@ecl/generic-component-social-icon/data/demo')('ec');

const variants = [];
data.forEach(element => {
  variants.push({
    name: element.variant,
    context: {
      variant: element.variant,
      label: element.label,
      icon: element.icon,
      icon_hover: element.icon_hover,
      link: {
        href: '../../example.html#',
        label: element.label,
      },
    },
  });
  variants.push({
    name: element.variant,
    context: element,
  });
});

module.exports = {
  title: 'Social icons',
  label: 'Social icons',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start demo of: @${item.handle} -->\n
      <div style="width: 50%; float: left">${markup}</div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'arto',
  variants,
};
