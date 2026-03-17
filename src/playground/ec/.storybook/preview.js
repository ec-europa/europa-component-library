import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Buffer } from 'buffer';
import { themes } from '@storybook/theming';
import isChromatic from 'chromatic/isChromatic';
import { addons } from '@storybook/preview-api';
import { STORY_RENDERED } from '@storybook/core-events';
import { allModes } from './modes';

import './ECL';

// Debounced ECL.autoInit — collapses simultaneous triggers (STORY_RENDERED +
// MutationObserver) into a single call to avoid double-initialisation.
// ECL.autoInit() skips elements already marked data-ecl-auto-initialized="true",
// so we must destroy the previous instance first to allow a clean re-init.
let eclInitTimer = null;
let eclAutoInitInstance = null;
function debouncedEclInit() {
  clearTimeout(eclInitTimer);
  eclInitTimer = setTimeout(() => {
    // Ensure the root has the required attributes before autoInit runs,
    // regardless of when document.onreadystatechange fired.
    const root = document.getElementById('storybook-root');
    if (root) {
      root.setAttribute('data-ecl-auto-init', 'Tooltip');
      root.classList.add('ecl');
    }
    // Destroy previous ECL instances so data-ecl-auto-initialized is cleared,
    // allowing ECL.autoInit() to run a full re-init for the new story.
    if (eclAutoInitInstance) {
      eclAutoInitInstance.destroy();
    }
    eclAutoInitInstance = ECL.autoInit();
  }, 50);
}

// Primary trigger: fires after the story is fully rendered.
const channel = addons.getChannel();
channel.on(STORY_RENDERED, debouncedEclInit);

// Secondary trigger: re-init when controls change the story HTML.
// Set up only once (after first STORY_RENDERED) so the observer does not
// fire during the initial render and cause a double-init.
channel.once(STORY_RENDERED, () => {
  const root = document.getElementById('storybook-root');
  if (!root) return;
  new MutationObserver(debouncedEclInit).observe(root, {
    childList: true,
    subtree: false,
  });
});

global.Buffer = Buffer;

if (isChromatic() || process.env.STORYBOOK_CHROMATIC) {
  function createLink(href, media) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.media = media || 'all';
    return link;
  }

  // Manually inject styles
  const head = document.head || document.getElementsByTagName('head')[0];

  head.appendChild(createLink('./styles/optional/ecl-reset.css', 'screen'));
  head.appendChild(
    createLink('./styles/optional/ecl-ec-default.css', 'screen'),
  );
  head.appendChild(createLink('./styles/ecl-ec.css', 'screen'));
  head.appendChild(
    createLink('./styles/optional/ecl-ec-utilities.css', 'screen'),
  );
  head.appendChild(createLink('./styles/ecl-ec-print.css', 'print'));
  head.appendChild(
    createLink('./styles/optional/ecl-ec-default-print.css', 'print'),
  );
}

export const initialGlobals = {
  panelDescription:
    'Here you can choose the ECL styles to be used in this demo, you can toggle styles for the screen, the print, or single stylesheets.',
  panelTitle: 'ECL styles',
};

export const parameters = {
  chromatic: {
    modes: {
      s: allModes.s,
      m: allModes.m,
      l: allModes.l,
      xl: allModes.xl,
    },
  },
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
