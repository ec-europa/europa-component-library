import React, { Component } from 'react';
import { IconButton } from '@storybook/components';

export class CodeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { channel } = this.props;
    const { expanded } = this.state;

    this.setState({
      expanded: !expanded,
    });

    channel.emit('ecl/code/toggle_code', !expanded);
  }

  render() {
    const { expanded } = this.state;

    return (
      <IconButton
        key="filter"
        active={!!expanded}
        title="Toggle code display"
        onClick={this.handleClick}
      >
        Code
      </IconButton>
    );
  }
}

export default CodeToggle;
