import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import 'prismjs/themes/prism.css';

// Hacks and custom styles
import '@ecl/ec-preset-website/dist/styles/ecl-ec-preset-website.css';
import './hack.css';
import './styles/custom-grid.css';
import './styles/app.scss';

// Layout
import Navigation from './components/Navigation/Navigation';

// Static routes
import HomePage from './routes/index';
import Example from './routes/example';
import PageNotFound from './routes/404';
import ECHomePage from './routes/ec/index';
import EUHomePage from './routes/eu/index';

import DocPage from './components/DocPage/DocPage';

const ecPages = require.context('../../systems/ec/specs', true, /config\.js$/);

const euPages = require.context('../../systems/eu/specs', true, /config\.js$/);

class App extends Component {
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
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Fragment>
          <Helmet
            titleTemplate="%s - ECL 2.0"
            defaultTitle="Europa Component Library"
          />
          <Switch>
            <Route exact strict path="/" component={HomePage} />
            <Route strict path="/example" component={Example} />
            <Route
              path="/(ec|eu)/"
              strict
              render={() => (
                <Fragment>
                  <Navigation
                    ecPages={ecPages}
                    euPages={euPages}
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
                      <Route exact strict path="/ec/" component={ECHomePage} />
                      {ecPages
                        .keys()
                        .map(key => ecPages(key).default)
                        .filter(meta => meta)
                        .map(meta => (
                          <Route
                            key={meta.url}
                            path={`${meta.url}/`}
                            strict
                            render={() => <DocPage component={meta} />}
                          />
                        ))}
                      <Route exact strict path="/eu/" component={EUHomePage} />
                      {euPages
                        .keys()
                        .map(key => euPages(key).default)
                        .filter(meta => meta)
                        .map(meta => (
                          <Route
                            key={meta.url}
                            path={`${meta.url}/`}
                            strict
                            render={() => <DocPage component={meta} />}
                          />
                        ))}
                      <Route component={PageNotFound} />
                    </Switch>
                  </div>
                </Fragment>
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default hot(module)(App);
