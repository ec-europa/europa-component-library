import { configure, addDecorator, addParameters } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withCssResources } from '@storybook/addon-cssresources';

import './ECL';

addDecorator(withA11y);
addDecorator(withCssResources);

addParameters({
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
      code: `<link rel="stylesheet" type="text/css" href="/storybook/ec/styles/ecl-ec-preset-website.css" />`,
      picked: true,
    },
    {
      id: 'ecl-print',
      code: `<link rel="stylesheet" type="text/css" href="/storybook/ec/styles/ecl-ec-preset-website-print.css" />`,
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
  options: {
    theme: create({
      base: 'light',
      colorSecondary: '#004494',
      appBorderRadius: 0,
      inputBorderRadius: 0,
      brandTitle: 'ECL v2 - EC',
      brandUrl: 'https://github.com/ec-europa/europa-component-library',
      brandImage: null,
    }),
    sidebarAnimations: false,
    panelPosition: 'right',
  },
  viewport: {
    defaultViewport: 'iphone6',
    viewports: {
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
      },
      responsive: {
        name: 'Responsive',
        styles: {
          width: '100%',
          height: '100%',
        },
      },
    },
  },
});

const contexts = [
  require.context('../../packages', true, /stories.*\.jsx?$/),
  require.context('../../templates', true, /stories.*\.jsx?$/),
];

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
