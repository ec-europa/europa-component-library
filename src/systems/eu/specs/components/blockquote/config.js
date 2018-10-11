import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  status: 'ready',
  title: 'Blockquotes',
  section: 'Components',
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
