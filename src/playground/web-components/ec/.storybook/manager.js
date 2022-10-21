import { addons } from '@storybook/addons';
import browserUpdate from 'browser-update';
import { create } from '@storybook/theming';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: create({
    base: 'light',
    brandTitle: `ECL v3 EC`,
    brandUrl: 'https://github.com/ec-europa/europa-component-library',
    brandImage: undefined,
  }),
  selectedPanel: 'controls',
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
  },
});
