import color from './docs/color.md';
import keyboard from './docs/keyboard.md';

export default {
  order: 1,
  title: 'IPG',
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
