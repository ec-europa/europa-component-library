import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, PANEL_ID } from './constants';
import HTMLMarkup from './HTMLMarkup';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'HTML',
    render: ({ active }) => {
      const channel = addons.getChannel();
      const iframe = document.querySelector('#storybook-preview-iframe');
      const rootDiv = iframe.contentDocument.querySelector('#storybook-root');
      const storyMarkup = rootDiv ? rootDiv.innerHTML : '';

      return (
        <HTMLMarkup
          active={active}
          channel={channel}
          markup={storyMarkup} // Pass the story markup
        />
      );
    },
  });
});
