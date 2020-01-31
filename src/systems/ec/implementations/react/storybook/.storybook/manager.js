import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  colorSecondary: '#004494',
  appBorderRadius: 0,
  inputBorderRadius: 0,
  brandTitle: 'ECL v2 - EC',
  brandUrl: 'https://github.com/ec-europa/europa-component-library',
  brandImage: null,
});

const storySort = (a, b) => {
  const aParentKind = a[1].kind.split('|').shift();
  const aKind = a[1].kind
    .split('|')
    .slice(1)
    .join('|');
  const bParentKind = b[1].kind.split('|').shift();
  const bKind = b[1].kind
    .split('|')
    .slice(1)
    .join('|');

  return aParentKind !== bParentKind
    ? 0
    : aKind.localeCompare(bKind, { numeric: true });
};

addons.setConfig({
  theme,
  storySort,
  sidebarAnimations: false,
  panelPosition: 'right',
});
