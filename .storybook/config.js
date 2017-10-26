import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import centered from '@storybook/addon-centered';
import backgrounds from '@storybook/addon-backgrounds';

/*
 * UI Options
 */

setOptions({
  name: 'ECL Studio',
  url: 'https://ec-europa.github.io/europa-component-library',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: null,
  sidebarAnimations: false,
  selectedAddonPanel: undefined,
});

/*
 * Global decorators
 */

addDecorator(centered);

addDecorator(
  backgrounds([
    { name: 'white', value: '#fff', default: true },
    { name: 'EC blue', value: '#004494' },
  ])
);

/*
 * Load stories
 */

const contexts = [require.context('../framework', true, /stories.*\.jsx$/)];

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
