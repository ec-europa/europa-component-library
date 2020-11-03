import { addDecorator, addParameters } from '@storybook/html';
import { withCssResources } from '@storybook/addon-cssresources';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withRunScript } from 'storybook-addon-run-script/html';

import './ECL';

const init = `ECL.autoInit()`;

addParameters({
  cssresources: [
    {
      id: 'ec-core',
      code: `<link rel="stylesheet" type="text/css" href="./styles/ec-core.css" />`,
      picked: true,
    },
    {
      id: 'eu-core',
      code: `<link rel="stylesheet" type="text/css" href="./styles/eu-core.css" />`,
      picked: false,
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
addDecorator(withRunScript(init));
