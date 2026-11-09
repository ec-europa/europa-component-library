import React, { useEffect, useState } from 'react';
import { addons, types, useStorybookState } from 'storybook/manager-api';
import { ADDON_ID, PANEL_ID, ADD_CODE, REQUEST_CODE } from './constants';
import HTMLMarkup from './HTMLMarkup';

addons.register(ADDON_ID, () => {
  const channel = addons.getChannel();
  let latestMarkup;
  // Cache events even when the panel has not mounted yet.
  channel.on(ADD_CODE, (payload) => {
    latestMarkup = payload;
  });

  function CodePanel({ active }) {
    const { storyId } = useStorybookState();
    const [payload, setPayload] = useState(latestMarkup);
    useEffect(() => {
      const onCode = (next) => {
        if (next.storyId === storyId) setPayload(next);
      };
      channel.on(ADD_CODE, onCode);
      setPayload(latestMarkup);
      if (active) channel.emit(REQUEST_CODE, { storyId });
      return () => channel.off(ADD_CODE, onCode);
    }, [storyId, active]);
    const current = payload?.storyId === storyId ? payload : undefined;
    return (
      <HTMLMarkup
        active={active}
        markup={current?.markup || ''}
        originalMarkup={current?.originalMarkup || ''}
      />
    );
  }

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'HTML',
    render: ({ active }) => <CodePanel active={active} />,
  });
});
