import style from './docs/style.md';
import a11y from './docs/accessibility.md';
import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  order: 4,
  url: '/ec/style/image',
  title: 'Image use',
  section: 'Style',
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
    {
      name: 'Accessibility',
      component: a11y,
      url: 'a11y',
    },
  ],
  defaultTab: 'usage',
};
