import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  title: 'Breadcrumb',
  section: 'Components',
  group: 'Navigation',
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
