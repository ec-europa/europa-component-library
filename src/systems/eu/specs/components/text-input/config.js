import code from './docs/code.mdx';
import usage from './docs/usage.md';

export default {
  ready: true,
  title: 'Text input',
  section: 'Components/Forms',
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
