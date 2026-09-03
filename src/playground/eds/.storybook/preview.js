import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Buffer } from 'buffer';

// twing (used to render .twig components, e.g. eds-button.story.js) expects
// a global Buffer, same as ec/eu's own preview.js.
global.Buffer = Buffer;

export const parameters = {
  layout: 'padded',
  docs: {
    toc: false,
  },
};

// The eds custom properties switch mode via `[data-theme="dark"]` on <html>
// (see src/themes/eds/_custom-properties.scss) - this decorator drives that
// same attribute from a Storybook toolbar dropdown instead of a bespoke
// in-story toggle button.
export const decorators = [
  withThemeByDataAttribute({
    themes: { light: 'light', dark: 'dark' },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];

// @storybook/html-webpack5 does not await a story's `render` function on
// its own - a story returning a Promise<string> (e.g. eds-button.story.js's
// twig render) fails with "Expecting an HTML snippet or DOM node" unless
// something awaits it first. Mirrors ec/eu's own preview.js loaders.
export const loaders = [
  async ({ args, originalStoryFn }) => {
    if (originalStoryFn.render) {
      const component = await originalStoryFn.render(args);
      return { component };
    }
  },
];
