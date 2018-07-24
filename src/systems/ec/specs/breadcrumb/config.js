import a11y from './docs/accessibility.mdx';
import code from './docs/code.mdx';
import usage from './docs/usage.mdx';
import style from './docs/style.mdx';

export default {
  url: '/ec/components/breadcrumb',
  title: 'Breadcrumb',
  section: 'Components',
  tabs: [
    {
      name: 'Accessibility',
      component: a11y,
      url: 'a11y',
    },
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
  defaultTab: 'a11y',
};
