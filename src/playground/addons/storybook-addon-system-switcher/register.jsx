import React from 'react';
import { addons, types } from '@storybook/manager-api';
import Switcher from './Switcher';

const ADDON_ID = 'ecl/storybook/system-switcher';
const TOOL_ID = `${ADDON_ID}/tool`;

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Switcher',
    render: () => <Switcher />,
  });
});
