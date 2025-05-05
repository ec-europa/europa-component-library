import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Buffer } from 'buffer';
import { themes } from '@storybook/theming';
import { useChannel } from '@storybook/preview-api';
import { toggleStyle, TOGGLE_STYLE } from '@ecl/storybook-addon-styles';

import './ECL';

global.Buffer = Buffer;

const styleSheets = [
  {
    id: 'ecl-reset',
    href: './styles/optional/ecl-reset.css',
    picked: true,
    group: 'others',
  },
  {
    id: 'ecl-eu-default',
    href: './styles/optional/ecl-eu-default.css',
    picked: true,
    group: 'screen',
  },
  { id: 'ecl-eu', href: './styles/ecl-eu.css', picked: true, group: 'screen' },
  {
    id: 'ecl-eu-color-modes',
    href: './styles/ecl-eu-color-modes.css',
    picked: true,
    group: 'others',
  },
  {
    id: 'ecl-eu-utilities',
    href: './styles/optional/ecl-eu-utilities.css',
    picked: true,
    group: 'others',
  },
  {
    id: 'ecl-rtl',
    href: './styles/optional/ecl-rtl.css',
    picked: false,
    group: 'others',
  },
  {
    id: 'ecl-eu-default-print',
    href: './styles/optional/ecl-eu-default-print.css',
    picked: false,
    group: 'print',
  },
  {
    id: 'ecl-eu-print',
    href: './styles/ecl-eu-print.css',
    picked: false,
    group: 'print',
  },
];

export const initialGlobals = {
  styleSheets,
  panelDescription:
    'Here you can choose the ECL styles to be used in this demo, you can toggle styles for the screen, the print, or single stylesheets.',
  panelTitle: 'ECL styles',
};

export const decorators = [
  (story) => {
    useChannel({
      [TOGGLE_STYLE]: ({ key, enabled }) =>
        toggleStyle(key, enabled, styleSheets),
    });

    // Initial load
    styleSheets.forEach(({ id, picked }) => {
      if (picked && !document.getElementById(`style-${id}`)) {
        toggleStyle(id, true, styleSheets);
      }
    });

    return story();
  },
];

export const parameters = {
  options: {
    storySort: (a, b) => {
      return a.title.localeCompare(b.title, undefined);
    },
  },
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
      code: '<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-reset.css" />',
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-eu-default',
      code: '<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-eu-default.css" />',
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-eu',
      code: '<link rel="stylesheet" type="text/css" href="./styles/ecl-eu.css" />',
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-eu-utlities',
      code: '<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-eu-utilities.css" />',
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-rtl',
      code: '<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-rtl.css" />',
      picked: false,
      hideCode: true,
    },
    {
      id: 'ecl-eu-default-print',
      code: '<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-eu-default-print.css" />',
      picked: false,
      hideCode: true,
    },
    {
      id: 'ecl-eu-print',
      code: '<link rel="stylesheet" type="text/css" href="./styles/ecl-eu-print.css" />',
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

export const loaders = [
  async ({ args, originalStoryFn }) => {
    if (originalStoryFn.render) {
      const component = await originalStoryFn.render(args);
      return { component };
    }
  },
];
