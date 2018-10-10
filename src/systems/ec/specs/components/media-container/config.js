import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  url: '/ec/components/media-container',
  title: 'Media container',
  section: 'Components/Media',
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
  ],
  defaultTab: 'usage',
};
