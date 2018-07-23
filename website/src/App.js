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
import BreadcrumbPage from './pages/ec/components/breadcrumb/index';
import ButtonPage from './pages/ec/components/button/index';

const pages = require.context(
  './pages/ec/components',
  true, // Load files recursively. Pass false to skip recursion.
  /\.js$/ // Match files ending with .md.
);

class App extends Component {
  render() {
    return (
      <Router>
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
          <Navigation pages={pages} />
          <div className="tmp-main-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/ec" component={ECHomePage} />
              <Route
                path="/ec/components/breadcrumb"
                component={BreadcrumbPage}
              />
              {pages.keys().map(key => {
                const component = pages(key);
                const meta = component.meta;
                if (meta) {
                  return (
                    <Route path={meta.url} component={component.default} />
                  );
                }

                return null;
              })}
              <Route path="/ec/components/button" component={ButtonPage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
