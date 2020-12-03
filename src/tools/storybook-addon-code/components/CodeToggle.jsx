import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@storybook/components';
import { EVENTS } from '../constants';

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
    const newState = !expanded;

    this.setState({
      expanded: newState,
    });

    channel.emit(EVENTS.TOGGLE_CODE, newState);
  }

  render() {
    const { expanded } = this.state;

    return (
      <IconButton
        key="code"
        active={!!expanded}
        title={!expanded ? 'Show source code' : 'Hide source code'}
        onClick={this.handleClick}
      >
        Prototype with the source code
      </IconButton>
    );
  }
}

CodeToggle.propTypes = {
  channel: PropTypes.shape({
    emit: PropTypes.func,
  }).isRequired,
};

export default CodeToggle;
