import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  SyntaxHighlighter,
  Button,
  DocumentFormatting,
} from '@storybook/components';
import { styled } from '@storybook/theming';
import { html as beautify } from 'js-beautify';
import { EVENTS } from '../constants';
import prefillPen from '../utils/codepen';

const StyledButton = styled(Button)(() => ({
  marginTop: '20px',
  float: 'right',
}));

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  flexGrow: '1',
  flexShrink: '1',
  '> *:first-child': {
    height: '100%',
  },
}));

const Overlay = styled.div(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
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
      <Fragment>
        {children}
        {expanded && (
          <Overlay id="storybook-code">
            <DocumentFormatting>
              <h1>Live HTML</h1>
              <StyledSyntaxHighlighter
                bordered
                copyable
                format={false}
                language="html"
              >
                {beautifiedCode}
              </StyledSyntaxHighlighter>
              <form
                action="https://codepen.io/pen/define"
                method="POST"
                target="_blank"
              >
                <input
                  type="hidden"
                  name="data"
                  value={prefillPen(beautifiedCode)}
                />
                <StyledButton tertiary type="submit">
                  Open in CodePen
                </StyledButton>
              </form>
            </DocumentFormatting>
          </Overlay>
        )}
      </Fragment>
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
