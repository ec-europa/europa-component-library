module.exports = {
  title: 'Footers',
  label: 'Footers',
  status: 'wip',
  tags: ['organism'],
  collated: false,
  context: {
    custom: null,
    elements: {
      column: 'footer__column',
      menu: 'footer__menu',
      title: 'footer__title',
      label: 'footer__label',
      menu_item: 'footer__menu-item',
    },
  },
  variants: [
    {
      name: 'default',
      label: 'Corporate Footer',
    },
    {
      name: 'custom',
      label: 'Optional custom footer',
      context: {
        modifier: 'footer--custom',
        site_name: 'Digital Single Market',
        custom: true,
      },
    },
  ],
};
