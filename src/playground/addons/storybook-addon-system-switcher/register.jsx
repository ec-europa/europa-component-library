import React from 'react';
import { addons, types } from '@storybook/addons';
import Switcher from './Switcher';

const ADDON_ID = 'ecl/storybook/system-switcher';
const TOOL_ID = `${ADDON_ID}/tool`;

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    title: 'Switcher',
    type: types.TOOLEXTRA,
    render: () => <Switcher />,
  });
});
