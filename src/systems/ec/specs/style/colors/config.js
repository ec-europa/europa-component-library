import usage from './docs/usage.md';

export default {
  order: 1,
  url: '/ec/style/colors',
  title: 'Colors',
  section: 'Style',
  tabs: [
    {
      name: 'Palette',
      component: usage,
      url: 'palette',
    },
  ],
  defaultTab: 'palette',
};
