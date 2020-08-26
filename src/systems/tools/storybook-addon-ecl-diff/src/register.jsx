import React from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';

const Panel = styled.div({
  padding: 10,
  boxSizing: 'border-box',
  width: '100%',
});

class HTMLMarkup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { html: '' };

    this.onAddHTMLMarkup = this.onAddHTMLMarkup.bind(this);

    this.codeRef = null;
    this.setCodeRef = element => {
      this.codeRef = element;
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { channel, api } = this.props;
    // Listen to the HTMLMarkup and render it.
    channel.on('ecl/ecl_diff/add_code', this.onAddHTMLMarkup);

    // Clear the current HTMLMarkup on every story change.
    this.stopListeningOnStory = api.on(() => {
      this.onAddHTMLMarkup('');
    });
  }

  // This is some cleanup tasks when the HTMLMarkup panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    // eslint-disable-next-line react/prop-types
    const { channel } = this.props;
    channel.removeListener('ecl/ecl_diff/add_code', this.onAddHTMLMarkup);
  }

  onAddHTMLMarkup(html) {
    this.setState({ html });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { active } = this.props;
    const { html } = this.state;
    const textAfterFormatted = html
      ? html
          .trim()
          .replace(/(<\S+.*>)\n/g, '$1')
          .replace(/\n/g, '<br />')
      : '';

    return active ? (
      <Panel
        className="addon-ecl-diff-container"
        dangerouslySetInnerHTML={{ __html: textAfterFormatted }}
      />
    ) : null;
  }
}

// Register the addon with a unique name.
addons.register('ecl/ecl_diff', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('ecl/ecl_diff/panel', {
    title: 'Ecl diff',
    // eslint-disable-next-line react/prop-types
    render: ({ active }) => (
      <HTMLMarkup channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
