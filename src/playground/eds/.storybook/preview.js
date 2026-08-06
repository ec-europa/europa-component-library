import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const parameters = {
  layout: 'fullscreen',
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
