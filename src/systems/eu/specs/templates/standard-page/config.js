import style from './docs/style.md';
import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  order: 1,
  url: '/eu/templates/standard-page',
  title: 'Standard Page',
  section: 'Templates',
  tabs: [
    {
      name: 'Usage',
      component: usage,
      url: 'usage',
    },
    {
      name: 'Code',
      component: code,
      url: 'code',
    },
    {
      name: 'Style',
      component: style,
      url: 'style',
    },
  ],
  defaultTab: 'usage',
};
