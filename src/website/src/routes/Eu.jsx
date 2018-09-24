import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import EUStyles from '@ecl/eu-preset-website/dist/styles/ecl-eu-preset-website.css';

// Layout
import Navigation from '../components/Navigation/Navigation';
import MainContainer from '../components/MainContainer/MainContainer';

// Static routes
import HomePage from '../pages/eu/index.md';
import PageNotFound from './404';

import SimplePage from '../components/SimplePage/SimplePage';
import DocPage from '../components/DocPage/DocPage';

const euPages = require.context('../pages/eu', true, /config\.js$/);
const euSpecs = require.context(
  '../../../systems/eu/specs',
  true,
  /config\.js$/
);

const pages = [
  ...euPages.keys().map(key => euPages(key).default),
  ...euSpecs.keys().map(key => euSpecs(key).default),
];

class EURoutes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen:
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >
        1140,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    EUStyles.use();
  }

  componentWillUnmount() {
    EUStyles.unuse();
  }

  toggleSidebar() {
    this.setState(prevState => ({
      sidebarOpen: !prevState.sidebarOpen,
    }));
  }

  render() {
    const { sidebarOpen } = this.state;

    return (
      <Fragment>
        <Navigation
          pages={pages}
          prefix="/eu"
          sidebarOpen={sidebarOpen}
          onToggleSidebar={this.toggleSidebar}
        />
        <MainContainer sidebarOpen={sidebarOpen}>
          <Switch>
            <Route
              exact
              strict
              path="/eu/"
              component={() => (
                <SimplePage>
                  <Helmet title="EU Homepage" />
                  <HomePage />
                </SimplePage>
              )}
            />
            {pages.map(page => (
              <Route
                key={page.url}
                path={`${page.url}/`}
                strict
                render={() => <DocPage component={page} />}
              />
            ))}
            <Route component={PageNotFound} />
          </Switch>
        </MainContainer>
      </Fragment>
    );
  }
}

export default EURoutes;
