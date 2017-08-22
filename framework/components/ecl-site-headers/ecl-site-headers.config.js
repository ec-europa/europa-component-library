module.exports = {
  title: 'Site headers',
  label: 'Site headers',
  status: 'ready',
  tags: ['organism'],
  context: {
    site_switcher: {
      political: { href: '#', label: 'Commission and its priorities' },
      info: {
        href: '#',
        label: 'Policies, information and services',
        is_active: true,
      },
    },
    user_menu: {
      title: 'User menu',
      links: [
        { href: '#', label: 'My workbench' },
        { href: '#', label: 'My account' },
        { href: '#', label: 'Log out' },
      ],
    },
  },
};
