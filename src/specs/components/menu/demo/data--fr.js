// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Menu',
  close: 'Fermer',
  back: 'Retour',
  site_name: 'Nom du site',
  menu_link: exampleLink,
  icon_path: '/icons.svg',
  items: [
    { label: 'Accueil', path: exampleLink },
    {
      label: 'Item 2 titre',
      path: exampleLink,
      is_current: true,
      children: [
        { label: 'Item 2.1', path: exampleLink },
        { label: 'Item 2.2', path: exampleLink },
        { label: 'Item 2.3', path: exampleLink, is_current: true },
        { label: 'Item 2.4', path: exampleLink },
        { label: 'Item 2.5', path: exampleLink },
        { label: 'Item 2.6', path: exampleLink },
        { label: 'Item 2.7', path: exampleLink },
      ],
    },
    {
      label: 'Item 3 avec un très long titre',
      path: exampleLink,
      children: [
        { label: 'Item 3.1', path: exampleLink },
        { label: 'Item 3.2', path: exampleLink },
        { label: 'Item 3.3', path: exampleLink },
      ],
    },
    {
      label: 'Item 4 titre',
      path: exampleLink,
      children: [
        { label: 'Item 4.1', path: exampleLink },
        { label: 'Item 4.2', path: exampleLink },
        {
          label: 'Item 4.3 avec un long titre sur plusieurs lignes',
          path: exampleLink,
        },
        { label: 'Item 4.4', path: exampleLink },
        { label: 'Item 4.5', path: exampleLink },
        { label: 'Item 4.6', path: exampleLink },
        { label: 'Item 4.7', path: exampleLink },
        { label: 'Item 4.8', path: exampleLink },
        { label: 'Item 4.9', path: exampleLink },
        { label: 'Item 4.10', path: exampleLink },
        { label: 'Item 4.11', path: exampleLink },
        { label: 'Item 4.12', path: exampleLink },
        { label: 'Item 4.13', path: exampleLink },
        { label: 'Item 4.14', path: exampleLink },
      ],
    },
    {
      label: 'Item 5 titre',
      path: exampleLink,
      children: [
        { label: 'Item 5.1', path: exampleLink },
        { label: 'Item 5.2', path: exampleLink },
        { label: 'Item 5.3', path: exampleLink },
        { label: 'Item 5.4', path: exampleLink },
      ],
    },
    {
      label: 'Item 6 titre',
      path: exampleLink,
      children: [
        { label: 'Item 6.1', path: exampleLink },
        { label: 'Item 6.2', path: exampleLink },
        { label: 'Item 6.3', path: exampleLink },
        { label: 'Item 6.4', path: exampleLink },
        { label: 'Item 6.5', path: exampleLink },
        { label: 'Item 6.6', path: exampleLink },
        { label: 'Item 6.7', path: exampleLink },
        { label: 'Item 6.8', path: exampleLink },
        { label: 'Item 6.9 avec un long titre', path: exampleLink },
        { label: 'Item 6.10', path: exampleLink },
        { label: 'Item 6.11', path: exampleLink },
        { label: 'Item 6.12', path: exampleLink },
        { label: 'Item 6.13', path: exampleLink },
        { label: 'Item 6.14', path: exampleLink },
        { label: 'Item 6.15', path: exampleLink },
        { label: 'Item 6.16', path: exampleLink },
      ],
    },
    {
      label: 'Item 7 titre',
      path: exampleLink,
      children: [
        { label: 'Item 7.1', path: exampleLink },
        { label: 'Item 7.2', path: exampleLink },
        { label: 'Item 7.3', path: exampleLink },
        { label: 'Item 7.4', path: exampleLink },
        { label: 'Item 7.5', path: exampleLink },
        { label: 'Item 7.6', path: exampleLink },
        { label: 'Item 7.7', path: exampleLink },
        { label: 'Item 7.8', path: exampleLink },
        { label: 'Item 7.9', path: exampleLink },
        { label: 'Item 7.10', path: exampleLink },
      ],
    },
  ],
};
