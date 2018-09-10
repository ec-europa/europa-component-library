import style from './docs/style.md';
import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  url: '/ec/components/card',
  title: 'Card',
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
    {
      name: 'Style',
      component: style,
      url: 'style',
    },
  ],
  defaultTab: 'usage',
};
