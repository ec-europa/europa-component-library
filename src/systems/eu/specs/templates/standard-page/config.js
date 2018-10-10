import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  order: 1,
  title: 'Standard Page',
  section: 'Templates',
  tabs: [
    {
      name: 'Usage',
      component: usage,
      url: 'usage',
    },
    {
      name: 'Showcase',
      component: code,
      url: 'showcase',
    },
  ],
  defaultTab: 'usage',
};
