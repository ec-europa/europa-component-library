const buttonVariants = require('../variants.json');

const variants = [];

buttonVariants.forEach(v => {
  variants.push(
    Object.assign({}, v, {
      context: Object.assign({}, v.context, {
        label: 'Link button',
        to: '#',
      }),
    })
  );

  variants.push(
    Object.assign({}, v, {
      context: Object.assign({}, v.context, {
        label: 'External link button',
        to: 'http://example.com',
      }),
    })
  );
});

module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'broken',
  handle: 'ecl-buttons-links',
  collated: true,
  variants,
};
