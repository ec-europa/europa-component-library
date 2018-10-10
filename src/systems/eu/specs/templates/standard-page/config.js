import style from './docs/style.md';
import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  url: '/eu/templates/standard-page',
  title: 'EU Standard page',
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
    {
      name: 'Style',
      component: style,
      url: 'style',
    },
  ],
  defaultTab: 'usage',
};
