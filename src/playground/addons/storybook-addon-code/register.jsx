import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, PANEL_ID } from './constants';
import HTMLMarkup from './HTMLMarkup';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'HTML',
    render: (props) => <HTMLMarkup channel={addons.getChannel()} {...props} />,
  });
});
