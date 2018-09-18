import library from './docs/library.md';

export default {
  order: 2,
  url: '/eu/style/iconography',
  title: 'Iconography',
  section: 'Style',
  tabs: [
    {
      name: 'Library',
      component: library,
      url: 'library',
    },
  ],
  defaultTab: 'library',
};
