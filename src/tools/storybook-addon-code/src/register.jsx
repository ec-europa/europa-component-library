import React from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';
import Prism from 'prismjs';
import ClipboardJS from 'clipboard';
import { html as beautifyHtml } from 'js-beautify';
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
      code: '',
      pretty: true,
    };

    this.onAddHTMLMarkup = this.onAddHTMLMarkup.bind(this);
    this.toggleBeautifier = this.toggleBeautifier.bind(this);

    this.codeRef = null;
    this.setCodeRef = (element) => {
      this.codeRef = element;
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { channel, api } = this.props;
    // Listen to the HTMLMarkup and render it.
    channel.on('ecl/twig-code/add_code', this.onAddHTMLMarkup);

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
    channel.removeListener('ecl/twig-code/add_code', this.onAddHTMLMarkup);
  }

  onAddHTMLMarkup(code) {
    this.setState({ code });
  }

  toggleBeautifier() {
    this.setState((state) => ({
      pretty: !state.pretty,
    }));
  }

  render() {
    const { code: rawCode, pretty } = this.state;
    // eslint-disable-next-line react/prop-types
    const { active } = this.props;

    let code = rawCode;
    if (pretty) {
      code = beautifyHtml(code, {
        indent_size: 2,
        max_preserve_newlines: -1,
        preserve_newlines: false,
        indent_scripts: 'normal',
      });
    }

    return active ? (
      <CodePanel>
        <Actions>
          <CopyButton type="button" onClick={this.toggleBeautifier}>
            {pretty ? 'Show raw' : 'Show beautified'}
          </CopyButton>
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
addons.register('ecl/twig-code', (api) => {
  // Also need to set a unique name to the panel.
  addons.addPanel('ecl/twig-code/panel', {
    title: 'HTML',
    // eslint-disable-next-line react/prop-types
    render: ({ active }) => (
      <HTMLMarkup channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
