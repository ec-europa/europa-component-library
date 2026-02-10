import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Buffer } from 'buffer';
import { themes } from '@storybook/theming';
import isChromatic from 'chromatic/isChromatic';

import './ECL';

global.Buffer = Buffer;

if (isChromatic() || process.env.STORYBOOK_CHROMATIC) {
  function createLink(href, media) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.media = media || 'all';
    return link;
  }

  // Manually inject styles
  var head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(createLink('./styles/optional/ecl-reset.css', 'screen'));
  head.appendChild(
    createLink('./styles/optional/ecl-eu-default.css', 'screen'),
  );
  head.appendChild(createLink('./styles/ecl-eu.css', 'screen'));
  head.appendChild(
    createLink('./styles/optional/ecl-eu-utilities.css', 'screen'),
  );
  head.appendChild(createLink('./styles/ecl-eu-print.css', 'print'));
  head.appendChild(
    createLink('./styles/optional/ecl-eu-default-print.css', 'print'),
  );
}

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
  options: {
    storySort: (a, b) => {
      return a.title.localeCompare(b.title, undefined);
    },
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
        id: 'ecl-eu-default',
        href: './styles/optional/ecl-eu-default.css',
        picked: true,
        group: 'screen',
      },
      {
        id: 'ecl-eu',
        href: './styles/ecl-eu.css',
        picked: true,
        group: 'screen',
      },
      {
        id: 'ecl-eu-utilities',
        href: './styles/optional/ecl-eu-utilities.css',
        picked: true,
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
    ],
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
