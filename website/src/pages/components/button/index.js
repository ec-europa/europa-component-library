import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Route, Link } from 'react-router-dom';

import PageHeader from '../../../components/PageHeader';

const ButtonPage = () => (
  <Fragment>
    <PageHeader />
    <main>
      <a id="main-content" tabindex="-1" />
      <div class="ecl-container">
        <h3>Component</h3>
        <h1>Button</h1>
        <ul>
          <li>
            <Link to="/components/button/code">Code</Link>
          </li>
          <li>
            <Link to="/components/button/style">Style</Link>
          </li>
          <li>
            <Link to="/components/button/usage">Usage</Link>
          </li>
        </ul>
        <Route
          exact
          path="/components/button/code"
          render={() => (
            <Fragment>
              <h2>Code</h2>
            </Fragment>
          )}
        />
        <Route
          exact
          path="/components/button/style"
          render={() => (
            <Fragment>
              <h2>Style</h2>
            </Fragment>
          )}
        />{' '}
        <Route
          exact
          path="/components/button/usage"
          render={() => (
            <Fragment>
              <h2>Usage</h2>
            </Fragment>
          )}
        />
      </div>
    </main>
  </Fragment>
);

export default ButtonPage;
