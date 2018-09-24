import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import ECStyles from '@ecl/ec-preset-website/dist/styles/ecl-ec-preset-website.css';

// Layout
import Navigation from '../components/Navigation/Navigation';
import MainContainer from '../components/MainContainer/MainContainer';

// Static routes
import HomePage from '../pages/ec/index.md';
import PageNotFound from './404';

import SimplePage from '../components/SimplePage/SimplePage';
import DocPage from '../components/DocPage/DocPage';

const ecPages = require.context('../pages/ec', true, /config\.js$/);
const ecSpecs = require.context(
  '../../../systems/ec/specs',
  true,
  /config\.js$/
);

const pages = [
  ...ecPages.keys().map(key => ecPages(key).default),
  ...ecSpecs.keys().map(key => ecSpecs(key).default),
];

class ECRoutes extends Component {
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
    ECStyles.use();
  }

  componentWillUnmount() {
    ECStyles.unuse();
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
          prefix="/ec"
          sidebarOpen={sidebarOpen}
          onToggleSidebar={this.toggleSidebar}
        />
        <MainContainer sidebarOpen={sidebarOpen}>
          <Switch>
            <Route
              exact
              strict
              path="/ec/"
              component={() => (
                <SimplePage>
                  <Helmet title="EC Homepage" />
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

export default ECRoutes;
