import { addDecorator, addParameters } from '@storybook/html';
import { withCssResources } from '@storybook/addon-cssresources';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './ECL';

addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
    manual: false,
  },
  cssresources: [
    {
      id: 'eu-core',
      code: `<link rel="stylesheet" type="text/css" href="./styles/eu-core.css" />`,
      picked: true,
      hideCode: true,
    },
    {
      id: 'eu-core-print',
      code: `<link rel="stylesheet" type="text/css" href="./styles/eu-core-print.css" />`,
      picked: false,
      hideCode: true,
    },
    {
      id: 'reset',
      code: `<link rel="stylesheet" type="text/css" href="./styles/reset.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
  controls: { expanded: true },
  layout: 'fullscreen',
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
});

export const decorators = [withCssResources];
