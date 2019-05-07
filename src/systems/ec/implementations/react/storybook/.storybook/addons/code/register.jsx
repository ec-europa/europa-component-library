import React, { Fragment } from 'react';
import { styled } from '@storybook/theming';

import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './constants';
import { CodeToggle } from './components/CodeToggle';

const Hidden = styled.div(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
}));

const PreviewWrapper = p => (
  <Fragment>
    {p.children}
    <Hidden id="storybook-code">
      <p>TEST</p>
    </Hidden>
  </Fragment>
);

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    title: '',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <CodeToggle channel={addons.getChannel()} />,
  });

  addons.add(PANEL_ID, {
    title: '',
    type: types.PREVIEW,
    render: PreviewWrapper,
  });
});
