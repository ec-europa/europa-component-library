import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { SyntaxHighlighter } from '@storybook/components';
import { styled } from '@storybook/theming';
import { html as beautify } from 'js-beautify';
import { EVENTS } from '../constants';

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
}));

const Overlay = styled.div(() => ({
  position: 'absolute',
  padding: '16px',
  top: 0,
  left: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
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

    return (
      <Fragment>
        {children}
        <Overlay
          id="storybook-code"
          style={{
            display: expanded ? 'block' : 'none',
          }}
        >
          <StyledSyntaxHighlighter
            bordered
            copyable
            format={false}
            language="html"
          >
            {beautify(code, {
              indent_size: 2,
              max_preserve_newlines: -1,
              preserve_newlines: false,
              indent_scripts: 'normal',
            })}
          </StyledSyntaxHighlighter>
        </Overlay>
      </Fragment>
    );
  }
}

PreviewWrapper.propTypes = {
  channel: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default PreviewWrapper;
