import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation/Navigation';
import MainContainer from '../components/MainContainer/MainContainer';
import PageNotFound from './404';
import LoadingPage from './LoadingPage';
import SimplePage from '../components/SimplePage/SimplePage';

class Skeleton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Open by default in build—check SSR vs. client
      sidebarOpen:
        typeof window === 'undefined'
          ? true
          : Math.max(
              document.documentElement.clientWidth,
              window.innerWidth || 0,
            ) > 1140,
      forceRefresh: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    const { system, isLoading } = this.props;
    if (typeof window === 'undefined') return;

    // Update state on client—keep open if prerendered open
    this.setState((prevState) => ({
      forceRefresh: navigator.userAgent !== 'ReactSnap',
      sidebarOpen:
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >
          1140 || prevState.sidebarOpen,
    }));

    if (!isLoading) {
      const element = document.getElementById(`${system}-css`);
      if (!element) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.id = `${system}-css`;
        link.href = `${process.env.PUBLIC_URL}/playground/${system}/styles/ecl-${system}.css`;
        link.media = 'screen';
        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(link);

        const utils = document.createElement('link');
        utils.rel = 'stylesheet';
        utils.type = 'text/css';
        utils.id = `${system}-utilities-css`;
        utils.href = `${process.env.PUBLIC_URL}/playground/${system}/styles/optional/ecl-${system}-utilities.css`;
        utils.media = 'screen';
        head.appendChild(utils);
      } else {
        element.disabled = false;
      }
    }
  }

  componentWillUnmount() {
    const { system, isLoading } = this.props;
    if (typeof window === 'undefined') return;

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
          <Routes>
            <Route
              path="/"
              element={
                <SimplePage>
                  <Helmet title={title} />
                  <HomePage />
                </SimplePage>
              }
            />
            {routes}
            <Route
              path="*"
              element={isLoading ? <LoadingPage /> : <PageNotFound />}
            />
          </Routes>
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
  pages: PropTypes.array,
  routes: PropTypes.node,
  isLoading: PropTypes.bool,
};

Skeleton.defaultProps = {
  pages: [],
  routes: null,
  isLoading: false,
};

export default Skeleton;
