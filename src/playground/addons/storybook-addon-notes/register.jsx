import React from 'react';
import PropTypes from 'prop-types';
import { addons } from '@storybook/addons';

import styled from '@emotion/styled';

const Panel = styled.div({
  padding: 10,
  boxSizing: 'border-box',
  width: '100%',
});

class Notes extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { text: '' };
    this.onAddNotes = this.onAddNotes.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on('ecl/notes/add_notes', this.onAddNotes);

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.on(() => {
      this.onAddNotes('');
    });
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    const { channel } = this.props;
    channel.removeListener('ecl/notes/add_notes', this.onAddNotes);
  }

  onAddNotes(text) {
    this.setState({ text });
  }

  render() {
    const { active } = this.props;
    const { text } = this.state;
    const textAfterFormatted = text
      ? text
          .trim()
          .replace(/(<\S+.*>)\n/g, '$1')
          .replace(/\n/g, '<br />')
      : '';

    return active ? (
      <Panel
        className="addon-notes-container"
        dangerouslySetInnerHTML={{ __html: textAfterFormatted }}
      />
    ) : null;
  }
}

Notes.propTypes = {
  active: PropTypes.bool.isRequired,
  channel: PropTypes.shape({
    on: PropTypes.func,
    emit: PropTypes.func,
    removeListener: PropTypes.func,
  }).isRequired,
  api: PropTypes.shape({
    on: PropTypes.func,
    getQueryParam: PropTypes.func,
    setQueryParams: PropTypes.func,
  }).isRequired,
};

addons.register('ecl/notes', (api) => {
  const channel = addons.getChannel();
  addons.addPanel('ecl/notes/panel', {
    title: 'Notes',
    paramKey: 'EclNotes',
    // eslint-disable-next-line react/prop-types
    render: ({ active }) => (
      <Notes channel={channel} api={api} active={active} />
    ),
  });
});
