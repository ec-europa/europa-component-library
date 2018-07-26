import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@ecl/ec-preset-website/dist/styles/ecl-ec-preset-website.css';
import './hack.css';

// Layout
import Navigation from './components/Navigation';

// Pages
import HomePage from './pages/index';
import PageNotFound from './pages/404';
import ECHomePage from './pages/ec/index';
import EUHomePage from './pages/eu/index';

import ComponentPage from './components/ComponentPage';

const ecPages = require.context(
  '../../src/systems/ec/specs',
  true, // Load files recursively. Pass false to skip recursion.
  /config\.js$/
);

const euPages = require.context(
  '../../src/systems/eu/specs',
  true, // Load files recursively. Pass false to skip recursion.
  /config\.js$/
);

class App extends Component {
  render() {
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
          <Navigation ecPages={ecPages} euPages={euPages} />
          <div className="tmp-main-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
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
        </div>
      </Router>
    );
  }
}

export default App;
