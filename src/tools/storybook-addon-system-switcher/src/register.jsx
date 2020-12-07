import React from 'react';
import { addons, types } from '@storybook/addons';
import { Switcher } from '@ecl/storybook-addon-system-switcher/src/index.js';

addons.register('ecl/storybook/system-switcher', () => {
  addons.add('ecl/storybook/system-switcher', {
    title: 'Switcher',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: () => <Switcher />,
  });
});
