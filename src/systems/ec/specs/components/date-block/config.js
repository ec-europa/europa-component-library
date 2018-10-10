import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  title: 'Date block',
  section: 'Components',
  status: 'wip',
  tabs: [
    {
      name: 'Usage',
      component: usage,
      url: 'usage',
    },
    {
      name: 'Showcase',
      component: code,
      url: 'code',
    },
  ],
  defaultTab: 'usage',
};
