import colour from './docs/colour.md';
import keyboard from './docs/keyboard.md';

export default {
  hidden: true,
  order: 3,
  title: 'Accessibility',
  section: 'Guidelines',
  tabs: [
    {
      name: 'Color',
      component: colour,
      url: 'colour',
    },
    {
      name: 'Keyboard',
      component: keyboard,
      url: 'keyboard',
    },
  ],
  defaultTab: 'colour',
};
