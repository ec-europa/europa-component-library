import React from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';
import Prism from 'prismjs';
import ClipboardJS from 'clipboard';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

const CodePanel = styled.div({
  margin: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  fontSize: '1rem',
  display: 'flex',
});

const Pre = styled.pre({
  margin: '0 !important',
  paddingTop: '4rem !important',
  borderRadius: '0 !important',
  flexGrow: 1,
});

const Actions = styled.div({
  color: '#f8f8f2',
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  backgroundColor: '#272822',
  right: 0,
  top: 0,
  zIndex: 1,
});

const CopyButton = styled.button({
  color: '#f8f8f2',
  fontSize: '0.9em',
  padding: '1em',
  background: 'transparent',
  border: '1px solid #fff',
  borderTopWidth: 0,
  borderRightWidth: 0,
});

class HTMLMarkup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };

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
    channel.on('ecl/diff/add_code', this.onAddHTMLMarkup);

    this.clipboard = new ClipboardJS('#copy-code');

    // Clear the current HTMLMarkup on every story change.
    this.stopListeningOnStory = api.on(() => {
      this.onAddHTMLMarkup('');
    });

    if (this.codeRef) {
      Prism.highlightElement(this.codeRef);
    }
  }

  componentDidUpdate() {
    if (this.codeRef) {
      Prism.highlightElement(this.codeRef);
    }
  }

  // This is some cleanup tasks when the HTMLMarkup panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    if (this.clipboard) this.clipboard.destroy();

    this.unmounted = true;
    // eslint-disable-next-line react/prop-types
    const { channel } = this.props;
    channel.removeListener('ecl/diff/add_code', this.onAddHTMLMarkup);
  }

  onAddHTMLMarkup(code) {
    this.setState({ code });
  }

  render() {
    const { code: rawCode } = this.state;
    // eslint-disable-next-line react/prop-types
    const { active } = this.props;

    let code = rawCode;
    return active ? (
      <CodePanel>
        <Actions>
          <CopyButton type="button" id="copy-code" data-clipboard-text={code}>
            Copy
          </CopyButton>
        </Actions>
        <Pre className="language-html line-numbers">
          <code className="language-html" ref={this.setCodeRef}>
            {code}
          </code>
        </Pre>
      </CodePanel>
    ) : null;
  }
}

// Register the addon with a unique name.
addons.register('ecl/diff', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('ecl/diff/panel', {
    title: 'Diff php/js',
    // eslint-disable-next-line react/prop-types
    render: ({ active }) => (
      <HTMLMarkup channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
