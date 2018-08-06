import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// ECl, hacks and custom styles
import '@ecl/ec-preset-website/dist/styles/ecl-ec-preset-website.css';
import './hack.css';
import './styles/custom-grid.css';
import './styles/app.css';

// Layout
import Navigation from './components/Navigation';

// Pages
import HomePage from './routes/index';
import PageNotFound from './routes/404';
import ECHomePage from './routes/ec/index';
import EUHomePage from './routes/eu/index';

import ComponentPage from './components/ComponentPage';

const ecPages = require.context(
  '../../src/systems/ec/specs',
  true,
  /config\.js$/
);

const euPages = require.context(
  '../../src/systems/eu/specs',
  true,
  /config\.js$/
);

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
        <div className="language-en ecl-typography">
          <Helmet
            titleTemplate="%s - ECL 2.0"
            defaultTitle="Europa Component Library"
          />
          <div className="ecl-skip-link__wrapper" id="skip-link">
            <a href="#main-content" className="ecl-skip-link">
              Skip to main content
            </a>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/(ec|eu)"
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
                      <Route exact path="/ec" component={ECHomePage} />
                      {ecPages
                        .keys()
                        .map(key => ecPages(key).default)
                        .filter(meta => meta)
                        .map(meta => (
                          <Route
                            key={meta.url}
                            path={meta.url}
                            render={props => (
                              <ComponentPage {...props} component={meta} />
                            )}
                          />
                        ))}
                      <Route exact path="/eu" component={EUHomePage} />
                      {euPages
                        .keys()
                        .map(key => euPages(key).default)
                        .filter(meta => meta)
                        .map(meta => (
                          <Route
                            key={meta.url}
                            path={meta.url}
                            render={props => (
                              <ComponentPage {...props} component={meta} />
                            )}
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
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
