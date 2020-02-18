import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  colorSecondary: '#004494',
  appBorderRadius: 0,
  inputBorderRadius: 0,
  brandTitle: 'ECL v2 - EU',
  brandUrl: 'https://github.com/ec-europa/europa-component-library',
  brandImage: null,
});

addons.setConfig({
  theme,
  sidebarAnimations: false,
  panelPosition: 'right',
});
