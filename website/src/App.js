import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '@ecl/ec-preset-website/dist/styles/ecl-ec-preset-website.css';

import Header from './components/Header';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/index';
import ButtonPage from './pages/components/button/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="language-en ecl-typography">
          <Helmet title="ECL 2.0" />
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/test"
            render={() => (
              <Fragment>
                <PageHeader />
                <main>
                  <a id="main-content" tabindex="-1" />
                  <div class="ecl-container">
                    <h3>TEST.</h3>
                    <Link to="/">Go to homepage</Link>
                  </div>
                </main>
              </Fragment>
            )}
          />
          <Route path="/components/button*" component={ButtonPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
