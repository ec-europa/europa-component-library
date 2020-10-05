import { addDecorator, addParameters } from '@storybook/html';
import { withCssResources } from '@storybook/addon-cssresources';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import './ECL';

const system = process.env.STORYBOOK_SYSTEM;
const cssresources = system
  ? [
      {
        id: 'eu-core',
        code: `<link rel="stylesheet" type="text/css" media="screen" href="./styles/ecl-preset-eu-core.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: 'ecl-print',
        code: `<link rel="stylesheet" type="text/css" media="print" href="./styles/ecl-preset-eu-core-print.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: 'eu-standardised',
        code: `<link rel="stylesheet" type="text/css" media="screen" href="./styles/ecl-preset-eu-standardised.css" />`,
        picked: false,
        hideCode: true,
      },
      {
        id: 'eu-standardised-print',
        code: `<link rel="stylesheet" type="text/css" media="print" href="./styles/ecl-preset-eu-standardised-print.css" />`,
        picked: false,
        hideCode: true,
      },
    ]
  : [
      {
        id: 'ec-core',
        code: `<link rel="stylesheet" type="text/css" media="screen" href="./styles/ecl-preset-ec-core.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: 'ec-core-print',
        code: `<link rel="stylesheet" type="text/css" media="print" href="./styles/ecl-preset-ec-core-print.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: 'ec-standardised',
        code: `<link rel="stylesheet" type="text/css" media="screen" href="./styles/ecl-preset-ec-standardised.css" />`,
        picked: false,
        hideCode: true,
      },
      {
        id: 'ec-standardised-print',
        code: `<link rel="stylesheet" type="text/css" media="print" href="./styles/ecl-preset-ec-standardised-print.css" />`,
        picked: false,
        hideCode: true,
      },
    ];

addParameters({
  cssresources,
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

addDecorator(withCssResources);
