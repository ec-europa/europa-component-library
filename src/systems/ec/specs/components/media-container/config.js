import style from './docs/style.md';
import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  ready: true,
  url: '/ec/components/media-container',
  title: 'Media container',
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
