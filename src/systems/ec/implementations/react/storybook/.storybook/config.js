import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

svg4everybody({
  validate: function(src) {
    return src && src.indexOf('#') !== 0;
  },
});

setOptions({
  name: 'ECL v2 - EC',
  url: 'https://github.com/ec-europa/europa-component-library',
  sidebarAnimations: false,
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
