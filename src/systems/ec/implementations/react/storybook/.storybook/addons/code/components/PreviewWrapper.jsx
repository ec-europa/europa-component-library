import React, { Component, Fragment } from 'react';
import { IconButton } from '@storybook/components';
import { styled } from '@storybook/theming';
import { SyntaxHighlighter } from '@storybook/components';
import { html as beautify } from 'js-beautify';

const Hidden = styled.div(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  fontSize: '0.81em',
}));

export class PreviewWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'ola',
      expanded: false,
    };

    this.onAddHTMLMarkup = this.onAddHTMLMarkup.bind(this);
    this.onTogglePreview = this.onTogglePreview.bind(this);
  }

  componentDidMount() {
    const { channel } = this.props;
    channel.on('ecl/code/add_code', this.onAddHTMLMarkup);
    channel.on('ecl/code/toggle_code', this.onTogglePreview);
  }

  onAddHTMLMarkup(code) {
    this.setState({
      code,
    });
  }

  onTogglePreview() {
    const { expanded } = this.state;

    this.setState({
      expanded: !expanded,
    });
  }

  render() {
    const { code, expanded } = this.state;

    return (
      <Fragment>
        {this.props.children}
        <Hidden
          id="storybook-code"
          style={{
            display: expanded ? 'block' : 'none',
          }}
        >
          <SyntaxHighlighter
            bordered
            copyable
            format={false}
            language="jsx"
            padded
          >
            {beautify(code, {
              indent_size: 2,
              max_preserve_newlines: -1,
              preserve_newlines: false,
              indent_scripts: 'normal',
            })}
          </SyntaxHighlighter>
        </Hidden>
      </Fragment>
    );
  }
}

export default PreviewWrapper;
