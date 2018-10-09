import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  title: 'Footer',
  section: 'Components/Global elements',
  ready: true,
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
