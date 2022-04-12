import { addParameters } from '@storybook/html';
import { withCssResources } from '@storybook/addon-cssresources';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './ECL';

addParameters({
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
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
      id: 'ecl-reset',
      code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-reset.css" />`,
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-eu-default',
      code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-eu-default.css" />`,
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-eu',
      code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-eu.css" />`,
      picked: true,
      hideCode: true,
    },
    {
      id: 'ecl-rtl',
      code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-rtl.css" onload="ECL.autoInit().destroy(); ECL.autoInit();" />`,
      picked: false,
      hideCode: true,
    },
    {
      id: 'ecl-eu-print',
      code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-eu-print.css" />`,
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
});

export const decorators = [withCssResources];
