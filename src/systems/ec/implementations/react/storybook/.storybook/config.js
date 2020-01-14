import { configure, addDecorator, addParameters } from '@storybook/react';
import { withHTML } from '@whitespace/storybook-addon-html/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withCssResources } from '@storybook/addon-cssresources';
import { withCode } from '../../../../../../tools/storybook-addon-code';

import './ECL';

addDecorator(withCode);
addDecorator(withHTML);
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
    storySort: (a, b) => {
      const aParentKind = a[1].kind.split('|').shift();
      const aKind = a[1].kind
        .split('|')
        .slice(1)
        .join('|');
      const bParentKind = b[1].kind.split('|').shift();
      const bKind = b[1].kind
        .split('|')
        .slice(1)
        .join('|');

      return aParentKind !== bParentKind
        ? 0
        : aKind.localeCompare(bKind, { numeric: true });
    },
  },
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
});

const contexts = [
  require.context('../../templates', true, /stories.*\.jsx?$/),
  require.context('../../page-structure', true, /stories.*\.jsx?$/),
  require.context('../../layout', true, /stories.*\.jsx?$/),
  require.context('../../components', true, /stories.*\.jsx?$/),
  require.context('../../utilities', true, /stories.*\.jsx?$/),
  require.context('../../deprecated', true, /stories.*\.jsx?$/),
];

/**
 * Currently using storiesOf API, so the loader function does not return any value.
 * @see https://storybook.js.org/docs/basics/writing-stories/#loading-stories
 */
configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
