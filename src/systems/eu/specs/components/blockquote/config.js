import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  ready: true,
  title: 'Blockquote',
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
