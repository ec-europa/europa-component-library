import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';
import ECLDecorator from './ECL';

addDecorator(
  withOptions({
    name: 'ECL v2 - EC',
    url: 'https://github.com/ec-europa/europa-component-library',
    sidebarAnimations: false,
  })
);

const contexts = [require.context('../../packages', true, /stories.*\.jsx?$/)];

addDecorator(checkA11y);
addDecorator(ECLDecorator);

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
