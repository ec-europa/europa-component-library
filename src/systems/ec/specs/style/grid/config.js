import usage from './docs/usage.md';

export default {
  order: 3,
  url: '/ec/style/grid',
  title: 'Grid',
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
