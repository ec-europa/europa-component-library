import code from './docs/code.md';
import usage from './docs/usage.md';

export default {
  title: 'Inpage navigation',
  section: 'Components/Navigation',
  status: 'planned',
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
