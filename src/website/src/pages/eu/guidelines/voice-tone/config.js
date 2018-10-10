import color from './docs/color.md';
import keyboard from './docs/keyboard.md';

export default {
  order: 2,
  title: 'Voice/Tone',
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
