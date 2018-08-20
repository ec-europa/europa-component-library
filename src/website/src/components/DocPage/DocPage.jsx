import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './Header';

const DocPage = ({ component }) => (
  <Fragment>
    <Helmet title={component.title} />
    <Header
      component={component}
      sectionTitle={component.section}
      pageTitle={component.title}
      tabs={component.tabs}
    />
    <main id="main-content" tabIndex="-1">
      <div className="custom-container tmp-u-pv-l tmp-editor">
        {component.page ? (
          <component.page />
        ) : (
          <Switch>
            {component.tabs.map(tab => (
              <Route
                exact
                strict
                path={`${component.url}/${tab.url}/`}
                component={tab.component}
                key={tab.url}
              />
            ))}
            <Route
              render={() => (
                <Redirect to={`${component.url}/${component.defaultTab}/`} />
              )}
            />
          </Switch>
        )}
      </div>
    </main>
  </Fragment>
);

DocPage.propTypes = {
  component: PropTypes.shape({
    section: PropTypes.string,
    title: PropTypes.string,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        component: PropTypes.func,
      })
    ),
    defaultTab: PropTypes.string,
    page: PropTypes.func,
  }),
};

DocPage.defaultProps = {
  component: {},
};

export default DocPage;
