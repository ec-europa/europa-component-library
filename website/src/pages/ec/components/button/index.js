import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import ComponentHeader from '../../../../components/ComponentHeader';

const ButtonPage = ({ match }) => {
  return (
    <Fragment>
      <Helmet title="Button" />
      <ComponentHeader match={match} title="Button" />
      <main id="main-content" tabIndex="-1">
        <div className="ecl-container">
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
            <Route
              exact
              path={`${match.url}/accessibility`}
              render={() => (
                <Fragment>
                  <h2>Accessibility</h2>
                </Fragment>
              )}
            />
            <Route render={() => <Redirect to={`${match.url}/usage`} />} />
          </Switch>
        </div>
      </main>
    </Fragment>
  );
};

export default ButtonPage;
