import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import '@ecl/ec-preset-full/dist/styles/ecl-ec-preset-full.css';

// Layout
import Navigation from '../components/Navigation/Navigation';
import MainContainer from '../components/MainContainer/MainContainer';

// Static routes
import PageNotFound from './404';
import LoadingPage from './LoadingPage';
import SimplePage from '../components/SimplePage/SimplePage';

class Skeleton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen:
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >
        1140,
      forceRefresh: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    const { system } = this.props;
    document.body.classList.add(system);
    // Force refresh if is mounted on a real client (two-pass rendering)
    this.setState({
      forceRefresh: navigator.userAgent !== 'ReactSnap',
    });
  }

  componentWillUnmount() {
    const { system } = this.props;

    document.body.classList.remove(system);
  }

  toggleSidebar() {
    this.setState(prevState => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  }

  render() {
    const { sidebarOpen, forceRefresh } = this.state;
    const { HomePage, prefix, title, pages, routes, isLoading } = this.props;

    return (
      <Fragment>
        <Navigation
          pages={pages}
          prefix={prefix}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={this.toggleSidebar}
          forceRefresh={forceRefresh}
          isLoading={isLoading}
        />
        <MainContainer sidebarOpen={sidebarOpen} forceRefresh={forceRefresh}>
          <Switch>
            <Route
              exact
              strict
              path={`${prefix}/`}
              component={() => (
                <SimplePage>
                  <Helmet title={title} />
                  <HomePage />
                </SimplePage>
              )}
            />
            {routes}
            <Route component={isLoading ? LoadingPage : PageNotFound} />
          </Switch>
        </MainContainer>
      </Fragment>
    );
  }
}

Skeleton.propTypes = {
  HomePage: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  system: PropTypes.string.isRequired,
  pages: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  routes: PropTypes.node,
  isLoading: PropTypes.bool,
};

Skeleton.defaultProps = {
  pages: [],
  routes: null,
  isLoading: false,
};

export default Skeleton;
