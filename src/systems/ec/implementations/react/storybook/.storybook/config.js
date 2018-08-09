import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'ECL v2',
  url: 'https://github.com/ec-europa/europa-component-library',
});

const contexts = [require.context('../../packages', true, /stories.*\.jsx?$/)];

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
