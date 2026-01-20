import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Buffer } from 'buffer';
import { themes } from '@storybook/theming';

import './ECL';

global.Buffer = Buffer;

export const initialGlobals = {
  panelDescription:
    'Here you can choose the ECL styles to be used in this demo, you can toggle styles for the screen, the print, or single stylesheets.',
  panelTitle: 'ECL styles',
};

export const parameters = {
  breakpoints: {
    xs: 0,
    s: 480,
    m: 768,
    l: 996,
    xl: 1140,
  },
  styleToggle: {
    styleSheets: [
      {
        id: 'ecl-reset',
        href: './styles/optional/ecl-reset.css',
        picked: true,
        group: 'others',
      },
      {
        id: 'ecl-ec-default',
        href: './styles/optional/ecl-ec-default.css',
        picked: true,
        group: 'screen',
      },
      {
        id: 'ecl-ec',
        href: './styles/ecl-ec.css',
        picked: true,
        group: 'screen',
      },
      {
        id: 'ecl-ec-color-modes',
        href: './styles/ecl-ec-color-modes.css',
        picked: true,
        group: 'others',
      },
      {
        id: 'ecl-ec-utilities',
        href: './styles/optional/ecl-ec-utilities.css',
        picked: true,
        group: 'others',
      },
      {
        id: 'ecl-ec-default-print',
        href: './styles/optional/ecl-ec-default-print.css',
        picked: false,
        group: 'print',
      },
      {
        id: 'ecl-ec-print',
        href: './styles/ecl-ec-print.css',
        picked: false,
        group: 'print',
      },
    ],
  },
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

      // Store the original HTML (before icon replacement) for the HTML addon
      if (typeof component === 'string') {
        setTimeout(() => {
          const rootDiv = document.querySelector('#storybook-root');
          if (rootDiv) {
            rootDiv.setAttribute('data-original-markup', component);
          }
        }, 0);
      }

      return { component };
    }
  },
];
