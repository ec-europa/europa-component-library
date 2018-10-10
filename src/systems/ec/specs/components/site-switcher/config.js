import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  title: 'Site switcher',
  section: 'Components/Global elements',
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
