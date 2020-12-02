import React from 'react';

import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './constants';
import { CodeToggle } from './components/CodeToggle';
import { PreviewWrapper } from './components/PreviewWrapper';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    title: '',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <CodeToggle channel={addons.getChannel()} />,
  });

  addons.add(PANEL_ID, {
    title: '',
    type: types.PREVIEW,
    render: (props) => (
      <PreviewWrapper channel={addons.getChannel()} {...props} />
    ),
  });
});
