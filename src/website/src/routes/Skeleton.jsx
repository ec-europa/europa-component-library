import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
    const { system, isLoading } = this.props;

    // Force refresh if is mounted on a real client (two-pass rendering)
    this.setState({
      forceRefresh: navigator.userAgent !== 'ReactSnap',
    });

    // Inject/enable ECL stylesheet
    if (!isLoading) {
      const element = document.getElementById(`${system}-css`);

      if (!element) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.id = `${system}-css`;
        link.href = `${process.env.PUBLIC_URL}/playground/${system}/styles/ecl-${system}-preset-website.css`;
        link.media = 'screen';

        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(link);
      } else {
        element.disabled = false;
      }
    }
  }

  componentWillUnmount() {
    const { system, isLoading } = this.props;

    // Disable ECL stylesheet
    if (!isLoading) {
      const element = document.getElementById(`${system}-css`);
      if (element) {
        element.disabled = true;
      }
    }
  }

  toggleSidebar() {
    this.setState((prevState) => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  }

  render() {
    const { sidebarOpen, forceRefresh } = this.state;
    const { HomePage, prefix, title, pages, routes, isLoading } = this.props;

    return (
      <>
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
      </>
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
