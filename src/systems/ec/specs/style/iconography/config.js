import library from './docs/library.md';
import usage from './docs/usage.md';

export default {
  order: 2,
  url: '/ec/style/iconography',
  title: 'Iconography',
  section: 'Style',
  tabs: [
    {
      name: 'Library',
      component: library,
      url: 'library',
    },
    {
      name: 'Usage',
      component: usage,
      url: 'usage',
    },
  ],
  defaultTab: 'library',
};
