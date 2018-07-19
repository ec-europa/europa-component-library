import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '@ecl/ec-preset-website/dist/styles/ecl-ec-preset-website.css';
import './hack.css';

// Layout
import Navigation from './components/Navigation';

// Pages
import HomePage from './pages/index';
import ButtonPage from './pages/components/button/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="language-en ecl-typography">
          <Helmet
            titleTemplate="%s - ECL 2.0"
            defaultTitle="Europa Component Library"
          />
          <div class="ecl-skip-link__wrapper" id="skip-link">
            <a href="#main-content" class="ecl-skip-link">
              Skip to main content
            </a>
          </div>
          <Navigation />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/test"
            render={() => (
              <Fragment>
                <main id="main-content" tabindex="-1">
                  <div class="ecl-container">
                    <h3>TEST.</h3>
                    <Link to="/">Go to homepage</Link>
                  </div>
                </main>
              </Fragment>
            )}
          />
          <Route path="/components/button" component={ButtonPage} />
        </div>
      </Router>
    );
  }
}

export default App;
