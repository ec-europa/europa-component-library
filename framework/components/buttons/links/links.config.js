const buttonVariants = require('../variants.json');

const variants = [];

buttonVariants.forEach((v) => {
  variants.push(Object.assign({}, v, {
    name: `${v.name}-internal`,
    label: `${v.label} (internal)`,
    context: Object.assign({}, v.context, {
      label: 'Link button',
      to: '#',
    }),
  }));

  variants.push(Object.assign({}, v, {
    name: `${v.name}-external`,
    label: `${v.label} (external)`,
    context: Object.assign({}, v.context, {
      label: 'External link button',
      to: 'http://example.com',
    }),
  }));
});

module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'wip',
  collated: true,
  variants,
};
