import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { Buffer } from 'buffer';
import isChromatic from 'chromatic/isChromatic';
import { addons } from 'storybook/preview-api';
import { STORY_RENDERED } from 'storybook/internal/core-events';
import { allModes } from './modes';

import './ECL';

// Debounced ECL.autoInit — collapses simultaneous triggers (STORY_RENDERED +
// MutationObserver) into a single call to avoid double-initialisation.
// ECL.autoInit() skips elements already marked data-ecl-auto-initialized="true",
// so we must destroy the previous instance first to allow a clean re-init.
let eclInitTimer = null;
let eclAutoInitInstance = null;
let direction = null;
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
    direction = document.documentElement.getAttribute('dir');
    // Destroy previous ECL instances so data-ecl-auto-initialized is cleared,
    // allowing ECL.autoInit() to run a full re-init for the new story.
    if (eclAutoInitInstance) {
      eclAutoInitInstance.destroy();
    }
    eclAutoInitInstance = ECL.autoInit();
    // Inject the webtools icon script so it always runs after the story
    // content is in the DOM.
    const LOAD_JS = 'https://webtools.europa.eu/load.js';
    const existing = document.querySelector(`script[src="${LOAD_JS}"]`);
    if (existing) existing.remove();
    const s = document.createElement('script');
    s.src = LOAD_JS;
    document.head.appendChild(s);
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

export const globalTypes = {
  direction: {
    description: 'Text direction',
    toolbar: {
      icon: 'globe',
      dynamicTitle: true,
      items: [
        { value: 'ltr', title: 'Left to right' },
        { value: 'rtl', title: 'Right to left' },
      ],
    },
  },
};

export const decorators = [
  (story, context) => {
    const nextDirection = context.globals.direction || 'ltr';
    document.documentElement.setAttribute('dir', nextDirection);
    if (direction && direction !== nextDirection) debouncedEclInit();
    return story();
  },
];

export const initialGlobals = {
  direction: 'ltr',
  a11y: { manual: false },
  viewport: { value: undefined, isRotated: false },
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
    context: '#storybook-root',
    config: {
      checks: [{ id: 'color-contrast', options: { noScroll: true } }],
    },
    options: {
      restoreScroll: true,
    },
  },
  docs: {
    canvas: { sourceState: 'shown' },
  },
  viewMode: 'story',
  controls: { expanded: true },
  layout: 'padded',
  viewport: {
    options: {
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
