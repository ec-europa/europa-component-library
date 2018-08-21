import usage from './docs/usage.md';

export default {
  order: 1,
  url: '/ec/style/colors',
  title: 'Colors',
  section: 'Style',
  tabs: [
    {
      name: 'Usage',
      component: usage,
      url: 'usage',
    },
  ],
  defaultTab: 'usage',
};
