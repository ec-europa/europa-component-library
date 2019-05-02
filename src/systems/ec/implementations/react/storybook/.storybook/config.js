import { configure, addDecorator, addParameters } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import './ECL';

addDecorator(withA11y);

addParameters({
  a11y: {
    configure: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
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
  viewport: { defaultViewport: 'iphone6' },
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
