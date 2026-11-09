import React, { useEffect, useState } from 'react';
import { addons, types, useStorybookState } from 'storybook/manager-api';
import styled from '@emotion/styled';

const Panel = styled.div({
  padding: 10,
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  '& pre': { overflowX: 'auto' },
});

addons.register('ecl/notes', () => {
  const channel = addons.getChannel();
  let latestNotes;
  channel.on('ecl/notes/add_notes', (payload) => {
    latestNotes = payload;
  });

  function Notes({ active }) {
    const { storyId } = useStorybookState();
    const [payload, setPayload] = useState(latestNotes);
    useEffect(() => {
      const onNotes = (next) => {
        if (next.storyId === storyId) setPayload(next);
      };
      channel.on('ecl/notes/add_notes', onNotes);
      setPayload(latestNotes);
      if (active) channel.emit('ecl/notes/request_notes', { storyId });
      return () => channel.off('ecl/notes/add_notes', onNotes);
    }, [storyId, active]);
    const html = payload?.storyId === storyId ? payload.html : '';
    return active ? (
      <Panel
        className="addon-notes-container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    ) : null;
  }

  addons.add('ecl/notes/panel', {
    title: 'Notes',
    type: types.PANEL,
    render: ({ active }) => <Notes active={active} />,
  });
});
