import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  hidden: true,
  order: 1,
  title: 'Standard template',
  section: 'Templates',
  status: 'ready',
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
