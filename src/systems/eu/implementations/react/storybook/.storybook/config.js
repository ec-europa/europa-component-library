import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

import '@ecl/eu-preset-website/dist/styles/ecl-eu-preset-website.css';

svg4everybody();

addDecorator(
  withOptions({
    name: 'ECL v2 - EU',
    url: 'https://github.com/ec-europa/europa-component-library',
    sidebarAnimations: false,
  })
);

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
