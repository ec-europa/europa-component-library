import React from 'react';
import PropTypes from 'prop-types';

export default class StoryWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.context = {};

    if (props.beforeMount) {
      const newContext = props.beforeMount(this.context);
      if (newContext)
        this.context = Object.assign({}, this.context, newContext);
    }
  }

  componentDidMount() {
    const { afterMount } = this.props;
    if (afterMount) {
      const newContext = afterMount(this.context);
      if (newContext)
        this.context = Object.assign({}, this.context, newContext);
    }
  }

  componentWillUnmount() {
    const { beforeUnmount } = this.props;
    if (beforeUnmount) {
      const newContext = beforeUnmount(this.context);
      if (newContext)
        this.context = Object.assign({}, this.context, newContext);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

StoryWrapper.propTypes = {
  beforeMount: PropTypes.func,
  afterMount: PropTypes.func,
  beforeUnmount: PropTypes.func,
  children: PropTypes.node,
};

StoryWrapper.defaultProps = {
  beforeMount: () => {},
  afterMount: () => {},
  beforeUnmount: () => {},
  children: null,
};
