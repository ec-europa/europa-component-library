import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withCssResources } from '@storybook/addon-cssresources';
import { withCode } from '../../../../../../tools/storybook-addon-code';

import './ECL';

export const parameters = {
  a11y: {
    configure: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  cssresources: [
    {
      id: 'ecl-screen',
      code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-ec-preset-website.css" />`,
      picked: true,
    },
    {
      id: 'ecl-print',
      code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-ec-preset-website-print.css" />`,
      picked: false,
    },
    {
      id: 'test-fake-global-rules',
      code: `
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  color: red;
  font-family: serif;
  font-weight: 700;
  line-height: 2;
}
</style>`,
      picked: false,
    },
  ],
  viewport: {
    defaultViewport: 'iphone6',
    viewports: {
      responsive: {
        name: 'Responsive',
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
  options: {
    showRoots: true,
  },
};

export const decorators = [withCode, withA11y, withCssResources];
