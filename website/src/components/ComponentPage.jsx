import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, Redirect, Switch } from 'react-router-dom';

import ComponentHeader from './ComponentHeader';

const ComponentPage = ({ match, component }) => (
  <Fragment>
    <Helmet title="Breadcrumb" />
    <ComponentHeader
      match={match}
      sectionTitle={component.section}
      pageTitle={component.title}
      tabs={component.tabs}
    />
    <main id="main-content" tabIndex="-1">
      <div className="custom-container ecl-u-pv-l ecl-editor">
        {component.page ? (
          <component.page />
        ) : (
          <Switch>
            {component.tabs.map(tab => (
              <Route
                exact
                path={`${match.url}/${tab.url}`}
                component={tab.component}
                key={tab.url}
              />
            ))}
            <Route
              render={() => (
                <Redirect to={`${match.url}/${component.defaultTab}`} />
              )}
            />
          </Switch>
        )}
      </div>
    </main>
  </Fragment>
);

ComponentPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  component: PropTypes.shape({
    section: PropTypes.string,
    title: PropTypes.string,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        component: PropTypes.element,
      })
    ),
    defaultTab: PropTypes.string,
    page: PropTypes.element,
  }),
};

ComponentPage.defaultProps = {
  component: {},
};

export default ComponentPage;
