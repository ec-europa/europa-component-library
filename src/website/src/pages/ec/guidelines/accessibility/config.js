import color from './docs/color.md';
import keyboard from './docs/keyboard.md';

export default {
  hidden: true,
  order: 3,
  title: 'Accessibility',
  section: 'Guidelines',
  tabs: [
    {
      name: 'Color',
      component: color,
      url: 'color',
    },
    {
      name: 'Keyboard',
      component: keyboard,
      url: 'keyboard',
    },
  ],
  defaultTab: 'color',
};
