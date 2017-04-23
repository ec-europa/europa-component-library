module.exports = {
  title: 'Teasers',
  label: 'Teasers',
  status: 'planned',
  collated: false,
  variants: [{
    name: 'cta',
    label: 'Listing CTA',
    context: {
      modifier: 'listing--cta',
    },
  },
  {
    name: 'no-padding',
    label: 'Listing no padding',
    context: {
      modifier: 'listing--no-padding',
    },
  },
  {
    name: 'short-spaced',
    label: 'Listing short spaced',
    context: {
      modifier: 'listing--short-spaced',
    },
  },
  {
    name: 'line-left',
    label: 'Listing line left',
    context: {
      modifier: 'listing--line-left',
    },
  },
  {
    name: 'no-border',
    label: 'Listing with no border',
    context: {
      modifier: 'listing--no-border',
    },
  },
  {
    name: 'nostripe',
    label: 'Listing with no stripe',
    context: {
      modifier: 'listing--nostripe',
    },
  },
  {
    name: 'meta',
    label: 'Listing meta',
    context: {
      modifier: 'listing--meta',
    },
  }],
};
