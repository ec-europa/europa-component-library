import React from 'react';
import { addons } from '@storybook/preview-api';
import Switcher from './Switcher';

const ADDON_ID = 'ecl/storybook/system-switcher';
const TOOL_ID = `${ADDON_ID}/tool`;

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    title: 'Switcher',
    render: () => <Switcher />,
  });
});
