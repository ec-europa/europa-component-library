const iconVariants = require('../variants-icons.json');

const variants = [];

iconVariants.forEach((i) => {
  variants.push(Object.assign({}, i, {
    name: i.name,
    context: Object.assign({}, i.context, {
      label: i.context.label,
      icon: i.context.icon,
      modifier: 'default',
    }),
  }));
});

module.exports = {
  title: 'With icon',
  label: 'With icon',
  status: 'wip',
  collated: true,
  context: {
    label: 'Button with icon',
  },
  variants,
  default: 'arrow-down',
};
