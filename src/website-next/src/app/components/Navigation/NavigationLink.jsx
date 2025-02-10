import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

class NavigationLink extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);

    // The URL is not supposed to change
    // Thus we can compute it in the constructor and save it
    const { meta } = props;
    this.to = meta.defaultTab ? `${meta.url}${meta.defaultTab}/` : meta.url;
  }

  // Only update if "isActive" state has changed
  shouldComponentUpdate(nextProps) {
    const { location, meta } = this.props;
    const nextLocation = nextProps.location;
    const nextUrl = nextProps.meta.url;

    return (
      location.pathname.indexOf(meta.url) !==
      nextLocation.pathname.indexOf(nextUrl)
    );
  }

  // Custom matcher (ignore default tab)
  isActive(match, location) {
    const { meta } = this.props;
    return location.pathname.indexOf(meta.url) === 0;
  }

  render() {
    // Exclude some properties not needed by NavLink
    const { history, location, match, meta, staticContext, ...props } =
      this.props;

    return <NavLink strict to={this.to} isActive={this.isActive} {...props} />;
  }
}

NavigationLink.propTypes = {
  history: PropTypes.shape(),
  match: PropTypes.shape(),
  staticContext: PropTypes.shape(),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    url: PropTypes.string.isRequired,
    defaultTab: PropTypes.string,
  }).isRequired,
};

NavigationLink.defaultProps = {
  history: {},
  match: {},
  staticContext: {},
};

export default withRouter(NavigationLink);
