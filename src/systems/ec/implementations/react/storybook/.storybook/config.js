import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';

setOptions({
  name: 'ECL v2',
  url: 'https://github.com/ec-europa/europa-component-library',
});

const contexts = [require.context('../../packages', true, /stories.*\.jsx?$/)];

addDecorator(checkA11y);

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
