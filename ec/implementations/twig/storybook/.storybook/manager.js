import { addons } from '@storybook/addons';
import browserUpdate from 'browser-update';
import { create } from '@storybook/theming';
import { version } from '../../../../lerna.json';

const system = process.env.STORYBOOK_SYSTEM
  ? process.env.STORYBOOK_SYSTEM
  : 'EC';

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
    brandTitle: `ECL-Twig ${system} v${version}`,
    brandUrl: 'https://github.com/ec-europa/ecl-twig',
    brandImage: undefined,
  }),
  selectedPanel: 'notes',
  initialActive: 'sidebar',
  showRoots: false,
});

browserUpdate({
  required: {
    i: 999,
    e: 79,
    f: -4,
    c: -4,
    s: -2,
  },
  text: {
    msg:
      'This websites uses <a href="http://storybook.js.org" title="storybook ui">storybook<a> which doesn\'t fully support <b>{brow_name}</b>.',
    msgmore:
      '(supported browsers are: chrome latest 5, firefox latest 5, safari latest 3, Edge latest 5)',
  },
  text_for_i: {
    msg: 'Sorry, Internet Explorer is not supported on this website.',
    msgmore: '',
  },
  text_for_e: {
    msg:
      'Sorry, Microsoft Edge is only supported starting from version 79 on this website.',
    msgmore: '',
  },
  noclose: false,
  no_permanent_hide: false,
});
