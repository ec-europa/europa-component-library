import a11y from './docs/accessibility.md';
import code from './docs/code.md';

export default {
  url: '/ec/components/button',
  title: 'Button',
  section: 'Components',
  tabs: [
    {
      name: 'Code',
      component: code,
      url: 'code',
    },
    {
      name: 'Accessibility',
      component: a11y,
      url: 'a11y',
    },
  ],
  defaultTab: 'a11y',
};
