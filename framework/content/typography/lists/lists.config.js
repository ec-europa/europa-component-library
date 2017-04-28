module.exports = {
  title: 'Lists',
  label: 'Lists',
  status: 'ready',
  collated: true,
  default: 'ul_ul',
  variants: [{
    name: 'ul_ul',
    label: 'Lists: ul > li > ul > li',
    context: {
      element_l1: 'ul',
      element_l2: 'ul',
    },
  }, {
    name: 'ul_ol',
    label: 'Lists: ul > li > ol > li',
    context: {
      element_l1: 'ul',
      element_l2: 'ol',
    },
  }, {
    name: 'ol_ul',
    label: 'Lists: ol > li > ul > li',
    context: {
      element_l1: 'ol',
      element_l2: 'ul',
    },
  }, {
    name: 'ol_ol',
    label: 'Lists: ol > li > ol > li',
    context: {
      element_l1: 'ol',
      element_l2: 'ol',
    },
  }],
};
