import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Layout
import Navigation from '../components/Navigation/Navigation';

// Static routes
import HomePage from '../pages/eu/index';
import PageNotFound from './404';

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
        <div
          className={
            sidebarOpen
              ? 'tmp-main-container tmp-main-container--with-sidebar'
              : 'tmp-main-container'
          }
        >
          <Switch>
            <Route exact strict path="/eu/" component={HomePage} />
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
        </div>
      </Fragment>
    );
  }
}

export default EURoutes;
