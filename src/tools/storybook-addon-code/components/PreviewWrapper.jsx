import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SyntaxHighlighter,
  Button,
  DocumentWrapper,
} from '@storybook/components';
import { styled } from '@storybook/theming';
import { html as beautify } from 'js-beautify';
import { EVENTS } from '../constants';
import prefillPen from '../utils/codepen';

const TitleBar = styled.div`
  align-items: center; /* stylelint-disable-line */
  display: flex;
  justify-content: space-between;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  flexGrow: '1',
  flexShrink: '1',
}));

const Overlay = styled.div(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
  backgroundColor: '#fff',
  padding: '20px',
}));

export class PreviewWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      expanded: false,
    };

    this.onAddHTMLMarkup = this.onAddHTMLMarkup.bind(this);
    this.onTogglePreview = this.onTogglePreview.bind(this);
    this.openInCodePen = this.openInCodePen.bind(this);
  }

  componentDidMount() {
    const { channel } = this.props;
    channel.on(EVENTS.ADD_CODE, this.onAddHTMLMarkup);
    channel.on(EVENTS.TOGGLE_CODE, this.onTogglePreview);
  }

  onAddHTMLMarkup(code) {
    this.setState({ code });
  }

  onTogglePreview(expanded) {
    this.setState({
      expanded,
    });
  }

  openInCodePen() {
    const { code } = this.state;

    const form = document.createElement('form');
    const element1 = document.createElement('input');

    form.method = 'POST';
    form.action = 'https://codepen.io/pen/define';
    form.target = '_blank';

    element1.type = 'hidden';
    element1.name = 'data';
    element1.value = prefillPen(code);

    form.appendChild(element1);

    document.body.appendChild(form);
    form.submit();
    form.remove();
  }

  render() {
    const { code, expanded } = this.state;
    const { children } = this.props;

    const beautifiedCode = beautify(code, {
      indent_size: 2,
      max_preserve_newlines: -1,
      preserve_newlines: false,
      indent_scripts: 'normal',
    });

    return (
      <>
        {children}
        {expanded && (
          <Overlay id="storybook-code">
            <DocumentWrapper>
              <TitleBar>
                <h1>Component source code</h1>
                <Button tertiary type="button" onClick={this.openInCodePen}>
                  Open in CodePen
                </Button>
              </TitleBar>
              <StyledSyntaxHighlighter
                bordered
                copyable
                format={false}
                language="html"
              >
                {beautifiedCode}
              </StyledSyntaxHighlighter>
            </DocumentWrapper>
          </Overlay>
        )}
      </>
    );
  }
}

PreviewWrapper.propTypes = {
  channel: PropTypes.shape({
    on: PropTypes.func,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default PreviewWrapper;
