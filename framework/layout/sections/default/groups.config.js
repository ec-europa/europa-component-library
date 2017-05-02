module.exports = {
  title: 'Groups',
  label: 'Groups',
  status: 'planned',
  default: 'grey',
  order: 4,
  variants: [{
    name: 'grey',
    label: 'Grey',
    title: 'Highlighted section group element in grey',
    context: {
      modifier_class: 'section__group--highlight-grey',
    },
  }, {
    name: 'light-grey',
    label: 'Light grey',
    title: 'Highlighted section group element in light grey',
    context: {
      modifier_class: 'section__group--highlight-grey-lightest',
    },
  }, {
    name: 'yellow',
    label: 'Yellow',
    title: 'Highlighted section group element  in yellow',
    context: {
      modifier_class: 'section__group--highlight-yellow',
    },
  }, {
    name: 'no-margin',
    label: 'No margin',
    title: 'Section group with no margins',
    context: {
      modifier_class: 'section__group--no-margin',
    },
  }],
};
