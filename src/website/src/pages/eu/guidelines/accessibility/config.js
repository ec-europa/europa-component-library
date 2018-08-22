import color from './docs/color.md';
import keyboard from './docs/keyboard.md';

export default {
  order: 3,
  url: '/eu/guidelines/accessibility',
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
