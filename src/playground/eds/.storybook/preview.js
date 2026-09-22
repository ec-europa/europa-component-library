import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import { Buffer } from 'buffer';

// twing expects a global Buffer.
global.Buffer = Buffer;

export const parameters = {
  layout: 'padded',
  docs: {
    toc: false,
  },
  options: {
    storySort: (a, b) => a.title.localeCompare(b.title, undefined),
  },
  // storybook-dark-mode: toggles the Storybook manager UI chrome itself —
  // separate from the [data-theme] decorator below, which toggles the
  // rendered story content.
  darkMode: {
    current: { ...themes.light },
    dark: { ...themes.dark },
  },
  // @ecl/storybook-addon-preview-width: labels the live preview width
  // against eds's own breakpoint scale (@ecl/eds-foundations primitives).
  breakpoints: {
    xs: 480,
    s: 768,
    m: 996,
    l: 1140,
    xl: 1440,
    '2xl': 1600,
  },
};

// eds's custom properties switch mode via [data-theme="dark"] on :root
// — this decorator drives that same attribute from a Storybook toolbar dropdown.
export const decorators = [
  withThemeByDataAttribute({
    themes: { light: 'light', dark: 'dark' },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];

// @storybook/html-webpack5 does not await a story's `render` function on
// its own - a story returning a Promise<string> (e.g. a Twig component's
// render) fails with "Expecting an HTML snippet or DOM node" unless
// something awaits it first.
export const loaders = [
  async ({ args, originalStoryFn }) => {
    if (originalStoryFn.render) {
      const component = await originalStoryFn.render(args);
      return { component };
    }
  },
];
