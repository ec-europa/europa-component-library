import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavigationLink extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  // Custom matcher (ignore default tab)
  isActive(match, location) {
    const { meta } = this.props;
    return location.pathname.indexOf(`${meta.url}/`) === 0;
  }

  render() {
    const { meta } = this.props;
    const to = meta.defaultTab
      ? `${meta.url}/${meta.defaultTab}/`
      : `${meta.url}/`;

    return <NavLink strict to={to} isActive={this.isActive} {...this.props} />;
  }
}

NavigationLink.propTypes = {
  to: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    url: PropTypes.string.isRequired,
    defaultTab: PropTypes.string,
  }).isRequired,
};

export default NavigationLink;
