import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import PageHeader from '../../../components/PageHeader';

const ButtonPage = ({ match }) => {
  return (
    <Fragment>
      <Helmet title="Button" />
      <PageHeader />
      <main id="main-content" tabindex="-1">
        <div class="ecl-container">
          <h3>Component</h3>
          <h1>Button</h1>
          <ul>
            <li>
              <Link to={`${match.url}/code`}>Code</Link>
            </li>
            <li>
              <Link to={`${match.url}/style`}>Style</Link>
            </li>
            <li>
              <Link to={`${match.url}/usage`}>Usage</Link>
            </li>
          </ul>
          <Switch>
            <Route
              exact
              path={`${match.url}/code`}
              render={() => (
                <Fragment>
                  <h2>Code</h2>
                </Fragment>
              )}
            />
            <Route
              exact
              path={`${match.url}/style`}
              render={() => (
                <Fragment>
                  <h2>Style</h2>
                </Fragment>
              )}
            />{' '}
            <Route
              exact
              path={`${match.url}/usage`}
              render={() => (
                <Fragment>
                  <h2>Usage</h2>
                </Fragment>
              )}
            />
            <Route render={() => <Redirect to={`${match.url}/code`} />} />
          </Switch>
        </div>
      </main>
    </Fragment>
  );
};

export default ButtonPage;
