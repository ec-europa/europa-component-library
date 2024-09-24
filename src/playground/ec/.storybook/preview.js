import { withCssResources } from '@storybook/addon-cssresources';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Buffer } from 'buffer';
import { themes } from '@storybook/theming';

global.Buffer = Buffer;

import './ECL';

export const parameters = {
  disableSaveFromUI: true,
  a11y: {
    element: '#storybook-root',
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
    manual: false,
  },
  darkMode: {
    current: { ...themes.light },
    dark: { ...themes.dark },
  },
  docs: {
    canvas: { sourceState: 'shown' },
  },
  viewMode: 'story',
  cssresources: [
    {
      id: 'ecl-reset',
      code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-reset.css" />`,
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-ec-default',
      code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-ec-default.css" />`,
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-ec',
      code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-ec.css" />`,
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-ec-utilities',
      code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-ec-utilities.css" />`,
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-rtl',
      code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-rtl.css" />`,
      picked: false,
      hideCode: true,
    },
    {
      id: 'ecl-ec-print',
      code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-ec-print.css" />`,
      picked: false,
      hideCode: true,
    },
    {
      id: 'ecl-ec-default-print',
      code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-ec-default-print.css" />`,
      picked: false,
      hideCode: true,
    },
  ],
  controls: { expanded: true },
  layout: 'padded',
  viewport: {
    defaultViewport: 'responsive',
    viewports: {
      responsive: {
        name: 'responsive',
        styles: {
          width: '100%',
          height: '100%',
          border: 0,
          margin: 0,
          boxShadow: 'none',
          borderRadius: 0,
          position: 'absolute',
        },
      },
      ...INITIAL_VIEWPORTS,
      '1366x768': {
        name: '1366x768',
        styles: {
          width: '1366px',
          height: '768px',
        },
        type: 'desktop',
      },
      '1920x1080': {
        name: '1920x1080',
        styles: {
          width: '1920px',
          height: '1080px',
        },
        type: 'desktop',
      },
    },
  },
};

export const decorators = [withCssResources];

export const loaders = [
  async ({ args, originalStoryFn }) => {
    if (originalStoryFn.render) {
      const component = await originalStoryFn.render(args);
      return { component };
    }
  },
];
