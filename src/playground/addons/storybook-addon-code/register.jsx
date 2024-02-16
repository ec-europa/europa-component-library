import React from 'react';
import { addons } from '@storybook/preview-api';
import { ADDON_ID, PANEL_ID } from './constants';
import HTMLMarkup from './HTMLMarkup';

addons.register(ADDON_ID, () => {
  addons.addPanel(PANEL_ID, {
    title: 'HTML',
    render: (props) => <HTMLMarkup channel={addons.getChannel()} {...props} />,
  });
});
